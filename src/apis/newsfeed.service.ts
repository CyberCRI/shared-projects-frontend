import { PaginationResult } from '../interfaces'
import { NewsfeedModel, OrganizationModel } from '../models'
import { clientAPI } from './client'

export async function getNewsfeed(organizationCode: OrganizationModel['code'], config = {}) {
  return await clientAPI<PaginationResult<NewsfeedModel>>(
    `organization/${organizationCode}/newsfeed/`,
    config
  )
}
