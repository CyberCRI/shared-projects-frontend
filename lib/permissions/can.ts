import { Right } from "../../interfaces/permissions";
import { OrganizationModel } from "../../models/organization.model";
import { PermissionType } from "../../models/permissions.model";
import { isAdmin } from "./isAdmin";
import { hasPermission } from "./utils";

export const canPermission = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  elementType: 'projects' | 'accounts' | 'peoplegroup',
  elementId: number | string,
  perrmissionName: PermissionType,
): boolean => {
  return (
    isAdmin(rights, organizationId) ||
    // check objects permissions
    hasPermission(rights.permissions, elementType, perrmissionName, elementId) ||
    hasPermission(rights.permissions, elementType, perrmissionName) ||
    // check organizations permissions
    hasPermission(
      rights.permissions,
      "organizations",
      perrmissionName,
      organizationId,
    ) ||
    hasPermission(rights.permissions, "organizations", perrmissionName)
  );
};