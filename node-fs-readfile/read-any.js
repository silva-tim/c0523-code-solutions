import { readFile } from 'node:fs/promises';

const file = process.argv[2];
async function readAny() {
  try {
    const contentsOfFile = await readFile(file, 'utf8');
    console.log(`contents of ${file}:`, contentsOfFile);
  } catch (error) {
    console.error('Oops, there was an error:', error);
  }
}

readAny();
