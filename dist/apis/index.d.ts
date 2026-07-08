import { aq as ProjectSlugOrId, d as PaginationResult, a as PaginationQuery, v as ImageModelCreated, a6 as PeopleGroupIdOrSlug, k as DocumentType, D as Document, aD as ResearcherDocumentAnalytics, aC as Researcher, a3 as OrganizationModel, az as QueryFilterResearcher, m as EventInput, o as EventModel, l as EventIdOrSlug, au as QueryFilterEvent, p as FaqInput, av as QueryFilterGroup, P as PeopleGroupModel, S as LocationModel, I as ImageModel, _ as NewsModel, ak as ProjectModel, aw as QueryFilterGroupHierarchy, b as BaseLocationModel, Q as LocationId, N as LocationGeneral, ai as ProjectLocationForm, Y as NewsInput, ax as QueryFilterNews, a5 as OrganizationPatchInput, w as ImageOrganizationInput, b5 as UserModel, b6 as UserPatchModel, b7 as UserPrivacyPatchModel, b8 as UserSkillModel, b4 as UserIdOrSlug, aa as ProjectCategoryCreateInput, ac as ProjectCategoryModel, ae as ProjectCategoryPatchInput, af as ProjectCategoryPutInput, ay as QueryFilterProjectSimilars, e as AddManyLinkedProjectInput, J as LinkedProject, ag as ProjectForm, aK as TagModel, aN as TemplateId, aO as TemplateModel, C as LanguageType, aj as ProjectMemberRoleType, O as Ordering } from '../location.model-OhKDYxPT.js';
import { f as AnnouncementId, c as AnnouncementApplyForm, ab as QueryFilterAnnouncement, h as AnnouncementModel, e as AnnouncementForm, j as AttachmentFileId, k as AttachmentFileInput, l as AttachmentFileModel, m as AttachmentForm, o as AttachmentLinkId, p as AttachmentLinkInput, q as AttachmentLinkModel, t as BlogEntryId, ac as QueryFilterBlogEntry, u as BlogEntryModel, s as BlogEntryForm, C as CommentModel, ad as QueryFilterComments, a2 as ProjectMessageForm, x as FollowInput, G as FollowProjectOutput, a as AddManyFollowedProject, I as GoalForm, J as GoalModel, b as AddParentGroupModelInput, K as GroupMember, W as PostGroupData, A as AddGroupMembers, X as PostGroupProjects, ao as RemoveGroupMember, P as InvitationModel, Q as InvitationModelInput, az as SkillModel, R as Mentoring, T as NewsfeedModel, U as NotificationModel, M as GroupModelInput, ap as RemoveGroupModelInput, V as PeopleModel, a0 as ProjectMembersAddInput, a1 as ProjectMembersDeleteInput, a4 as ProjectMessageModel, ag as QueryFilterProjectMessage, a3 as ProjectMessageInputModel, ae as QueryFilterProject, af as QueryFilterProjectMembers, Y as ProjectMemberModel, a6 as ProjectTabForm, a5 as ProjectTab, a8 as ProjectTabItemForm, a7 as ProjectTabItem, ah as QueryFilterProjectTab, ai as QueryFilterProjectTabItem, aj as QueryFilterRecomendation, v as ContactForm, aq as ReportForm, ar as ReportModel, at as ReviewId, ak as QueryFilterReviews, au as ReviewModel, as as ReviewForm, av as SearchResultAll, al as QueryFilterSearch, aw as SearchResultGroup, ax as SearchResultProject, ay as SearchResultUser, am as QueryFilterSkill, aA as Stats, aB as TagClassificationModel, an as QueryFilterTagClassification } from '../recommendations.model-DCTRNyiS.js';
import { ResponseType, FetchOptions } from 'ofetch';
import { b as InstructionInput, c as InstructionModel, a as InstructionId, Q as QueryFilterInstruction } from '../instruction.model-B6Wf--Vx.js';
import '../icons-CQJqJYOy.js';

type OFetchOrgiginalOptions<T extends ResponseType = "json"> = FetchOptions<T>;
type clientAPIOptions<Query extends OFetchOrgiginalOptions['query'] = OFetchOrgiginalOptions['query'], Body extends OFetchOrgiginalOptions['body'] = OFetchOrgiginalOptions['body']> = OFetchOrgiginalOptions & {
    query?: Query;
    body?: Body;
    noError?: boolean;
};
declare const configureAPI: (options: clientAPIOptions) => void;
declare const clientAPI: <Result>(url: string, options?: clientAPIOptions) => Promise<Result>;

type Config$e = clientAPIOptions<QueryFilterAnnouncement>;
declare function getAnnouncements(config?: Config$e): Promise<PaginationResult<AnnouncementModel>>;
declare function getProjectAnnouncements(projectId: ProjectSlugOrId, config?: Config$e): Promise<PaginationResult<AnnouncementModel>>;
declare function postAnnouncement(projectId: ProjectSlugOrId, body: AnnouncementForm, config?: Config$e): Promise<AnnouncementModel>;
declare function patchAnnouncement(projectId: ProjectSlugOrId, announcementId: AnnouncementId, body: AnnouncementForm, config?: Config$e): Promise<AnnouncementModel>;
declare function deleteAnnouncement(projectId: ProjectSlugOrId, announcementId: AnnouncementId, config?: Config$e): Promise<undefined>;
declare function applyAnnouncement(projectId: ProjectSlugOrId, announcementId: AnnouncementId, body: AnnouncementApplyForm): Promise<undefined>;

type Config$d = clientAPIOptions<Partial<PaginationQuery>>;
declare function getProjectAttachmentFiles(projectId: ProjectSlugOrId, config?: Config$d): Promise<PaginationResult<AttachmentFileModel>>;
declare function getProjectAttachmentFile(body: AttachmentFileInput): Promise<AttachmentFileModel>;
declare function postProjectAttachmentFiles(projectId: ProjectSlugOrId, body: FormData): Promise<AttachmentFileModel>;
declare function patchProjectAttachmentFile(projectId: ProjectSlugOrId, fileId: AttachmentFileId, body: FormData): Promise<AttachmentFileModel>;
declare function deleteProjectAttachmentFile(projectId: ProjectSlugOrId, fileId: AttachmentFileId): Promise<undefined>;
declare function getUserAttachmentFile(userId: number, options: any): Promise<PaginationResult<AttachmentFileModel>>;
declare function postUserAttachmentFile(userId: number, data: AttachmentForm): Promise<AttachmentFileModel>;
declare function patchUserAttachmentFile(userId: number, fileId: number, data: Partial<AttachmentFileModel>): Promise<AttachmentFileModel>;
declare function deleteUserAttachmentFile(userId: number, fileId: number): Promise<unknown>;

type Config$c = clientAPIOptions<Partial<PaginationQuery>>;
declare function getProjectAttachmentLinks(projectId: ProjectSlugOrId, config?: Config$c): Promise<PaginationResult<AttachmentLinkModel>>;
declare function getProjectAttachmentLink(body: AttachmentLinkInput): Promise<AttachmentLinkModel>;
declare function postProjectAttachmentLinks(projectId: ProjectSlugOrId, body: AttachmentForm): Promise<AttachmentLinkModel>;
declare function patchProjectAttachmentLink(projectId: ProjectSlugOrId, linkId: AttachmentLinkId, body: AttachmentForm): Promise<AttachmentLinkModel>;
declare function deleteProjectAttachmentLink(projectId: ProjectSlugOrId, linkId: AttachmentLinkId): Promise<undefined>;
declare function getUserAttachmentLink(userId: number, options: any): Promise<PaginationResult<AttachmentLinkModel>>;
declare function postUserAttachmentLink(userId: number, body: AttachmentLinkModel): Promise<AttachmentLinkModel>;
declare function patchUserAttachmentLink(userId: number, linkId: number, body: Partial<AttachmentLinkModel>): Promise<AttachmentLinkModel>;
declare function deleteUserAttachmentLink(userId: number, linkId: number): Promise<unknown>;

type ConfigBlogEntry = clientAPIOptions;
type ConfigBlogEntries = clientAPIOptions<QueryFilterBlogEntry>;
declare function getBlogEntries(projectId: ProjectSlugOrId, config?: ConfigBlogEntries): Promise<PaginationResult<BlogEntryModel>>;
declare function getBlogEntry(projectId: ProjectSlugOrId, blogEntryId: BlogEntryId, config?: ConfigBlogEntry): Promise<BlogEntryModel>;
declare function postBlogEntry(projectId: ProjectSlugOrId, body: BlogEntryForm): Promise<BlogEntryModel>;
declare function patchBlogEntry(projectId: ProjectSlugOrId, blogEntryId: BlogEntryId, body: BlogEntryForm): Promise<BlogEntryModel>;
declare function deleteBlogEntry(projectId: ProjectSlugOrId, blogEntryId: BlogEntryId): Promise<undefined>;
declare function postBlogEntryImage(projectId: ProjectSlugOrId, body: FormData, config?: ConfigBlogEntry): Promise<ImageModelCreated>;

type Config$b = clientAPIOptions<QueryFilterComments>;
declare function getComments(projectId: ProjectSlugOrId, config?: Config$b): Promise<PaginationResult<CommentModel>>;
declare function postComment(projectId: ProjectSlugOrId, comment: ProjectMessageForm, config?: Config$b): Promise<CommentModel>;
declare function getComment(projectId: ProjectSlugOrId, commentId: CommentModel['id'], config?: Config$b): Promise<CommentModel>;
declare function patchComment(projectId: ProjectSlugOrId, commentId: CommentModel['id'], body: ProjectMessageForm): Promise<CommentModel>;
declare function deleteComment(projectId: ProjectSlugOrId, commentId: CommentModel['id'], config?: Config$b): Promise<undefined>;
declare function postCommentImage(projectId: ProjectSlugOrId, body: any): Promise<unknown>;

declare function getOwnResearchDocument(organisationCode: string, researchId: Researcher['id'], documentType: DocumentType, config?: {}): Promise<PaginationResult<Document>>;
declare function getGroupResearchDocument(organisationCode: string, groupId: PeopleGroupIdOrSlug, documentType: DocumentType, config?: {}): Promise<PaginationResult<Document>>;
declare function getOwnResearchDocumentAnalytics(organisationCode: string, researchId: Researcher['id'], documentType: DocumentType, config?: {}): Promise<ResearcherDocumentAnalytics>;
declare function getGroupResearchDocumentAnalytics(organisationCode: string, groupId: PeopleGroupIdOrSlug, documentType: DocumentType, config?: {}): Promise<ResearcherDocumentAnalytics>;
declare function getResearchDocumentSimilars(organisationCode: string, documentId: Document['id'], config?: {}): Promise<PaginationResult<Document>>;
type ConfigSearch$1 = clientAPIOptions<QueryFilterResearcher>;
type ResearcherSearchResponse = {
    [key: string | number]: Researcher;
};
declare function searchResearcher(organizationCode: OrganizationModel['code'], config?: ConfigSearch$1): Promise<PaginationResult<ResearcherSearchResponse>>;

type ConfigEvent$1 = clientAPIOptions<QueryFilterEvent>;
declare function getAllEvents(organizationCode: OrganizationModel['code'], config?: ConfigEvent$1): Promise<PaginationResult<EventModel>>;
declare function getEvent(organizationCode: OrganizationModel['code'], idOrSlug: EventIdOrSlug, config?: ConfigEvent$1): Promise<EventModel>;
declare function createEvent(organizationCode: OrganizationModel['code'], body: EventInput): Promise<EventModel>;
declare function putEvent(organizationCode: OrganizationModel['code'], idOrSlug: EventIdOrSlug, body: EventInput): Promise<EventModel>;
declare function patchEvent(organizationCode: OrganizationModel['code'], idOrSlug: EventIdOrSlug, body: EventInput): Promise<EventModel>;
declare function deleteEvent(organizationCode: OrganizationModel['code'], idOrSlug: EventIdOrSlug): Promise<undefined>;

declare function getFaq(organisationCode: OrganizationModel['code']): Promise<unknown>;
declare function createFaq(body: FaqInput): Promise<unknown>;
declare function putFaq(body: FaqInput): Promise<unknown>;
declare function patchFaq(organisationCode: OrganizationModel['code'], body: FaqInput): Promise<unknown>;
declare function deleteFaq({ orgCode }: {
    orgCode: OrganizationModel['code'];
}): Promise<unknown>;
declare function postFaqImage({ orgCode, body }: {
    orgCode: OrganizationModel['code'];
    body: any;
}): Promise<unknown>;

declare function getProjectFollows(body: FollowInput): Promise<unknown>;
declare function getUserFollows(body: FollowInput, params: any): Promise<unknown>;
declare function postFollow(follow: FollowInput): Promise<FollowProjectOutput>;
declare function postFollowMany({ id, body }: {
    id: string;
    body: AddManyFollowedProject;
}): Promise<unknown>;
declare function deleteFollow(follow: FollowInput): Promise<unknown>;

type ConfigGoal = clientAPIOptions;
declare function getProjectGoals(projectId: ProjectSlugOrId, config?: ConfigGoal): Promise<PaginationResult<GoalModel>>;
declare function getProjectGoal(projectId: ProjectSlugOrId, goalId: GoalModel['id'], config?: ConfigGoal): Promise<PaginationResult<GoalModel>>;
declare function createProjectGoal(projectId: ProjectSlugOrId, body: GoalForm, config?: {}): Promise<GoalModel>;
declare function patchProjectGoal(projectId: ProjectSlugOrId, goalId: GoalModel['id'], body: GoalForm, config?: {}): Promise<GoalModel>;
declare function deleteProjectGoal(projectId: ProjectSlugOrId, goalId: GoalModel['id'], config?: {}): Promise<undefined>;

declare function getOrgUnits(): Promise<unknown>;

declare function getHierarchyGroups(organizationCode: OrganizationModel['code'], config?: clientAPIOptions<QueryFilterGroupHierarchy>): Promise<PeopleGroupModel>;
declare function postGroup(organizationCode: OrganizationModel['code'], groupData: PostGroupData): Promise<PeopleGroupModel>;
declare function addParentGroup(orgId: string, groupId: PeopleGroupIdOrSlug, body: AddParentGroupModelInput): Promise<unknown>;
declare function getGroup(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: clientAPIOptions<QueryFilterGroup>): Promise<PeopleGroupModel>;
declare function patchGroup(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, groupData: Partial<PostGroupData>): Promise<PeopleGroupModel>;
declare function deleteGroup(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug): Promise<undefined>;
declare function getGroupMember(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: {}): Promise<PaginationResult<GroupMember>>;
declare function postGroupMembers(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, body: AddGroupMembers): Promise<unknown>;
declare function removeGroupMember(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, body: RemoveGroupMember): Promise<unknown>;
declare function getGroupProject(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: {}): Promise<PaginationResult<ProjectModel>>;
declare function postGroupProjects(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, projectsData: PostGroupProjects): Promise<unknown>;
declare function removeGroupProject(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, projectsData: PostGroupProjects): Promise<unknown>;
declare function postGroupHeader(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, headerData: FormData): Promise<unknown>;
declare function patchGroupHeader(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, headerData: FormData): Promise<unknown>;
declare function getGroupSimilar(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: {}): Promise<PaginationResult<PeopleGroupModel>>;
declare function getSubGroup(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: {}): Promise<PaginationResult<PeopleGroupModel>>;
declare function getGroupAllLocations(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: {}): Promise<LocationModel[]>;
declare function getGroupLocation(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: {}): Promise<PaginationResult<LocationModel>>;
declare function removeGroupLocation(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, locationId: number, config?: {}): Promise<PaginationResult<LocationModel>>;
declare function patchGroupLocation(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, locationId: number, payload: Partial<BaseLocationModel>, config?: {}): Promise<PaginationResult<LocationModel>>;
declare function postGroupLocation(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, payload: BaseLocationModel, config?: {}): Promise<PaginationResult<LocationModel>>;
declare function getGroupGallery(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: {}): Promise<PaginationResult<ImageModel>>;
declare function deleteGroupGallery(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, imageId: number, config?: {}): Promise<undefined>;
declare function postGroupGallery(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, body: FormData, config?: {}): Promise<ImageModelCreated>;
declare function getGroupNews(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: {}): Promise<PaginationResult<NewsModel>>;
declare function getGroupEvent(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: {}): Promise<PaginationResult<EventModel>>;

type ConfigEvent = clientAPIOptions<QueryFilterInstruction>;
declare function getAllInstructions(organizationCode: OrganizationModel['code'], config?: ConfigEvent): Promise<PaginationResult<InstructionModel>>;
declare function getInstruction(organizationCode: OrganizationModel['code'], idOrSlug: InstructionId, config?: ConfigEvent): Promise<InstructionModel>;
declare function createInstruction(organizationCode: OrganizationModel['code'], body: InstructionInput): Promise<InstructionModel>;
declare function putInstruction(organizationCode: OrganizationModel['code'], idOrSlug: InstructionId, body: InstructionInput): Promise<InstructionModel>;
declare function patchInstruction(organizationCode: OrganizationModel['code'], idOrSlug: InstructionId, body: InstructionInput): Promise<InstructionModel>;
declare function deleteInstruction(organizationCode: OrganizationModel['code'], idOrSlug: InstructionId): Promise<undefined>;

declare function getInvitation(organizationCode: OrganizationModel['code'], token: string, config?: {}): Promise<InvitationModel>;
declare function getInvitations(organizationCode: OrganizationModel['code'], config?: {}): Promise<InvitationModel>;
declare function postInvitation(organizationCode: OrganizationModel['code'], formData: InvitationModelInput, config?: {}): Promise<InvitationModel>;
declare function deleteInvitation(organizationCode: OrganizationModel['code'], id: OrganizationModel['id'], config?: {}): Promise<undefined>;

type Config$a = clientAPIOptions;
declare function getProjectLocations(projectId: ProjectSlugOrId, config?: Config$a): Promise<LocationModel[]>;
declare function getProjectLocation(projectId: ProjectSlugOrId, locationId: LocationId, config?: Config$a): Promise<LocationModel>;
declare function postLocations(projectId: ProjectSlugOrId, body: ProjectLocationForm): Promise<LocationModel>;
declare function patchLocation(projectId: ProjectSlugOrId, locationId: LocationId, body: ProjectLocationForm): Promise<LocationModel>;
declare function deleteLocation(projectId: ProjectSlugOrId, locationId: LocationId): Promise<undefined>;
declare function getLocations(organizationCode: string, config?: Config$a): Promise<LocationGeneral[]>;

declare function getUserMentorship(organizationCode: OrganizationModel['code'], config?: {}): Promise<PaginationResult<Mentoring>>;
declare function getMentorshipDetails(organizationCode: OrganizationModel['code'], mentorshipId: any, payload: any): Promise<unknown>;
declare function offerMentorship(organizationCode: OrganizationModel['code'], skill: SkillModel, payload: any): Promise<unknown>;
declare function askMentorship(organizationCode: OrganizationModel['code'], skill: SkillModel, payload: any): Promise<unknown>;
declare function respondMentorship(organizationCode: OrganizationModel['code'], mentorshipId: Mentoring['id'], payload: any): Promise<unknown>;

declare function getNewsfeed(organizationCode: OrganizationModel['code'], config?: {}): Promise<PaginationResult<NewsfeedModel>>;

type ConfigNews = clientAPIOptions<QueryFilterNews>;
declare function getAllNews(organizationCode: OrganizationModel['code'], config?: ConfigNews): Promise<PaginationResult<NewsModel>>;
declare function getNews(organizationCode: OrganizationModel['code'], newsId: NewsModel['id'], config?: ConfigNews): Promise<NewsModel>;
declare function createNews(organizationCode: OrganizationModel['code'], body: NewsInput): Promise<NewsModel>;
declare function putNews(organizationCode: OrganizationModel['code'], newsId: NewsModel['id'], body: NewsInput): Promise<NewsModel>;
declare function patchNews(organizationCode: OrganizationModel['code'], newsId: NewsModel['id'], body: NewsInput): Promise<NewsModel>;
declare function deleteNews(organizationCode: OrganizationModel['code'], newsId: NewsModel['id']): Promise<unknown>;
declare function postNewsHeader(organizationCode: OrganizationModel['code'], newsId: NewsModel['id'], body: any): Promise<unknown>;
declare function patchNewsHeader(organizationCode: OrganizationModel['code'], newsId: NewsModel['id'], imageId: ImageModel['id'], body: any): Promise<unknown>;

declare function getNotifications(params: any, organisationCode: OrganizationModel['code']): Promise<PaginationResult<NotificationModel>>;

type Config$9 = clientAPIOptions;
type ConfigPagiations = clientAPIOptions<Partial<PaginationQuery>>;
declare function getOrganizationFiles(organizationCode: string, config?: ConfigPagiations): Promise<PaginationResult<AttachmentFileModel>>;
declare function getOrganizationFile(organizationCode: OrganizationModel['code'], attachmentId: AttachmentFileModel['id'], config?: Config$9): Promise<AttachmentFileModel>;
declare function postOrganizationFiles(organizationCode: OrganizationModel['code'], body: FormData): Promise<AttachmentFileModel>;
declare function patchOrganizationFile(organizationCode: OrganizationModel['code'], attachmentId: AttachmentFileModel['id'], body: FormData): Promise<AttachmentFileModel>;
declare function deleteOrganizationFile(organizationCode: OrganizationModel['code'], attachmentId: AttachmentFileModel['id']): Promise<undefined>;

declare function patchOrganization(code: string, organization: OrganizationPatchInput | FormData): Promise<unknown>;
declare function getOrganizationByCode(code: string, config?: {}): Promise<OrganizationModel>;
declare function getOrganizations(config?: {}): Promise<PaginationResult<OrganizationModel>>;
declare function postOrganisationBanner({ code, body }: {
    code: string;
    body: FormData;
}): Promise<unknown>;
declare function patchOrganisationBanner(code: string, banner_id: number, body: FormData): Promise<unknown>;
declare function postOrganisationLogo({ code, body, }: {
    code: string;
    body: ImageOrganizationInput | FormData;
}): Promise<unknown>;
declare function addOrgMember({ org_id, body }: {
    org_id: number;
    body: GroupModelInput[];
}): Promise<unknown>;
declare function removeOrgMember({ org_id, body, }: {
    org_id: number;
    body: RemoveGroupModelInput[];
}): Promise<unknown>;
declare function postAccessRequest(organizationCode: OrganizationModel['code'], body: any): Promise<unknown>;
declare function getAccessRequests(organizationCode: OrganizationModel['code'], params: any): Promise<unknown>;
declare function declineAccessRequest(organizationCode: OrganizationModel['code'], params: any): Promise<unknown>;
declare function acceptAccessRequest(organizationCode: OrganizationModel['code'], params: any): Promise<unknown>;
type ConfigFeaturedProject = clientAPIOptions;
type FeaturedProjectBody = {
    featured_projects_ids: ProjectSlugOrId[];
};
declare function getFeaturedProjects(organizationCode: OrganizationModel['code'], config?: ConfigFeaturedProject): Promise<PaginationResult<ProjectModel>>;
declare function addFeaturedProject(organizationCode: OrganizationModel['code'], body: FeaturedProjectBody, config?: ConfigFeaturedProject): Promise<ProjectModel>;
declare function removeFeaturedProject(organizationCode: OrganizationModel['code'], body: FeaturedProjectBody, config?: ConfigFeaturedProject): Promise<undefined>;
declare function postOrganizationImage({ orgCode, body }: {
    orgCode: OrganizationModel['code'];
    body: any;
}): Promise<ImageModelCreated>;
declare function patchTermsAndConditions(organization: OrganizationModel, content: string): Promise<unknown>;

declare function getUser(userId: string | number, config?: clientAPIOptions): Promise<UserModel>;
declare function postUser(organizationCode: OrganizationModel['code'], payload: FormData): Promise<unknown>;
declare function postUserWithInvitation(organizationCode: OrganizationModel['code'], inviteToken: string, payload: FormData): Promise<unknown>;
declare function searchPeopleProject({ search, org_id, params }: any): Promise<unknown>;
declare function searchPeopleAdmin(organizationId: OrganizationModel['id'], config: any): Promise<PaginationResult<PeopleModel>>;
declare function searchPeopleByExactMail(email: string, params: object): Promise<UserModel>;
declare function patchUser(id: string | number, body: UserPatchModel): Promise<UserModel>;
declare function patchUserPicture(id: string | number, pictureId: string, body: FormData): Promise<unknown>;
declare function deleteUser(id: string): Promise<undefined>;
declare function postUserPicture(id: string, body: FormData): Promise<ImageModelCreated>;
declare function patchUserPrivacy(id: string | number, body: UserPrivacyPatchModel): Promise<unknown>;
declare function postUserSkill(user_id: string | number, body: UserSkillModel): Promise<unknown>;
declare function patchUserSkill(user_id: string | number, skill_id: number, body: UserPrivacyPatchModel): Promise<unknown>;
declare function deleteUserSkill(user_id: string | number, skill_id: number): Promise<unknown>;
declare function resetUserPassword(organizationCode: OrganizationModel['code'], userId: UserIdOrSlug): Promise<unknown>;

type Config$8 = clientAPIOptions;
declare function createProjectCategory(organizationCode: OrganizationModel['code'], category: ProjectCategoryCreateInput | FormData): Promise<unknown>;
declare function putProjectCategory(organizationCode: OrganizationModel['code'], id: number, category: ProjectCategoryPutInput | FormData): Promise<unknown>;
declare function patchProjectCategory(organizationCode: OrganizationModel['code'], id: number, category: ProjectCategoryPatchInput | FormData): Promise<unknown>;
declare function deleteProjectCategory(organizationCode: OrganizationModel['code'], id: number): Promise<unknown>;
declare function getProjectCategory(organizationCode: OrganizationModel['code'], id: number): Promise<unknown>;
declare function getAllProjectCategories(organizationCode: OrganizationModel['code'], config?: Config$8): Promise<PaginationResult<ProjectCategoryModel>>;
declare function getRootProjectCategory(organizationCode: OrganizationModel['code']): Promise<unknown>;
declare function getProjectCategoriesHierarchy(organizationCode: OrganizationModel['code'], rootId: number): Promise<unknown>;
declare function postProjectCategoryBackground(organizationCode: OrganizationModel['code'], { id, body }: {
    id: ProjectCategoryModel['id'];
    body: any;
}): Promise<unknown>;
declare function patchProjectCategoryBackground(organizationCode: OrganizationModel['code'], { id, imageId, body }: {
    id: ProjectCategoryModel['id'];
    body: any;
    imageId: ImageModel['id'];
}): Promise<unknown>;
declare function deleteProjectCategoryBackground(organizationCode: OrganizationModel['code'], { category_id, id }: {
    category_id: ProjectCategoryModel['id'];
    id: any;
}): Promise<undefined>;
declare function getProjectCategoriesFollow(userId: number): Promise<PaginationResult<ProjectCategoryModel>>;
declare function postProjectCategoryFollow(userId: number, category_id: number): Promise<ProjectCategoryModel>;
declare function deleteProjectCategoryFollow(userId: number, category_follow_id: number): Promise<undefined>;

declare function addProjectMembers(projectId: ProjectSlugOrId, data: ProjectMembersAddInput): Promise<unknown>;
declare function deleteProjectMembers(projectId: ProjectSlugOrId, data: ProjectMembersDeleteInput): Promise<unknown>;
declare function deleteProjectMembersSelf(projectId: ProjectSlugOrId): Promise<unknown>;

type Config$7 = clientAPIOptions<QueryFilterProjectMessage>;
declare function getProjectMessages(projectId: ProjectSlugOrId, config?: Config$7): Promise<PaginationResult<ProjectMessageModel>>;
declare function postProjectMessage(projectId: ProjectSlugOrId, body: ProjectMessageForm): Promise<ProjectMessageModel>;
declare function getProjectMessage(body: ProjectMessageInputModel, config?: Config$7): Promise<ProjectMessageModel>;
declare function patchProjectMessage(projectId: ProjectSlugOrId, messageId: ProjectMessageModel['id'], body: ProjectMessageForm): Promise<ProjectMessageModel>;
declare function deleteProjectMessage(projectId: ProjectSlugOrId, projectMessageId: ProjectMessageModel['id'], config?: Config$7): Promise<undefined>;
declare function postProjectMessageImage(projectId: ProjectSlugOrId, body: FormData, config?: Config$7): Promise<any>;

type ConfigProject = clientAPIOptions<QueryFilterProject>;
type ConfigProjectLinked = clientAPIOptions<Partial<PaginationQuery>>;
type ConfigProjectMembers = clientAPIOptions<QueryFilterProjectMembers>;
declare function getAllProjects(config?: ConfigProject): Promise<PaginationResult<ProjectModel>>;
declare function getProject(projectSlugOrId: ProjectSlugOrId, config?: ConfigProject): Promise<ProjectModel>;
declare function postProject(body: ProjectForm): Promise<unknown>;
declare function patchProject(projectId: ProjectSlugOrId, project: ProjectForm): Promise<ProjectModel>;
declare function deleteProject(projectId: ProjectSlugOrId): Promise<undefined>;
declare function duplicateProject(projectId: ProjectSlugOrId): Promise<ProjectModel>;
declare function getLinkedProject(projectId: ProjectSlugOrId, config?: ConfigProjectLinked): Promise<PaginationResult<ProjectModel>>;
declare function addLinkedProject(projectId: ProjectSlugOrId, body: AddManyLinkedProjectInput): Promise<unknown>;
declare function deleteLinkedProject(projectId: ProjectSlugOrId, linkedProjectId: LinkedProject['id']): Promise<undefined>;
declare function getProjectMembers(projectSlugOrId: ProjectSlugOrId, config?: ConfigProjectMembers): Promise<PaginationResult<ProjectMemberModel>>;
declare function postProjectImage(projectId: ProjectSlugOrId, body: FormData): Promise<ImageModelCreated>;
declare function postProjectHeader(projectId: ProjectSlugOrId, body: any): Promise<ImageModelCreated>;
declare function patchProjectHeader(projectId: ProjectSlugOrId, imageId: ImageModel['id'], body: any): Promise<ImageModel>;
declare function lockUnlockProject({ project_id, context }: {
    project_id: ProjectSlugOrId;
    context: 'lock' | 'unlock';
}): Promise<null>;
type ConfigSimilar = clientAPIOptions<QueryFilterProjectSimilars>;
declare function getProjectSimilars(projectId: ProjectSlugOrId, config?: ConfigSimilar): Promise<PaginationResult<ProjectModel>>;
type ConfigProjectGroup = clientAPIOptions<Partial<PaginationQuery>>;
declare function getProjectGroups(projectId: ProjectSlugOrId, config?: ConfigProjectGroup): Promise<PaginationResult<PeopleGroupModel>>;

type Config$6 = clientAPIOptions;
type ConfigTab = clientAPIOptions<QueryFilterProjectTab>;
type ConfigTabItem = clientAPIOptions<QueryFilterProjectTabItem>;
declare function getAllProjectTab(projectId: ProjectSlugOrId, config?: ConfigTab): Promise<PaginationResult<ProjectTab>>;
declare function getProjectTab(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], config?: Config$6): Promise<ProjectTab>;
declare function createProjectTab(projectId: ProjectSlugOrId, body: ProjectTabForm, config?: Config$6): Promise<ProjectTab>;
declare function updateProjectTab(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], body: ProjectTabForm, config?: Config$6): Promise<ProjectTab>;
declare function deleteProjectTab(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], config?: Config$6): Promise<undefined>;
declare function getAllProjectTabItem(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], config?: ConfigTabItem): Promise<PaginationResult<ProjectTabItem>>;
declare function getProjectTabItem(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], projectTabItemId: ProjectTabItem['id'], config?: Config$6): Promise<ProjectTabItem>;
declare function createProjectTabItem(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], body: ProjectTabItemForm, config?: Config$6): Promise<ProjectTabItem>;
declare function updateProjectTabItem(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], projectTabItemId: ProjectTabItem['id'], body: ProjectTabItemForm, config?: Config$6): Promise<ProjectTabItem>;
declare function deleteProjectTabItem(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], projectTabItemId: ProjectTabItem['id'], config?: Config$6): Promise<undefined>;
declare function createProjectTabImage(projectId: ProjectSlugOrId, body: FormData, config?: Config$6): Promise<ImageModelCreated>;
declare function createProjectTabItemImage(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], body: FormData, config?: Config$6): Promise<ImageModelCreated>;

type Config$5 = clientAPIOptions<QueryFilterRecomendation>;
type ConfigPagination = clientAPIOptions<PaginationQuery>;
declare function getProjectsRecommendationsForUser(organizationCode: OrganizationModel['code'], config?: ConfigPagination): Promise<PaginationResult<ProjectModel>>;
declare function getRandomProjectsRecommendationsForUser(organizationCode: OrganizationModel['code'], config?: Config$5): Promise<ProjectModel[]>;
declare function getUsersRecommendationsForUser(organizationCode: OrganizationModel['code'], config?: ConfigPagination): Promise<PaginationResult<UserModel>>;
declare function getRandomUsersRecommendationsForUser(organizationCode: OrganizationModel['code'], config?: Config$5): Promise<UserModel[]>;

declare function reportBug(organizationCode: OrganizationModel['code'], formData: ReportForm): Promise<ReportModel>;
declare function reportAbuse(organizationCode: OrganizationModel['code'], formData: ReportForm): Promise<ReportModel>;
declare function contactUs(organizationCode: OrganizationModel['code'], formData: ContactForm): Promise<unknown>;

type Config$4 = clientAPIOptions<QueryFilterReviews>;
declare function getReviews(projectId: ProjectSlugOrId, config?: Config$4): Promise<PaginationResult<ReviewModel>>;
declare function postReview(projectId: ProjectSlugOrId, body: ReviewForm): Promise<ReviewModel>;
declare function patchReview(projectId: ProjectSlugOrId, reviewId: ReviewId, body: ReviewForm): Promise<ReviewModel>;
declare function deleteReview(projectId: ProjectSlugOrId, reviewId: ReviewId): Promise<undefined>;

type Config$3 = clientAPIOptions<QueryFilterSearch>;
declare function searchAll<T = SearchResultAll>(search: string, config?: Config$3): Promise<PaginationResult<T>>;
declare function searchProjects(search: string, config?: Config$3): Promise<PaginationResult<SearchResultProject>>;
declare function searchUser(search: string, config?: Config$3): Promise<PaginationResult<SearchResultUser>>;
declare function searchGroups(search: string, config?: Config$3): Promise<PaginationResult<SearchResultGroup>>;

type Config$2 = clientAPIOptions;
declare function getSkill(skillId: SkillModel['id'], options?: Config$2): Promise<unknown>;
type ConfigSearch = clientAPIOptions<QueryFilterSkill>;
declare function searchSkill(search: string, options?: ConfigSearch): Promise<unknown>;

type Config$1 = clientAPIOptions<{
    publication_status: string;
}>;
declare function getStats(orgaizationCode: OrganizationModel['code'], config?: Config$1): Promise<Stats>;

type Config = clientAPIOptions<PaginationQuery>;
declare function getAllOrgClassifications(organizationCode: OrganizationModel['code'], config?: Config): Promise<PaginationResult<TagModel>>;
declare function getOrgClassification(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], config?: Config): Promise<TagClassificationModel>;
declare function postOrgClassification(organizationCode: OrganizationModel['code'], classification: Partial<TagClassificationModel>): Promise<TagClassificationModel>;
declare function putOrgClassification(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], classification: Partial<TagClassificationModel>): Promise<TagClassificationModel>;
declare function patchOrgClassification(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], classification: Partial<TagClassificationModel>): Promise<TagClassificationModel>;
declare function deleteOrgClassification(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id']): Promise<undefined>;
type ConfigClassification = clientAPIOptions<QueryFilterTagClassification>;
declare function getOrgClassificationTags(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'] | 'enabled-for-projects' | 'enabled-for-skills', config?: ConfigClassification): Promise<PaginationResult<TagClassificationModel>>;
declare function getTags(ids: number[], config?: Config): Promise<TagModel[]>;
declare function getAllTagsById(ids: number[], config?: Config): Promise<PaginationResult<TagModel>>;
declare function putClassificationTag(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], tagtId: TagModel['id'], tag: TagModel): Promise<TagModel>;
declare function patchClassificationTag(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], tagtId: TagModel['id'], tag: TagModel): Promise<TagModel>;
declare function deleteClassificationTag(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], tagtId: TagModel['id']): Promise<TagModel>;
declare function postClassificationTag(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], tag: TagModel): Promise<TagModel>;

declare function getTemplates(organizationCode: OrganizationModel['code'], config?: clientAPIOptions<PaginationQuery>): Promise<PaginationResult<TemplateModel>>;
declare function getTemplate(organizationCode: OrganizationModel['code'], templateId: TemplateId, config?: clientAPIOptions): Promise<TemplateModel>;
declare function deleteTemplate(organizationCode: OrganizationModel['code'], templateId: TemplateId): Promise<undefined>;
declare function postTemplate(organizationCode: OrganizationModel['code'], body: object): Promise<TemplateModel>;
declare function postTemplateImage(organizationCode: OrganizationModel['code'], templateId: TemplateId, file: File): Promise<ImageModelCreated>;
declare function patchTemplate(organizationCode: OrganizationModel['code'], templateId: TemplateId, body: object): Promise<unknown>;

interface APIParams {
    limit?: number;
    offset?: number;
    organizations?: number[];
    search?: string;
    order_by?: string;
    ordering?: string;
}
interface SearchParams extends APIParams {
    category?: number;
    languages?: LanguageType[];
    member_role?: ProjectMemberRoleType[];
    members?: string[];
    ordering?: Ordering<keyof ProjectModel>;
    organizations?: number[];
    sdgs?: number[];
    tags?: string[];
    types?: string;
}

declare function _adaptParamsToGetQuery(params: SearchParams): {
    params: {
        [key: string]: string;
    };
};

export { type APIParams, type Config, type ConfigSimilar, type SearchParams, _adaptParamsToGetQuery, acceptAccessRequest, addFeaturedProject, addLinkedProject, addOrgMember, addParentGroup, addProjectMembers, applyAnnouncement, askMentorship, clientAPI, type clientAPIOptions, configureAPI, contactUs, createEvent, createFaq, createInstruction, createNews, createProjectCategory, createProjectGoal, createProjectTab, createProjectTabImage, createProjectTabItem, createProjectTabItemImage, declineAccessRequest, deleteAnnouncement, deleteBlogEntry, deleteClassificationTag, deleteComment, deleteEvent, deleteFaq, deleteFollow, deleteGroup, deleteGroupGallery, deleteInstruction, deleteInvitation, deleteLinkedProject, deleteLocation, deleteNews, deleteOrgClassification, deleteOrganizationFile, deleteProject, deleteProjectAttachmentFile, deleteProjectAttachmentLink, deleteProjectCategory, deleteProjectCategoryBackground, deleteProjectCategoryFollow, deleteProjectGoal, deleteProjectMembers, deleteProjectMembersSelf, deleteProjectMessage, deleteProjectTab, deleteProjectTabItem, deleteReview, deleteTemplate, deleteUser, deleteUserAttachmentFile, deleteUserAttachmentLink, deleteUserSkill, duplicateProject, getAccessRequests, getAllEvents, getAllInstructions, getAllNews, getAllOrgClassifications, getAllProjectCategories, getAllProjectTab, getAllProjectTabItem, getAllProjects, getAllTagsById, getAnnouncements, getBlogEntries, getBlogEntry, getComment, getComments, getEvent, getFaq, getFeaturedProjects, getGroup, getGroupAllLocations, getGroupEvent, getGroupGallery, getGroupLocation, getGroupMember, getGroupNews, getGroupProject, getGroupResearchDocument, getGroupResearchDocumentAnalytics, getGroupSimilar, getHierarchyGroups, getInstruction, getInvitation, getInvitations, getLinkedProject, getLocations, getMentorshipDetails, getNews, getNewsfeed, getNotifications, getOrgClassification, getOrgClassificationTags, getOrgUnits, getOrganizationByCode, getOrganizationFile, getOrganizationFiles, getOrganizations, getOwnResearchDocument, getOwnResearchDocumentAnalytics, getProject, getProjectAnnouncements, getProjectAttachmentFile, getProjectAttachmentFiles, getProjectAttachmentLink, getProjectAttachmentLinks, getProjectCategoriesFollow, getProjectCategoriesHierarchy, getProjectCategory, getProjectFollows, getProjectGoal, getProjectGoals, getProjectGroups, getProjectLocation, getProjectLocations, getProjectMembers, getProjectMessage, getProjectMessages, getProjectSimilars, getProjectTab, getProjectTabItem, getProjectsRecommendationsForUser, getRandomProjectsRecommendationsForUser, getRandomUsersRecommendationsForUser, getResearchDocumentSimilars, getReviews, getRootProjectCategory, getSkill, getStats, getSubGroup, getTags, getTemplate, getTemplates, getUser, getUserAttachmentFile, getUserAttachmentLink, getUserFollows, getUserMentorship, getUsersRecommendationsForUser, lockUnlockProject, offerMentorship, patchAnnouncement, patchBlogEntry, patchClassificationTag, patchComment, patchEvent, patchFaq, patchGroup, patchGroupHeader, patchGroupLocation, patchInstruction, patchLocation, patchNews, patchNewsHeader, patchOrgClassification, patchOrganisationBanner, patchOrganization, patchOrganizationFile, patchProject, patchProjectAttachmentFile, patchProjectAttachmentLink, patchProjectCategory, patchProjectCategoryBackground, patchProjectGoal, patchProjectHeader, patchProjectMessage, patchReview, patchTemplate, patchTermsAndConditions, patchUser, patchUserAttachmentFile, patchUserAttachmentLink, patchUserPicture, patchUserPrivacy, patchUserSkill, postAccessRequest, postAnnouncement, postBlogEntry, postBlogEntryImage, postClassificationTag, postComment, postCommentImage, postFaqImage, postFollow, postFollowMany, postGroup, postGroupGallery, postGroupHeader, postGroupLocation, postGroupMembers, postGroupProjects, postInvitation, postLocations, postNewsHeader, postOrgClassification, postOrganisationBanner, postOrganisationLogo, postOrganizationFiles, postOrganizationImage, postProject, postProjectAttachmentFiles, postProjectAttachmentLinks, postProjectCategoryBackground, postProjectCategoryFollow, postProjectHeader, postProjectImage, postProjectMessage, postProjectMessageImage, postReview, postTemplate, postTemplateImage, postUser, postUserAttachmentFile, postUserAttachmentLink, postUserPicture, postUserSkill, postUserWithInvitation, putClassificationTag, putEvent, putFaq, putInstruction, putNews, putOrgClassification, putProjectCategory, removeFeaturedProject, removeGroupLocation, removeGroupMember, removeGroupProject, removeOrgMember, reportAbuse, reportBug, resetUserPassword, respondMentorship, searchAll, searchGroups, searchPeopleAdmin, searchPeopleByExactMail, searchPeopleProject, searchProjects, searchResearcher, searchSkill, searchUser, updateProjectTab, updateProjectTabItem };
