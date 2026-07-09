import { FetchOptions, ofetch, ResponseType } from 'ofetch'
import { merge } from 'es-toolkit'

type OFetchOrgiginalOptions<T extends ResponseType = 'json'> = FetchOptions<T>

export type clientAPIOptions<
  Query extends OFetchOrgiginalOptions['query'] = OFetchOrgiginalOptions['query'],
  Body extends OFetchOrgiginalOptions['body'] = OFetchOrgiginalOptions['body'],
> = OFetchOrgiginalOptions & {
  query?: Query
  body?: Body
  noError?: boolean
}

let $$defaultOptions: clientAPIOptions = {}

export const configureAPI = (options: clientAPIOptions): void => {
  $$defaultOptions = options
}

export const clientAPI = <Result>(url: string, options: clientAPIOptions = {}): Promise<Result> => {
  const finalOptions = merge($$defaultOptions, options || {})
  return ofetch<Result>(url, finalOptions)
}
