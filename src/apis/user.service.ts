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
import { _adaptParamsToGetQuery, mergeQueryWithOrganization } from './utils.service'
import { clientAPI, type ClientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'
import { merge } from 'es-toolkit'

// New user service using projects API
export async function getUser(
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterUser> = {}
) {
  return await clientAPI<UserModel>(
    `user/${userId}/`,
    mergeQueryWithOrganization(organizationCode, config)
  )
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
      mergeQueryWithOrganization(organizationCode, config)
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
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  body: UserPatchModel,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<UserModel>(`user/${userId}/`, {
    ...mergeQueryWithOrganization(organizationCode, config),
    body,
    method: 'PATCH',
  })
}

export async function patchUserPicture(
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  pictureId: ImageModel['id'],
  body: FormData,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<ImageModelCreated>(`user/${userId}/profile-picture/${pictureId}/`, {
    ...mergeQueryWithOrganization(organizationCode, config),
    body,
    method: 'PATCH',
  })
}

export async function deleteUser(
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  config: ClientAPIOptions = {}
) {
  await clientAPI(`user/${userId}/`, {
    ...mergeQueryWithOrganization(organizationCode, config),
    method: 'DELETE',
  })
}

export async function postUserPicture(
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  body: FormData,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<ImageModelCreated>(`user/${userId}/profile-picture/`, {
    ...mergeQueryWithOrganization(organizationCode, config),
    body,
    method: 'POST',
  })
}

export async function deleteUserPicture(
  organizationCode: OrganizationModel['code'],
  id: UserSlugOrId,
  imageId: ImageModel['id'],
  config: ClientAPIOptions = {}
) {
  await clientAPI(`user/${id}/profile-picture/${imageId}/`, {
    ...mergeQueryWithOrganization(organizationCode, config),
    method: 'DELETE',
  })
}

export async function getUserPrivacy(
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<PrivacySettings>(
    `privacy-settings/${userId}/`,
    mergeQueryWithOrganization(organizationCode, config)
  )
}

export async function putUserPrivacy(
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  body: UserPrivacyPatchModel,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<PrivacySettings>(`privacy-settings/${userId}/`, {
    ...mergeQueryWithOrganization(organizationCode, config),
    body,
    method: 'PUT',
  })
}

export async function patchUserPrivacy(
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  body: UserPrivacyPatchModel,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<PrivacySettings>(`privacy-settings/${userId}/`, {
    ...mergeQueryWithOrganization(organizationCode, config),
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
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterUser> = {}
) {
  return await clientAPI<PaginationResult<GroupModel>>(
    `user/${userId}/groups/`,
    mergeQueryWithOrganization(organizationCode, config)
  )
}

export async function getUserProjectsMember(
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterUser> = {}
) {
  return await clientAPI<PaginationResult<ProjectModel>>(
    `user/${userId}/projects/member/`,
    mergeQueryWithOrganization(organizationCode, config)
  )
}

export async function getUserProjectsFollower(
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterUser> = {}
) {
  return await clientAPI<PaginationResult<ProjectModel>>(
    `user/${userId}/projects/follower/`,
    mergeQueryWithOrganization(organizationCode, config)
  )
}

export async function getUserProjectsReviewer(
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterUser> = {}
) {
  return await clientAPI<PaginationResult<ProjectModel>>(
    `user/${userId}/projects/reviewer/`,
    mergeQueryWithOrganization(organizationCode, config)
  )
}

export async function getUserCategoriesFollower(
  organizationCode: OrganizationModel['code'],
  userId: UserSlugOrId,
  config: ClientAPIOptions<QueryFilterUser> = {}
) {
  return await clientAPI<PaginationResult<ProjectCategoryModel>>(
    `user/${userId}/categories/follower/`,
    mergeQueryWithOrganization(organizationCode, config)
  )
}
