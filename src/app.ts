import express from 'express';
import cors from 'cors';
import router from './routes/base.routes';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/base", router);
app.use(errorHandler);

export default app;