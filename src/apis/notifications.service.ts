import { PaginationResult } from '../interfaces'
import { NotificationModel, OrganizationModel } from '../models'
import { clientAPI } from './client'

export async function getNotifications(params: any, organisationCode: OrganizationModel['code']) {
  return await clientAPI<PaginationResult<NotificationModel>>(
    `organization/${organisationCode}/notification/`,
    { params }
  )
}
