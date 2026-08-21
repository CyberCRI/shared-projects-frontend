// src/apis/client.ts
import { $fetch } from "ofetch";

// node_modules/es-toolkit/dist/predicate/isPlainObject.mjs
function isPlainObject(value) {
  if (!value || typeof value !== "object") return false;
  const proto = Object.getPrototypeOf(value);
  if (!(proto === null || proto === Object.prototype || Object.getPrototypeOf(proto) === null)) return false;
  return Object.prototype.toString.call(value) === "[object Object]";
}

// node_modules/es-toolkit/dist/_internal/isUnsafeProperty.mjs
function isUnsafeProperty(key) {
  return key === "__proto__";
}

// node_modules/es-toolkit/dist/object/merge.mjs
function merge(target, source) {
  const sourceKeys = Object.keys(source);
  for (let i = 0; i < sourceKeys.length; i++) {
    const key = sourceKeys[i];
    if (isUnsafeProperty(key)) continue;
    const sourceValue = source[key];
    const targetValue = target[key];
    if (isMergeableValue(sourceValue) && isMergeableValue(targetValue)) target[key] = merge(targetValue, sourceValue);
    else if (Array.isArray(sourceValue)) target[key] = merge([], sourceValue);
    else if (isPlainObject(sourceValue)) target[key] = merge({}, sourceValue);
    else if (targetValue === void 0 || sourceValue !== void 0) target[key] = sourceValue;
  }
  return target;
}
function isMergeableValue(value) {
  return isPlainObject(value) || Array.isArray(value);
}

// src/apis/client.ts
var $$defaultOptions = () => ({});
var $$fetcher = $fetch;
var configureClientAPI = (fetcher) => {
  $$fetcher = fetcher;
};
var configureOptionsAPI = (callback) => {
  $$defaultOptions = callback;
};
var clientAPI = (url, options = {}) => {
  const finalOptions = merge($$defaultOptions(), options || {});
  return $$fetcher(url, finalOptions);
};

// src/apis/announcements.service.ts
async function getAnnouncements(config = {}) {
  return await clientAPI(`announcement/`, config);
}
async function getProjectAnnouncements(projectId, config = {}) {
  return await clientAPI(
    `project/${projectId}/announcement/`,
    config
  );
}
async function postAnnouncement(projectId, body, config = {}) {
  return await clientAPI(`project/${projectId}/announcement/`, {
    body,
    method: "POST",
    ...config
  });
}
async function patchAnnouncement(projectId, announcementId, body, config = {}) {
  return await clientAPI(
    `project/${projectId}/announcement/${announcementId}/`,
    {
      body,
      method: "PATCH",
      ...config
    }
  );
}
async function deleteAnnouncement(projectId, announcementId, config = {}) {
  await clientAPI(`project/${projectId}/announcement/${announcementId}/`, {
    method: "DELETE",
    ...config
  });
}
async function applyAnnouncement(projectId, announcementId, body, config = {}) {
  await clientAPI(`project/${projectId}/announcement/${announcementId}/apply/`, {
    ...config,
    body,
    method: "POST"
  });
}

// src/apis/attachment-files.service.ts
async function getProjectAttachmentFiles(projectId, config = {}) {
  return await clientAPI(
    `project/${projectId}/file/`,
    config
  );
}
async function getProjectAttachmentFile(body) {
  return await clientAPI(`project/${body.project_id}/file/${body.file}`, {});
}
async function postProjectAttachmentFiles(projectId, body) {
  return await clientAPI(`project/${projectId}/file/`, {
    body,
    method: "POST"
  });
}
async function patchProjectAttachmentFile(projectId, fileId, body) {
  return await clientAPI(`project/${projectId}/file/${fileId}/`, {
    body,
    method: "PATCH"
  });
}
async function deleteProjectAttachmentFile(projectId, fileId) {
  await clientAPI(`project/${projectId}/file/${fileId}/`, { method: "DELETE" });
}
function getUserAttachmentFile(userId, options) {
  return clientAPI(`user/${userId}/file/`, options);
}
async function postUserAttachmentFile(userId, data) {
  const body = new FormData();
  body.set("description", data.description);
  body.set("title", data.title);
  if (data.file) {
    body.set("file", data.file, data.file.name);
    body.set("mime", data.file.type || "file");
  }
  return await clientAPI(`user/${userId}/file/`, { body, method: "POST" });
}
async function patchUserAttachmentFile(userId, fileId, data) {
  const body = new FormData();
  if (data.description) {
    body.set("description", data.description);
  }
  if (data.title) {
    body.set("title", data.title);
  }
  return await clientAPI(`user/${userId}/file/${fileId}/`, {
    body,
    method: "PATCH"
  });
}
async function deleteUserAttachmentFile(userId, fileId) {
  await clientAPI(`user/${userId}/file/${fileId}/`, { method: "DELETE" });
}

// src/apis/attachment-links.service.ts
async function getProjectAttachmentLinks(projectId, config = {}) {
  return await clientAPI(
    `project/${projectId}/link/`,
    config
  );
}
async function getProjectAttachmentLink(body) {
  return await clientAPI(
    `project/${body.project_id}/link/${body.link_id}/`,
    {}
  );
}
async function postProjectAttachmentLinks(projectId, body) {
  return await clientAPI(`project/${projectId}/link/`, {
    body,
    method: "POST"
  });
}
async function patchProjectAttachmentLink(projectId, linkId, body) {
  return await clientAPI(`project/${projectId}/link/${linkId}/`, {
    body,
    method: "PATCH"
  });
}
async function deleteProjectAttachmentLink(projectId, linkId) {
  await clientAPI(`project/${projectId}/link/${linkId}/`, { method: "DELETE" });
}
function getUserAttachmentLink(userId, options = {}) {
  return clientAPI(`user/${userId}/link/`, options);
}
async function postUserAttachmentLink(userId, body, options = {}) {
  return await clientAPI(`user/${userId}/link/`, { body, method: "POST" });
}
async function patchUserAttachmentLink(userId, linkId, body) {
  return await clientAPI(`user/${userId}/link/${linkId}/`, {
    body,
    method: "PATCH"
  });
}
async function deleteUserAttachmentLink(userId, linkId) {
  await clientAPI(`user/${userId}/link/${linkId}/`, { method: "DELETE" });
}

// src/apis/blogentries.service.ts
async function getBlogEntries(projectId, config = {}) {
  return await clientAPI(
    `project/${projectId}/blog-entry/`,
    config
  );
}
async function getBlogEntry(projectId, blogEntryId, config = {}) {
  return await clientAPI(`project/${projectId}/blog-entry/${blogEntryId}/`, config);
}
async function postBlogEntry(projectId, body) {
  return await clientAPI(`project/${projectId}/blog-entry/`, {
    body,
    method: "POST"
  });
}
async function patchBlogEntry(projectId, blogEntryId, body) {
  return await clientAPI(`project/${projectId}/blog-entry/${blogEntryId}/`, {
    body,
    method: "PATCH"
  });
}
async function deleteBlogEntry(projectId, blogEntryId) {
  await clientAPI(`project/${projectId}/blog-entry/${blogEntryId}/`, {
    method: "DELETE"
  });
}
async function postBlogEntryImage(projectId, body, config = {}) {
  return await clientAPI(`project/${projectId}/blog-entry-image/`, {
    ...config,
    body,
    method: "POST"
  });
}

// src/apis/comments.service.ts
async function getComments(projectId, config = {}) {
  return await clientAPI(`project/${projectId}/comment/`, config);
}
async function postComment(projectId, comment, config = {}) {
  return await clientAPI(`project/${projectId}/comment/`, {
    ...config,
    body: comment,
    method: "POST"
  });
}
async function getComment(projectId, commentId, config = {}) {
  return await clientAPI(`project/${projectId}/comment/${commentId}/`, config);
}
async function patchComment(projectId, commentId, body, config = {}) {
  return await clientAPI(`project/${projectId}/comment/${commentId}/`, {
    ...config,
    body,
    method: "PATCH"
  });
}
async function deleteComment(projectId, commentId, config = {}) {
  await clientAPI(`project/${projectId}/comment/${commentId}/`, {
    ...config,
    method: "DELETE"
  });
}
async function postCommentImage(projectId, body, config = {}) {
  return await clientAPI(`project/${projectId}/comment-image/`, {
    ...config,
    body,
    method: "POST"
  });
}

// src/apis/crisalid.service.ts
async function getOwnResearchDocument(organisationCode, researchId, ResearcherdocumentType, config = {}) {
  return await clientAPI(
    `crisalid/organization/${organisationCode}/researcher/${researchId}/${ResearcherdocumentType}/`,
    config
  );
}
async function getGroupResearchDocument(organisationCode, groupId, ResearcherdocumentType, config = {}) {
  return await clientAPI(
    `crisalid/organization/${organisationCode}/people-group/${groupId}/${ResearcherdocumentType}/`,
    config
  );
}
async function getOwnResearchDocumentAnalytics(organisationCode, researchId, ResearcherdocumentType, config = {}) {
  return await clientAPI(
    `crisalid/organization/${organisationCode}/researcher/${researchId}/${ResearcherdocumentType}/analytics/`,
    config
  );
}
async function getGroupResearchDocumentAnalytics(organisationCode, groupId, ResearcherdocumentType, config = {}) {
  return await clientAPI(
    `crisalid/organization/${organisationCode}/people-group/${groupId}/${ResearcherdocumentType}/analytics/`,
    config
  );
}
async function getResearchDocumentSimilars(organisationCode, documentId, config = {}) {
  return await clientAPI(
    `crisalid/organization/${organisationCode}/document/${documentId}/similars/`,
    config
  );
}
async function searchResearcher(organizationCode, config = {}) {
  return clientAPI(
    `crisalid/organization/${organizationCode}/researcher/search/`,
    config
  );
}

// src/apis/event.service.ts
async function getAllEvents(organizationCode, config) {
  return await clientAPI(
    `organization/${organizationCode}/event/`,
    config
  );
}
async function getEvent(organizationCode, idOrSlug, config) {
  return await clientAPI(`organization/${organizationCode}/event/${idOrSlug}/`, config);
}
async function createEvent(organizationCode, body) {
  return await clientAPI(`organization/${organizationCode}/event/`, {
    body,
    method: "POST"
  });
}
async function putEvent(organizationCode, idOrSlug, body) {
  return await clientAPI(`organization/${organizationCode}/event/${idOrSlug}/`, {
    body,
    method: "PUT"
  });
}
async function patchEvent(organizationCode, idOrSlug, body) {
  return await clientAPI(`organization/${organizationCode}/event/${idOrSlug}/`, {
    body,
    method: "PATCH"
  });
}
async function deleteEvent(organizationCode, idOrSlug) {
  await clientAPI(`organization/${organizationCode}/event/${idOrSlug}/`, {
    method: "DELETE"
  });
}

// src/apis/follows.service.ts
async function getProjectFollows(body) {
  return await clientAPI(`project/${body.project_id}/follow/`, {});
}
async function getUserFollows(body, params) {
  return await clientAPI(`user/${body.follower_id}/follow/`, { params });
}
async function postFollow(follow) {
  return await clientAPI(`project/${follow.project_id}/follow/`, {
    body: follow,
    method: "POST"
  });
}
async function postFollowMany({ id, body }) {
  return await clientAPI(`user/${id}/follow/follow-many/`, { body, method: "POST" });
}
async function deleteFollow(follow) {
  await clientAPI(`project/${follow.project_id}/follow/${follow.follower_id}/`, {
    method: "DELETE"
  });
}

// src/apis/goals.service.ts
async function getProjectGoals(projectId, config = {}) {
  return await clientAPI(`project/${projectId}/goal/`, config);
}
async function getProjectGoal(projectId, goalId, config = {}) {
  return await clientAPI(`project/${projectId}/goal/${goalId}/`, config);
}
async function createProjectGoal(projectId, body, config = {}) {
  return await clientAPI(`project/${projectId}/goal/`, {
    ...config,
    body,
    method: "POST"
  });
}
async function patchProjectGoal(projectId, goalId, body, config = {}) {
  return await clientAPI(`project/${projectId}/goal/${goalId}/`, {
    ...config,
    body,
    method: "PATCH"
  });
}
async function deleteProjectGoal(projectId, goalId, config = {}) {
  await clientAPI(`project/${projectId}/goal/${goalId}/`, {
    ...config,
    method: "DELETE"
  });
}

// src/apis/google.service.ts
async function getOrgUnits(config = {}) {
  return await clientAPI(`google/org-units/`, config);
}

// src/apis/groups.service.ts
async function getHierarchyGroups(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-groups-hierarchy/`,
    config
  );
}
async function postGroup(organizationCode, groupData) {
  return await clientAPI(`organization/${organizationCode}/people-group/`, {
    body: groupData,
    method: "POST"
  });
}
async function addParentGroup(organizationCode, groupId, body) {
  return await clientAPI(`organization/${organizationCode}/people-group/${groupId}/`, {
    body,
    method: "PATCH"
  });
}
function getGroup(organizationCode, groupId, config = {}) {
  return clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/`,
    config
  );
}
async function patchGroup(organizationCode, groupId, groupData) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/`,
    {
      body: groupData,
      method: "PATCH"
    }
  );
}
async function deleteGroup(organizationCode, groupId) {
  await clientAPI(`organization/${organizationCode}/people-group/${groupId}/`, {
    method: "DELETE"
  });
}
async function getGroupMember(organizationCode, groupId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/member/`,
    config
  );
}
async function postGroupMembers(organizationCode, groupId, body) {
  return await clientAPI(`organization/${organizationCode}/people-group/${groupId}/member/add/`, {
    body,
    method: "POST"
  });
}
async function removeGroupMember(organizationCode, groupId, body) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/member/remove/`,
    {
      body,
      method: "POST"
    }
  );
}
async function getGroupProject(organizationCode, groupId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/project/`,
    config
  );
}
async function postGroupProjects(organizationCode, groupId, projectsData) {
  return await clientAPI(`organization/${organizationCode}/people-group/${groupId}/project/add/`, {
    body: projectsData,
    method: "POST"
  });
}
async function removeGroupProject(organizationCode, groupId, projectsData) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/project/remove/`,
    {
      body: projectsData,
      method: "POST"
    }
  );
}
async function postGroupHeader(organizationCode, groupId, body, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/header/`,
    {
      ...config,
      body,
      method: "POST"
    }
  );
}
async function patchGroupHeader(organizationCode, groupId, body, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/header/`,
    {
      ...config,
      body,
      method: "PATCH"
    }
  );
}
async function deleteGroupHeader(organizationCode, groupId, imageId, config = {}) {
  await clientAPI(`organization/${organizationCode}/people-group/${groupId}/header/${imageId}/`, {
    ...config,
    method: "DELETE"
  });
}
async function getGroupSimilar(organizationCode, groupId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/similars/`,
    config
  );
}
async function getSubGroup(organizationCode, groupId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/subgroups/`,
    config
  );
}
async function getGroupAllLocations(organizationCode, groupId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/all-locations/`,
    config
  );
}
async function getGroupLocation(organizationCode, groupId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/locations/`,
    config
  );
}
async function removeGroupLocation(organizationCode, groupId, locationId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/locations/${locationId}/`,
    {
      ...config,
      method: "DELETE"
    }
  );
}
async function patchGroupLocation(organizationCode, groupId, locationId, payload, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/locations/${locationId}/`,
    {
      ...config,
      body: payload,
      method: "PATCH"
    }
  );
}
async function postGroupLocation(organizationCode, groupId, payload, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/locations/`,
    {
      ...config,
      body: payload,
      method: "POST"
    }
  );
}
function getGroupGallery(organizationCode, groupId, config = {}) {
  return clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/gallery/`,
    {
      ...config
    }
  );
}
async function deleteGroupGallery(organizationCode, groupId, imageId, config = {}) {
  await clientAPI(`organization/${organizationCode}/people-group/${groupId}/gallery/${imageId}/`, {
    ...config,
    method: "DELETE"
  });
}
function postGroupGallery(organizationCode, groupId, body, config = {}) {
  return clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/gallery/`,
    {
      ...config,
      body,
      method: "POST"
    }
  );
}
async function getGroupNews(organizationCode, groupId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/news/`,
    {
      ...config,
      method: "GET"
    }
  );
}
async function getGroupEvent(organizationCode, groupId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/event/`,
    {
      ...config,
      method: "GET"
    }
  );
}

// src/apis/instruction.service.ts
async function getAllInstructions(organizationCode, config) {
  return await clientAPI(
    `organization/${organizationCode}/instruction/`,
    config
  );
}
async function getInstruction(organizationCode, idOrSlug, config) {
  return await clientAPI(
    `organization/${organizationCode}/instruction/${idOrSlug}/`,
    config
  );
}
async function createInstruction(organizationCode, body) {
  return await clientAPI(`organization/${organizationCode}/instruction/`, {
    body,
    method: "POST"
  });
}
async function putInstruction(organizationCode, idOrSlug, body) {
  return await clientAPI(
    `organization/${organizationCode}/instruction/${idOrSlug}/`,
    { body, method: "PUT" }
  );
}
async function patchInstruction(organizationCode, idOrSlug, body) {
  return await clientAPI(
    `organization/${organizationCode}/instruction/${idOrSlug}/`,
    {
      body,
      method: "PATCH"
    }
  );
}
async function deleteInstruction(organizationCode, idOrSlug) {
  await clientAPI(`organization/${organizationCode}/instruction/${idOrSlug}/`, {
    method: "DELETE"
  });
}

// src/apis/invitations.service.ts
async function getInvitation(organizationCode, token, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/invitation/${token}/`,
    config
  );
}
async function getInvitations(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/invitation/`,
    config
  );
}
async function postInvitation(organizationCode, formData, config = {}) {
  return await clientAPI(`organization/${organizationCode}/invitation/`, {
    ...config,
    body: formData,
    method: "POST"
  });
}
async function deleteInvitation(organizationCode, id, config = {}) {
  await clientAPI(`organization/${organizationCode}/invitation/${id}/`, {
    ...config,
    method: "DELETE"
  });
}

// src/apis/locations.service.ts
async function getProjectLocations(projectId, config = {}) {
  return await clientAPI(`project/${projectId}/location/`, config);
}
async function getProjectLocation(projectId, locationId, config = {}) {
  return await clientAPI(`project/${projectId}/location/${locationId}/`, config);
}
async function postLocations(projectId, body) {
  return await clientAPI(`project/${projectId}/location/`, {
    body,
    method: "POST"
  });
}
async function patchLocation(projectId, locationId, body) {
  return await clientAPI(`project/${projectId}/location/${locationId}/`, {
    body,
    method: "PATCH"
  });
}
async function deleteLocation(projectId, locationId) {
  await clientAPI(`project/${projectId}/location/${locationId}/`, {
    method: "DELETE"
  });
}
async function getLocations(organizationCode, config = {}) {
  return await clientAPI(`organization/${organizationCode}/location/`, config);
}

// src/apis/mentorship.service.ts
async function getUserMentorship(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/mentoring/`,
    config
  );
}
async function getMentorshipDetails(organizationCode, mentorshipId) {
  return await clientAPI(`organization/${organizationCode}/mentoring/${mentorshipId}/`);
}
async function offerMentorship(organizationCode, skill, payload) {
  return await clientAPI(
    `organization/${organizationCode}/mentoring/contact-mentoree/${skill.id}/`,
    {
      body: payload,
      method: "POST"
    }
  );
}
async function askMentorship(organizationCode, skill, payload) {
  return await clientAPI(`organization/${organizationCode}/mentoring/contact-mentor/${skill.id}/`, {
    body: payload,
    method: "POST"
  });
}
async function respondMentorship(organizationCode, mentorshipId, payload) {
  return await clientAPI(`organization/${organizationCode}/mentoring/${mentorshipId}/respond/`, {
    body: payload,
    method: "POST"
  });
}

// src/apis/newsfeed.service.ts
async function getNewsfeed(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/newsfeed/`,
    config
  );
}

// src/apis/news.service.ts
async function getAllNews(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/news/`,
    config
  );
}
async function getNews(organizationCode, newsId, config = {}) {
  return await clientAPI(`organization/${organizationCode}/news/${newsId}/`, config);
}
async function createNews(organizationCode, body, config = {}) {
  return await clientAPI(`organization/${organizationCode}/news/`, {
    ...config,
    body,
    method: "POST"
  });
}
async function putNews(organizationCode, newsId, body, config = {}) {
  return await clientAPI(`organization/${organizationCode}/news/${newsId}/`, {
    ...config,
    body,
    method: "PUT"
  });
}
async function patchNews(organizationCode, newsId, body, config = {}) {
  return await clientAPI(`organization/${organizationCode}/news/${newsId}/`, {
    ...config,
    body,
    method: "PATCH"
  });
}
async function deleteNews(organizationCode, newsId, config = {}) {
  await clientAPI(`organization/${organizationCode}/news/${newsId}/`, {
    ...config,
    method: "DELETE"
  });
}
async function postNewsHeader(organizationCode, newsId, body, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/news/${newsId}/header/`,
    {
      ...config,
      body,
      method: "POST"
    }
  );
}
async function patchNewsHeader(organizationCode, newsId, imageId, body, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/news/${newsId}/header/${imageId}/`,
    {
      ...config,
      body,
      method: "PATCH"
    }
  );
}
async function deleteNewsHeader(organizationCode, newsId, imageId, config = {}) {
  await clientAPI(`organization/${organizationCode}/news/${newsId}/header/${imageId}/`, {
    ...config,
    method: "DELETE"
  });
}

// src/apis/notifications.service.ts
async function getNotifications(params, organisationCode) {
  return await clientAPI(
    `organization/${organisationCode}/notification/`,
    { params }
  );
}
async function getUserNotificationSettings(userId, config = {}) {
  return await clientAPI(`notifications-setting/${userId}/`, config);
}
async function patchUserNotificationSettings(userId, body, config = {}) {
  return await clientAPI(`notifications-setting/${userId}/`, {
    ...config,
    body,
    method: "PATCH"
  });
}

// src/apis/organization-files.service.ts
async function getOrganizationFiles(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/file/`,
    config
  );
}
async function getOrganizationFile(organizationCode, attachmentId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/file/${attachmentId}`,
    config
  );
}
async function postOrganizationFiles(organizationCode, body) {
  return await clientAPI(`organization/${organizationCode}/file/`, {
    body,
    method: "POST"
  });
}
async function patchOrganizationFile(organizationCode, attachmentId, body) {
  return await clientAPI(
    `organization/${organizationCode}/file/${attachmentId}/`,
    {
      body,
      method: "PATCH"
    }
  );
}
async function deleteOrganizationFile(organizationCode, attachmentId) {
  await clientAPI(`organization/${organizationCode}/file/${attachmentId}/`, {
    method: "DELETE"
  });
}

// src/apis/organizations.service.ts
async function patchOrganization(organisationCode, organization) {
  return await clientAPI(`organization/${organisationCode}/`, {
    body: organization,
    method: "PATCH"
  });
}
async function getOrganizationByCode(organisationCode, config = {}) {
  return await clientAPI(`organization/${organisationCode}/`, config);
}
async function getOrganizations(config = {}) {
  return await clientAPI(`organization/`, config);
}
async function postOrganisationBanner({
  code,
  body
}) {
  return await clientAPI(`organization/${code}/banner/`, {
    body,
    method: "POST"
  });
}
async function patchOrganisationBanner(organisationCode, imageId, body, config = {}) {
  return await clientAPI(`organization/${organisationCode}/banner/${imageId}/`, {
    ...config,
    body,
    method: "PATCH"
  });
}
async function deleteOrganisationBanner(organizationCode, imageId, config = {}) {
  await clientAPI(`organization/${organizationCode}/banner/${imageId}/`, {
    ...config,
    method: "DELETE"
  });
}
async function postOrganisationLogo({
  code,
  body
}) {
  return await clientAPI(`organization/${code}/logo/`, { body, method: "POST" });
}
async function deleteOrganisationLogo(organizationCode, imageId, config = {}) {
  await clientAPI(`organization/${organizationCode}/logo/${imageId}/`, {
    ...config,
    method: "DELETE"
  });
}
async function addOrgMember({ org_id, body }) {
  return await clientAPI(`organization/${org_id}/member/add/`, { body, method: "POST" });
}
async function removeOrgMember({
  org_id,
  body
}) {
  return await clientAPI(`organization/${org_id}/member/remove/`, { body, method: "POST" });
}
async function postAccessRequest(organizationCode, body) {
  return await clientAPI(`organization/${organizationCode}/access-request/`, {
    body,
    method: "POST"
  });
}
async function getAccessRequests(organizationCode, config) {
  return await clientAPI(
    `organization/${organizationCode}/access-request/`,
    config
  );
}
async function declineAccessRequest(organizationCode, params) {
  return await clientAPI(
    `organization/${organizationCode}/access-request/decline/`,
    {
      body: params,
      method: "POST"
    }
  );
}
async function acceptAccessRequest(organizationCode, params) {
  return await clientAPI(`organization/${organizationCode}/access-request/accept/`, {
    body: params,
    method: "POST"
  });
}
async function getFeaturedProjects(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/featured-project/`,
    config
  );
}
async function addFeaturedProject(organizationCode, body, config = {}) {
  return await clientAPI(`organization/${organizationCode}/featured-project/add/`, {
    method: "POST",
    body,
    ...config
  });
}
async function removeFeaturedProject(organizationCode, body, config = {}) {
  await clientAPI(`organization/${organizationCode}/featured-project/remove/`, {
    method: "POST",
    body,
    ...config
  });
}
async function postOrganizationImage({
  orgCode,
  body
}) {
  return await clientAPI(`organization/${orgCode}/image/`, {
    body,
    method: "POST"
  });
}
async function patchTermsAndConditions(organization, content, config = {}) {
  return await clientAPI(
    `organization/${organization.code}/terms-and-conditions/${organization.terms_and_conditions?.id}/`,
    {
      ...config,
      body: { content },
      method: "PATCH"
    }
  );
}

// src/apis/project-categories.service.ts
async function getProjectCategory(organizationCode, categoryId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/category/${categoryId}/`,
    config
  );
}
async function createProjectCategory(organizationCode, body, config = {}) {
  return await clientAPI(`organization/${organizationCode}/category/`, {
    ...config,
    body,
    method: "POST"
  });
}
async function putProjectCategory(organizationCode, categoryId, body, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/category/${categoryId}/`,
    {
      ...config,
      body,
      method: "PATCH"
    }
  );
}
async function patchProjectCategory(organizationCode, categoryId, body, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/category/${categoryId}/`,
    {
      ...config,
      body,
      method: "PATCH"
    }
  );
}
async function deleteProjectCategory(organizationCode, categoryId, config = {}) {
  await clientAPI(`organization/${organizationCode}/category/${categoryId}/`, {
    ...config,
    method: "DELETE"
  });
}
async function getAllProjectCategories(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/category/`,
    config
  );
}
async function getRootProjectCategory(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/categories-hierarchy/`,
    config
  );
}
async function getProjectCategoriesHierarchy(organizationCode, categoryId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/category/${categoryId}/hierarchy/`,
    config
  );
}
async function postProjectCategoryBackground(organizationCode, { id, body }, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/category/${id}/background/`,
    {
      ...config,
      body,
      method: "POST"
    }
  );
}
async function patchProjectCategoryBackground(organizationCode, { id, imageId, body }, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/category/${id}/background/${imageId}/`,
    {
      ...config,
      body,
      method: "PATCH"
    }
  );
}
async function deleteProjectCategoryBackground(organizationCode, { category_id, id }, config = {}) {
  await clientAPI(`organization/${organizationCode}/category/${category_id}/background/${id}/`, {
    ...config,
    method: "DELETE"
  });
}
async function getProjectCategoriesFollow(userId, config = {}) {
  return await clientAPI(`user/${userId}/category-follow/`, config);
}
async function postProjectCategoryFollow(userId, category_id, config = {}) {
  return await clientAPI(`user/${userId}/category-follow/`, {
    ...config,
    body: { category_id },
    method: "POST"
  });
}
async function deleteProjectCategoryFollow(userId, category_follow_id, config = {}) {
  await clientAPI(`user/${userId}/category-follow/${category_follow_id}/`, {
    ...config,
    method: "DELETE"
  });
}

// src/apis/project-members.service.ts
async function addProjectMembers(projectId, body, config = {}) {
  await clientAPI(`project/${projectId}/member/add/`, { ...config, body, method: "POST" });
}
async function deleteProjectMembers(projectId, body, config = {}) {
  await clientAPI(`project/${projectId}/member/remove/`, { ...config, body, method: "POST" });
}
async function deleteProjectMembersSelf(projectId, config = {}) {
  await clientAPI(`project/${projectId}/quit/`, { ...config, method: "DELETE" });
}

// src/apis/project-messages.service.ts
async function getProjectMessages(projectId, config = {}) {
  return await clientAPI(
    `project/${projectId}/project-message/`,
    config
  );
}
async function postProjectMessage(projectId, body) {
  return await clientAPI(`project/${projectId}/project-message/`, {
    body,
    method: "POST"
  });
}
async function getProjectMessage(body, config = {}) {
  return await clientAPI(
    `project/${body.project_id}/project-message/${body.project_message_id}/`,
    config
  );
}
async function patchProjectMessage(projectId, messageId, body) {
  return await clientAPI(
    `project/${projectId}/project-message/${messageId}/`,
    {
      body,
      method: "PATCH"
    }
  );
}
async function deleteProjectMessage(projectId, projectMessageId, config = {}) {
  await clientAPI(`project/${projectId}/project-message/${projectMessageId}/`, {
    method: "DELETE",
    ...config
  });
}
async function postProjectMessageImage(projectId, body, config = {}) {
  return await clientAPI(`project/${projectId}/project-message-image/`, {
    body,
    method: "POST",
    ...config
  });
}

// src/apis/projects.service.ts
async function getAllProjects(config = {}) {
  return await clientAPI(`project/`, config);
}
async function getProject(projectSlugOrId, config = {}) {
  return await clientAPI(`project/${projectSlugOrId}/`, config);
}
function postProject(body, config = {}) {
  return clientAPI(`project/`, { ...config, body, method: "POST" });
}
async function patchProject(projectId, project) {
  return await clientAPI(`project/${projectId}/`, { body: project, method: "PATCH" });
}
async function deleteProject(projectId) {
  await clientAPI(`project/${projectId}/`, { method: "DELETE" });
}
async function duplicateProject(projectId) {
  return await clientAPI(`project/${projectId}/duplicate/`, { method: "POST" });
}
async function getLinkedProject(projectId, config = {}) {
  return await clientAPI(
    `project/${projectId}/linked-project/`,
    config
  );
}
async function addLinkedProject(projectId, body) {
  return await clientAPI(`project/${projectId}/linked-project/add-many/`, {
    body,
    method: "POST"
  });
}
async function deleteLinkedProject(projectId, linkedProjectId) {
  await clientAPI(`project/${projectId}/linked-project/${linkedProjectId}/`, {
    method: "DELETE"
  });
}
async function getProjectMembers(projectSlugOrId, config = {}) {
  return await clientAPI(
    `project/${projectSlugOrId}/member/`,
    config
  );
}
async function postProjectImage(projectId, body) {
  return await clientAPI(`project/${projectId}/image/`, { body, method: "POST" });
}
async function postProjectHeader(projectId, body) {
  return await clientAPI(`project/${projectId}/header/`, {
    body,
    method: "POST"
  });
}
async function patchProjectHeader(projectId, imageId, body) {
  return await clientAPI(`project/${projectId}/header/${imageId}/`, {
    body,
    method: "PATCH"
  });
}
async function deleteProjectHeader(projectId, imageId, config = {}) {
  await clientAPI(`project/${projectId}/header/${imageId}/`, {
    ...config,
    method: "DELETE"
  });
}
async function lockUnlockProject({
  project_id,
  context
}) {
  return await clientAPI(`project/${project_id}/${context}/`, { method: "POST" });
}
async function getProjectSimilars(projectId, config = {}) {
  return await clientAPI(`/project/${projectId}/similar/`, config);
}
async function getProjectGroups(projectId, config = {}) {
  return await clientAPI(`/project/${projectId}/group/`, config);
}

// src/apis/recommendations.service.ts
async function getProjectsRecommendationsForUser(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/recommended-project/user/`,
    config
  );
}
async function getRandomProjectsRecommendationsForUser(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/recommended-project/user/random/`,
    config
  );
}
async function getUsersRecommendationsForUser(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/recommended-user/user/`,
    config
  );
}
async function getRandomUsersRecommendationsForUser(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/recommended-user/user/random/`,
    config
  );
}

// src/apis/report.service.ts
async function reportBug(organizationCode, body, config = {}) {
  await clientAPI(`organization/${organizationCode}/report/bug/`, {
    ...config,
    body,
    method: "POST"
  });
}
async function reportAbuse(organizationCode, body, config = {}) {
  await clientAPI(`organization/${organizationCode}/report/abuse/`, {
    ...config,
    body,
    method: "POST"
  });
}
async function contactUs(organizationCode, body, config = {}) {
  await clientAPI(`organization/${organizationCode}/contact/us/`, {
    ...config,
    body,
    method: "POST"
  });
}

// src/apis/reviews.service.ts
async function getReviews(projectId, config = {}) {
  return await clientAPI(`project/${projectId}/review/`, config);
}
async function postReview(projectId, body, config = {}) {
  return await clientAPI(`project/${projectId}/review/`, {
    ...config,
    body,
    method: "POST"
  });
}
async function patchReview(projectId, reviewId, body, config = {}) {
  return await clientAPI(`project/${projectId}/review/${reviewId}/`, {
    ...config,
    body,
    method: "PATCH"
  });
}
async function deleteReview(projectId, reviewId, config = {}) {
  await clientAPI(`project/${projectId}/review/${reviewId}/`, { ...config, method: "DELETE" });
}

// src/apis/search.service.ts
async function searchAll(search, config = {}) {
  const url = `search/${search ? `${encodeURIComponent(search)}/` : ""}`;
  return clientAPI(url, config);
}
function searchProjects(search, config = {}) {
  return searchAll(search, {
    ...config,
    query: {
      ...config.query || {},
      types: ["project"]
    }
  });
}
function searchUser(search, config = {}) {
  return searchAll(search, {
    ...config,
    query: {
      ...config.query || {},
      types: ["user"]
    }
  });
}
function searchGroups(search, config = {}) {
  return searchAll(search, {
    ...config,
    query: {
      ...config.query || {},
      types: ["people_group"]
    }
  });
}

// src/apis/stats.service.ts
async function getStats(orgaizationCode, config = {
  query: { publication_status: "all" }
}) {
  return await clientAPI(`organization/${orgaizationCode}/stats/`, config);
}

// src/apis/tag-classification.service.ts
async function getAllOrgClassifications(organizationCode, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/tag-classification/`,
    config
  );
}
async function getOrgClassification(organizationCode, classificationId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/tag-classification/${classificationId}/`,
    config
  );
}
async function postOrgClassification(organizationCode, classification) {
  return await clientAPI(
    `organization/${organizationCode}/tag-classification/`,
    {
      body: classification,
      method: "POST"
    }
  );
}
async function putOrgClassification(organizationCode, classificationId, classification) {
  return await clientAPI(
    `organization/${organizationCode}/tag-classification/${classificationId}/`,
    {
      body: classification,
      method: "PUT"
    }
  );
}
async function patchOrgClassification(organizationCode, classificationId, classification) {
  return await clientAPI(
    `organization/${organizationCode}/tag-classification/${classificationId}/`,
    {
      body: classification,
      method: "PATCH"
    }
  );
}
async function deleteOrgClassification(organizationCode, classificationId) {
  await clientAPI(`organization/${organizationCode}/tag-classification/${classificationId}/`, {
    method: "DELETE"
  });
}
async function getOrgClassificationTags(organizationCode, classificationId, config = {}) {
  return await clientAPI(
    `organization/${organizationCode}/tag-classification/${classificationId}/tag/`,
    config
  );
}
async function getTags(ids, config = {}) {
  return await clientAPI(`tag/`, {
    ...config,
    query: {
      ...config.query || {},
      ids: ids.join(",")
    }
  });
}
async function getAllTagsById(ids, config = {}) {
  const tags = await Promise.all(
    ids.map(async (id) => await clientAPI(`tag/${id}/`, config))
  );
  return {
    count: tags.length,
    next: null,
    previous: null,
    results: tags
  };
}
async function putClassificationTag(organizationCode, classificationId, tagtId, tag) {
  return await clientAPI(
    `/organization/${organizationCode}/tag-classification/${classificationId}/tag/${tagtId}/`,
    { body: tag, method: "PUT" }
  );
}
async function patchClassificationTag(organizationCode, classificationId, tagtId, tag) {
  return await clientAPI(
    `/organization/${organizationCode}/tag-classification/${classificationId}/tag/${tagtId}/`,
    { body: tag, method: "PATCH" }
  );
}
async function deleteClassificationTag(organizationCode, classificationId, tagtId) {
  await clientAPI(
    `/organization/${organizationCode}/tag-classification/${classificationId}/tag/${tagtId}/`,
    { method: "DELETE" }
  );
}
async function postClassificationTag(organizationCode, classificationId, tag) {
  return await clientAPI(
    `organization/${organizationCode}/tag-classification/${classificationId}/tag/`,
    {
      body: tag,
      method: "POST"
    }
  );
}

// src/apis/templates.service.ts
function getTemplates(organizationCode, config = {}) {
  return clientAPI(
    `organization/${organizationCode}/template/`,
    config
  );
}
function getTemplate(organizationCode, templateId, config = {}) {
  return clientAPI(
    `organization/${organizationCode}/template/${templateId}/`,
    config
  );
}
async function deleteTemplate(organizationCode, templateId, config = {}) {
  await clientAPI(`organization/${organizationCode}/template/${templateId}/`, {
    ...config,
    method: "DELETE"
  });
}
function postTemplate(organizationCode, body, config = {}) {
  return clientAPI(`organization/${organizationCode}/template/`, {
    ...config,
    method: "POST",
    body
  });
}
function postTemplateImage(organizationCode, templateId, file, config = {}) {
  const body = new FormData();
  body.append("file", file, file.name);
  return clientAPI(
    `organization/${organizationCode}/template/${templateId}/image/`,
    {
      ...config,
      body,
      method: "POST"
    }
  );
}
function patchTemplate(organizationCode, templateId, body, config = {}) {
  return clientAPI(`organization/${organizationCode}/template/${templateId}/`, {
    ...config,
    body,
    method: "PATCH"
  });
}

// src/apis/utils.service.ts
function _adaptParamsToGetQuery(params) {
  const query = {};
  Object.entries(params || {}).forEach(([key, value]) => {
    query[key] = Array.isArray(value) ? value.join(",") : value.toString();
  });
  return {
    params: query
  };
}

// src/apis/people.service.ts
async function getUser(userId, config = {}) {
  return await clientAPI(`user/${userId}/`, config);
}
async function postUser(organizationCode, body, config = {}) {
  return await clientAPI(
    `user/`,
    merge(
      {
        body,
        method: "POST",
        query: {
          organization: organizationCode
        }
      },
      config
    )
  );
}
async function postUserWithInvitation(organizationCode, inviteToken, body, config = {}) {
  const options = merge(
    {
      body,
      method: "POST",
      headers: {
        Authorization: `Invite ${inviteToken}`
      },
      query: {
        organization: organizationCode
      }
    },
    config
  );
  return await clientAPI(`user/`, options);
}
async function searchPeopleAdmin(organizationId, config) {
  const newConfig = {
    ...config,
    query: {
      ...config.query,
      current_org_pk: organizationId
    }
  };
  return await clientAPI("user/admin-list/", newConfig);
}
async function searchPeopleByExactMail(email, params, config = {}) {
  const adaptedParams = params ? _adaptParamsToGetQuery(params) : {};
  return await clientAPI(`user/get-by-email/${email}/`, { ...config, ...adaptedParams });
}
async function patchUser(userId, body, config = {}) {
  return await clientAPI(`user/${userId}/`, { ...config, body, method: "PATCH" });
}
async function patchUserPicture(userId, pictureId, body, config = {}) {
  return await clientAPI(`user/${userId}/profile-picture/${pictureId}/`, {
    ...config,
    body,
    method: "PATCH"
  });
}
async function deleteUser(userId, config = {}) {
  await clientAPI(`user/${userId}/`, { ...config, method: "DELETE" });
}
async function postUserPicture(userId, body, config = {}) {
  return await clientAPI(`user/${userId}/profile-picture/`, {
    ...config,
    body,
    method: "POST"
  });
}
async function deleteUserPicture(id, imageId, config = {}) {
  await clientAPI(`user/${id}/profile-picture/${imageId}/`, { ...config, method: "DELETE" });
}
async function patchUserPrivacy(userId, body, config = {}) {
  return await clientAPI(`privacy-settings/${userId}/`, {
    ...config,
    body,
    method: "PATCH"
  });
}
async function postUserSkill(userId, body, config = {}) {
  return await clientAPI(`user/${userId}/skill/`, {
    ...config,
    body,
    method: "POST"
  });
}
async function patchUserSkill(userId, skillId, body, config = {}) {
  return await clientAPI(`user/${userId}/skill/${skillId}/`, {
    ...config,
    body,
    method: "PATCH"
  });
}
async function deleteUserSkill(userId, skillId, config = {}) {
  await clientAPI(`user/${userId}/skill/${skillId}/`, { ...config, method: "DELETE" });
}
async function resetUserPassword(organizationCode, userId, config = {}) {
  return await clientAPI(
    `user/${userId}/reset-password/`,
    merge(
      {
        query: {
          organization: organizationCode
        }
      },
      config
    )
  );
}
async function removeUserCookie(config = {}) {
  return await clientAPI(
    "user/remove-authentication-cookie",
    config
  );
}

// src/apis/skill.service.ts
async function getSkill(skillId, options = {}) {
  return await clientAPI(`skill/${skillId}/`, options);
}
async function searchSkill(search, options = {}) {
  return await clientAPI(`skill/`, {
    ...options,
    query: {
      ...options?.query || {},
      search
    }
  });
}

// src/apis/project-tabs.service.ts
async function getAllProjectTab(projectId, config = {}) {
  return await clientAPI(`project/${projectId}/tab/`, config);
}
async function getProjectTab(projectId, projectTabId, config = {}) {
  return await clientAPI(`project/${projectId}/tab/${projectTabId}/`, config);
}
async function createProjectTab(projectId, body, config = {}) {
  return await clientAPI(`project/${projectId}/tab/`, {
    method: "POST",
    body,
    ...config
  });
}
async function updateProjectTab(projectId, projectTabId, body, config = {}) {
  return await clientAPI(`project/${projectId}/tab/${projectTabId}/`, {
    method: "PATCH",
    body,
    ...config
  });
}
async function deleteProjectTab(projectId, projectTabId, config = {}) {
  await clientAPI(`project/${projectId}/tab/${projectTabId}/`, {
    method: "DELETE",
    ...config
  });
}
async function getAllProjectTabItem(projectId, projectTabId, config = {}) {
  return await clientAPI(
    `project/${projectId}/tab/${projectTabId}/item/`,
    config
  );
}
async function getProjectTabItem(projectId, projectTabId, projectTabItemId, config = {}) {
  return await clientAPI(
    `project/${projectId}/tab/${projectTabId}/item/${projectTabItemId}/`,
    config
  );
}
async function createProjectTabItem(projectId, projectTabId, body, config = {}) {
  return await clientAPI(`project/${projectId}/tab/${projectTabId}/item/`, {
    method: "POST",
    body,
    ...config
  });
}
async function updateProjectTabItem(projectId, projectTabId, projectTabItemId, body, config = {}) {
  return await clientAPI(
    `project/${projectId}/tab/${projectTabId}/item/${projectTabItemId}/`,
    {
      method: "PATCH",
      body,
      ...config
    }
  );
}
async function deleteProjectTabItem(projectId, projectTabId, projectTabItemId, config = {}) {
  await clientAPI(`project/${projectId}/tab/${projectTabId}/item/${projectTabItemId}/`, {
    method: "DELETE",
    ...config
  });
}
async function createProjectTabImage(projectId, body, config = {}) {
  return await clientAPI(`project/${projectId}/tab-image/`, {
    method: "POST",
    body,
    ...config
  });
}
async function createProjectTabItemImage(projectId, projectTabId, body, config = {}) {
  return await clientAPI(
    `project/${projectId}/tab/${projectTabId}/item-image/`,
    {
      method: "POST",
      body,
      ...config
    }
  );
}
export {
  _adaptParamsToGetQuery,
  acceptAccessRequest,
  addFeaturedProject,
  addLinkedProject,
  addOrgMember,
  addParentGroup,
  addProjectMembers,
  applyAnnouncement,
  askMentorship,
  clientAPI,
  configureClientAPI,
  configureOptionsAPI,
  contactUs,
  createEvent,
  createInstruction,
  createNews,
  createProjectCategory,
  createProjectGoal,
  createProjectTab,
  createProjectTabImage,
  createProjectTabItem,
  createProjectTabItemImage,
  declineAccessRequest,
  deleteAnnouncement,
  deleteBlogEntry,
  deleteClassificationTag,
  deleteComment,
  deleteEvent,
  deleteFollow,
  deleteGroup,
  deleteGroupGallery,
  deleteGroupHeader,
  deleteInstruction,
  deleteInvitation,
  deleteLinkedProject,
  deleteLocation,
  deleteNews,
  deleteNewsHeader,
  deleteOrgClassification,
  deleteOrganisationBanner,
  deleteOrganisationLogo,
  deleteOrganizationFile,
  deleteProject,
  deleteProjectAttachmentFile,
  deleteProjectAttachmentLink,
  deleteProjectCategory,
  deleteProjectCategoryBackground,
  deleteProjectCategoryFollow,
  deleteProjectGoal,
  deleteProjectHeader,
  deleteProjectMembers,
  deleteProjectMembersSelf,
  deleteProjectMessage,
  deleteProjectTab,
  deleteProjectTabItem,
  deleteReview,
  deleteTemplate,
  deleteUser,
  deleteUserAttachmentFile,
  deleteUserAttachmentLink,
  deleteUserPicture,
  deleteUserSkill,
  duplicateProject,
  getAccessRequests,
  getAllEvents,
  getAllInstructions,
  getAllNews,
  getAllOrgClassifications,
  getAllProjectCategories,
  getAllProjectTab,
  getAllProjectTabItem,
  getAllProjects,
  getAllTagsById,
  getAnnouncements,
  getBlogEntries,
  getBlogEntry,
  getComment,
  getComments,
  getEvent,
  getFeaturedProjects,
  getGroup,
  getGroupAllLocations,
  getGroupEvent,
  getGroupGallery,
  getGroupLocation,
  getGroupMember,
  getGroupNews,
  getGroupProject,
  getGroupResearchDocument,
  getGroupResearchDocumentAnalytics,
  getGroupSimilar,
  getHierarchyGroups,
  getInstruction,
  getInvitation,
  getInvitations,
  getLinkedProject,
  getLocations,
  getMentorshipDetails,
  getNews,
  getNewsfeed,
  getNotifications,
  getOrgClassification,
  getOrgClassificationTags,
  getOrgUnits,
  getOrganizationByCode,
  getOrganizationFile,
  getOrganizationFiles,
  getOrganizations,
  getOwnResearchDocument,
  getOwnResearchDocumentAnalytics,
  getProject,
  getProjectAnnouncements,
  getProjectAttachmentFile,
  getProjectAttachmentFiles,
  getProjectAttachmentLink,
  getProjectAttachmentLinks,
  getProjectCategoriesFollow,
  getProjectCategoriesHierarchy,
  getProjectCategory,
  getProjectFollows,
  getProjectGoal,
  getProjectGoals,
  getProjectGroups,
  getProjectLocation,
  getProjectLocations,
  getProjectMembers,
  getProjectMessage,
  getProjectMessages,
  getProjectSimilars,
  getProjectTab,
  getProjectTabItem,
  getProjectsRecommendationsForUser,
  getRandomProjectsRecommendationsForUser,
  getRandomUsersRecommendationsForUser,
  getResearchDocumentSimilars,
  getReviews,
  getRootProjectCategory,
  getSkill,
  getStats,
  getSubGroup,
  getTags,
  getTemplate,
  getTemplates,
  getUser,
  getUserAttachmentFile,
  getUserAttachmentLink,
  getUserFollows,
  getUserMentorship,
  getUserNotificationSettings,
  getUsersRecommendationsForUser,
  lockUnlockProject,
  offerMentorship,
  patchAnnouncement,
  patchBlogEntry,
  patchClassificationTag,
  patchComment,
  patchEvent,
  patchGroup,
  patchGroupHeader,
  patchGroupLocation,
  patchInstruction,
  patchLocation,
  patchNews,
  patchNewsHeader,
  patchOrgClassification,
  patchOrganisationBanner,
  patchOrganization,
  patchOrganizationFile,
  patchProject,
  patchProjectAttachmentFile,
  patchProjectAttachmentLink,
  patchProjectCategory,
  patchProjectCategoryBackground,
  patchProjectGoal,
  patchProjectHeader,
  patchProjectMessage,
  patchReview,
  patchTemplate,
  patchTermsAndConditions,
  patchUser,
  patchUserAttachmentFile,
  patchUserAttachmentLink,
  patchUserNotificationSettings,
  patchUserPicture,
  patchUserPrivacy,
  patchUserSkill,
  postAccessRequest,
  postAnnouncement,
  postBlogEntry,
  postBlogEntryImage,
  postClassificationTag,
  postComment,
  postCommentImage,
  postFollow,
  postFollowMany,
  postGroup,
  postGroupGallery,
  postGroupHeader,
  postGroupLocation,
  postGroupMembers,
  postGroupProjects,
  postInvitation,
  postLocations,
  postNewsHeader,
  postOrgClassification,
  postOrganisationBanner,
  postOrganisationLogo,
  postOrganizationFiles,
  postOrganizationImage,
  postProject,
  postProjectAttachmentFiles,
  postProjectAttachmentLinks,
  postProjectCategoryBackground,
  postProjectCategoryFollow,
  postProjectHeader,
  postProjectImage,
  postProjectMessage,
  postProjectMessageImage,
  postReview,
  postTemplate,
  postTemplateImage,
  postUser,
  postUserAttachmentFile,
  postUserAttachmentLink,
  postUserPicture,
  postUserSkill,
  postUserWithInvitation,
  putClassificationTag,
  putEvent,
  putInstruction,
  putNews,
  putOrgClassification,
  putProjectCategory,
  removeFeaturedProject,
  removeGroupLocation,
  removeGroupMember,
  removeGroupProject,
  removeOrgMember,
  removeUserCookie,
  reportAbuse,
  reportBug,
  resetUserPassword,
  respondMentorship,
  searchAll,
  searchGroups,
  searchPeopleAdmin,
  searchPeopleByExactMail,
  searchProjects,
  searchResearcher,
  searchSkill,
  searchUser,
  updateProjectTab,
  updateProjectTabItem
};
//# sourceMappingURL=index.js.map