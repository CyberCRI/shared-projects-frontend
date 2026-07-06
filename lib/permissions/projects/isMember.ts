import {Right} from "../../../interfaces/permissions"
import { OrganizationModel } from "../../../models/organization.model";
import { isFacilitator } from "../isFacilitator";
import { isViewer } from "../isViewer";
import { isOwner } from "./isOwner";
import { ProjectModel } from "../../../models/project.model";

export const isMember = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  projectId: ProjectModel['id']
): boolean => {
  return (
    isOwner(rights, organizationId, projectId) ||
    isViewer(rights, organizationId) ||
    isFacilitator(rights, organizationId)
  );
};
