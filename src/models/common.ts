export interface PaginationParams {
  page?: number
  limit: number
}

export interface ResponseData<T> {
  data: T
  status: number
}
