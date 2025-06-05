import { Express, Request, Response, NextFunction } from 'express';
export function logging(app: Express): void {
  app.use((req: Request, res: Response, next: NextFunction) => {
    const { method, url, ip, headers, body, query, params } = req;
    const requestLog = {
      method,
      url,
      ip,
      headers,
      body,
      query,
      params,
    };
    console.log(requestLog);

    let data = null;
    const oldSend = res.send;
    res.send = function (body) {
      data = body;
      return oldSend.call(this, body);
    };

    res.on('finish', () => {
      const responseLog = {
        statusCode: res.statusCode,
        statusMessage: res.statusMessage,
        headers: res.getHeaders(),
        data,
      };
      // console.log(responseLog);
    });

    next();
  });
}
