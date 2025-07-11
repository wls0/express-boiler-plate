import env from 'dotenv';
env.config({ path: './config/.env' });

import express from 'express';
import cors from 'cors';

import { logging } from './common/middleware/log/log.middleware';
import { responseFormatter } from './common/middleware/response/responseFormatter.middleware';
import { errorMiddleWare } from './common/middleware/error/error.middleware';
import { NotFoundError } from './common/util/error';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/swagger.json';
import { RegisterRoutes } from './routes/routes';

async function startServer() {
  try {
    const app = express();

    app.use(cors({ origin: true, credentials: true }));
    app.use(express.json());

    logging(app);

    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(responseFormatter);
    RegisterRoutes(app);

    app.use(() => {
      throw new NotFoundError();
    });

    errorMiddleWare(app);

    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Error during server initialization:', err);
    process.exit(1);
  }
}

startServer();
