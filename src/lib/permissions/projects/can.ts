import { Right } from "../../../interfaces/permissions";
import { OrganizationModel } from "../../../models/organization.model";
import { ProjectModel } from "../../../models/project.model";
import { isViewer } from "../isViewer";
import { canPermission } from "../can";
import { PermissionType } from "../../../models/permissions.model";

export const canPermissionProject = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  projectId: ProjectModel["id"],
  perrmissionName: PermissionType,
): boolean => {
  return canPermission(rights, organizationId, "projects", projectId, perrmissionName)
};

export const canCreateProject = (
  rights: Right,
  organizationId: OrganizationModel["id"],
): boolean => {
  return isViewer(rights, organizationId);
};

export const canEditProject = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  projectId: ProjectModel["id"],
): boolean => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "change_project",
  );
};

export const canDeleteProject = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  projectId: ProjectModel["id"],
): boolean => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "delete_project",
  );
};

export const canCreateReview = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  projectId: ProjectModel["id"],
): boolean => {
  return canPermissionProject(rights, organizationId, projectId, "add_review");
};

export const canEditReview = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  projectId: ProjectModel["id"],
): boolean => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "change_review",
  );
};

export const canDeleteReview = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  projectId: ProjectModel["id"],
): boolean => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "delete_review",
  );
};

export const canCreateComment = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  projectId: ProjectModel["id"],
): boolean => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "delete_comment",
  );
};


export const canEditComment = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  projectId: ProjectModel["id"],
): boolean => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "change_comment",
  );
};


export const canDeleteComment = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  projectId: ProjectModel["id"],
): boolean => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "delete_comment",
  );
};