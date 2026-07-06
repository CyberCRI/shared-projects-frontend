import type { BaseLocationModel, BaseTranslatedLocationModel } from './location.model'
import type { OrganizationModel } from './organization.model'
import type { PeopleGroupModel } from './people-group.model'
import type { ImageModel, ImageSize } from './image.model'
import type BaseModel from './base.model'

import type { Translated } from '../interfaces/translated'
import type { Ordering } from '../interfaces/query'

import { PaginationQuery } from '../interfaces/pagination'

/**
 * @name NewsModel
 * @description News of an organization
 */
export interface NewsModel extends BaseModel {
  id: number
  title: string
  content: string
  images: NewsImageModel[]
  header_image?: ImageModel
  publication_date: string
  people_groups: PeopleGroupModel[]
  created_at: string
  updated_at: string
  organization: OrganizationModel
  visible_by_all: boolean
  location: BaseLocationModel
}

export interface NewsImageModel {
  file: string
  name: string
  gallery: string
}

export type TranslatedNews = Omit<Translated<NewsModel, 'title' | 'content'>, 'location'> & {
  location: BaseTranslatedLocationModel
}

export type NewsOutput = BaseModel &
  Required<NewsModel> & {
    images?: Array<NewsImageModel>
  }

export type NewsInput = Required<
  Omit<NewsModel, 'id' | 'created_at' | 'updated_at' | 'organization' | 'images'>
>

export type NewsForm = Omit<NewsInput, 'people_groups'> & {
  organization_code?: string
  imageSizes?: ImageSize
  people_groups: {
    [key: number]: boolean
  }
}

export type QueryFilterNews = Partial<
  {
    ordering: Ordering<'created_at' | 'updated_at' | 'publication_date'>
    from_date: string
    to_date: string
    serializer: 'light'
  } & PaginationQuery
>
