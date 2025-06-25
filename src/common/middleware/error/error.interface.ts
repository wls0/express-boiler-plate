export interface ErrorResponse {
  success: boolean;
  code: number;
  error: string;
  message: string[];
  method: string;
  path: string;
}
