import type { OrganizationModel } from './organization.model'
import { PaginationQuery } from '../interfaces/pagination'
import type { TagModel, TranslatedTag } from './tag.model'
import type { LanguageType, TagType } from './types'
import { Translated } from '../interfaces'
import type BaseModel from './base.model'

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
    type: TagType[]
    enabled_for: ('projects' | 'skills')[]
  } & PaginationQuery
>

export type TranslatedTagClassification = Translated<
  Omit<TagClassificationModel, 'tags'>,
  'title' | 'description'
> & {
  tags: TranslatedTag[]
}
