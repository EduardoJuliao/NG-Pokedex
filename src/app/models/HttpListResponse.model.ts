export interface HttpListResponse<T> {
    count: number;
    previous?: string;
    next?: string;
    results: T[];
}