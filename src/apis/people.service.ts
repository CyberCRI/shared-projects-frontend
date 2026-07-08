import { PaginationResult } from '../interfaces'
import { OrganizationModel, PeopleModel, UserIdOrSlug, UserModel, UserPatchModel, UserPrivacyPatchModel, UserSkillModel } from '../models'
import {clientAPI, type clientAPIOptions } from './client'
import { _adaptParamsToGetQuery } from './utils.service'

// New user service using projects API
export async function getUser(userId: string | number, config: clientAPIOptions = {}) {
  return await clientAPI<UserModel>(`user/${userId}/`, config)
}

export async function postUser(organizationCode: OrganizationModel['code'], payload: FormData) {
  return await clientAPI(`user/`, {
    body: payload,
    method: 'POST',
    query: {
      organization: organizationCode
    }
  })
}

// Create account with invitation
export async function postUserWithInvitation(organizationCode: OrganizationModel['code'], inviteToken: string, payload: FormData) {
  // use token as auth header with and "Invite" key instead of "Bearer"
  const inviteTokenHeader = {
    headers: {
      Authorization: `Invite ${inviteToken}`,
    },
    query: {
      organization: organizationCode
    }
  }
  // dont override with eventual curretn user token
  return await clientAPI(`user/`, {
    body: payload,
    method: 'POST',
    ...inviteTokenHeader,
  })
}

export async function searchPeopleProject({ search, org_id, params }: any) {
  const adaptedParams = params ? _adaptParamsToGetQuery(params) : {}

  return await clientAPI(`user/?search=${search}&current_org_pk=${org_id}`, { ...adaptedParams })
}

export async function searchPeopleAdmin(organizationId: OrganizationModel['id'], config: any) {
  // TODO change backend with prefix organization code in url not in query
  const newConfig = {
    ...config,
    query: {
      ...config.query,
      current_org_pk: organizationId,
    },
  }

  return await clientAPI<PaginationResult<PeopleModel>>('user/admin-list/', newConfig)
}

export async function searchPeopleByExactMail(email: string, params: object) {
  const adaptedParams = params ? _adaptParamsToGetQuery(params) : {}
  return await clientAPI(`user/get-by-email/${email}/`, { ...adaptedParams })
}

export async function patchUser(id: string | number, body: UserPatchModel) {
  return await clientAPI(`user/${id}/`, { body, method: 'PATCH' })
}

export async function patchUserPicture(id: string | number, pictureId: string, body: FormData) {
  return await clientAPI(`user/${id}/profile-picture/${pictureId}/`, { body, method: 'PATCH' })
}

export async function deleteUser(id: string) {
  return await clientAPI(`user/${id}/`, { method: 'DELETE' })
}

export async function postUserPicture(id: string, body: FormData) {
  return await clientAPI(`user/${id}/profile-picture/`, { body, method: 'POST' })
}

export async function patchUserPrivacy(id: string | number, body: UserPrivacyPatchModel) {
  return await clientAPI(`privacy-settings/${id}/`, { body, method: 'PATCH' })
}

export async function postUserSkill(user_id: string | number, body: UserSkillModel) {
  return await clientAPI(`user/${user_id}/skill/`, { body, method: 'POST' })
}

export async function patchUserSkill(
  user_id: string | number,
  skill_id: number,
  body: UserPrivacyPatchModel
) {
  return await clientAPI(`user/${user_id}/skill/${skill_id}/`, { body, method: 'PATCH' })
}

export async function deleteUserSkill(user_id: string | number, skill_id: number) {
  return await clientAPI(`user/${user_id}/skill/${skill_id}/`, { method: 'DELETE' })
}

export async function resetUserPassword(organizationCode: OrganizationModel['code'], userId: UserIdOrSlug) {
  return await clientAPI(`user/${userId}/reset-password/`, {
    query: {
      organization: organizationCode
    }
  })
}
