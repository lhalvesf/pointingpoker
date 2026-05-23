const express = require('express');
import type { Request, Response } from 'express';

const app = express();
const PORT = 3000;

/* 
| 
| Routes
| 
*/
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({data: 'Welcome to pointing poker!'});
});

app.get('/generate-room', (req: Request, res: Response) => {
  res.status(200).json({data: 'random uuid'});
});

app.get('/room/:id', (req: Request, res: Response) => {
  const { id } = req.params
  res.status(200).json({data: `accessing room ${id}`});
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});