import { PaginationQuery, PaginationResult } from '../interfaces'
import { AttachmentFileId, AttachmentFileInput, AttachmentFileModel, AttachmentForm, ProjectSlugOrId } from '../models'
import {clientAPI, type clientAPIOptions } from './client'

type Config = clientAPIOptions<Partial<PaginationQuery>>

export async function getProjectAttachmentFiles(projectId: ProjectSlugOrId, config: Config = {}) {
  return await clientAPI<PaginationResult<AttachmentFileModel>>(`project/${projectId}/file/`, config)
}

export async function getProjectAttachmentFile(body: AttachmentFileInput) {
  return await clientAPI<AttachmentFileModel>(`project/${body.project_id}/file/${body.file}`, {})
}

export async function postProjectAttachmentFiles(projectId: ProjectSlugOrId, body: FormData) {
  return await clientAPI<AttachmentFileModel>(`project/${projectId}/file/`, {
    body,
    method: 'POST',
  })
}

export async function patchProjectAttachmentFile(
  projectId: ProjectSlugOrId,
  fileId: AttachmentFileId,
  body: FormData
) {
  // const fd = new FormData()
  // fd.append('description', body.description)
  // fd.append('title', body.title)
  // fd.append('project_id', body.project_id)

  return await clientAPI<AttachmentFileModel>(`project/${projectId}/file/${fileId}/`, {
    body,
    method: 'PATCH',
  })
}

export async function deleteProjectAttachmentFile(
  projectId: ProjectSlugOrId,
  fileId: AttachmentFileId
) {
  return await clientAPI<undefined>(`project/${projectId}/file/${fileId}/`, { method: 'DELETE' })
}

// -- user
export function getUserAttachmentFile(userId: number, options: any) {
  return clientAPI<PaginationResult<AttachmentFileModel>>(`user/${userId}/file/`, options)
}

export async function postUserAttachmentFile(userId: number, data: AttachmentForm) {
  const body = new FormData()
  body.set('description', data.description)
  body.set('title', data.title)
  if (data.file) {
    body.set('file', data.file, data.file.name)
    body.set('mime', data.file.type || 'file')
  }

  return await clientAPI<AttachmentFileModel>(`user/${userId}/file/`, { body, method: 'POST' })
}

export async function patchUserAttachmentFile(
  userId: number,
  fileId: number,
  data: Partial<AttachmentFileModel>
) {
  const body = new FormData()
  if (data.description) {
    body.set('description', data.description)
  }
  if (data.title) {
    body.set('title', data.title)
  }

  return await clientAPI<AttachmentFileModel>(`user/${userId}/file/${fileId}/`, {
    body,
    method: 'PATCH',
  })
}

export async function deleteUserAttachmentFile(userId: number, fileId: number) {
  return await clientAPI(`user/${userId}/file/${fileId}/`, { method: 'DELETE' })
}
