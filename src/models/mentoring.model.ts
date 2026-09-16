import type { OrganizationModel } from './organization.model'
import type { UserModel } from './user.model'
import { SkillModel } from './skill.model'
import type BaseModel from './base.model'

export interface Mentoring extends BaseModel {
  id: number
  organization: OrganizationModel
  mentor: UserModel
  mentoree: UserModel
  skill: SkillModel
  status: 'pending' | 'accepted' | 'rejected'
  create_by: UserModel | null
  created_at: string
}

export type MentoringContactForm = {
  title: string
  reply_to: string
  content: string
}
