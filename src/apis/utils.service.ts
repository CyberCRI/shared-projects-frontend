import { SearchParams } from './types'

// TODO legacy
export function _adaptParamsToGetQuery(params: SearchParams) {
  const query: { [key: string]: string } = {}

  Object.entries(params || {}).forEach(([key, value]) => {
    query[key] = Array.isArray(value) ? value.join(',') : value.toString()
  })

  return {
    params: query,
  }
}
