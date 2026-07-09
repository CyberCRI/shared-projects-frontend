import { PaginationResult } from '../interfaces'
import { ImageModelCreated, ProjectMessageForm, ProjectMessageInputModel, ProjectMessageModel, ProjectSlugOrId, QueryFilterProjectMessage } from '../models'
import { clientAPI, clientAPIOptions } from './client'

type Config = clientAPIOptions<QueryFilterProjectMessage>

export async function getProjectMessages(projectId: ProjectSlugOrId, config: Config = {}) {
  return await clientAPI<PaginationResult<ProjectMessageModel>>(
    `project/${projectId}/project-message/`,
    config
  )
}

export async function postProjectMessage(projectId: ProjectSlugOrId, body: ProjectMessageForm) {
  return await clientAPI<ProjectMessageModel>(`project/${projectId}/project-message/`, {
    body,
    method: 'POST',
  })
}

export async function getProjectMessage(body: ProjectMessageInputModel, config: Config = {}) {
  return await clientAPI<ProjectMessageModel>(
    `project/${body.project_id}/project-message/${body.project_message_id}/`,
    config
  )
}

export async function patchProjectMessage(
  projectId: ProjectSlugOrId,
  messageId: ProjectMessageModel['id'],
  body: ProjectMessageForm
) {
  return await clientAPI<ProjectMessageModel>(`project/${projectId}/project-message/${messageId}/`, {
    body,
    method: 'PATCH',
  })
}

export async function deleteProjectMessage(
  projectId: ProjectSlugOrId,
  projectMessageId: ProjectMessageModel['id'],
  config: Config = {}
) {
  await clientAPI(`project/${projectId}/project-message/${projectMessageId}/`, {
    method: 'DELETE',
    ...config,
  })
}

export async function postProjectMessageImage(
  projectId: ProjectSlugOrId,
  body: FormData,
  config: Config = {}
): Promise<any> {
  return await clientAPI<ImageModelCreated>(`project/${projectId}/project-message-image/`, {
    body,
    method: 'POST',
    ...config,
  })
}
