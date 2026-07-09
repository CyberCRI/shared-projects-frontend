import { OrganizationModel } from '../../models/organization.model'
import { Right } from '../../interfaces/permissions'

export const isViewer = (rights: Right, organizationId: OrganizationModel['id']): boolean => {
  return rights.roles.includes(`organization:#${organizationId}:viewers`)
}
