import {
  AddManyFollowedProject,
  FollowInput,
  FollowModel,
  OrganizationModel,
  ProjectSlugOrId,
  UserSlugOrId,
} from '../models'
import { mergeQueryWithOrganization } from './utils.service'
import { clientAPI, ClientAPIOptions } from './client'

export async function getProjectFollows(
  organizationCode: OrganizationModel['code'],
  projectId: ProjectSlugOrId,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<FollowModel[]>(
    `project/${projectId}/follow/`,
    mergeQueryWithOrganization(organizationCode, config)
  )
}

export async function getUserFollows(
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<FollowModel[]>(
    `user/${userId}/follow/`,
    mergeQueryWithOrganization(organizationCode, config)
  )
}

export async function postFollow(
  organizationCode: OrganizationModel['code'],
  projectId: ProjectSlugOrId,
  body: FollowInput,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<FollowModel>(`project/${projectId}/follow/`, {
    body,
    method: 'POST',
    ...mergeQueryWithOrganization(organizationCode, config),
  })
}

export async function postFollowMany(
  organizationCode: OrganizationModel['code'],
  { id, body }: { id: string; body: AddManyFollowedProject }
) {
  return await clientAPI<FollowModel[]>(`user/${id}/follow/follow-many/`, { body, method: 'POST' })
}

export async function deleteFollow(
  organizationCode: OrganizationModel['code'],
  projectId: ProjectSlugOrId,
  followerId: number,
  config: ClientAPIOptions = {}
) {
  await clientAPI(`project/${projectId}/follow/${followerId}/`, {
    method: 'DELETE',
    ...mergeQueryWithOrganization(organizationCode, config),
  })
}
