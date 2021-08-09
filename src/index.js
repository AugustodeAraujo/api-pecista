import express from 'express';
import routes from './routes';
import cors from '../node_modules/cors';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3030, () => {
  console.log('App listening at http://localhost:3030');
});
