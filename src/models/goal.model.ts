import type BaseModel from './base.model'
import type { StatusType } from './types'

import type { ProjectSlugOrId } from './project.model'
import type { Translated } from '../interfaces/translated'

/**
 * @name GoalModel
 * @description Goal of a project
 */
export interface GoalModel extends BaseModel {
  id: number
  title: string
  description: string
  deadline_at: string
  status: StatusType
}

export type TranslatedGoal = Translated<GoalModel, 'title' | 'description'>

export type GoalForm = Partial<GoalModel> & {
  project_id?: ProjectSlugOrId
}
