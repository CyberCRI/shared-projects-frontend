import { OrganizationModel } from '../../models/organization.model'
import { Right } from '../../interfaces/permissions'
import { isFacilitator } from './isFacilitator'
import { isAdmin } from './isAdmin'

export const isAdminOrFacilitator = (
  rights: Right,
  organizationId: OrganizationModel['id']
): boolean => {
  return isAdmin(rights, organizationId) || isFacilitator(rights, organizationId)
}
