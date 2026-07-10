import { NewsfeedModel, OrganizationModel } from '../models'
import { clientAPI, ClientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

export async function getNewsfeed(
  organizationCode: OrganizationModel['code'],
  config: ClientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<NewsfeedModel>>(
    `organization/${organizationCode}/newsfeed/`,
    config
  )
}
