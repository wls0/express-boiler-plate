import http from 'http-errors';

export class BadRequestError extends http.BadRequest {
  constructor(message?: string) {
    super(message);
    this.status = 400;
    this.error = 'BadRequest';
    this.message = message || 'Bad Request';
  }
}

export class UnauthorizedError extends http.Unauthorized {
  constructor(message?: string) {
    super(message);
    this.status = 401;
    this.error = 'Unauthorized';
    this.message = message || 'Unauthorized';
  }
}

export class ForbiddenError extends http.Forbidden {
  constructor(message?: string) {
    super(message);
    this.status = 403;
    this.error = 'Forbidden';
    this.message = message || 'Forbidden';
  }
}

export class NotFoundError extends http.NotFound {
  constructor(message?: string) {
    super(message);
    this.status = 404;
    this.error = 'NotFound';
    this.message = message || 'Not Found';
  }
}

export class MethodNotAllowedError extends http.MethodNotAllowed {
  constructor(message?: string) {
    super(message);
    this.status = 405;
    this.error = 'MethodNotAllowed';
    this.message = message || 'Method Not Allowed';
  }
}

export class NotAcceptableError extends http.NotAcceptable {
  constructor(message?: string) {
    super(message);
    this.status = 406;
    this.error = 'NotAcceptable';
    this.message = message || 'Not Acceptable';
  }
}

export class RequestTimeoutError extends http.RequestTimeout {
  constructor(message?: string) {
    super(message);
    this.status = 408;
    this.error = 'RequestTimeout';
    this.message = message || 'Request Timeout';
  }
}

export class ConflictError extends http.Conflict {
  constructor(message?: string) {
    super(message);
    this.status = 409;
    this.error = 'Conflict';
    this.message = message || 'Conflict';
  }
}

export class GoneError extends http.Gone {
  constructor(message?: string) {
    super(message);
    this.status = 410;
    this.error = 'Gone';
    this.message = message || 'Gone';
  }
}

export class PreconditionFailedError extends http.PreconditionFailed {
  constructor(message?: string) {
    super(message);
    this.status = 412;
    this.error = 'PreconditionFailed';
    this.message = message || 'Precondition Failed';
  }
}

export class PayloadTooLargeError extends http.PayloadTooLarge {
  constructor(message?: string) {
    super(message);
    this.status = 413;
    this.error = 'PayloadTooLarge';
    this.message = message || 'Payload Too Large';
  }
}

export class UnsupportedMediaTypeError extends http.UnsupportedMediaType {
  constructor(message?: string) {
    super(message);
    this.status = 415;
    this.error = 'UnsupportedMediaType';
    this.message = message || 'Unsupported Media Type';
  }
}

export class ImATeapotError extends http.ImATeapot {
  constructor(message?: string) {
    super(message);
    this.status = 418;
    this.error = 'ImATeapot';
    this.message = message || "I'm a teapot";
  }
}

export class UnprocessableEntityError extends http.UnprocessableEntity {
  constructor(message?: string) {
    super(message);
    this.status = 422;
    this.error = 'UnprocessableEntity';
    this.message = message || 'Unprocessable Entity';
  }
}

export class InternalServerError extends http.InternalServerError {
  constructor(message?: string) {
    super(message);
    this.status = 500;
    this.error = 'InternalServerError';
    this.message = message || 'Internal Server Error';
  }
}

export class NotImplementedError extends http.NotImplemented {
  constructor(message?: string) {
    super(message);
    this.status = 501;
    this.error = 'NotImplemented';
    this.message = message || 'Not Implemented';
  }
}

export class BadGatewayError extends http.BadGateway {
  constructor(message?: string) {
    super(message);
    this.status = 502;
    this.error = 'BadGateway';
    this.message = message || 'Bad Gateway';
  }
}

export class ServiceUnavailableError extends http.ServiceUnavailable {
  constructor(message?: string) {
    super(message);
    this.status = 503;
    this.error = 'ServiceUnavailable';
    this.message = message || 'Service Unavailable';
  }
}

export class GatewayTimeoutError extends http.GatewayTimeout {
  constructor(message?: string) {
    super(message);
    this.status = 504;
    this.error = 'GatewayTimeout';
    this.message = message || 'Gateway Timeout';
  }
}

export class HttpVersionNotSupportedError extends http.HTTPVersionNotSupported {
  constructor(message?: string) {
    super(message);
    this.status = 505;
    this.error = 'HttpVersionNotSupported';
    this.message = message || 'HTTP Version Not Supported';
  }
}
