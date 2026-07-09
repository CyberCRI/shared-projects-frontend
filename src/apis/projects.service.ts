import { PaginationQuery, PaginationResult } from '../interfaces'
import { AddManyLinkedProjectInput, ImageModelCreated, ImageModel, LinkedProject, PeopleGroupModel, ProjectForm, ProjectMemberModel, ProjectModel, ProjectSlugOrId, QueryFilterProject, QueryFilterProjectMembers, QueryFilterProjectSimilars } from '../models'
import type { clientAPIOptions } from './client'
import { clientAPI } from './client'

type ConfigProject = clientAPIOptions<QueryFilterProject>
type ConfigProjectLinked = clientAPIOptions<Partial<PaginationQuery>>
type ConfigProjectMembers = clientAPIOptions<QueryFilterProjectMembers>

export async function getAllProjects(config: ConfigProject = {}) {
  return await clientAPI<PaginationResult<ProjectModel>>(`project/`, config)
}

export async function getProject(projectSlugOrId: ProjectSlugOrId, config: ConfigProject = {}) {
  return await clientAPI<ProjectModel>(`project/${projectSlugOrId}/`, config)
}

export function postProject(body: ProjectForm, config: clientAPIOptions={}) {
  return clientAPI<ProjectModel>(`project/`, { ...config, body, method: 'POST' })
}

export async function patchProject(projectId: ProjectSlugOrId, project: ProjectForm) {
  return await clientAPI<ProjectModel>(`project/${projectId}/`, { body: project, method: 'PATCH' })
}

export async function deleteProject(projectId: ProjectSlugOrId) {
  return await clientAPI<undefined>(`project/${projectId}/`, { method: 'DELETE' })
}

export async function duplicateProject(projectId: ProjectSlugOrId) {
  return await clientAPI<ProjectModel>(`project/${projectId}/duplicate/`, { method: 'POST' })
}

export async function getLinkedProject(
  projectId: ProjectSlugOrId,
  config: ConfigProjectLinked = {}
) {
  return await clientAPI<PaginationResult<ProjectModel>>(
    `project/${projectId}/linked-project/`,
    config
  )
}

export async function addLinkedProject(
  projectId: ProjectSlugOrId,
  body: AddManyLinkedProjectInput
) {
  return await clientAPI(`project/${projectId}/linked-project/add-many/`, { body, method: 'POST' })
}

export async function deleteLinkedProject(projectId: ProjectSlugOrId, linkedProjectId: LinkedProject['id']) {
  return await clientAPI<undefined>(`project/${projectId}/linked-project/${linkedProjectId}/`, {
    method: 'DELETE',
  })
}

export async function getProjectMembers(
  projectSlugOrId: ProjectSlugOrId,
  config: ConfigProjectMembers = {}
) {
  return await clientAPI<PaginationResult<ProjectMemberModel>>(
    `project/${projectSlugOrId}/member/`,
    config
  )
}

export async function postProjectImage(projectId: ProjectSlugOrId, body: FormData) {
  return await clientAPI<ImageModelCreated>(`project/${projectId}/image/`, { body, method: 'POST' })
}

export async function postProjectHeader(projectId: ProjectSlugOrId, body: any) {
  return await clientAPI<ImageModelCreated>(`project/${projectId}/header/`, {
    body,
    method: 'POST',
  })
}

export async function patchProjectHeader(
  projectId: ProjectSlugOrId,
  imageId: ImageModel['id'],
  body: any
) {
  return await clientAPI<ImageModel>(`project/${projectId}/header/${imageId}/`, {
    body,
    method: 'PATCH',
  })
}

export async function lockUnlockProject({ project_id, context }: {project_id: ProjectSlugOrId, context: 'lock' | 'unlock'}) {
  return await clientAPI<null>(`project/${project_id}/${context}/`, { method: 'POST' })
}

export type ConfigSimilar = clientAPIOptions<QueryFilterProjectSimilars>

export async function getProjectSimilars(projectId: ProjectSlugOrId, config: ConfigSimilar = {}) {
  return await clientAPI<PaginationResult<ProjectModel>>(`/project/${projectId}/similar/`, config)
}

type ConfigProjectGroup = clientAPIOptions<Partial<PaginationQuery>>

export async function getProjectGroups(
  projectId: ProjectSlugOrId,
  config: ConfigProjectGroup = {}
) {
  return await clientAPI<PaginationResult<PeopleGroupModel>>(`/project/${projectId}/group/`, config)
}
