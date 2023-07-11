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
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Returns individual note based on id in JSON
app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await readJSON();
    const id = Number(req.params.id);
    if (isNaN(id) || id < 1 || !Number.isInteger(id)) {
      res
        .status(400)
        .json({ error: `${req.params.id} is not a valid id number.` });
      return;
    }
    if (!data.notes[id]) {
      res.status(404).json({ error: `Note with ID ${id} does not exist.` });
      return;
    }
    res.status(200).json(data.notes[id]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Creates a new note entry with a unique id and fills in the content given
app.post('/api/notes', async (req, res) => {
  try {
    const data = await readJSON();
    if (!req.body.content) {
      res.status(400).json({ error: 'Must include content property.' });
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
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Removes a note based on the id of the note
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await readJSON();
    const id = Number(req.params.id);
    if (isNaN(id) || id < 1 || !Number.isInteger(id)) {
      res.status(400).json({ error: `${id} is not a valid id number.` });
      return;
    }
    if (!data.notes[id]) {
      res.status(404).json({ error: `Note with ID ${id} does not exist.` });
      return;
    }
    delete data.notes[id];
    await writeJSON(data);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Amends a pre-exisiting note with a new content field
app.put('/api/notes/:id', async (req, res) => {
  try {
    const data = await readJSON();
    const id = Number(req.params.id);
    if (isNaN(id) || id < 1 || !Number.isInteger(id) || !req.body.content) {
      res
        .status(400)
        .json({
          error: `${id} must be a valid number and content field must be included.`,
        });
      return;
    }
    if (!data.notes[id]) {
      res.status(404).json({ error: `Note with ID ${id} does not exist.` });
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
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080.');
});

async function readJSON(): Promise<Data> {
  return JSON.parse(await readFile('data.json', 'utf8'));
}

async function writeJSON(data: Data) {
  await writeFile('data.json', JSON.stringify(data, null, 2));
}
