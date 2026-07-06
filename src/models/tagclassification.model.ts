import type { OrganizationModel } from './organization.model'
import type { LanguageType, TagType } from './types'
import type { TagModel } from './tag.model'
import type BaseModel from './base.model'
import { PaginationQuery } from '../interfaces/pagination'

export type TagClassificationModel = BaseModel & {
  id: number
  type: TagType
  organization: OrganizationModel
  is_public: boolean
  title: string
  slug: string
  outdated_slugs: string[]
  description: string
  tags: TagModel[]
  is_enabled_for_projects?: boolean
  is_enabled_for_skills?: boolean
}

export type QueryFilterTagClassification = Partial<
  {
    search: string
    language: LanguageType
  } & PaginationQuery
>
