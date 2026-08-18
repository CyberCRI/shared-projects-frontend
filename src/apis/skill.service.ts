import { QueryFilterSkill, UserSkillForm } from '../models/skill.model'
import { clientAPI, ClientAPIOptions } from './client'
import { SkillModel, UserSlugOrId } from '../models'

type Config = ClientAPIOptions<QueryFilterSkill>

export async function getUserSkills(userId: UserSlugOrId, options: Config = {}) {
  return await clientAPI<SkillModel>(`${userId}/skill/`, options)
}

export async function getUserSkill(
  userId: UserSlugOrId,
  skillId: SkillModel['id'],
  options: Config = {}
) {
  return await clientAPI<SkillModel>(`${userId}/skill/${skillId}/`, options)
}

export async function postUserSkill(
  userId: UserSlugOrId,
  body: SkillModel,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<SkillModel>(`user/${userId}/skill/`, {
    ...config,
    body,
    method: 'POST',
  })
}

export async function patchUserSkill(
  userId: UserSlugOrId,
  skillId: SkillModel['id'],
  body: UserSkillForm,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<SkillModel>(`user/${userId}/skill/${skillId}/`, {
    ...config,
    body,
    method: 'PATCH',
  })
}

export async function deleteUserSkill(
  userId: UserSlugOrId,
  skillId: SkillModel['id'],
  config: ClientAPIOptions = {}
) {
  await clientAPI(`user/${userId}/skill/${skillId}/`, { ...config, method: 'DELETE' })
}
