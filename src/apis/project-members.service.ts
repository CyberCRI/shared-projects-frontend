import { ProjectMembersAddInput, ProjectMembersDeleteInput, ProjectSlugOrId } from '../models'
import { clientAPI } from './client'

export async function addProjectMembers(projectId: ProjectSlugOrId, data: ProjectMembersAddInput) {
  return await clientAPI(`project/${projectId}/member/add/`, { body: data, method: 'POST' }) // .data.value
}

export async function deleteProjectMembers(
  projectId: ProjectSlugOrId,
  data: ProjectMembersDeleteInput
) {
  await clientAPI(`project/${projectId}/member/remove/`, { body: data, method: 'POST' })
}

export async function deleteProjectMembersSelf(projectId: ProjectSlugOrId) {
  await clientAPI(`project/${projectId}/quit/`, { method: 'DELETE' })
}
