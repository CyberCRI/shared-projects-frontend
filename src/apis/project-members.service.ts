import { ProjectMembersAddInput, ProjectMembersDeleteInput, ProjectSlugOrId } from '../models'
import { clientAPI, clientAPIOptions } from './client'

export async function addProjectMembers(
  projectId: ProjectSlugOrId,
  body: ProjectMembersAddInput,
  config: clientAPIOptions = {}
) {
  await clientAPI(`project/${projectId}/member/add/`, { ...config, body, method: 'POST' })
}

export async function deleteProjectMembers(
  projectId: ProjectSlugOrId,
  body: ProjectMembersDeleteInput,
  config: clientAPIOptions = {}
) {
  await clientAPI(`project/${projectId}/member/remove/`, { ...config, body, method: 'POST' })
}

export async function deleteProjectMembersSelf(
  projectId: ProjectSlugOrId,
  config: clientAPIOptions = {}
) {
  await clientAPI(`project/${projectId}/quit/`, { ...config, method: 'DELETE' })
}
