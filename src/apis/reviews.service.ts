import { PaginationResult } from '../interfaces'
import { ProjectSlugOrId, QueryFilterReviews, ReviewForm, ReviewId, ReviewModel } from '../models'
import { clientAPI, clientAPIOptions } from './client'

type Config = clientAPIOptions<QueryFilterReviews>

export async function getReviews(projectId: ProjectSlugOrId, config: Config = {}) {
  return await clientAPI<PaginationResult<ReviewModel>>(`project/${projectId}/review/`, config)
}

export async function postReview(projectId: ProjectSlugOrId, body: ReviewForm) {
  return await clientAPI<ReviewModel>(`project/${projectId}/review/`, {
    body,
    method: 'POST',
  })
}

export async function patchReview(
  projectId: ProjectSlugOrId,
  reviewId: ReviewId,
  body: ReviewForm
) {
  return await clientAPI<ReviewModel>(`project/${projectId}/review/${reviewId}/`, {
    body,
    method: 'PATCH',
  })
}

export async function deleteReview(projectId: ProjectSlugOrId, reviewId: ReviewId) {
  await clientAPI(`project/${projectId}/review/${reviewId}/`, { method: 'DELETE' })
}
