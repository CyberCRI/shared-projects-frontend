import {
  OrganizationModel,
  QueryFilterSearch,
  SearchResultAll,
  SearchResultGroup,
  SearchResultProject,
  SearchResultUser,
} from '../models'
import { clientAPI, type ClientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

type Config = ClientAPIOptions<QueryFilterSearch>

export async function searchAll<T = SearchResultAll>(
  organizationCode: OrganizationModel['code'],
  search: string,
  config: Config = {}
) {
  const url = `organization/${organizationCode}/search/${search ? `${encodeURIComponent(search)}/` : ''}`
  return clientAPI<PaginationResult<T>>(url, config)
}

export function searchProjects(
  organizationCode: OrganizationModel['code'],
  search: string,
  config: Config = {}
) {
  return searchAll<SearchResultProject>(organizationCode, search, {
    ...config,
    query: {
      ...(config.query || {}),
      types: ['project'],
    },
  })
}

export function searchUser(
  organizationCode: OrganizationModel['code'],
  search: string,
  config: Config = {}
) {
  return searchAll<SearchResultUser>(organizationCode, search, {
    ...config,
    query: {
      ...(config.query || {}),
      types: ['user'],
    },
  })
}

export function searchGroups(
  organizationCode: OrganizationModel['code'],
  search: string,
  config: Config = {}
) {
  return searchAll<SearchResultGroup>(organizationCode, search, {
    ...config,
    query: {
      ...(config.query || {}),
      types: ['people_group'],
    },
  })
}
