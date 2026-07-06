import type { OrganizationModel } from './organization.model'
import type { InvitationModel } from './invitation.model'
import type { ProjectModel } from './project.model'
import type { NotificationType } from './types'
import type { UserModel } from './user.model'
import type BaseModel from './base.model'

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
