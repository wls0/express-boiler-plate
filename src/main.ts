import env from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import { logging } from './common/middleware/log/log.middleware';
import { responseFormatter } from './common/middleware/response/responseFormatter.middleware';
import { errorMiddleWare } from './common/middleware/error/error.middleware';
import basicRouter from './basic/basic.controller';
import { NotFoundError } from './common/util/error';

env.config({ path: './config/.env' });
const app = express();
logging(app);
responseFormatter(app);

const PORT = process.env.PORT;

app.use('/', basicRouter);

app.use(() => {
  throw new NotFoundError();
});

errorMiddleWare(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
