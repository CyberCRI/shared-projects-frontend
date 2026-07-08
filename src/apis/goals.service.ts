import { PaginationResult } from '../interfaces'
import { GoalForm, GoalModel, ProjectSlugOrId } from '../models'
import { clientAPI, clientAPIOptions } from './client'

type ConfigGoal = clientAPIOptions

export async function getProjectGoals(projectId: ProjectSlugOrId, config: ConfigGoal = {}) {
  return await clientAPI<PaginationResult<GoalModel>>(`project/${projectId}/goal/`, config)
}

export async function createProjectGoal(projectId: ProjectSlugOrId, body: GoalForm, config = {}) {
  return await clientAPI<GoalModel>(`project/${projectId}/goal/`, { ...config, body, method: 'POST' })
}

export async function patchProjectGoal(
  projectId: ProjectSlugOrId,
  goalId: GoalModel['id'],
  body: GoalForm,
  config = {}
) {
  return await clientAPI<GoalModel>(`project/${projectId}/goal/${goalId}/`, {
    ...config,
    body,
    method: 'PATCH',
  })
}

export async function deleteProjectGoal(
  projectId: ProjectSlugOrId,
  goalId: GoalModel['id'],
  config = {}
) {
  return await clientAPI<undefined>(`project/${projectId}/goal/${goalId}/`, {
    ...config,
    method: 'DELETE',
  })
}
