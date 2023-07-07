import { readFile, writeFile } from 'node:fs/promises';

const [, , action, arg1, arg2] = process.argv;

try {
  const jsonFile = await readFile('data.json', 'utf8');
  const data = JSON.parse(jsonFile);

  switch (action) {
    case 'read':
      readNotes(data);
      break;
    case 'create':
      if (arg1 === undefined) {
        throw new Error(`'${action}' command must include a note to create!`);
      }
      createNote(data, arg1);
      break;
    case 'delete':
      if (arg1 === undefined) {
        throw new Error(
          `'${action}' command must include a note id to delete!`
        );
      }
      deleteNote(data, arg1);
      break;
    case 'update':
      if (arg1 === undefined || arg2 === undefined) {
        throw new Error(
          `'${action}' command must include a note id to update and a note to update it with!`
        );
      } else if (!data.notes[arg1]) {
        throw new Error(`'${arg1}' is not a valid note id!`);
      }
      updateNote(data, arg1, arg2);
      break;
    default:
      throw new Error(`'${action}' is not a valid command.`);
  }
} catch (err) {
  console.error('Oops there was an error!', err);
  process.exit(1);
}

function readNotes(data) {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

async function createNote(data, text) {
  const id = data.nextId;
  data.notes[`${id}`] = `${text}`;
  data.nextId++;
  const newData = JSON.stringify(data, null, 2);
  await writeFile('data.json', newData);
}

async function deleteNote(data, noteId) {
  delete data.notes[noteId];
  const newData = JSON.stringify(data, null, 2);
  await writeFile('data.json', newData);
}

async function updateNote(data, noteId, text) {
  data.notes[noteId] = text;
  const newData = JSON.stringify(data, null, 2);
  await writeFile('data.json', newData);
}
