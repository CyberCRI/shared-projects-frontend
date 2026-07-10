import { ProjectMembersAddInput, ProjectMembersDeleteInput, ProjectSlugOrId } from '../models'
import { clientAPI, ClientAPIOptions } from './client'

export async function addProjectMembers(
  projectId: ProjectSlugOrId,
  body: ProjectMembersAddInput,
  config: ClientAPIOptions = {}
) {
  // return nothing from backend
  await clientAPI(`project/${projectId}/member/add/`, { ...config, body, method: 'POST' })
}

export async function deleteProjectMembers(
  projectId: ProjectSlugOrId,
  body: ProjectMembersDeleteInput,
  config: ClientAPIOptions = {}
) {
  // return nothing from backend
  await clientAPI(`project/${projectId}/member/remove/`, { ...config, body, method: 'POST' })
}

export async function deleteProjectMembersSelf(
  projectId: ProjectSlugOrId,
  config: ClientAPIOptions = {}
) {
  // return nothing from backend
  await clientAPI(`project/${projectId}/quit/`, { ...config, method: 'DELETE' })
}
