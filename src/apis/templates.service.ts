import {
  ImageModelCreated,
  OrganizationModel,
  TemplateForm,
  TemplateId,
  TemplateModel,
} from '../models'
import { PaginationQuery, PaginationResult } from '../interfaces'
import { clientAPI, type ClientAPIOptions } from './client'

export function getTemplates(
  organizationCode: OrganizationModel['code'],
  config: ClientAPIOptions<PaginationQuery> = {}
) {
  return clientAPI<PaginationResult<TemplateModel>>(
    `organization/${organizationCode}/template/`,
    config
  )
}

export function getTemplate(
  organizationCode: OrganizationModel['code'],
  templateId: TemplateId,
  config: ClientAPIOptions = {}
) {
  return clientAPI<TemplateModel>(
    `organization/${organizationCode}/template/${templateId}/`,
    config
  )
}

export async function deleteTemplate(
  organizationCode: OrganizationModel['code'],
  templateId: TemplateId,
  config: ClientAPIOptions = {}
) {
  await clientAPI(`organization/${organizationCode}/template/${templateId}/`, {
    ...config,
    method: 'DELETE',
  })
}

export function postTemplate(
  organizationCode: OrganizationModel['code'],
  body: TemplateForm,
  config: ClientAPIOptions = {}
) {
  return clientAPI<TemplateModel>(`organization/${organizationCode}/template/`, {
    ...config,
    method: 'POST',
    body,
  })
}

export function postTemplateImage(
  organizationCode: OrganizationModel['code'],
  templateId: TemplateId,
  file: File,
  config: ClientAPIOptions = {}
) {
  const body = new FormData()
  body.append('file', file, file.name)

  return clientAPI<ImageModelCreated>(
    `organization/${organizationCode}/template/${templateId}/image/`,
    {
      ...config,
      body,
      method: 'POST',
    }
  )
}

export function patchTemplate(
  organizationCode: OrganizationModel['code'],
  templateId: TemplateId,
  body: TemplateForm,
  config: ClientAPIOptions = {}
) {
  return clientAPI<TemplateModel>(`organization/${organizationCode}/template/${templateId}/`, {
    ...config,
    body,
    method: 'PATCH',
  })
}
