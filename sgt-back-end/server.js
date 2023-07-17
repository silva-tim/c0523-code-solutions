import pg from 'pg';
import express from 'express';
import ClientError from './client-error.js';
import errorMiddleware from './error-middleware.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

// Returns list of grades
app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

// Creates a new grade entry
app.post('/api/grades', async (req, res, next) => {
  try {
    if (!req.body.name || !req.body.course || !req.body.score) {
      throw new ClientError(
        '400',
        'Must include a name, course, and score property.'
      );
    }
    if (
      req.body.score > 100 ||
      req.body.score < 0 ||
      !Number.isInteger(Number(req.body.score))
    ) {
      throw new ClientError('400', 'Score must be an integer from 0 to 100.');
    }
    const sql = `
      insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning *
    `;
    const params = [req.body.name, req.body.course, req.body.score];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

// Removes a grade based on the id of the note
app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(
        '400',
        'Grade ID must be an integer that is greater than 0.'
      );
    }
    const sql1 = `
      select *
        from "grades"
        where "gradeId" = $1
    `;
    const params1 = [gradeId];
    const result1 = await db.query(sql1, params1);
    if (!result1.rows[0]) {
      throw new ClientError('404', 'Grade ID not found.');
    }
    const sql2 = `
      delete
        from "grades"
        where "gradeId" = $1
    `;
    const params2 = [gradeId];
    const result2 = await db.query(sql2, params2);
    res.status(204).json(result2.rows[0]);
  } catch (err) {
    next(err);
  }
});

// Amends a pre-exisiting grade with a new content field
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(
        '400',
        'Grade ID must be an integer that is greater than 0.'
      );
    }
    if (!req.body.name || !req.body.course || !req.body.score) {
      throw new ClientError(
        '400',
        'Must include a name, course, and score property.'
      );
    }
    if (
      req.body.score > 100 ||
      req.body.score < 0 ||
      !Number.isInteger(Number(req.body.score))
    ) {
      throw new ClientError('400', 'Score must be an integer from 0 to 100.');
    }
    const sql = `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
        where "gradeId" = $4
        returning *
    `;
    const params = [req.body.name, req.body.course, req.body.score, gradeId];
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      throw new ClientError('404', 'Grade ID not found.');
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Express server listening on port 8080.');
});
