import type { Translated } from '../interfaces/translated'
import { PaginationQuery } from '../interfaces/pagination'
import type { Ordering } from '../interfaces/query'
import type { ProjectModel } from './project.model'
import type { ImageModel } from './image.model'
import type { ProjectTabType } from './types'
import type BaseModel from './base.model'
import type {IconTabImageChoice} from '../constants/icons'


export interface ProjectTab extends BaseModel {
  id?: number;
  project?: ProjectModel;
  title: string;
  type: ProjectTabType;
  description: string | null;
  icon: IconTabImageChoice | null;
  images?: ImageModel[];
  show_preview: boolean;
  modules: {
    items: number;
  };
}

export type ProjectTabForm = Partial<
  Omit<ProjectTab, 'modules' | 'images'> & {
    images_ids: number[]
  }
>

export type TranslatedProjectTab = Translated<ProjectTab, 'title' | 'description'>

export interface ProjectTabItem extends BaseModel {
  id: number
  tab?: ProjectTab
  title: string
  content: string
  images?: number[]
  created_at: string
  updated_at: string
}

export type TranslatedProjectTabItem = Translated<ProjectTabItem, 'title' | 'content'>

export type ProjectTabItemForm = Partial<
  ProjectTabItem & {
    images_ids: number[]
  }
>

export type QueryFilterProjectTab = Partial<
  {
    type: ProjectTabType
    show_preview: boolean
  } & PaginationQuery
>

export type QueryFilterProjectTabItem = Partial<
  {
    ordering: Ordering<'created_at' | 'updated_at'>
    from_date: string
    to_date: string
  } & PaginationQuery
>
