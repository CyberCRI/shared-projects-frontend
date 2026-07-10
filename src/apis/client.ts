import { FetchOptions, ofetch, ResponseType } from 'ofetch'
import { merge } from 'es-toolkit'

type OFetchOrgiginalOptions<T extends ResponseType = 'json'> = FetchOptions<T>

export type ClientAPIOptions<
  Query extends OFetchOrgiginalOptions['query'] = OFetchOrgiginalOptions['query'],
  Body extends OFetchOrgiginalOptions['body'] = OFetchOrgiginalOptions['body'],
> = OFetchOrgiginalOptions & {
  query?: Query
  body?: Body
  noError?: boolean
}

let $$defaultOptions: () => ClientAPIOptions = () => ({})

export const configureAPI = (callback: typeof $$defaultOptions): void => {
  $$defaultOptions = callback
}

export const clientAPI = <Result>(url: string, options: ClientAPIOptions = {}): Promise<Result> => {
  const finalOptions = merge($$defaultOptions(), options || {})
  return ofetch<Result>(url, finalOptions)
}
