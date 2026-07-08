import type { TagModel } from './tag.model'

export interface SkillModel {
  id: number
  user: string
  tag: TagModel
  level: number
  level_to_reach: number
}

export type QueryFilterSkill = Partial<{
  search: string
}>