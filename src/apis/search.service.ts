import {
  QueryFilterSearch,
  SearchResultAll,
  SearchResultGroup,
  SearchResultProject,
  SearchResultUser,
} from '../models'
import { clientAPI, type ClientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

type Config = ClientAPIOptions<QueryFilterSearch>

export async function searchAll<T = SearchResultAll>(search: string, config: Config = {}) {
  const url = `search/${search ? `${encodeURIComponent(search)}/` : ''}`
  return clientAPI<PaginationResult<T>>(url, config)
}

export function searchProjects(search: string, config: Config = {}) {
  return searchAll<SearchResultProject>(search, {
    ...config,
    query: {
      ...(config.query || {}),
      types: ['project'],
    },
  })
}

export function searchUser(search: string, config: Config = {}) {
  return searchAll<SearchResultUser>(search, {
    ...config,
    query: {
      ...(config.query || {}),
      types: ['user'],
    },
  })
}

export function searchGroups(search: string, config: Config = {}) {
  return searchAll<SearchResultGroup>(search, {
    ...config,
    query: {
      ...(config.query || {}),
      types: ['people_group'],
    },
  })
}
