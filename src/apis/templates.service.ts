import { ImageModelCreated, OrganizationModel, TemplateId, TemplateModel } from '../models'
import { PaginationQuery, PaginationResult } from '../interfaces'
import { clientAPI, type clientAPIOptions } from './client'

export function getTemplates(
  organizationCode: OrganizationModel['code'],
  config: clientAPIOptions<PaginationQuery> = {}
) {
  return clientAPI<PaginationResult<TemplateModel>>(
    `organization/${organizationCode}/template/`,
    config
  )
}

export function getTemplate(
  organizationCode: OrganizationModel['code'],
  templateId: TemplateId,
  config: clientAPIOptions = {}
) {
  return clientAPI<TemplateModel>(
    `organization/${organizationCode}/template/${templateId}/`,
    config
  )
}

export async function deleteTemplate(
  organizationCode: OrganizationModel['code'],
  templateId: TemplateId
) {
  await clientAPI(`organization/${organizationCode}/template/${templateId}/`, {
    method: 'DELETE',
  })
}

export function postTemplate(organizationCode: OrganizationModel['code'], body: object) {
  return clientAPI<TemplateModel>(`organization/${organizationCode}/template/`, {
    method: 'POST',
    body,
  })
}

export function postTemplateImage(
  organizationCode: OrganizationModel['code'],
  templateId: TemplateId,
  file: File
) {
  const body = new FormData()
  body.append('file', file, file.name)
  return clientAPI<ImageModelCreated>(
    `organization/${organizationCode}/template/${templateId}/image/`,
    {
      body,
      method: 'POST',
    }
  )
}

export function patchTemplate(
  organizationCode: OrganizationModel['code'],
  templateId: TemplateId,
  body: object
) {
  return clientAPI(`organization/${organizationCode}/template/${templateId}/`, {
    method: 'PATCH',
    body,
  })
}
