import { Right } from '../../interfaces'
import { UserModel } from '../../models'

/**
 * Generate User rights from usermodels
 *
 * @constant
 * @name userRights
 * @kind variable
 * @type {<U extends Pick<UserModel, "permissions" | "roles">>(user: U) => Right}
 * @exports
 */
export const userRights = <U extends Pick<UserModel, 'permissions' | 'roles'>>(user: U): Right => {
  const rawPermissions = user.permissions

  const permissions: Right['permissions'] = {}
  for (const permission of rawPermissions) {
    permissions[permission] = true
  }

  return {
    roles: user.roles,
    permissions,
  }
}
