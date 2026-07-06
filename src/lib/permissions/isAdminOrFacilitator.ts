import {Right} from "../../interfaces/permissions"
import { OrganizationModel } from "../../models/organization.model";
import { isAdmin } from "./isAdmin";
import { isFacilitator } from "./isFacilitator";


export const isAdminOrFacilitator = (rights: Right, organizationId: OrganizationModel['id']): boolean => {
  return isAdmin(rights, organizationId) || isFacilitator(rights, organizationId)
};
