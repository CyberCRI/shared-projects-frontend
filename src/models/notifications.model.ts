import type { OrganizationModel } from './organization.model'
import type { InvitationModel } from './invitation.model'
import type { ProjectModel } from './project.model'
import type { NotificationType } from './types'
import type { UserModel } from './user.model'
import type BaseModel from './base.model'
import { Optional } from '../interfaces'

export interface NotificationModel extends BaseModel {
  id: number
  sender: UserModel
  receiver: UserModel

  organization: OrganizationModel
  project: ProjectModel
  access_request: any
  is_viewed: boolean
  to_send: boolean
  created: string
  reminder_message: string
  type: NotificationType
  context: { [key: string]: any }
  count: number

  // extra
  invitation: InvitationModel
}


export interface NotificationSettingsModel extends BaseModel {
  id: number
  notify_added_to_project: boolean
  announcement_published: boolean
  announcement_has_new_application: boolean
  followed_project_has_been_edited: boolean
  project_has_been_commented: boolean
  project_has_been_edited: boolean
  project_ready_for_review: boolean
  project_has_been_reviewed: boolean
  project_has_new_private_message: boolean
  category_project_created: boolean
  category_project_updated: boolean
  comment_received_a_response: boolean
  organization_has_new_access_request: boolean
  invitation_link_will_expire: boolean
  new_instruction: boolean
}

export type NotificationSettingsForm = Optional<NotificationModel, 'id'>