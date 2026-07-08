import { PaginationResult } from '../interfaces'
import { CommentModel, ProjectMessageForm, ProjectSlugOrId, QueryFilterComments } from '../models'
import { clientAPI, type clientAPIOptions } from './client'

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
  body: ProjectMessageForm
) {
  return await clientAPI<CommentModel>(`project/${projectId}/comment/${commentId}/`, {
    body,
    method: 'PATCH',
  })
}

export async function deleteComment(
  projectId: ProjectSlugOrId,
  commentId: CommentModel['id'],
  config: Config = {}
) {
  return await clientAPI<undefined>(`project/${projectId}/comment/${commentId}/`, {
    ...config,
    method: 'DELETE',
  })
}

export async function postCommentImage(projectId: ProjectSlugOrId, body: any) {
  return await clientAPI(`project/${projectId}/comment-image/`, { body, method: 'POST' })
}
