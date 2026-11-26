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
export const mergeQueryWithOrganization = (
  organizationCode: OrganizationModel['code'],
  options: ClientAPIOptions = {}
) => {
  const query = {
    ...(options?.query || {}),
  }

  // add current org code only if orgacode is not empty string (for hocuspocus)
  if (organizationCode) {
    query.current_org = organizationCode
  }

  return {
    ...(options || {}),
    query,
  }
}
