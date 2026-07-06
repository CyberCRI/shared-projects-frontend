import type { Translated } from '../interfaces/translated'
import type { ImageModel } from './image.model'
import type { UserModel } from './user.model'
import type { Ordering } from '../interfaces/query'
import type BaseModel from './base.model'
import { PaginationQuery } from '../interfaces/pagination'

/**
 * @name CommentModel
 * @description Comment of a project
 * */
export interface CommentModel extends BaseModel {
  id: number
  content: string
  author: UserModel
  images: ImageModel[]
  created_at: string
  deleted_at: string
  updated_at: string
  replies: CommentModel[]
}

export type TranslatedComment = Translated<Omit<CommentModel, 'replies'>, 'content'> & {
  replies: TranslatedComment[]
}

export type QueryFilterComments = Partial<
  {
    ordering: Ordering<'updated_at' | 'created_at'>
  } & PaginationQuery
>
