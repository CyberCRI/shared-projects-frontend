import { Right } from "../../interfaces/permissions";
import { PermissionType } from "../../models/permissions.model";
import { Roles } from "../../models/types";

export function hasPermission(
  permissions: Right["permissions"],
  app: "organizations" | "projects" | "accounts" | "peoplegroup",
  permissionName: PermissionType,
  // identification is primarykey of objects (number or slug)
  // or can be a Roles like "viewver"
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  identification: number | string | Roles | null = null,
): boolean {
  let perm = `${app}.${permissionName}`;
  if (
    identification !== null &&
    identification !== undefined &&
    identification !== ""
  ) {
    perm += `.${identification}`;
  }
  return !!permissions[perm];
}

