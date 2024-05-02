export interface ApiResponse<T> {
    status: number;
    message: string;
    data: T | T[];
    error?: string;
}