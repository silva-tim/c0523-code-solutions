import { readFile } from 'node:fs/promises';

async function readDijkstra() {
  try {
    const contentsOfDijkstra = await readFile('./dijkstra.txt', {
      encoding: 'utf8',
    });
    console.log('contents of Dijkstra.txt:', contentsOfDijkstra);
  } catch (error) {
    console.log('Oops, there was an error:', error);
  }
}

readDijkstra();
