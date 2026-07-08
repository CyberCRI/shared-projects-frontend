import { PaginationQuery, PaginationResult } from '../interfaces'
import { AttachmentForm, AttachmentLinkId, AttachmentLinkInput, AttachmentLinkModel, ProjectSlugOrId } from '../models'
import {clientAPI, type clientAPIOptions } from './client'

type Config = clientAPIOptions<Partial<PaginationQuery>>

export async function getProjectAttachmentLinks(projectId: ProjectSlugOrId, config: Config = {}) {
  return await clientAPI<PaginationResult<AttachmentLinkModel>>(`project/${projectId}/link/`, config)
}

export async function getProjectAttachmentLink(body: AttachmentLinkInput) {
  return await clientAPI<AttachmentLinkModel>(`project/${body.project_id}/link/${body.link_id}/`, {})
}

export async function postProjectAttachmentLinks(projectId: ProjectSlugOrId, body: AttachmentForm) {
  return await clientAPI<AttachmentLinkModel>(`project/${projectId}/link/`, {
    body,
    method: 'POST',
  })
}

export async function patchProjectAttachmentLink(
  projectId: ProjectSlugOrId,
  linkId: AttachmentLinkId,
  body: AttachmentForm
) {
  return await clientAPI<AttachmentLinkModel>(`project/${projectId}/link/${linkId}/`, {
    body,
    method: 'PATCH',
  })
}

export async function deleteProjectAttachmentLink(
  projectId: ProjectSlugOrId,
  linkId: AttachmentLinkId
) {
  return await clientAPI<undefined>(`project/${projectId}/link/${linkId}/`, { method: 'DELETE' })
}

// --- user

export function getUserAttachmentLink(userId: number, options: any) {
  return clientAPI<PaginationResult<AttachmentLinkModel>>(`user/${userId}/link/`, options)
}

export async function postUserAttachmentLink(userId: number, body: AttachmentLinkModel) {
  return await clientAPI<AttachmentLinkModel>(`user/${userId}/link/`, { body, method: 'POST' })
}

export async function patchUserAttachmentLink(
  userId: number,
  linkId: number,
  body: Partial<AttachmentLinkModel>
) {
  return await clientAPI<AttachmentLinkModel>(`user/${userId}/link/${linkId}/`, {
    body,
    method: 'PATCH',
  })
}

export async function deleteUserAttachmentLink(userId: number, linkId: number) {
  return await clientAPI(`user/${userId}/link/${linkId}/`, { method: 'DELETE' })
}
