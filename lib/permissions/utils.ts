import { Right } from "../../interfaces/permissions";
import { PermissionType } from "../../models/permissions.model";

export function hasPermission(
  permissions: Right["permissions"],
  app: "organizations" | "projects" | "accounts" | "peoplegroup",
  permissionName: PermissionType,
  pk: string | number | null = null,
): boolean {

  let perm = `${app}.${permissionName}`;
  if (pk) {
    perm += `.${pk}`
  }
  return !!permissions[perm]
}

