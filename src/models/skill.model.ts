import { UserSlugOrId } from './user.model'
import type { TagModel, TranslatedTag } from './tag.model'
import BaseModel from './base.model'

export interface SkillModel extends BaseModel {
  id: number
  user?: UserSlugOrId
  tag: TagModel
  level: number
  level_to_reach: number
  category: string
  type: 'skill' | 'hobby'
  can_mentor: boolean
  needs_mentor: boolean
  comment: string
}

export type QueryFilterSkill = Partial<{
  search: string
}>

export type UserSkillForm = Partial<SkillModel>

export type TranslatedSkill = Omit<SkillModel, 'tag'> & {
  tag: TranslatedTag
}
