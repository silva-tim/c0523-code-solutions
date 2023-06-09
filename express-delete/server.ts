import express from 'express';

type Student = {
  id: number;
  name: string;
  course: string;
  score: number;
};

type Students = Record<number, Student>;

const grades: Students = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradesResponse: Student[] = [];
  for (const key in grades) {
    gradesResponse.push(grades[key]);
  }
  res.json(gradesResponse);
});

app.delete('/api/grades/:id', (req, res) => {
  if (grades[Number(req.params.id)]) {
    delete grades[Number(req.params.id)];
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080.');
});
