import { OrganizationModel } from '../../models/organization.model'
import { Right } from '../../interfaces/permissions'
import { isSuperAdmin } from './isSuperAdmin'

export const isAdmin = (rights: Right, organizationId: OrganizationModel['id']): boolean => {
  return !!(isSuperAdmin(rights) || rights.roles.includes(`organization:#${organizationId}:admins`))
}
