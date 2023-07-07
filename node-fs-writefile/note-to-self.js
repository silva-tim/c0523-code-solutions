import { writeFile } from 'node:fs/promises';

const note = process.argv[2];
async function writeNote() {
  try {
    await writeFile('./note.txt', `${note} \n`);
  } catch (error) {
    console.log('Oops! There was an error:', error);
  }
}

writeNote();
