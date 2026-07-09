import { ProjectSlugOrId } from './project.model'
import { TagModel } from './tag.model'

export type Stats = {
  total: number
  by_sdg: {
    sdg: number
    project_count: number
  }[]
  by_month: {
    month: string
    created_count: number
    updated_count: number
  }[]
  top_tags: (TagModel & {
    project_count: number
    projects: ProjectSlugOrId[]
  })[]
}
