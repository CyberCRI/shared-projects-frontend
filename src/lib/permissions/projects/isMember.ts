import { OrganizationModel } from '../../../models/organization.model'
import { ProjectModel } from '../../../models/project.model'
import { Right } from '../../../interfaces/permissions'
import { isFacilitator } from '../isFacilitator'
import { isViewer } from '../isViewer'
import { isOwner } from './isOwner'

export const isMember = (
  rights: Right,
  organizationId: OrganizationModel['id'],
  projectId: ProjectModel['id']
): boolean => {
  return (
    isOwner(rights, organizationId, projectId) ||
    isViewer(rights, organizationId) ||
    isFacilitator(rights, organizationId)
  )
}
