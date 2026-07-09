import {
  NotificationModel,
  NotificationSettingsForm,
  NotificationSettingsModel,
  OrganizationModel,
  UserSlugOrId,
} from '../models'
import { clientAPI, clientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

export async function getNotifications(params: any, organisationCode: OrganizationModel['code']) {
  return await clientAPI<PaginationResult<NotificationModel>>(
    `organization/${organisationCode}/notification/`,
    { params }
  )
}

export async function getUserNotificationSettings(
  userId: UserSlugOrId,
  config: clientAPIOptions = {}
) {
  return await clientAPI<NotificationSettingsModel>(`notifications-setting/${userId}/`, config)
}

export async function patchUserNotificationSettings(
  userId: UserSlugOrId,
  body: NotificationSettingsForm,
  config: clientAPIOptions = {}
) {
  return await clientAPI<NotificationSettingsModel>(`notifications-setting/${userId}/`, {
    ...config,
    body,
    method: 'PATCH',
  })
}
