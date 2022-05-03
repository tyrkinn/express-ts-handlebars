import express from 'express';
import { create } from 'express-handlebars';
import cors from 'cors';

const app = express();

const hbsConfig = create({
  defaultLayout: 'main',
  extname: 'hbs',
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.engine('hbs', hbsConfig.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.get('/', (_, res) => {
  res.render('index');
});

export default app;
