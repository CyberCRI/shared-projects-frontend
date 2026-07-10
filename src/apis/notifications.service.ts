import {
  NotificationModel,
  NotificationSettingsForm,
  NotificationSettingsModel,
  OrganizationModel,
  UserSlugOrId,
} from '../models'
import { clientAPI, ClientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

export async function getNotifications(params: any, organisationCode: OrganizationModel['code']) {
  return await clientAPI<PaginationResult<NotificationModel>>(
    `organization/${organisationCode}/notification/`,
    { params }
  )
}

export async function getUserNotificationSettings(
  userId: UserSlugOrId,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<NotificationSettingsModel>(`notifications-setting/${userId}/`, config)
}

export async function patchUserNotificationSettings(
  userId: UserSlugOrId,
  body: NotificationSettingsForm,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<NotificationSettingsModel>(`notifications-setting/${userId}/`, {
    ...config,
    body,
    method: 'PATCH',
  })
}
