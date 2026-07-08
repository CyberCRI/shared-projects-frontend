import { clientAPI, clientAPIOptions } from './client'
import { QueryFilterRecomendation } from '../models/recommendations.model'
import { PaginationQuery, PaginationResult } from '../interfaces'
import { OrganizationModel, ProjectModel, UserModel } from '../models'

type Config = clientAPIOptions<QueryFilterRecomendation>
type ConfigPagination = clientAPIOptions<PaginationQuery>

// projects
export async function getProjectsRecommendationsForUser(
  organizationCode: OrganizationModel['code'],
  config: ConfigPagination = {}
) {
  return await clientAPI<PaginationResult<ProjectModel>>(
    `organization/${organizationCode}/recommended-project/user/`,
    config
  )
}

export async function getRandomProjectsRecommendationsForUser(
  organizationCode: OrganizationModel['code'],
  config: Config = {}
) {
  return await clientAPI<ProjectModel[]>(
    `organization/${organizationCode}/recommended-project/user/random/`,
    config
  )
}

// users
export async function getUsersRecommendationsForUser(
  organizationCode: OrganizationModel['code'],
  config: ConfigPagination = {}
) {
  return await clientAPI<PaginationResult<UserModel>>(
    `organization/${organizationCode}/recommended-user/user/`,
    config
  )
}

export async function getRandomUsersRecommendationsForUser(
  organizationCode: OrganizationModel['code'],
  config: Config = {}
) {
  return await clientAPI<UserModel[]>(
    `organization/${organizationCode}/recommended-user/user/random/`,
    config
  )
}
