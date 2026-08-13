import type { ProjectCategoryModel } from './project-category.model'
import type { OrganizationModel } from './organization.model'
import type { Translated } from '../interfaces/translated'
import type { TagModel, TranslatedTag } from './tag.model'
import type { ImageModel } from './image.model'
import type { LanguageType } from './types'
import type BaseModel from './base.model'
import { ProjectTab, ProjectTabItem } from './projects-tabs.model'

export interface TemplateTab extends BaseModel {
  id?: number
  template?: number
  
  uuid: ProjectTab['uuid']
  title: ProjectTab['title']
  description: ProjectTab['description']
  type: ProjectTab['type']
  icon: ProjectTab['icon']
  show_preview: ProjectTab['show_preview']

  title_item: ProjectTabItem['title']
  content_item: ProjectTabItem['content']
}

/**
 * @name TemplateModel
 * @description Template of a category
 */
export interface TemplateModel extends BaseModel {
  id: number
  name: string
  description: string
  language: LanguageType
  images: ImageModel[]
  organization: OrganizationModel
  categories: ProjectCategoryModel[]
  project_title: string
  project_description: string
  project_purpose: string
  project_tags: TagModel[]
  blogentry_title: string
  blogentry_content: string
  goal_title: string
  goal_description: string
  review_title: string
  review_description: string
  comment_content: string
  tabs: TemplateTab[]
}

export type TemplateId = TemplateModel['id']

export type TranslatedTemplate = Omit<
  Translated<
    TemplateModel,
    | 'name'
    | 'description'
    | 'project_title'
    | 'project_description'
    | 'project_purpose'
    | 'project_tags'
    | 'blogentry_title'
    | 'blogentry_content'
    | 'goal_title'
    | 'goal_description'
    | 'review_title'
    | 'review_description'
    | 'comment_content'
  >,
  'project_tags'
> & {
  project_tags: TranslatedTag[]
}


export type TemplateTabForm = Partial<TemplateTab & {
  item: {
    title?: TemplateTab['title_item']
    content?: TemplateTab['content_item']
  }
}>;

export type TemplateForm = Partial<Omit<TemplateModel, 'tabs'>> & {
  tabs: TemplateTabForm[]
  project_categories_ids: number[]
}

