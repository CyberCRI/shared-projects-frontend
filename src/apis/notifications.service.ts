import { PaginationResult } from '../interfaces'
import { NotificationModel, NotificationSettingsForm, NotificationSettingsModel, OrganizationModel, UserIdOrSlug } from '../models'
import { clientAPI, clientAPIOptions } from './client'

export async function getNotifications(params: any, organisationCode: OrganizationModel['code']) {
  return await clientAPI<PaginationResult<NotificationModel>>(
    `organization/${organisationCode}/notification/`,
    { params }
  )
}


export async function getUserNotificationSettings(userId: UserIdOrSlug, config: clientAPIOptions = {}) {
  return await clientAPI<NotificationSettingsModel>(`notifications-setting/${userId}/`, config)
}

export async function patchUserNotificationSettings(userId: UserIdOrSlug, body: NotificationSettingsForm, config: clientAPIOptions = {}) {
  return await clientAPI<NotificationSettingsModel>(`notifications-setting/${userId}/`, { ...config, body, method: 'PATCH' })
}