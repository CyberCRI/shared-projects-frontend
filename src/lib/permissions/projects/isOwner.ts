import { OrganizationModel } from '../../../models/organization.model'
import { ProjectModel } from '../../../models/project.model'
import { Right } from '../../../interfaces/permissions'
import { hasPermission } from '../utils'

export const isOwner = (
  rights: Right,
  organizationId: OrganizationModel['id'],
  projectId: ProjectModel['id']
): boolean => {
  return (
    hasPermission(rights.permissions, 'projects', 'delete_project', projectId) ||
    hasPermission(rights.permissions, 'organizations', 'delete_project', organizationId) ||
    hasPermission(rights.permissions, 'projects', 'delete_project')
  )
}
