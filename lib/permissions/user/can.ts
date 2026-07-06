import { Right } from "../../../interfaces/permissions";
import { OrganizationModel } from "../../../models/organization.model";
import { UserModel } from "../../../models/user.model";
import { isAdmin } from "../isAdmin";

// TODO userId not used
export const canEditUser = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  userId: UserModel['id']
) => {
  return isAdmin(rights, organizationId)
}