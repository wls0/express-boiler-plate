import { Express, Request, Response, NextFunction } from 'express';

export function responseFormatter(req: Request, res: Response, next: NextFunction): void {
  const originalSend = res.send.bind(res);
  const statusCode = req.method === 'POST' ? 201 : 200;
  const successStatus = new Set([200, 201]);

  res.status(statusCode).send = function (body: any) {
    if (!successStatus.has(res.statusCode)) {
      return originalSend(body);
    }

    let parsed: null;

    parsed = typeof body === 'string' ? JSON.parse(body) : body;

    const formatted = {
      success: true,
      code: statusCode,
      data: parsed,
    };

    return originalSend(JSON.stringify(formatted));
  };

  next();
}
