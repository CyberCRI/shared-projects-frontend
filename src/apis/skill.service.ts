import { QueryFilterSkill, SkillModel } from '../models/skill.model'
import { clientAPI, clientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

type Config = clientAPIOptions
export async function getSkill(skillId: SkillModel['id'], options: Config = {}) {
  return await clientAPI<SkillModel>(`skill/${skillId}/`, options)
}

type ConfigSearch = clientAPIOptions<QueryFilterSkill>
export async function searchSkill(search: string, options: ConfigSearch = {}) {
  return await clientAPI<PaginationResult<SkillModel>>(`skill/`, {
    ...options,
    query: {
      ...(options?.query || {}),
      search,
    },
  })
}
