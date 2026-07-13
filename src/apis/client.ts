import { $Fetch, $fetch, FetchOptions, ResponseType } from 'ofetch'
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
let $$fetcher: $Fetch = $fetch

/**
 * set custom fetch instance
 *
 * @function
 * @name configureClientAPI
 * @kind variable
 * @param {} fetcher
 * @returns {void}
 * @exports
 */
export const configureClientAPI = (fetcher: $Fetch): void => {
  $$fetcher = fetcher
}

// set custom properties
/**
 * set callback running before each request
 *
 * @function
 * @name configureAPI
 * @kind variable
 * @param {() => ClientAPIOptions<Record<string} callback
 * @param {Record<string} any> | undefined
 * @param {any} any> | BodyInit | null | undefined>
 * @returns {void}
 * @exports
 */
export const configureOptionsAPI = (callback: typeof $$defaultOptions): void => {
  $$defaultOptions = callback
}

export const clientAPI = <Result>(url: string, options: ClientAPIOptions = {}): Promise<Result> => {
  const finalOptions = merge($$defaultOptions(), options || {})
  return $$fetcher<Result>(url, finalOptions)
}
