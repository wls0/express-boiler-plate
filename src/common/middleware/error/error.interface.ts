export interface ErrorResponse {
  success: boolean;
  code: number;
  message: string | string[];
  method: string;
  path: string;
}
