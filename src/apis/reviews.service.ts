import { ProjectSlugOrId, QueryFilterReviews, ReviewForm, ReviewId, ReviewModel } from '../models'
import { clientAPI, ClientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

type Config = ClientAPIOptions<QueryFilterReviews>

export async function getReviews(projectId: ProjectSlugOrId, config: Config = {}) {
  return await clientAPI<PaginationResult<ReviewModel>>(`project/${projectId}/review/`, config)
}

export async function postReview(
  projectId: ProjectSlugOrId,
  body: ReviewForm,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<ReviewModel>(`project/${projectId}/review/`, {
    ...config,
    body,
    method: 'POST',
  })
}

export async function patchReview(
  projectId: ProjectSlugOrId,
  reviewId: ReviewId,
  body: ReviewForm,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<ReviewModel>(`project/${projectId}/review/${reviewId}/`, {
    ...config,
    body,
    method: 'PATCH',
  })
}

export async function deleteReview(
  projectId: ProjectSlugOrId,
  reviewId: ReviewId,
  config: ClientAPIOptions = {}
) {
  await clientAPI(`project/${projectId}/review/${reviewId}/`, { ...config, method: 'DELETE' })
}
