import express from 'express';
import path from 'path';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

export default app;
