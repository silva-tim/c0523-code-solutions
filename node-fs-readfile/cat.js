import { readFile } from 'node:fs/promises';

const files = process.argv.splice('2');
async function concatFiles() {
  try {
    const promiseArray = await Promise.all(
      files.map((element) => readFile(element, { encoding: 'utf8' }))
    );
    promiseArray.forEach((i) => console.log(i));
  } catch (error) {
    console.log('Oops, there was an error:', error);
  }
}

concatFiles();
