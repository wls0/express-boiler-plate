import env from 'dotenv';
import express from 'express';
import cors from 'cors';

import { logging } from './common/middleware/log/log.middleware';
import { responseFormatter } from './common/middleware/response/responseFormatter.middleware';
import { errorMiddleWare } from './common/middleware/error/error.middleware';
import { NotFoundError } from './common/util/error';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/swagger.json';
import { RegisterRoutes } from './routes/routes';

env.config({ path: './config/.env' });

const app = express();
app.use(cors());
app.use(express.json());
logging(app);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

responseFormatter(app);
RegisterRoutes(app);

const PORT = process.env.PORT;

app.use(() => {
  throw new NotFoundError();
});

errorMiddleWare(app);

app.listen(PORT, () => {
  console.log(`Server is running`);
});
