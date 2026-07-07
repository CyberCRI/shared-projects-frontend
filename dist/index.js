// src/lib/collaboratives.ts
var roomKeyFromParams = (params) => {
  const keys = [
    ["Organization", params.organizationId]
  ];
  switch (params.type) {
    case "project-description": {
      keys.push(["Project", params.projectId]);
      break;
    }
    case "project-blog": {
      keys.push(["Project", params.projectId], ["Blog", params.blogId]);
      break;
    }
    case "project-tab": {
      keys.push(["Project", params.projectId], ["Tab", params.tabId]);
      break;
    }
    case "project-tab-item": {
      keys.push(
        ["Project", params.projectId],
        ["Tab", params.tabId],
        ["Item", params.tabItemId]
      );
      break;
    }
    case "project-goal": {
      keys.push(["Project", params.projectId], ["Goal", params.goalId]);
      break;
    }
    default:
      return null;
  }
  return keys.map(([name, value]) => {
    return `${name}(${value})`;
  }).join("::");
};

// src/lib/permissions/utils.ts
function hasPermission(permissions, app, permissionName, identification = null) {
  let perm = `${app}.${permissionName}`;
  if (identification !== null && identification !== void 0 && identification !== "") {
    perm += `.${identification}`;
  }
  return !!permissions[perm];
}

// src/lib/permissions/isSuperAdmin.ts
var isSuperAdmin = (rights) => {
  return rights.roles.includes("superadmins");
};

// src/lib/permissions/isAdmin.ts
var isAdmin = (rights, organizationId) => {
  return !!(isSuperAdmin(rights) || rights.roles.includes(`organization:#${organizationId}:admins`));
};

// src/lib/permissions/isFacilitator.ts
var isFacilitator = (rights, organizationId) => {
  return rights.roles.includes(`organization:#${organizationId}:facilitators`);
};

// src/lib/permissions/isAdminOrFacilitator.ts
var isAdminOrFacilitator = (rights, organizationId) => {
  return isAdmin(rights, organizationId) || isFacilitator(rights, organizationId);
};

// src/lib/permissions/isViewer.ts
var isViewer = (rights, organizationId) => {
  return rights.roles.includes(`organization:#${organizationId}:viewers`);
};

// src/lib/permissions/isUser.ts
var isUser = (rights, organizationId) => {
  return rights.roles.includes(`organization:#${organizationId}:users`);
};

// src/lib/permissions/can.ts
var canPermission = (rights, organizationId, elementType, identification = null, perrmissionName) => {
  return isAdmin(rights, organizationId) || // check objects permissions
  hasPermission(
    rights.permissions,
    elementType,
    perrmissionName,
    identification
  ) || hasPermission(rights.permissions, elementType, perrmissionName) || // check organizations permissions
  hasPermission(
    rights.permissions,
    "organizations",
    perrmissionName,
    organizationId
  ) || hasPermission(rights.permissions, "organizations", perrmissionName);
};

// src/lib/permissions/projects/isOwner.ts
var isOwner = (rights, organizationId, projectId) => {
  return hasPermission(
    rights.permissions,
    "projects",
    "delete_project",
    projectId
  ) || hasPermission(
    rights.permissions,
    "organizations",
    "delete_project",
    organizationId
  ) || hasPermission(rights.permissions, "projects", "delete_project");
};

// src/lib/permissions/projects/isMember.ts
var isMember = (rights, organizationId, projectId) => {
  return isOwner(rights, organizationId, projectId) || isViewer(rights, organizationId) || isFacilitator(rights, organizationId);
};

// src/lib/permissions/projects/can.ts
var canPermissionProject = (rights, organizationId, projectId, perrmissionName) => {
  return canPermission(rights, organizationId, "projects", projectId, perrmissionName);
};
var canCreateProject = (rights, organizationId) => {
  return isViewer(rights, organizationId);
};
var canEditProject = (rights, organizationId, projectId) => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "change_project"
  );
};
var canDeleteProject = (rights, organizationId, projectId) => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "delete_project"
  );
};
var canCreateReview = (rights, organizationId, projectId) => {
  return canPermissionProject(rights, organizationId, projectId, "add_review");
};
var canEditReview = (rights, organizationId, projectId) => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "change_review"
  );
};
var canDeleteReview = (rights, organizationId, projectId) => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "delete_review"
  );
};
var canCreateComment = (rights, organizationId, projectId) => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "delete_comment"
  );
};
var canEditComment = (rights, organizationId, projectId) => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "change_comment"
  );
};
var canDeleteComment = (rights, organizationId, projectId) => {
  return canPermissionProject(
    rights,
    organizationId,
    projectId,
    "delete_comment"
  );
};

// src/lib/permissions/groups/can.ts
var canCreateGroup = (rights, organizationId) => {
  return isAdmin(rights, organizationId) || hasPermission(rights.permissions, "peoplegroup", "add_peoplegroup") || hasPermission(
    rights.permissions,
    "organizations",
    "add_peoplegroup",
    organizationId
  ) || hasPermission(rights.permissions, "organizations", "add_peoplegroup");
};
var canEditGroup = (rights, organizationId, groupId) => {
  return isAdmin(rights, organizationId) || hasPermission(
    rights.permissions,
    "peoplegroup",
    "change_peoplegroup",
    groupId
  ) || hasPermission(rights.permissions, "peoplegroup", "change_peoplegroup") || hasPermission(
    rights.permissions,
    "organizations",
    "change_peoplegroup",
    organizationId
  ) || hasPermission(rights.permissions, "organizations", "change_peoplegroup");
};

// src/lib/permissions/user/can.ts
var canEditUser = (rights, organizationId, userId) => {
  return isAdmin(rights, organizationId);
};

// src/lib/permissions/news/can.ts
var canCreateNews = (rights, organizationId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
var canEditNews = (rights, organizationId, newsId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
var canDeleteNews = (rights, organizationId, newsId) => {
  return isAdminOrFacilitator(rights, organizationId);
};

// src/lib/permissions/event/can.ts
var canCreateEvent = (rights, organizationId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
var canEditEvent = (rights, organizationId, eventId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
var canDeleteEvent = (rights, organizationId, eventId) => {
  return isAdminOrFacilitator(rights, organizationId);
};

// src/lib/permissions/instruction/can.ts
var canCreateInstruction = (rights, organizationId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
var canEditInstruction = (rights, organizationId, instructionId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
var canDeleteInstruction = (rights, organizationId, instructionId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
export {
  canCreateComment,
  canCreateEvent,
  canCreateGroup,
  canCreateInstruction,
  canCreateNews,
  canCreateProject,
  canCreateReview,
  canDeleteComment,
  canDeleteEvent,
  canDeleteInstruction,
  canDeleteNews,
  canDeleteProject,
  canDeleteReview,
  canEditComment,
  canEditEvent,
  canEditGroup,
  canEditInstruction,
  canEditNews,
  canEditProject,
  canEditReview,
  canEditUser,
  canPermission,
  canPermissionProject,
  hasPermission,
  isAdmin,
  isAdminOrFacilitator,
  isFacilitator,
  isMember,
  isOwner,
  isSuperAdmin,
  isUser,
  isViewer,
  roomKeyFromParams
};
//# sourceMappingURL=index.js.map