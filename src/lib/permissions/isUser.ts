import { OrganizationModel } from '../../models/organization.model'
import { Right } from '../../interfaces/permissions'

export const isUser = (rights: Right, organizationId: OrganizationModel['id']): boolean => {
  return rights.roles.includes(`organization:#${organizationId}:users`)
}
