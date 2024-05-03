export interface ApiResponse<T = void> {
  status: number;
  message?: string;
  data: T | T[];
  error?: string;
}
