import {
  ImageModelCreated,
  OrganizationModel,
  UserSlugOrId,
  UserModel,
  UserPatchModel,
  UserPrivacyPatchModel,
  ProjectCategoryModel,
  ProjectModel,
  PrivacySettings,
  ImageModel,
  QueryFilterUser,
  QueryFilterUserEmail,
  QueryFilterResetPassword,
  GroupModel,
} from '../models'
import { clientAPI, type ClientAPIOptions } from './client'
import { _adaptParamsToGetQuery } from './utils.service'
import { PaginationResult } from '../interfaces'
import { merge } from 'es-toolkit'

// New user service using projects API
export async function getUser(
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterUser> = {}
) {
  return await clientAPI<UserModel>(`user/${userId}/`, config)
}

export async function postUser(
  organizationCode: OrganizationModel['code'],
  body: FormData,
  config: ClientAPIOptions = {}
) {
  await clientAPI<UserModel>(
    `user/`,
    merge(
      {
        body,
        method: 'POST',
        query: {
          organization: organizationCode,
        },
      },
      config
    )
  )
}

// Create account with invitation
export async function postUserWithInvitation(
  organizationCode: OrganizationModel['code'],
  inviteToken: string,
  body: FormData,
  config: ClientAPIOptions = {}
) {
  // use token as auth header with and "Invite" key instead of "Bearer"
  const options = merge(
    {
      body,
      method: 'POST',
      headers: {
        Authorization: `Invite ${inviteToken}`,
      },
      query: {
        organization: organizationCode,
      },
    },
    config
  )
  // dont override with eventual current user token
  return await clientAPI<UserModel>(`user/`, options)
}

export async function searchUserAdmin(
  organizationId: OrganizationModel['id'],
  config: ClientAPIOptions<QueryFilterUser> = {}
) {
  // TODO change backend with prefix organization code in url not in query
  const newConfig: ClientAPIOptions<QueryFilterUser> = {
    ...(config || {}),
    query: {
      ...(config?.query || {}),
      current_org_pk: organizationId,
    },
  }

  return await clientAPI<PaginationResult<UserModel>>('user/admin-list/', newConfig)
}

export async function searchUserByExactMail(
  email: string,
  config: ClientAPIOptions<QueryFilterUserEmail> = {}
) {
  return await clientAPI<UserModel>(`user/get-by-email/${encodeURIComponent(email)}/`, config)
}

export async function patchUser(
  userId: UserSlugOrId,
  body: UserPatchModel,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<UserModel>(`user/${userId}/`, { ...config, body, method: 'PATCH' })
}

export async function patchUserPicture(
  userId: UserSlugOrId,
  pictureId: ImageModel['id'],
  body: FormData,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<ImageModelCreated>(`user/${userId}/profile-picture/${pictureId}/`, {
    ...config,
    body,
    method: 'PATCH',
  })
}

export async function deleteUser(userId: UserSlugOrId, config: ClientAPIOptions = {}) {
  await clientAPI(`user/${userId}/`, { ...config, method: 'DELETE' })
}

export async function postUserPicture(
  userId: UserSlugOrId,
  body: FormData,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<ImageModelCreated>(`user/${userId}/profile-picture/`, {
    ...config,
    body,
    method: 'POST',
  })
}

export async function deleteUserPicture(
  id: UserSlugOrId,
  imageId: ImageModel['id'],
  config: ClientAPIOptions = {}
) {
  await clientAPI(`user/${id}/profile-picture/${imageId}/`, { ...config, method: 'DELETE' })
}

export async function getUserPrivacy(userId: UserSlugOrId, config: ClientAPIOptions = {}) {
  return await clientAPI<PrivacySettings>(`privacy-settings/${userId}/`, config)
}

export async function putUserPrivacy(
  userId: UserSlugOrId,
  body: UserPrivacyPatchModel,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<PrivacySettings>(`privacy-settings/${userId}/`, {
    ...config,
    body,
    method: 'PUT',
  })
}

export async function patchUserPrivacy(
  userId: UserSlugOrId,
  body: UserPrivacyPatchModel,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<PrivacySettings>(`privacy-settings/${userId}/`, {
    ...config,
    body,
    method: 'PATCH',
  })
}
export async function resetUserPassword(
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterResetPassword> = {}
) {
  // TODO change that in backend
  return await clientAPI<{ detail: 'Email sent' }>(
    `user/${userId}/reset-password/`,
    merge(
      {
        query: {
          organization: organizationCode,
        },
      },
      config
    )
  )
}

export async function removeUserCookie(config: ClientAPIOptions = {}) {
  return await clientAPI<'Cookie already deleted' | 'Cookie deleted'>(
    'user/remove-authentication-cookie',
    config
  )
}

export async function getUserGroups(
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterUser> = {}
) {
  return await clientAPI<PaginationResult<GroupModel>>(`user/${userId}/groups/`, config)
}

export async function getUserProjectsMember(
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterUser> = {}
) {
  return await clientAPI<PaginationResult<ProjectModel>>(`user/${userId}/projects/member/`, config)
}

export async function getUserProjectsFollower(
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterUser> = {}
) {
  return await clientAPI<PaginationResult<ProjectModel>>(
    `user/${userId}/projects/follower/`,
    config
  )
}

export async function getUserProjectsReviewer(
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterUser> = {}
) {
  return await clientAPI<PaginationResult<ProjectModel>>(
    `user/${userId}/projects/reviewer/`,
    config
  )
}

export async function getUserCategoriesFollower(
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterUser> = {}
) {
  return await clientAPI<PaginationResult<ProjectCategoryModel>>(
    `user/${userId}/categories/follower/`,
    config
  )
}
