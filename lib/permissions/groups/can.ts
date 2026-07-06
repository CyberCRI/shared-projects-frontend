import { Right } from "../../../interfaces/permissions";
import { OrganizationModel } from "../../../models/organization.model";
import { hasPermission } from "../utils";
import { isAdmin } from "../isAdmin";
import { PeopleGroupModel } from "../../../models/people-group.model";

export const canCreateGroup = (
  rights: Right,
  organizationId: OrganizationModel["id"],
): boolean => {
  return (
    isAdmin(rights, organizationId) ||
    hasPermission(rights.permissions, "peoplegroup", "add_peoplegroup") ||
    hasPermission(
      rights.permissions,
      "organizations",
      "add_peoplegroup",
      organizationId,
    ) ||
    hasPermission(rights.permissions, "organizations", "add_peoplegroup")
  );
};

export const canEditGroup = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  groupId: PeopleGroupModel['id']
): boolean => {
  return (
    isAdmin(rights, organizationId) ||
    hasPermission(
      rights.permissions,
      "peoplegroup",
      "change_peoplegroup",
      groupId,
    ) ||
    hasPermission(rights.permissions, "peoplegroup", "change_peoplegroup") ||
    hasPermission(
      rights.permissions,
      "organizations",
      "change_peoplegroup",
      organizationId,
    ) ||
    hasPermission(rights.permissions, "organizations", "change_peoplegroup")
  );
};