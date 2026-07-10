import { QueryFilterSkill, SkillModel } from '../models/skill.model'
import { clientAPI, ClientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

type Config = ClientAPIOptions
export async function getSkill(skillId: SkillModel['id'], options: Config = {}) {
  return await clientAPI<SkillModel>(`skill/${skillId}/`, options)
}

type ConfigSearch = ClientAPIOptions<QueryFilterSkill>
export async function searchSkill(search: string, options: ConfigSearch = {}) {
  return await clientAPI<PaginationResult<SkillModel>>(`skill/`, {
    ...options,
    query: {
      ...(options?.query || {}),
      search,
    },
  })
}
