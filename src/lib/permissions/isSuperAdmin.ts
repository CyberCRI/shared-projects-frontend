import { Right } from '../../interfaces/permissions'

export const isSuperAdmin = (rights: Right): boolean => {
  return rights.roles.includes('superadmins')
}
