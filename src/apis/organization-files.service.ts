
import { PaginationQuery, PaginationResult } from '../interfaces'
import { AttachmentFileModel, OrganizationModel } from '../models'
import {clientAPI, type clientAPIOptions } from './client'

type Config = clientAPIOptions
type ConfigPagiations = clientAPIOptions<Partial<PaginationQuery>>

export async function getOrganizationFiles(
  organizationCode: string,
  config: ConfigPagiations = {}
) {
  return await clientAPI<PaginationResult<AttachmentFileModel>>(
    `organization/${organizationCode}/file/`,
    config
  )
}

export async function getOrganizationFile(
  organizationCode: OrganizationModel['code'],
  attachmentId: AttachmentFileModel['id'],
  config: Config = {}
) {
  return await clientAPI<AttachmentFileModel>(
    `organization/${organizationCode}/file/${attachmentId}`,
    config
  )
}

export async function postOrganizationFiles(
  organizationCode: OrganizationModel['code'],
  body: FormData
) {
  return await clientAPI<AttachmentFileModel>(`organization/${organizationCode}/file/`, {
    body,
    method: 'POST',
  })
}

export async function patchOrganizationFile(
  organizationCode: OrganizationModel['code'],
  attachmentId: AttachmentFileModel['id'],
  body: FormData
) {
  return await clientAPI<AttachmentFileModel>(
    `organization/${organizationCode}/file/${attachmentId}/`,
    {
      body,
      method: 'PATCH',
    }
  )
}

export async function deleteOrganizationFile(
  organizationCode: OrganizationModel['code'],
  attachmentId: AttachmentFileModel['id']
) {
  return await clientAPI<undefined>(`organization/${organizationCode}/file/${attachmentId}/`, {
    method: 'DELETE',
  })
}
