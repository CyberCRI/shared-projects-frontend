import { OrganizationModel } from '../models'
import { ClientAPIOptions } from './client'
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

// this is a legacy fix to add organization code in query to backend filter by organization
export const mergeQueryWithOrganization = (organizationCode: OrganizationModel['code'], options: ClientAPIOptions = {}) => {
  return {
    ...(options || {}),
    query: {
      ...(options?.query || {}),
      current_org: organizationCode,
    }
  }
}