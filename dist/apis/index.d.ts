import { f as AnnouncementId, c as AnnouncementApplyForm, ad as QueryFilterAnnouncement, h as AnnouncementModel, e as AnnouncementForm, j as AttachmentFileId, k as AttachmentFileInput, l as AttachmentFileModel, m as AttachmentForm, o as AttachmentLinkId, p as AttachmentLinkInput, q as AttachmentLinkModel, t as BlogEntryId, ae as QueryFilterBlogEntry, u as BlogEntryModel, s as BlogEntryForm, C as CommentModel, af as QueryFilterComments, a4 as ProjectMessageForm, x as FollowInput, z as FollowModel, a as AddManyFollowedProject, I as GoalForm, J as GoalModel, b as AddParentGroupModelInput, K as GroupMember, Y as PostGroupData, A as AddGroupMembers, Z as PostGroupProjects, aq as RemoveGroupMember, P as InvitationModel, Q as InvitationModelInput, aB as SkillModel, R as Mentoring, T as NewsfeedModel, U as NotificationModel, W as NotificationSettingsModel, V as NotificationSettingsForm, M as GroupModelInput, ar as RemoveGroupModelInput, X as PeopleModel, D as FollowOutput, a2 as ProjectMembersAddInput, a3 as ProjectMembersDeleteInput, a6 as ProjectMessageModel, ai as QueryFilterProjectMessage, a5 as ProjectMessageInputModel, ag as QueryFilterProject, ah as QueryFilterProjectMembers, _ as ProjectMemberModel, a8 as ProjectTabForm, a7 as ProjectTab, aa as ProjectTabItemForm, a9 as ProjectTabItem, aj as QueryFilterProjectTab, ak as QueryFilterProjectTabItem, al as QueryFilterRecomendation, v as ContactForm, as as ReportForm, av as ReviewId, am as QueryFilterReviews, aw as ReviewModel, au as ReviewForm, ax as SearchResultAll, an as QueryFilterSearch, ay as SearchResultGroup, az as SearchResultProject, aA as SearchResultUser, ao as QueryFilterSkill, aC as Stats, aD as TagClassificationModel, ap as QueryFilterTagClassification } from '../recommendations.model-JUZloWOr.js';
import { ae as ProjectSlugOrId, b1 as UserSlugOrId, V as PeopleGroupIdOrSlug, au as ResearcherDocumentType, as as ResearcherDocument, at as ResearcherDocumentAnalytics, ar as Researcher, S as OrganizationModel, ao as QueryFilterResearcher, g as EventInput, i as EventModel, f as EventIdOrSlug, ai as QueryFilterEvent, aj as QueryFilterGroup, W as PeopleGroupModel, x as LocationModel, M as NewsModel, a8 as ProjectModel, ak as QueryFilterGroupHierarchy, B as BaseLocationModel, o as InstructionInput, p as InstructionModel, n as InstructionId, al as QueryFilterInstruction, v as LocationId, u as LocationGeneral, a6 as ProjectLocationForm, J as NewsInput, am as QueryFilterNews, U as OrganizationPatchInput, aH as TermsAndConditions, b0 as UserSkillModel, aZ as UserModel, a_ as UserPatchModel, a$ as UserPrivacyPatchModel, Y as PrivacySettings, _ as ProjectCategoryCreateInput, a0 as ProjectCategoryModel, a2 as ProjectCategoryPatchInput, a3 as ProjectCategoryPutInput, an as QueryFilterProjectSimilars, A as AddManyLinkedProjectInput, r as LinkedProject, a4 as ProjectForm, aC as TagModel, aF as TemplateId, aG as TemplateModel, aE as TemplateForm, q as LanguageType, a7 as ProjectMemberRoleType } from '../instruction.model-C4gOlUmx.js';
import { b as PaginationResult, P as PaginationQuery, d as ImageModelCreated, I as ImageModel, B as BaseModel, a as Ordering, e as ImageOrganizationInput } from '../query-vMMsxjBM.js';
import { ResponseType, FetchOptions, $Fetch } from 'ofetch';
import '../icons-CQJqJYOy.js';

type OFetchOrgiginalOptions<T extends ResponseType = 'json'> = FetchOptions<T>;
type ClientAPIOptions<Query extends OFetchOrgiginalOptions['query'] = OFetchOrgiginalOptions['query'], Body extends OFetchOrgiginalOptions['body'] = OFetchOrgiginalOptions['body']> = OFetchOrgiginalOptions & {
    query?: Query;
    body?: Body;
    noError?: boolean;
};
declare let $$defaultOptions: () => ClientAPIOptions;
/**
 * set custom fetch instance
 *
 * @function
 * @name configureClientAPI
 * @kind variable
 * @param {} fetcher
 * @returns {void}
 * @exports
 */
declare const configureClientAPI: (fetcher: $Fetch) => void;
/**
 * set callback running before each request
 *
 * @function
 * @name configureAPI
 * @kind variable
 * @param {() => ClientAPIOptions<Record<string} callback
 * @param {Record<string} any> | undefined
 * @param {any} any> | BodyInit | null | undefined>
 * @returns {void}
 * @exports
 */
declare const configureOptionsAPI: (callback: typeof $$defaultOptions) => void;
declare const clientAPI: <Result>(url: string, options?: ClientAPIOptions) => Promise<Result>;

type Config$d = ClientAPIOptions<QueryFilterAnnouncement>;
declare function getAnnouncements(config?: Config$d): Promise<PaginationResult<AnnouncementModel>>;
declare function getProjectAnnouncements(projectId: ProjectSlugOrId, config?: Config$d): Promise<PaginationResult<AnnouncementModel>>;
declare function postAnnouncement(projectId: ProjectSlugOrId, body: AnnouncementForm, config?: Config$d): Promise<AnnouncementModel>;
declare function patchAnnouncement(projectId: ProjectSlugOrId, announcementId: AnnouncementId, body: AnnouncementForm, config?: Config$d): Promise<AnnouncementModel>;
declare function deleteAnnouncement(projectId: ProjectSlugOrId, announcementId: AnnouncementId, config?: Config$d): Promise<void>;
declare function applyAnnouncement(projectId: ProjectSlugOrId, announcementId: AnnouncementId, body: AnnouncementApplyForm, config?: ClientAPIOptions): Promise<void>;

type Config$c = ClientAPIOptions<Partial<PaginationQuery>>;
declare function getProjectAttachmentFiles(projectId: ProjectSlugOrId, config?: Config$c): Promise<PaginationResult<AttachmentFileModel>>;
declare function getProjectAttachmentFile(body: AttachmentFileInput): Promise<AttachmentFileModel>;
declare function postProjectAttachmentFiles(projectId: ProjectSlugOrId, body: FormData): Promise<AttachmentFileModel>;
declare function patchProjectAttachmentFile(projectId: ProjectSlugOrId, fileId: AttachmentFileId, body: FormData): Promise<AttachmentFileModel>;
declare function deleteProjectAttachmentFile(projectId: ProjectSlugOrId, fileId: AttachmentFileId): Promise<void>;
declare function getUserAttachmentFile(userId: UserSlugOrId, options: any): Promise<PaginationResult<AttachmentFileModel>>;
declare function postUserAttachmentFile(userId: UserSlugOrId, data: AttachmentForm): Promise<AttachmentFileModel>;
declare function patchUserAttachmentFile(userId: UserSlugOrId, fileId: number, data: Partial<AttachmentFileModel>): Promise<AttachmentFileModel>;
declare function deleteUserAttachmentFile(userId: UserSlugOrId, fileId: number): Promise<void>;

type Config$b = ClientAPIOptions<Partial<PaginationQuery>>;
declare function getProjectAttachmentLinks(projectId: ProjectSlugOrId, config?: Config$b): Promise<PaginationResult<AttachmentLinkModel>>;
declare function getProjectAttachmentLink(body: AttachmentLinkInput): Promise<AttachmentLinkModel>;
declare function postProjectAttachmentLinks(projectId: ProjectSlugOrId, body: AttachmentForm): Promise<AttachmentLinkModel>;
declare function patchProjectAttachmentLink(projectId: ProjectSlugOrId, linkId: AttachmentLinkId, body: AttachmentForm): Promise<AttachmentLinkModel>;
declare function deleteProjectAttachmentLink(projectId: ProjectSlugOrId, linkId: AttachmentLinkId): Promise<void>;
declare function getUserAttachmentLink(userId: UserSlugOrId, options?: ClientAPIOptions): Promise<PaginationResult<AttachmentLinkModel>>;
declare function postUserAttachmentLink(userId: UserSlugOrId, body: AttachmentLinkModel, options?: ClientAPIOptions): Promise<AttachmentLinkModel>;
declare function patchUserAttachmentLink(userId: UserSlugOrId, linkId: number, body: Partial<AttachmentLinkModel>): Promise<AttachmentLinkModel>;
declare function deleteUserAttachmentLink(userId: UserSlugOrId, linkId: number): Promise<void>;

type ConfigBlogEntry = ClientAPIOptions;
type ConfigBlogEntries = ClientAPIOptions<QueryFilterBlogEntry>;
declare function getBlogEntries(projectId: ProjectSlugOrId, config?: ConfigBlogEntries): Promise<PaginationResult<BlogEntryModel>>;
declare function getBlogEntry(projectId: ProjectSlugOrId, blogEntryId: BlogEntryId, config?: ConfigBlogEntry): Promise<BlogEntryModel>;
declare function postBlogEntry(projectId: ProjectSlugOrId, body: BlogEntryForm): Promise<BlogEntryModel>;
declare function patchBlogEntry(projectId: ProjectSlugOrId, blogEntryId: BlogEntryId, body: BlogEntryForm): Promise<BlogEntryModel>;
declare function deleteBlogEntry(projectId: ProjectSlugOrId, blogEntryId: BlogEntryId): Promise<void>;
declare function postBlogEntryImage(projectId: ProjectSlugOrId, body: FormData, config?: ConfigBlogEntry): Promise<ImageModelCreated>;

type Config$a = ClientAPIOptions<QueryFilterComments>;
declare function getComments(projectId: ProjectSlugOrId, config?: Config$a): Promise<PaginationResult<CommentModel>>;
declare function postComment(projectId: ProjectSlugOrId, comment: ProjectMessageForm, config?: Config$a): Promise<CommentModel>;
declare function getComment(projectId: ProjectSlugOrId, commentId: CommentModel['id'], config?: Config$a): Promise<CommentModel>;
declare function patchComment(projectId: ProjectSlugOrId, commentId: CommentModel['id'], body: ProjectMessageForm, config?: Config$a): Promise<CommentModel>;
declare function deleteComment(projectId: ProjectSlugOrId, commentId: CommentModel['id'], config?: Config$a): Promise<void>;
declare function postCommentImage(projectId: ProjectSlugOrId, body: FormData, config?: Config$a): Promise<ImageModelCreated>;

declare function getOwnResearchDocument(organisationCode: string, researchId: Researcher['id'], ResearcherdocumentType: ResearcherDocumentType, config?: ClientAPIOptions): Promise<PaginationResult<ResearcherDocument>>;
declare function getGroupResearchDocument(organisationCode: string, groupId: PeopleGroupIdOrSlug, ResearcherdocumentType: ResearcherDocumentType, config?: ClientAPIOptions): Promise<PaginationResult<ResearcherDocument>>;
declare function getOwnResearchDocumentAnalytics(organisationCode: string, researchId: Researcher['id'], ResearcherdocumentType: ResearcherDocumentType, config?: ClientAPIOptions): Promise<ResearcherDocumentAnalytics>;
declare function getGroupResearchDocumentAnalytics(organisationCode: string, groupId: PeopleGroupIdOrSlug, ResearcherdocumentType: ResearcherDocumentType, config?: ClientAPIOptions): Promise<ResearcherDocumentAnalytics>;
declare function getResearchDocumentSimilars(organisationCode: string, documentId: ResearcherDocument['id'], config?: ClientAPIOptions): Promise<PaginationResult<ResearcherDocument>>;
type ConfigSearch$1 = ClientAPIOptions<QueryFilterResearcher>;
type ResearcherSearchResponse = {
    [key: string | number]: Researcher;
};
declare function searchResearcher(organizationCode: OrganizationModel['code'], config?: ConfigSearch$1): Promise<PaginationResult<ResearcherSearchResponse>>;

type ConfigEvent = ClientAPIOptions<QueryFilterEvent>;
declare function getAllEvents(organizationCode: OrganizationModel['code'], config?: ConfigEvent): Promise<PaginationResult<EventModel>>;
declare function getEvent(organizationCode: OrganizationModel['code'], idOrSlug: EventIdOrSlug, config?: ConfigEvent): Promise<EventModel>;
declare function createEvent(organizationCode: OrganizationModel['code'], body: EventInput): Promise<EventModel>;
declare function putEvent(organizationCode: OrganizationModel['code'], idOrSlug: EventIdOrSlug, body: EventInput): Promise<EventModel>;
declare function patchEvent(organizationCode: OrganizationModel['code'], idOrSlug: EventIdOrSlug, body: EventInput): Promise<EventModel>;
declare function deleteEvent(organizationCode: OrganizationModel['code'], idOrSlug: EventIdOrSlug): Promise<void>;

declare function getProjectFollows(body: FollowInput): Promise<FollowModel[]>;
declare function getUserFollows(body: FollowInput, params: any): Promise<FollowModel[]>;
declare function postFollow(follow: FollowInput): Promise<FollowModel>;
declare function postFollowMany({ id, body }: {
    id: string;
    body: AddManyFollowedProject;
}): Promise<FollowModel[]>;
declare function deleteFollow(follow: FollowInput): Promise<void>;

type ConfigGoal = ClientAPIOptions;
declare function getProjectGoals(projectId: ProjectSlugOrId, config?: ConfigGoal): Promise<PaginationResult<GoalModel>>;
declare function getProjectGoal(projectId: ProjectSlugOrId, goalId: GoalModel['id'], config?: ConfigGoal): Promise<GoalModel>;
declare function createProjectGoal(projectId: ProjectSlugOrId, body: GoalForm, config?: ClientAPIOptions): Promise<GoalModel>;
declare function patchProjectGoal(projectId: ProjectSlugOrId, goalId: GoalModel['id'], body: GoalForm, config?: ClientAPIOptions): Promise<GoalModel>;
declare function deleteProjectGoal(projectId: ProjectSlugOrId, goalId: GoalModel['id'], config?: ClientAPIOptions): Promise<void>;

declare function getOrgUnits(config?: ClientAPIOptions): Promise<string[]>;

declare function getHierarchyGroups(organizationCode: OrganizationModel['code'], config?: ClientAPIOptions<QueryFilterGroupHierarchy>): Promise<PeopleGroupModel>;
declare function postGroup(organizationCode: OrganizationModel['code'], groupData: PostGroupData): Promise<PeopleGroupModel>;
declare function addParentGroup(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, body: AddParentGroupModelInput): Promise<unknown>;
declare function getGroup(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: ClientAPIOptions<QueryFilterGroup>): Promise<PeopleGroupModel>;
declare function patchGroup(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, groupData: Partial<PostGroupData>): Promise<PeopleGroupModel>;
declare function deleteGroup(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug): Promise<void>;
declare function getGroupMember(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: ClientAPIOptions): Promise<PaginationResult<GroupMember>>;
declare function postGroupMembers(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, body: AddGroupMembers): Promise<unknown>;
declare function removeGroupMember(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, body: RemoveGroupMember): Promise<unknown>;
declare function getGroupProject(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: ClientAPIOptions): Promise<PaginationResult<ProjectModel>>;
declare function postGroupProjects(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, projectsData: PostGroupProjects): Promise<unknown>;
declare function removeGroupProject(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, projectsData: PostGroupProjects): Promise<unknown>;
declare function postGroupHeader(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, body: FormData, config?: ClientAPIOptions): Promise<ImageModelCreated>;
declare function patchGroupHeader(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, body: FormData, config?: ClientAPIOptions): Promise<ImageModelCreated>;
declare function deleteGroupHeader(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, imageId: ImageModel['id'], config?: ClientAPIOptions): Promise<void>;
declare function getGroupSimilar(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: ClientAPIOptions): Promise<PaginationResult<PeopleGroupModel>>;
declare function getSubGroup(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: ClientAPIOptions): Promise<PaginationResult<PeopleGroupModel>>;
declare function getGroupAllLocations(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: ClientAPIOptions): Promise<LocationModel[]>;
declare function getGroupLocation(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: ClientAPIOptions): Promise<PaginationResult<LocationModel>>;
declare function removeGroupLocation(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, locationId: number, config?: ClientAPIOptions): Promise<PaginationResult<LocationModel>>;
declare function patchGroupLocation(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, locationId: number, payload: Partial<BaseLocationModel>, config?: ClientAPIOptions): Promise<PaginationResult<LocationModel>>;
declare function postGroupLocation(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, payload: BaseLocationModel, config?: ClientAPIOptions): Promise<PaginationResult<LocationModel>>;
declare function getGroupGallery(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: ClientAPIOptions): Promise<PaginationResult<ImageModel>>;
declare function deleteGroupGallery(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, imageId: number, config?: ClientAPIOptions): Promise<void>;
declare function postGroupGallery(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, body: FormData, config?: ClientAPIOptions): Promise<ImageModelCreated>;
declare function getGroupNews(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: ClientAPIOptions): Promise<PaginationResult<NewsModel>>;
declare function getGroupEvent(organizationCode: OrganizationModel['code'], groupId: PeopleGroupIdOrSlug, config?: ClientAPIOptions): Promise<PaginationResult<EventModel>>;

type ConfigInstruction = ClientAPIOptions<QueryFilterInstruction>;
declare function getAllInstructions(organizationCode: OrganizationModel['code'], config?: ConfigInstruction): Promise<PaginationResult<InstructionModel>>;
declare function getInstruction(organizationCode: OrganizationModel['code'], idOrSlug: InstructionId, config?: ConfigInstruction): Promise<InstructionModel>;
declare function createInstruction(organizationCode: OrganizationModel['code'], body: InstructionInput): Promise<InstructionModel>;
declare function putInstruction(organizationCode: OrganizationModel['code'], idOrSlug: InstructionId, body: InstructionInput): Promise<InstructionModel>;
declare function patchInstruction(organizationCode: OrganizationModel['code'], idOrSlug: InstructionId, body: InstructionInput): Promise<InstructionModel>;
declare function deleteInstruction(organizationCode: OrganizationModel['code'], idOrSlug: InstructionId): Promise<void>;

declare function getInvitation(organizationCode: OrganizationModel['code'], token: string, config?: ClientAPIOptions): Promise<InvitationModel>;
declare function getInvitations(organizationCode: OrganizationModel['code'], config?: ClientAPIOptions): Promise<PaginationResult<InvitationModel>>;
declare function postInvitation(organizationCode: OrganizationModel['code'], formData: InvitationModelInput, config?: ClientAPIOptions): Promise<InvitationModel>;
declare function deleteInvitation(organizationCode: OrganizationModel['code'], id: OrganizationModel['id'], config?: ClientAPIOptions): Promise<void>;

type Config$9 = ClientAPIOptions;
declare function getProjectLocations(projectId: ProjectSlugOrId, config?: Config$9): Promise<LocationModel[]>;
declare function getProjectLocation(projectId: ProjectSlugOrId, locationId: LocationId, config?: Config$9): Promise<LocationModel>;
declare function postLocations(projectId: ProjectSlugOrId, body: ProjectLocationForm): Promise<LocationModel>;
declare function patchLocation(projectId: ProjectSlugOrId, locationId: LocationId, body: ProjectLocationForm): Promise<LocationModel>;
declare function deleteLocation(projectId: ProjectSlugOrId, locationId: LocationId): Promise<void>;
declare function getLocations(organizationCode: string, config?: Config$9): Promise<LocationGeneral[]>;

declare function getUserMentorship(organizationCode: OrganizationModel['code'], config?: ClientAPIOptions): Promise<PaginationResult<Mentoring>>;
declare function getMentorshipDetails(organizationCode: OrganizationModel['code'], mentorshipId: any): Promise<unknown>;
declare function offerMentorship(organizationCode: OrganizationModel['code'], skill: SkillModel, payload: any): Promise<unknown>;
declare function askMentorship(organizationCode: OrganizationModel['code'], skill: SkillModel, payload: any): Promise<unknown>;
declare function respondMentorship(organizationCode: OrganizationModel['code'], mentorshipId: Mentoring['id'], payload: any): Promise<unknown>;

declare function getNewsfeed(organizationCode: OrganizationModel['code'], config?: ClientAPIOptions): Promise<PaginationResult<NewsfeedModel>>;

type ConfigNews = ClientAPIOptions<QueryFilterNews>;
declare function getAllNews(organizationCode: OrganizationModel['code'], config?: ConfigNews): Promise<PaginationResult<NewsModel>>;
declare function getNews(organizationCode: OrganizationModel['code'], newsId: NewsModel['id'], config?: ClientAPIOptions): Promise<NewsModel>;
declare function createNews(organizationCode: OrganizationModel['code'], body: NewsInput, config?: ClientAPIOptions): Promise<NewsModel>;
declare function putNews(organizationCode: OrganizationModel['code'], newsId: NewsModel['id'], body: NewsInput, config?: ClientAPIOptions): Promise<NewsModel>;
declare function patchNews(organizationCode: OrganizationModel['code'], newsId: NewsModel['id'], body: NewsInput, config?: ClientAPIOptions): Promise<NewsModel>;
declare function deleteNews(organizationCode: OrganizationModel['code'], newsId: NewsModel['id'], config?: ClientAPIOptions): Promise<void>;
declare function postNewsHeader(organizationCode: OrganizationModel['code'], newsId: NewsModel['id'], body: FormData, config?: ClientAPIOptions): Promise<ImageModelCreated>;
declare function patchNewsHeader(organizationCode: OrganizationModel['code'], newsId: NewsModel['id'], imageId: ImageModel['id'], body: FormData, config?: ClientAPIOptions): Promise<ImageModelCreated>;
declare function deleteNewsHeader(organizationCode: OrganizationModel['code'], newsId: NewsModel['id'], imageId: ImageModel['id'], config?: ClientAPIOptions): Promise<void>;

declare function getNotifications(params: any, organisationCode: OrganizationModel['code']): Promise<PaginationResult<NotificationModel>>;
declare function getUserNotificationSettings(userId: UserSlugOrId, config?: ClientAPIOptions): Promise<NotificationSettingsModel>;
declare function patchUserNotificationSettings(userId: UserSlugOrId, body: NotificationSettingsForm, config?: ClientAPIOptions): Promise<NotificationSettingsModel>;

type Config$8 = ClientAPIOptions;
type ConfigPagiations = ClientAPIOptions<Partial<PaginationQuery>>;
declare function getOrganizationFiles(organizationCode: string, config?: ConfigPagiations): Promise<PaginationResult<AttachmentFileModel>>;
declare function getOrganizationFile(organizationCode: OrganizationModel['code'], attachmentId: AttachmentFileModel['id'], config?: Config$8): Promise<AttachmentFileModel>;
declare function postOrganizationFiles(organizationCode: OrganizationModel['code'], body: FormData): Promise<AttachmentFileModel>;
declare function patchOrganizationFile(organizationCode: OrganizationModel['code'], attachmentId: AttachmentFileModel['id'], body: FormData): Promise<AttachmentFileModel>;
declare function deleteOrganizationFile(organizationCode: OrganizationModel['code'], attachmentId: AttachmentFileModel['id']): Promise<void>;

interface AccessRequestModel extends BaseModel {
    id?: number;
    organization: OrganizationModel['code'];
    created_at: string;
    status: 'pending' | 'accepted' | 'declined';
    user: UserSlugOrId[];
    email: string;
    given_name: string;
    family_name: string;
    job: string;
    message: string;
}
type AccessType = {
    status: 'error' | 'success' | 'warning';
    message: string;
};
type AccessRequestResult = {
    id: number;
    email: string;
    message: string;
};
type AccessRequest = {
    [key in AccessType['status']]: AccessRequest[];
};
type QueryFilterAccessRequests = Partial<{
    status: AccessRequestModel['status'];
    ordering: Ordering<'status' | 'created_at'>;
}>;

declare function patchOrganization(organisationCode: OrganizationModel['code'], organization: OrganizationPatchInput | FormData): Promise<OrganizationModel>;
declare function getOrganizationByCode(organisationCode: OrganizationModel['code'], config?: ClientAPIOptions): Promise<OrganizationModel>;
declare function getOrganizations(config?: ClientAPIOptions): Promise<PaginationResult<OrganizationModel>>;
declare function postOrganisationBanner({ code, body, }: {
    code: OrganizationModel['code'];
    body: FormData;
}): Promise<ImageModelCreated>;
declare function patchOrganisationBanner(organisationCode: OrganizationModel['code'], imageId: ImageModel['id'], body: FormData, config?: ClientAPIOptions): Promise<ImageModelCreated>;
declare function deleteOrganisationBanner(organizationCode: OrganizationModel['code'], imageId: ImageModel['id'], config?: ClientAPIOptions): Promise<void>;
declare function postOrganisationLogo({ code, body, }: {
    code: OrganizationModel['code'];
    body: ImageOrganizationInput | FormData;
}): Promise<ImageModelCreated>;
declare function deleteOrganisationLogo(organizationCode: OrganizationModel['code'], imageId: ImageModel['id'], config?: ClientAPIOptions): Promise<void>;
declare function addOrgMember({ org_id, body }: {
    org_id: number;
    body: GroupModelInput[];
}): Promise<unknown>;
declare function removeOrgMember({ org_id, body, }: {
    org_id: number;
    body: RemoveGroupModelInput[];
}): Promise<unknown>;
declare function postAccessRequest(organizationCode: OrganizationModel['code'], body: any): Promise<AccessRequestModel>;
declare function getAccessRequests(organizationCode: OrganizationModel['code'], config: ClientAPIOptions<QueryFilterAccessRequests>): Promise<PaginationResult<AccessRequestModel>>;
declare function declineAccessRequest(organizationCode: OrganizationModel['code'], params: any): Promise<AccessRequest>;
declare function acceptAccessRequest(organizationCode: OrganizationModel['code'], params: any): Promise<AccessRequest>;
type ConfigFeaturedProject = ClientAPIOptions;
type FeaturedProjectBody = {
    featured_projects_ids: ProjectSlugOrId[];
};
declare function getFeaturedProjects(organizationCode: OrganizationModel['code'], config?: ConfigFeaturedProject): Promise<PaginationResult<ProjectModel>>;
declare function addFeaturedProject(organizationCode: OrganizationModel['code'], body: FeaturedProjectBody, config?: ConfigFeaturedProject): Promise<ProjectModel>;
declare function removeFeaturedProject(organizationCode: OrganizationModel['code'], body: FeaturedProjectBody, config?: ConfigFeaturedProject): Promise<void>;
declare function postOrganizationImage({ orgCode, body, }: {
    orgCode: OrganizationModel['code'];
    body: any;
}): Promise<ImageModelCreated>;
declare function patchTermsAndConditions(organization: OrganizationModel, content: TermsAndConditions['displayed_content'], config?: ClientAPIOptions): Promise<TermsAndConditions>;

declare function getUser(userId: UserSlugOrId, config?: ClientAPIOptions): Promise<UserModel>;
declare function postUser(organizationCode: OrganizationModel['code'], body: FormData, config?: ClientAPIOptions): Promise<UserModel>;
declare function postUserWithInvitation(organizationCode: OrganizationModel['code'], inviteToken: string, body: FormData, config?: ClientAPIOptions): Promise<UserModel>;
declare function searchPeopleAdmin(organizationId: OrganizationModel['id'], config: ClientAPIOptions): Promise<PaginationResult<PeopleModel>>;
declare function searchPeopleByExactMail(email: string, params: object, config?: ClientAPIOptions): Promise<UserModel>;
declare function patchUser(userId: UserSlugOrId, body: UserPatchModel, config?: ClientAPIOptions): Promise<UserModel>;
declare function patchUserPicture(userId: UserSlugOrId, pictureId: ImageModel['id'], body: FormData, config?: ClientAPIOptions): Promise<ImageModelCreated>;
declare function deleteUser(userId: UserSlugOrId, config?: ClientAPIOptions): Promise<void>;
declare function postUserPicture(userId: UserSlugOrId, body: FormData, config?: ClientAPIOptions): Promise<ImageModelCreated>;
declare function deleteUserPicture(id: UserSlugOrId, imageId: ImageModel['id'], config?: ClientAPIOptions): Promise<void>;
declare function patchUserPrivacy(userId: UserSlugOrId, body: UserPrivacyPatchModel, config?: ClientAPIOptions): Promise<PrivacySettings>;
declare function postUserSkill(userId: UserSlugOrId, body: UserSkillModel, config?: ClientAPIOptions): Promise<UserSkillModel>;
declare function patchUserSkill(userId: UserSlugOrId, skillId: UserSkillModel['id'], body: UserPrivacyPatchModel, config?: ClientAPIOptions): Promise<UserSkillModel>;
declare function deleteUserSkill(userId: UserSlugOrId, skillId: UserSkillModel['id'], config?: ClientAPIOptions): Promise<void>;
declare function resetUserPassword(organizationCode: OrganizationModel['code'], userId: UserSlugOrId, config?: ClientAPIOptions): Promise<{
    detail: "Email sent";
}>;

declare function getProjectCategory(organizationCode: OrganizationModel['code'], categoryId: ProjectCategoryModel['id'], config?: ClientAPIOptions): Promise<ProjectCategoryModel>;
declare function createProjectCategory(organizationCode: OrganizationModel['code'], body: ProjectCategoryCreateInput | FormData, config?: ClientAPIOptions): Promise<ProjectCategoryModel>;
declare function putProjectCategory(organizationCode: OrganizationModel['code'], categoryId: ProjectCategoryModel['id'], body: ProjectCategoryPutInput | FormData, config?: ClientAPIOptions): Promise<ProjectCategoryModel>;
declare function patchProjectCategory(organizationCode: OrganizationModel['code'], categoryId: ProjectCategoryModel['id'], body: ProjectCategoryPatchInput | FormData, config?: ClientAPIOptions): Promise<ProjectCategoryModel>;
declare function deleteProjectCategory(organizationCode: OrganizationModel['code'], categoryId: ProjectCategoryModel['id'], config?: ClientAPIOptions): Promise<void>;
declare function getAllProjectCategories(organizationCode: OrganizationModel['code'], config?: ClientAPIOptions): Promise<PaginationResult<ProjectCategoryModel>>;
declare function getRootProjectCategory(organizationCode: OrganizationModel['code'], config?: ClientAPIOptions): Promise<ProjectCategoryModel>;
declare function getProjectCategoriesHierarchy(organizationCode: OrganizationModel['code'], categoryId: ProjectCategoryModel['id'], config?: ClientAPIOptions): Promise<ProjectCategoryModel>;
declare function postProjectCategoryBackground(organizationCode: OrganizationModel['code'], { id, body }: {
    id: ProjectCategoryModel['id'];
    body: any;
}, config?: ClientAPIOptions): Promise<ImageModelCreated>;
declare function patchProjectCategoryBackground(organizationCode: OrganizationModel['code'], { id, imageId, body }: {
    id: ProjectCategoryModel['id'];
    body: any;
    imageId: ImageModel['id'];
}, config?: ClientAPIOptions): Promise<ImageModelCreated>;
declare function deleteProjectCategoryBackground(organizationCode: OrganizationModel['code'], { category_id, id }: {
    category_id: ProjectCategoryModel['id'];
    id: any;
}, config?: ClientAPIOptions): Promise<void>;
declare function getProjectCategoriesFollow(userId: UserSlugOrId, config?: ClientAPIOptions): Promise<PaginationResult<FollowOutput>>;
declare function postProjectCategoryFollow(userId: UserSlugOrId, category_id: number, config?: ClientAPIOptions): Promise<FollowOutput>;
declare function deleteProjectCategoryFollow(userId: UserSlugOrId, category_follow_id: number, config?: ClientAPIOptions): Promise<void>;

declare function addProjectMembers(projectId: ProjectSlugOrId, body: ProjectMembersAddInput, config?: ClientAPIOptions): Promise<void>;
declare function deleteProjectMembers(projectId: ProjectSlugOrId, body: ProjectMembersDeleteInput, config?: ClientAPIOptions): Promise<void>;
declare function deleteProjectMembersSelf(projectId: ProjectSlugOrId, config?: ClientAPIOptions): Promise<void>;

type Config$7 = ClientAPIOptions<QueryFilterProjectMessage>;
declare function getProjectMessages(projectId: ProjectSlugOrId, config?: Config$7): Promise<PaginationResult<ProjectMessageModel>>;
declare function postProjectMessage(projectId: ProjectSlugOrId, body: ProjectMessageForm): Promise<ProjectMessageModel>;
declare function getProjectMessage(body: ProjectMessageInputModel, config?: Config$7): Promise<ProjectMessageModel>;
declare function patchProjectMessage(projectId: ProjectSlugOrId, messageId: ProjectMessageModel['id'], body: ProjectMessageForm): Promise<ProjectMessageModel>;
declare function deleteProjectMessage(projectId: ProjectSlugOrId, projectMessageId: ProjectMessageModel['id'], config?: Config$7): Promise<void>;
declare function postProjectMessageImage(projectId: ProjectSlugOrId, body: FormData, config?: Config$7): Promise<any>;

type ConfigProject = ClientAPIOptions<QueryFilterProject>;
type ConfigProjectLinked = ClientAPIOptions<Partial<PaginationQuery>>;
type ConfigProjectMembers = ClientAPIOptions<QueryFilterProjectMembers>;
declare function getAllProjects(config?: ConfigProject): Promise<PaginationResult<ProjectModel>>;
declare function getProject(projectSlugOrId: ProjectSlugOrId, config?: ConfigProject): Promise<ProjectModel>;
declare function postProject(body: ProjectForm, config?: ClientAPIOptions): Promise<ProjectModel>;
declare function patchProject(projectId: ProjectSlugOrId, project: ProjectForm): Promise<ProjectModel>;
declare function deleteProject(projectId: ProjectSlugOrId): Promise<void>;
declare function duplicateProject(projectId: ProjectSlugOrId): Promise<ProjectModel>;
declare function getLinkedProject(projectId: ProjectSlugOrId, config?: ConfigProjectLinked): Promise<PaginationResult<ProjectModel>>;
declare function addLinkedProject(projectId: ProjectSlugOrId, body: AddManyLinkedProjectInput): Promise<LinkedProject[]>;
declare function deleteLinkedProject(projectId: ProjectSlugOrId, linkedProjectId: LinkedProject['id']): Promise<void>;
declare function getProjectMembers(projectSlugOrId: ProjectSlugOrId, config?: ConfigProjectMembers): Promise<PaginationResult<ProjectMemberModel>>;
declare function postProjectImage(projectId: ProjectSlugOrId, body: FormData): Promise<ImageModelCreated>;
declare function postProjectHeader(projectId: ProjectSlugOrId, body: any): Promise<ImageModelCreated>;
declare function patchProjectHeader(projectId: ProjectSlugOrId, imageId: ImageModel['id'], body: any): Promise<ImageModel>;
declare function deleteProjectHeader(projectId: ProjectSlugOrId, imageId: ImageModel['id'], config?: ClientAPIOptions): Promise<void>;
declare function lockUnlockProject({ project_id, context, }: {
    project_id: ProjectSlugOrId;
    context: 'lock' | 'unlock';
}): Promise<null>;
type ConfigSimilar = ClientAPIOptions<QueryFilterProjectSimilars>;
declare function getProjectSimilars(projectId: ProjectSlugOrId, config?: ConfigSimilar): Promise<PaginationResult<ProjectModel>>;
type ConfigProjectGroup = ClientAPIOptions<Partial<PaginationQuery>>;
declare function getProjectGroups(projectId: ProjectSlugOrId, config?: ConfigProjectGroup): Promise<PaginationResult<PeopleGroupModel>>;

type Config$6 = ClientAPIOptions;
type ConfigTab = ClientAPIOptions<QueryFilterProjectTab>;
type ConfigTabItem = ClientAPIOptions<QueryFilterProjectTabItem>;
declare function getAllProjectTab(projectId: ProjectSlugOrId, config?: ConfigTab): Promise<PaginationResult<ProjectTab>>;
declare function getProjectTab(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], config?: Config$6): Promise<ProjectTab>;
declare function createProjectTab(projectId: ProjectSlugOrId, body: ProjectTabForm, config?: Config$6): Promise<ProjectTab>;
declare function updateProjectTab(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], body: ProjectTabForm, config?: Config$6): Promise<ProjectTab>;
declare function deleteProjectTab(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], config?: Config$6): Promise<void>;
declare function getAllProjectTabItem(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], config?: ConfigTabItem): Promise<PaginationResult<ProjectTabItem>>;
declare function getProjectTabItem(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], projectTabItemId: ProjectTabItem['id'], config?: Config$6): Promise<ProjectTabItem>;
declare function createProjectTabItem(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], body: ProjectTabItemForm, config?: Config$6): Promise<ProjectTabItem>;
declare function updateProjectTabItem(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], projectTabItemId: ProjectTabItem['id'], body: ProjectTabItemForm, config?: Config$6): Promise<ProjectTabItem>;
declare function deleteProjectTabItem(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], projectTabItemId: ProjectTabItem['id'], config?: Config$6): Promise<void>;
declare function createProjectTabImage(projectId: ProjectSlugOrId, body: FormData, config?: Config$6): Promise<ImageModelCreated>;
declare function createProjectTabItemImage(projectId: ProjectSlugOrId, projectTabId: ProjectTab['id'], body: FormData, config?: Config$6): Promise<ImageModelCreated>;

type Config$5 = ClientAPIOptions<QueryFilterRecomendation>;
type ConfigPagination = ClientAPIOptions<PaginationQuery>;
declare function getProjectsRecommendationsForUser(organizationCode: OrganizationModel['code'], config?: ConfigPagination): Promise<PaginationResult<ProjectModel>>;
declare function getRandomProjectsRecommendationsForUser(organizationCode: OrganizationModel['code'], config?: Config$5): Promise<ProjectModel[]>;
declare function getUsersRecommendationsForUser(organizationCode: OrganizationModel['code'], config?: ConfigPagination): Promise<PaginationResult<UserModel>>;
declare function getRandomUsersRecommendationsForUser(organizationCode: OrganizationModel['code'], config?: Config$5): Promise<UserModel[]>;

declare function reportBug(organizationCode: OrganizationModel['code'], body: ReportForm, config?: ClientAPIOptions): Promise<void>;
declare function reportAbuse(organizationCode: OrganizationModel['code'], body: ReportForm, config?: ClientAPIOptions): Promise<void>;
declare function contactUs(organizationCode: OrganizationModel['code'], body: ContactForm, config?: ClientAPIOptions): Promise<void>;

type Config$4 = ClientAPIOptions<QueryFilterReviews>;
declare function getReviews(projectId: ProjectSlugOrId, config?: Config$4): Promise<PaginationResult<ReviewModel>>;
declare function postReview(projectId: ProjectSlugOrId, body: ReviewForm, config?: ClientAPIOptions): Promise<ReviewModel>;
declare function patchReview(projectId: ProjectSlugOrId, reviewId: ReviewId, body: ReviewForm, config?: ClientAPIOptions): Promise<ReviewModel>;
declare function deleteReview(projectId: ProjectSlugOrId, reviewId: ReviewId, config?: ClientAPIOptions): Promise<void>;

type Config$3 = ClientAPIOptions<QueryFilterSearch>;
declare function searchAll<T = SearchResultAll>(search: string, config?: Config$3): Promise<PaginationResult<T>>;
declare function searchProjects(search: string, config?: Config$3): Promise<PaginationResult<SearchResultProject>>;
declare function searchUser(search: string, config?: Config$3): Promise<PaginationResult<SearchResultUser>>;
declare function searchGroups(search: string, config?: Config$3): Promise<PaginationResult<SearchResultGroup>>;

type Config$2 = ClientAPIOptions;
declare function getSkill(skillId: SkillModel['id'], options?: Config$2): Promise<SkillModel>;
type ConfigSearch = ClientAPIOptions<QueryFilterSkill>;
declare function searchSkill(search: string, options?: ConfigSearch): Promise<PaginationResult<SkillModel>>;

type Config$1 = ClientAPIOptions<{
    publication_status: string;
}>;
declare function getStats(orgaizationCode: OrganizationModel['code'], config?: Config$1): Promise<Stats>;

type Config = ClientAPIOptions<PaginationQuery>;
declare function getAllOrgClassifications(organizationCode: OrganizationModel['code'], config?: Config): Promise<PaginationResult<TagModel>>;
declare function getOrgClassification(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], config?: Config): Promise<TagClassificationModel>;
declare function postOrgClassification(organizationCode: OrganizationModel['code'], classification: Partial<TagClassificationModel>): Promise<TagClassificationModel>;
declare function putOrgClassification(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], classification: Partial<TagClassificationModel>): Promise<TagClassificationModel>;
declare function patchOrgClassification(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], classification: Partial<TagClassificationModel>): Promise<TagClassificationModel>;
declare function deleteOrgClassification(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id']): Promise<void>;
type ConfigClassification = ClientAPIOptions<QueryFilterTagClassification>;
declare function getOrgClassificationTags(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'] | 'enabled-for-projects' | 'enabled-for-skills', config?: ConfigClassification): Promise<PaginationResult<TagClassificationModel>>;
declare function getTags(ids: number[], config?: Config): Promise<TagModel[]>;
declare function getAllTagsById(ids: number[], config?: Config): Promise<PaginationResult<TagModel>>;
declare function putClassificationTag(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], tagtId: TagModel['id'], tag: TagModel): Promise<TagModel>;
declare function patchClassificationTag(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], tagtId: TagModel['id'], tag: TagModel): Promise<TagModel>;
declare function deleteClassificationTag(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], tagtId: TagModel['id']): Promise<void>;
declare function postClassificationTag(organizationCode: OrganizationModel['code'], classificationId: TagClassificationModel['id'], tag: TagModel): Promise<TagModel>;

declare function getTemplates(organizationCode: OrganizationModel['code'], config?: ClientAPIOptions<PaginationQuery>): Promise<PaginationResult<TemplateModel>>;
declare function getTemplate(organizationCode: OrganizationModel['code'], templateId: TemplateId, config?: ClientAPIOptions): Promise<TemplateModel>;
declare function deleteTemplate(organizationCode: OrganizationModel['code'], templateId: TemplateId, config?: ClientAPIOptions): Promise<void>;
declare function postTemplate(organizationCode: OrganizationModel['code'], body: TemplateForm, config?: ClientAPIOptions): Promise<TemplateModel>;
declare function postTemplateImage(organizationCode: OrganizationModel['code'], templateId: TemplateId, file: File, config?: ClientAPIOptions): Promise<ImageModelCreated>;
declare function patchTemplate(organizationCode: OrganizationModel['code'], templateId: TemplateId, body: TemplateForm, config?: ClientAPIOptions): Promise<TemplateModel>;

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

export { type APIParams, type AccessRequest, type AccessRequestModel, type AccessRequestResult, type ClientAPIOptions, type Config, type ConfigSimilar, type QueryFilterAccessRequests, type SearchParams, _adaptParamsToGetQuery, acceptAccessRequest, addFeaturedProject, addLinkedProject, addOrgMember, addParentGroup, addProjectMembers, applyAnnouncement, askMentorship, clientAPI, configureClientAPI, configureOptionsAPI, contactUs, createEvent, createInstruction, createNews, createProjectCategory, createProjectGoal, createProjectTab, createProjectTabImage, createProjectTabItem, createProjectTabItemImage, declineAccessRequest, deleteAnnouncement, deleteBlogEntry, deleteClassificationTag, deleteComment, deleteEvent, deleteFollow, deleteGroup, deleteGroupGallery, deleteGroupHeader, deleteInstruction, deleteInvitation, deleteLinkedProject, deleteLocation, deleteNews, deleteNewsHeader, deleteOrgClassification, deleteOrganisationBanner, deleteOrganisationLogo, deleteOrganizationFile, deleteProject, deleteProjectAttachmentFile, deleteProjectAttachmentLink, deleteProjectCategory, deleteProjectCategoryBackground, deleteProjectCategoryFollow, deleteProjectGoal, deleteProjectHeader, deleteProjectMembers, deleteProjectMembersSelf, deleteProjectMessage, deleteProjectTab, deleteProjectTabItem, deleteReview, deleteTemplate, deleteUser, deleteUserAttachmentFile, deleteUserAttachmentLink, deleteUserPicture, deleteUserSkill, duplicateProject, getAccessRequests, getAllEvents, getAllInstructions, getAllNews, getAllOrgClassifications, getAllProjectCategories, getAllProjectTab, getAllProjectTabItem, getAllProjects, getAllTagsById, getAnnouncements, getBlogEntries, getBlogEntry, getComment, getComments, getEvent, getFeaturedProjects, getGroup, getGroupAllLocations, getGroupEvent, getGroupGallery, getGroupLocation, getGroupMember, getGroupNews, getGroupProject, getGroupResearchDocument, getGroupResearchDocumentAnalytics, getGroupSimilar, getHierarchyGroups, getInstruction, getInvitation, getInvitations, getLinkedProject, getLocations, getMentorshipDetails, getNews, getNewsfeed, getNotifications, getOrgClassification, getOrgClassificationTags, getOrgUnits, getOrganizationByCode, getOrganizationFile, getOrganizationFiles, getOrganizations, getOwnResearchDocument, getOwnResearchDocumentAnalytics, getProject, getProjectAnnouncements, getProjectAttachmentFile, getProjectAttachmentFiles, getProjectAttachmentLink, getProjectAttachmentLinks, getProjectCategoriesFollow, getProjectCategoriesHierarchy, getProjectCategory, getProjectFollows, getProjectGoal, getProjectGoals, getProjectGroups, getProjectLocation, getProjectLocations, getProjectMembers, getProjectMessage, getProjectMessages, getProjectSimilars, getProjectTab, getProjectTabItem, getProjectsRecommendationsForUser, getRandomProjectsRecommendationsForUser, getRandomUsersRecommendationsForUser, getResearchDocumentSimilars, getReviews, getRootProjectCategory, getSkill, getStats, getSubGroup, getTags, getTemplate, getTemplates, getUser, getUserAttachmentFile, getUserAttachmentLink, getUserFollows, getUserMentorship, getUserNotificationSettings, getUsersRecommendationsForUser, lockUnlockProject, offerMentorship, patchAnnouncement, patchBlogEntry, patchClassificationTag, patchComment, patchEvent, patchGroup, patchGroupHeader, patchGroupLocation, patchInstruction, patchLocation, patchNews, patchNewsHeader, patchOrgClassification, patchOrganisationBanner, patchOrganization, patchOrganizationFile, patchProject, patchProjectAttachmentFile, patchProjectAttachmentLink, patchProjectCategory, patchProjectCategoryBackground, patchProjectGoal, patchProjectHeader, patchProjectMessage, patchReview, patchTemplate, patchTermsAndConditions, patchUser, patchUserAttachmentFile, patchUserAttachmentLink, patchUserNotificationSettings, patchUserPicture, patchUserPrivacy, patchUserSkill, postAccessRequest, postAnnouncement, postBlogEntry, postBlogEntryImage, postClassificationTag, postComment, postCommentImage, postFollow, postFollowMany, postGroup, postGroupGallery, postGroupHeader, postGroupLocation, postGroupMembers, postGroupProjects, postInvitation, postLocations, postNewsHeader, postOrgClassification, postOrganisationBanner, postOrganisationLogo, postOrganizationFiles, postOrganizationImage, postProject, postProjectAttachmentFiles, postProjectAttachmentLinks, postProjectCategoryBackground, postProjectCategoryFollow, postProjectHeader, postProjectImage, postProjectMessage, postProjectMessageImage, postReview, postTemplate, postTemplateImage, postUser, postUserAttachmentFile, postUserAttachmentLink, postUserPicture, postUserSkill, postUserWithInvitation, putClassificationTag, putEvent, putInstruction, putNews, putOrgClassification, putProjectCategory, removeFeaturedProject, removeGroupLocation, removeGroupMember, removeGroupProject, removeOrgMember, reportAbuse, reportBug, resetUserPassword, respondMentorship, searchAll, searchGroups, searchPeopleAdmin, searchPeopleByExactMail, searchProjects, searchResearcher, searchSkill, searchUser, updateProjectTab, updateProjectTabItem };
