import { Right } from "../../interfaces/permissions";
import { OrganizationModel } from "../../models/organization.model";
import { PermissionType } from "../../models/permissions.model";
import { Roles } from "../../models/types";
import { isAdmin } from "./isAdmin";
import { hasPermission } from "./utils";

export const canPermission = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  elementType: "projects" | "accounts" | "peoplegroup",
  // identification is primarykey of objects (number or slug)
  // or can be a Roles like "viewver"
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  identification: number | string | Roles | null = null,
  perrmissionName: PermissionType,
): boolean => {
  return (
    isAdmin(rights, organizationId) ||
    // check objects permissions
    hasPermission(
      rights.permissions,
      elementType,
      perrmissionName,
      identification,
    ) ||
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