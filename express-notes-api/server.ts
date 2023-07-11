import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

type Note = {
  id: number;
  content: string;
};

type Data = {
  nextId: number;
  notes: Record<number, Note>;
};
let data: Data;

type Err = {
  error: string;
};

const error: Err = {
  error: 'An error occured.',
};

const app = express();
app.use(express.json());

// Returns list of notes in JSON
app.get('/api/notes', async (req, res) => {
  try {
    await readJSON();
    const notesList: Note[] = [];
    for (const key in data.notes) {
      notesList.push(data.notes[key]);
    }
    res.status(200).json(notesList);
  } catch (err) {
    console.error(err);
  }
});

// Returns individual note based on id in JSON
app.get('/api/notes/:id', async (req, res) => {
  try {
    await readJSON();
    const id: number = Number(req.params.id);
    if (isNaN(id) || id < 1 || !Number.isInteger(id)) {
      error.error = `${req.params.id} is not a valid id number.`;
      res.status(400).json(error);
      throw new Error(`${req.params.id} is not a valid id number.`);
    }
    if (!data.notes[id]) {
      error.error = `Note with ID ${id} does not exist.`;
      res.status(404).json(error);
      throw new Error(`Note with ID ${id} does not exist.`);
    }
    res.status(200).json(data.notes[id]);
  } catch (err) {
    console.error(err);
  }
});

// Creates a new note entry with a unique id and fills in the content given
app.post('/api/notes', async (req, res) => {
  try {
    await readJSON();
    if (!req.body.content) {
      error.error = 'Must include content property.';
      res.status(400).json(error);
      throw new Error('Must include content property.');
    }
    const id = data.nextId++;
    data.notes[id] = {
      id,
      content: req.body.content,
    };
    await writeJSON(res);
    res.status(201).json(data.notes[id]);
  } catch (err) {
    console.error(err);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    await readJSON();
    const id: number = Number(req.params.id);
    if (isNaN(id) || id < 1 || !Number.isInteger(id)) {
      error.error = `${id} is not a valid id number.`;
      res.status(400).json(error);
      throw new Error(`${id} is not a valid id number.`);
    }
    if (!data.notes[id]) {
      error.error = `Note with ID ${id} does not exist.`;
      res.status(404).json(error);
      throw new Error(`Note with ID ${id} does not exist.`);
    }
    delete data.notes[id];
    await writeJSON(res);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    await readJSON();
    const id: number = Number(req.params.id);
    if (isNaN(id) || id < 1 || !Number.isInteger(id) || !req.body.content) {
      error.error = `${id} must be a valid number and content field must be included.`;
      res.status(400).json(error);
      throw new Error(
        `${id} must be a valid number and content field must be included.`
      );
    }
    if (!data.notes[id]) {
      error.error = `Note with ID ${id} does not exist.`;
      res.status(404).json(error);
      throw new Error(`Note with ID ${id} does not exist.`);
    }
    data.notes[id] = {
      id,
      content: req.body.content,
    };
    await writeJSON(res);
    res.status(200).json(data.notes[id]);
  } catch (err) {
    console.error(err);
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080.');
});

async function readJSON() {
  try {
    data = JSON.parse(await readFile('data.json', 'utf8'));
  } catch (err) {
    console.log(err);
  }
}

async function writeJSON(res: express.Response) {
  try {
    const newData: string = JSON.stringify(data, null, 2);
    await writeFile('data.json', newData);
  } catch (err) {
    error.error = 'An unexpected error occurred.';
    res.status(500).json(error.error);
    throw new Error('An unexpected error occurred.');
  }
}
