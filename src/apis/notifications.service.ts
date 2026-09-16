import {
  NotificationModel,
  NotificationSettingsForm,
  NotificationSettingsModel,
  OrganizationModel,
  QueryFilterNotification,
  UserSlugOrId,
} from '../models'
import { clientAPI, ClientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

export async function getNotifications(
  organisationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterNotification> = {}
) {
  return await clientAPI<PaginationResult<NotificationModel>>(
    `organization/${organisationCode}/user/${userId}/notification/`,
    config
  )
}

export async function getUserNotificationSettings(
  organisationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<NotificationSettingsModel>(
    `organization/${organisationCode}/user/${userId}/notifications-setting/`,
    config
  )
}

export async function patchUserNotificationSettings(
  organisationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  body: NotificationSettingsForm,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<NotificationSettingsModel>(
    `organization/${organisationCode}/user/${userId}/notifications-setting/`,
    {
      ...config,
      body,
      method: 'PATCH',
    }
  )
}
