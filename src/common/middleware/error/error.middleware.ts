import { Express, Request, Response, NextFunction } from 'express';
import { ErrorResponse } from './error.interface';

export function errorMiddleWare(app: Express): void {
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const errorForm: ErrorResponse = {
      success: false,
      code: err.status || 500,
      message: err.message || 'Internal Server Error',
      method: req.method,
      path: req.url,
    };

    res.status(err.status || 500).json(errorForm);
    next();
  });
}
