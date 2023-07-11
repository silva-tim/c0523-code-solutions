import express from 'express';

type Student = {
  id?: number;
  name: string;
  course: string;
  score: number;
};

type Students = Record<number, Student>;

let nextID: number = 1;
const grades: Students = {};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradesResponse: Student[] = [];
  for (const key in grades) {
    gradesResponse.push(grades[key]);
  }
  res.json(gradesResponse);
});

const jsonParser = express.json();
app.use(jsonParser);

app.post('/api/grades', (req, res) => {
  grades[nextID] = req.body;
  grades[nextID].id = nextID;
  res.status(201).json(grades[nextID]);
  nextID++;
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080.');
});
