import { NewsfeedModel, OrganizationModel } from '../models'
import { clientAPI, clientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

export async function getNewsfeed(
  organizationCode: OrganizationModel['code'],
  config: clientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<NewsfeedModel>>(
    `organization/${organizationCode}/newsfeed/`,
    config
  )
}
