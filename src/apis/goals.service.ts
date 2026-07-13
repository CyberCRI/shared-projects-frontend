import { GoalForm, GoalModel, ProjectSlugOrId } from '../models'
import { clientAPI, ClientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

type ConfigGoal = ClientAPIOptions

export async function getProjectGoals(projectId: ProjectSlugOrId, config: ConfigGoal = {}) {
  return await clientAPI<PaginationResult<GoalModel>>(`project/${projectId}/goal/`, config)
}

export async function getProjectGoal(
  projectId: ProjectSlugOrId,
  goalId: GoalModel['id'],
  config: ConfigGoal = {}
) {
  return await clientAPI<GoalModel>(`project/${projectId}/goal/${goalId}/`, config)
}

export async function createProjectGoal(
  projectId: ProjectSlugOrId,
  body: GoalForm,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<GoalModel>(`project/${projectId}/goal/`, {
    ...config,
    body,
    method: 'POST',
  })
}

export async function patchProjectGoal(
  projectId: ProjectSlugOrId,
  goalId: GoalModel['id'],
  body: GoalForm,
  config: ClientAPIOptions = {}
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
  config: ClientAPIOptions = {}
) {
  await clientAPI(`project/${projectId}/goal/${goalId}/`, {
    ...config,
    method: 'DELETE',
  })
}
