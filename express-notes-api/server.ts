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
    const data = await readJSON();
    const notesList: Note[] = [];
    for (const key in data.notes) {
      notesList.push(data.notes[key]);
    }
    res.status(200).json(notesList);
  } catch (err) {
    console.error(err);
    error.error = 'An unexpected error occurred.';
    res.status(500).json(error);
  }
});

// Returns individual note based on id in JSON
app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await readJSON();
    const id = Number(req.params.id);
    if (isNaN(id) || id < 1 || !Number.isInteger(id)) {
      error.error = `${req.params.id} is not a valid id number.`;
      res.status(400).json(error);
      return;
    }
    if (!data.notes[id]) {
      error.error = `Note with ID ${id} does not exist.`;
      res.status(404).json(error);
      return;
    }
    res.status(200).json(data.notes[id]);
  } catch (err) {
    console.error(err);
    error.error = 'An unexpected error occurred.';
    res.status(500).json(error);
  }
});

// Creates a new note entry with a unique id and fills in the content given
app.post('/api/notes', async (req, res) => {
  try {
    const data = await readJSON();
    if (!req.body.content) {
      error.error = 'Must include content property.';
      res.status(400).json(error);
      return;
    }
    const id = data.nextId++;
    data.notes[id] = {
      id,
      content: req.body.content,
    };
    await writeJSON(data);
    res.status(201).json(data.notes[id]);
  } catch (err) {
    console.error(err);
    error.error = 'An unexpected error occurred.';
    res.status(500).json(error);
  }
});

// Removes a note based on the id of the note
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await readJSON();
    const id = Number(req.params.id);
    if (isNaN(id) || id < 1 || !Number.isInteger(id)) {
      error.error = `${id} is not a valid id number.`;
      res.status(400).json(error);
      return;
    }
    if (!data.notes[id]) {
      error.error = `Note with ID ${id} does not exist.`;
      res.status(404).json(error);
      return;
    }
    delete data.notes[id];
    await writeJSON(data);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    error.error = 'An unexpected error occurred.';
    res.status(500).json(error);
  }
});

// Amends a pre-exisiting note with a new content field
app.put('/api/notes/:id', async (req, res) => {
  try {
    const data = await readJSON();
    const id = Number(req.params.id);
    if (isNaN(id) || id < 1 || !Number.isInteger(id) || !req.body.content) {
      error.error = `${id} must be a valid number and content field must be included.`;
      res.status(400).json(error);
      return;
    }
    if (!data.notes[id]) {
      error.error = `Note with ID ${id} does not exist.`;
      res.status(404).json(error);
      return;
    }
    data.notes[id] = {
      id,
      content: req.body.content,
    };
    await writeJSON(data);
    res.status(200).json(data.notes[id]);
  } catch (err) {
    console.error(err);
    error.error = 'An unexpected error occurred.';
    res.status(500).json(error);
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080.');
});

async function readJSON() {
  const data: Data = JSON.parse(await readFile('data.json', 'utf8'));
  return data;
}

async function writeJSON(data: Data) {
  await writeFile('data.json', JSON.stringify(data, null, 2));
}
