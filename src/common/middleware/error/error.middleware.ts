import { Express, Request, Response, NextFunction } from 'express';
import { ErrorResponse } from './error.interface';
import { ValidateError } from 'tsoa';

export function errorMiddleWare(app: Express): void {
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const errorForm: ErrorResponse = {
      success: false,
      code: err.status || 500,
      error: err.error,
      message: ['Internal Server Error'],
      method: req.method,
      path: req.url,
    };

    // tsoa error
    if (err instanceof ValidateError) {
      errorForm.error = 'BadRequest';
      errorForm.message = Object.values(err.fields).map((field, index) => {
        const path = Object.keys(err.fields)[index].split('.').pop();
        return `field => ${path} | expected => ${field.message} | response value => ${field.value}`;
      });

      res.status(err.status || 500).json(errorForm);
      next();
    }

    // typia & throw error
    if (typeof err === 'object' && !(err instanceof ValidateError) && err.message.includes('[')) {
      const errMessage = JSON.parse(err.message);

      errorForm.message = errMessage.map(
        (err: { path: string; expected: string; value: string }) => {
          const path = err.path.split('.').pop();
          return `field => ${path} | expected => ${err.expected} | response value => ${err.value}`;
        },
      );

      res.status(err.status || 500).json(errorForm);
      next();
    }

    errorForm.message = [err.message];
    res.status(err.status || 500).json(errorForm);
    next();
  });
}
