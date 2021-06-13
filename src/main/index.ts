import express, { response } from 'express';
import taskRoutes from './routes/task-routes';
const app = express();

app.use(taskRoutes);


app.listen(3000);