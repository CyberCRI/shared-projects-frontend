import { Ordering } from "../interfaces"
import { LanguageType, ProjectMemberRoleType, ProjectModel } from "../models"

// TODO legacy
export interface APIParams {
  limit?: number // Number of results to return per page.
  offset?: number // The initial index from which to return the results.
  organizations?: number[]
  search?: string
  order_by?: string
  ordering?: string
}

export interface SearchParams extends APIParams {
  category?: number // id
  languages?: LanguageType[]
  member_role?: ProjectMemberRoleType[]
  members?: string[]
  ordering?: Ordering<keyof ProjectModel> // Field name to order by
  organizations?: number[]
  sdgs?: number[]
  tags?: string[]
  types?: string
}
