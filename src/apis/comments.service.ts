import {
  CommentModel,
  ImageModelCreated,
  ProjectMessageForm,
  ProjectSlugOrId,
  QueryFilterComments,
} from '../models'
import { clientAPI, type clientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

type Config = clientAPIOptions<QueryFilterComments>

export async function getComments(projectId: ProjectSlugOrId, config: Config = {}) {
  return await clientAPI<PaginationResult<CommentModel>>(`project/${projectId}/comment/`, config)
}

export async function postComment(
  projectId: ProjectSlugOrId,
  comment: ProjectMessageForm,
  config: Config = {}
) {
  return await clientAPI<CommentModel>(`project/${projectId}/comment/`, {
    ...config,
    body: comment,
    method: 'POST',
  })
}

export async function getComment(
  projectId: ProjectSlugOrId,
  commentId: CommentModel['id'],
  config: Config = {}
) {
  return await clientAPI<CommentModel>(`project/${projectId}/comment/${commentId}/`, config)
}

export async function patchComment(
  projectId: ProjectSlugOrId,
  commentId: CommentModel['id'],
  body: ProjectMessageForm,
  config: Config = {}
) {
  return await clientAPI<CommentModel>(`project/${projectId}/comment/${commentId}/`, {
    ...config,
    body,
    method: 'PATCH',
  })
}

export async function deleteComment(
  projectId: ProjectSlugOrId,
  commentId: CommentModel['id'],
  config: Config = {}
) {
  await clientAPI(`project/${projectId}/comment/${commentId}/`, {
    ...config,
    method: 'DELETE',
  })
}

export async function postCommentImage(
  projectId: ProjectSlugOrId,
  body: FormData,
  config: Config = {}
) {
  return await clientAPI<ImageModelCreated>(`project/${projectId}/comment-image/`, {
    ...config,
    body,
    method: 'POST',
  })
}
