import env from 'dotenv';
import express from 'express';
import cors from 'cors';

import { logging } from './common/middleware/log/log.middleware';
import { responseFormatter } from './common/middleware/response/responseFormatter.middleware';
import { errorMiddleWare } from './common/middleware/error/error.middleware';
import { NotFoundError } from './common/util/error';

import basicRouter from './basic/basic.controller';

env.config({ path: './config/.env' });

const app = express();
app.use(cors());
app.use(express.json());
logging(app);
responseFormatter(app);

const PORT = process.env.PORT;

app.use('/', basicRouter);

app.use(() => {
  throw new NotFoundError();
});

errorMiddleWare(app);

app.listen(PORT, () => {
  console.log(`Server is running`);
});
