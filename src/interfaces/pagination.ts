export type PaginationQuery = {
  limit: number
  offset: number
}

export type PaginationResult<T = any> = {
  /** @example 123 */
  count: number
  /** @example 123 */
  current_page?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=0&limit=100"
   */
  first?: string
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  last?: string
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /** @example 123 */
  next_page?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  /** @example 123 */
  previous_page?: number
  results: T[]
  /** @example 123 */
  total_page?: number
}