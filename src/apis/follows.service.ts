import { AddManyFollowedProject, FollowInput, FollowModel, FollowProjectOutput } from '../models';
import { clientAPI } from './client'

export async function getProjectFollows(body: FollowInput) {
  return await clientAPI<FollowModel[]>(`project/${body.project_id}/follow/`, {})
}

export async function getUserFollows(body: FollowInput, params: any) {
  return await clientAPI<FollowModel[]>(`user/${body.follower_id}/follow/`, { params })
}

export async function postFollow(follow: FollowInput) {
  return await clientAPI<FollowModel>(`project/${follow.project_id}/follow/`, {
    body: follow,
    method: 'POST',
  })
}

export async function postFollowMany({ id, body }: { id: string; body: AddManyFollowedProject }) {
  return await clientAPI<FollowModel[]>(`user/${id}/follow/follow-many/`, { body, method: 'POST' })
}

export async function deleteFollow(follow: FollowInput) {
  return await clientAPI<undefined>(`project/${follow.project_id}/follow/${follow.follower_id}/`, {
    method: 'DELETE',
  })
}
