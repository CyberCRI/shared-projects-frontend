import { B as BaseModel, c as Ordering, T as Translated, P as PaginationQuery, I as ImageModel, O as Optional } from './utils-Def92TDC.js';
import { a8 as ProjectModel, ae as ProjectSlugOrId, S as OrganizationModel, b6 as TranslatedProject, d as AttachmentType, bg as UserModel, aN as StatusType, m as GroupMemberRoleType, bf as UserFromJWTModel, W as PeopleGroupModel, b5 as TranslatedPeopleGroupModel, aM as SkillModel, M as NewsModel, b2 as TranslatedNews, P as NotificationType, a7 as ProjectMemberRoleType, V as PeopleGroupIdOrSlug, a5 as ProjectGroupRoleType, af as ProjectStatusType, aa as ProjectModulesKeys, be as TranslatedUserModel, aI as SearchObjectType, L as Language, a0 as ProjectCategoryModel, aQ as TagModel, X as PeopleGroupModulesKeys, bi as UserModulesKeys, aR as TagType, q as LanguageType } from './instruction.model-HisYQecw.js';

interface AnnouncementModel extends BaseModel {
    id: number;
    description: string;
    title: string;
    type: 'na' | 'participant' | 'job' | 'traineeship';
    project: ProjectModel;
    status: 'open' | 'closed';
    deadline: string;
    is_remunerated: boolean;
    updated_at: string;
    created_at: string;
}
type AnnouncementId = AnnouncementModel['id'];
type TranslatedAnnouncement = Omit<Translated<AnnouncementModel, 'title' | 'description'>, 'project'> & {
    project: TranslatedProject;
};
type AnnouncementInput = Required<AnnouncementModel> & {
    project_id: string;
};
type AnnouncementApplyInput = {
    project_id: string;
    announcement_id: number;
    applicant_name: string;
    applicant_firstname: string;
    applicant_email: string;
    applicant_message: string;
};
type AnnouncementForm = Omit<AnnouncementModel, 'id' | 'updated_at' | 'created_at' | 'deadline'> & {
    id?: AnnouncementModel['id'];
    deadline: string | Date;
};
type AnnouncementApplyForm = {
    recaptcha: string;
    project_id: ProjectSlugOrId;
    announcement_id: AnnouncementId;
    applicant_firstname: string;
    applicant_name: string;
    applicant_email: string;
    applicant_message: string;
};
type QueryFilterAnnouncement = Partial<{
    ordering: Ordering<'created_at' | 'updated_at' | 'deadline'>;
    organizations: OrganizationModel['code'][];
    from_date: string;
    to_date: string;
    from_date_or_none: string;
    to_date_or_none: string;
}>;

/**
 * @name AttachmentFileModel
 * @description Files attached to a project
 */
interface AttachmentFileModel extends BaseModel {
    id: number;
    file: string;
    title: string;
    attachment_type: AttachmentType;
    description: string;
    mime: string;
}
type AttachmentFileId = AttachmentFileModel['id'];
type AttachmentFileForm = Omit<AttachmentFileModel, 'id'> & {
    id?: number;
};
type TranslatedAttachmentFile = Translated<AttachmentFileModel, 'title' | 'description'>;
type AttachmentFileInput = Required<AttachmentFileModel> & {
    file: File;
    project_id: string;
};

/**
 * @name AttachmentLinkModel
 * @description Link attached to a project
 */
interface AttachmentLinkModel extends BaseModel {
    id: number;
    attachment_type: AttachmentType;
    description: string;
    preview_image_url: string;
    site_name: string;
    site_url: string;
    title: string;
}
type AttachmentLinkId = AttachmentLinkModel['id'];
type AttachmentLinkForm = Omit<AttachmentLinkModel, 'id'> & {
    id?: number;
    link?: string;
};
type TranslatedAttachmentLink = Translated<AttachmentLinkModel, 'title' | 'description'>;
type AttachmentLinkOutput = Required<AttachmentLinkModel>;
type AttachmentLinkInput = Required<AttachmentLinkModel> & {
    project_id: string;
    link_id?: string;
};

type AttachmentForm = {
    id?: number;
    title: string;
    description: string;
    file?: File;
    site_url?: string;
    project_id?: ProjectSlugOrId;
};

/**
 * @name BlogEntryModel
 * @description Article/Blog attached to a project
 */
interface BlogEntryModel extends BaseModel {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    images?: number[];
}
type BlogEntryId = BlogEntryModel['id'];
type TranslatedBlogEntry = Translated<BlogEntryModel, 'title' | 'content'>;
type QueryFilterBlogEntry = Partial<{
    ordering: Ordering<'created_at' | 'updated_at'>;
} & PaginationQuery>;
type BlogEntryForm = Omit<BlogEntryModel, 'id' | 'created_at' | 'updated_at'> & {
    id?: BlogEntryModel['id'];
    created_at?: Date | string;
    images_ids: number[];
    project_id?: ProjectSlugOrId;
};

/**
 * @name CommentModel
 * @description Comment of a project
 * */
interface CommentModel extends BaseModel {
    id: number;
    content: string;
    author: UserModel;
    images: ImageModel[];
    created_at: string;
    deleted_at: string;
    updated_at: string;
    replies: CommentModel[];
}
type TranslatedComment = Translated<Omit<CommentModel, 'replies'>, 'content'> & {
    replies: TranslatedComment[];
};
type QueryFilterComments = Partial<{
    ordering: Ordering<'updated_at' | 'created_at'>;
} & PaginationQuery>;

/**
 * @name FollowModel
 * @description User who follow a project
 */
interface FollowModel extends BaseModel {
    id: number;
    follower: {
        id: number;
        email: string;
        given_name: string;
        family_name: string;
    };
    project: ProjectModel;
}
type FollowInput = {
    project_id?: string;
    follower_id: number;
};
type FollowCategoryInput = {
    category_id?: number;
    follower_id: number;
};
type UnfollowCategoryInput = {
    category_follow_id: number;
    follower_id: number;
};
type FollowedProjectRef = {
    project_id: string;
};
type AddManyFollowedProject = {
    follows: FollowedProjectRef[];
};
type FollowOutput = Required<FollowModel> & {
    project: ProjectModel;
};
type FollowManyOutput = Required<FollowOutput> & {
    project: {
        id: string;
    };
};
type FollowProjectOutput = Required<FollowOutput> & {
    project: ProjectModel;
};
type FollowOutputList = FollowManyOutput[];

/**
 * @name GoalModel
 * @description Goal of a project
 */
interface GoalModel extends BaseModel {
    id: number;
    title: string;
    description: string;
    deadline_at: string;
    status: StatusType;
}
type TranslatedGoal = Translated<GoalModel, 'title' | 'description'>;
type GoalForm = Partial<GoalModel> & {
    project_id?: ProjectSlugOrId;
};

/**
 * @name GroupModel
 * @description Group models
 */
interface GroupModel {
    id: number;
    name: string;
    permissions: Array<string>;
    users: Array<UserFromJWTModel>;
}
type GroupMember = UserModel & {
    role: GroupMemberRoleType;
};
type TranslatedGroupMember = Translated<GroupMember, 'job'>;
type HierarchyGroupModel = PeopleGroupModel;
type TrasnlatedHierarchyGroupModel = TranslatedPeopleGroupModel;
interface GroupModelInput {
    user_ids: Array<number>;
}
interface RemoveGroupModelInput {
    users: Array<number>;
}
type AddParentGroupModelInput = {
    name: string;
    description: string;
    email: string;
    type: string;
    parent: number;
    organization: string;
};
type GroupOuput = Required<GroupModel> & {
    name: string;
    description: string;
    email: string;
    type: string;
    organization: string;
    managers: any[];
    members: any[];
    hierarchy: any[];
    children: any[];
    projects: any;
    header_image: any;
    logo_image: any;
    publication_status: string;
};
interface PostGroupData {
    name: string;
    description: string;
    email: string;
    type: string;
    parent: number;
    organization: string;
    publication_status: string;
}
type AddGroupMembers = {
    [key in GroupMemberRoleType]: UserModel['id'][];
};
interface RemoveGroupMember {
    users: UserModel['id'][];
}
interface PostGroupProjects {
    featured_projects: ProjectSlugOrId[];
}

interface InvitationUserModel {
    owner: {
        id: number;
        given_name: string;
        email: string;
        family_name: string;
        pronouns: string;
        job: string;
        profile_picture: ImageModel;
        current_org_role: string | null;
    };
}
/**
 * @name InvitationModel
 * @description Invitation models
 */
interface InvitationModel {
    token: string;
    created_at: string;
    people_group: PeopleGroupModel;
    id: number;
    organization: string;
    description: string;
    ownner: InvitationUserModel;
    expire_at: string;
}
interface InvitationModelInput {
    people_group_id: number;
    description: string;
    expire_at: string;
}

interface Mentoring extends BaseModel {
    id: number;
    organization: OrganizationModel;
    mentor: UserModel;
    mentoree: UserModel;
    skill: SkillModel;
    status: 'pending' | 'accepted' | 'rejected';
    create_by: UserModel | null;
    created_at: string;
}
type MentoringContactForm = {
    title: string;
    reply_to: string;
    content: string;
};

/**
 * @name NewsfeedModel
 * @description Newsfeed models
 */
type NewsfeedModel = {
    id: number;
    type: 'project' | 'announcement' | 'news';
    project?: ProjectModel;
    news?: NewsModel;
    announcement?: AnnouncementModel;
};
type TranslatedNewsfeed = Pick<NewsfeedModel, 'id' | 'type'> & {
    project?: TranslatedProject;
    news?: TranslatedNews;
    announcement?: TranslatedAnnouncement;
};

interface NotificationModel extends BaseModel {
    id: number;
    sender: UserModel;
    receiver: UserModel;
    organization: OrganizationModel;
    project: ProjectModel;
    access_request: any;
    is_viewed: boolean;
    to_send: boolean;
    created: string;
    reminder_message: string;
    type: NotificationType;
    context: {
        [key: string]: any;
    };
    count: number;
    invitation: InvitationModel;
}
type QueryFilterNotification = Partial<{
    ordering: Ordering<'is_viewed' | 'created' | 'type'>;
    type: NotificationType[];
    is_viewed: boolean;
}>;
interface NotificationSettingsModel extends BaseModel {
    id: number;
    notify_added_to_project: boolean;
    announcement_published: boolean;
    announcement_has_new_application: boolean;
    followed_project_has_been_edited: boolean;
    project_has_been_commented: boolean;
    project_has_been_edited: boolean;
    project_ready_for_review: boolean;
    project_has_been_reviewed: boolean;
    project_has_new_private_message: boolean;
    category_project_created: boolean;
    category_project_updated: boolean;
    comment_received_a_response: boolean;
    organization_has_new_access_request: boolean;
    invitation_link_will_expire: boolean;
    new_instruction: boolean;
}
type NotificationSettingsForm = Optional<NotificationSettingsModel, 'id'>;

/**
 * Member of a project
 *
 * @typedef
 * @name ProjectMemberModel
 * @kind variable
 * @exports
 */
type ProjectMemberModel = UserModel & {
    role: ProjectMemberRoleType;
};
type TranslatedProjectMember = TranslatedUserModel & Pick<ProjectMemberModel, 'role'>;
interface ProjectTeamModel extends BaseModel {
    reviewers: ProjectMemberModel[];
    members: ProjectMemberModel[];
    owners: ProjectMemberModel[];
    people_groups: ProjectMemberPeopleGroupOutput[];
}
type ProjectMembersAddEntry = {
    user: string;
    name: ProjectMemberRoleType;
};
type ProjectMembersAddInput = {
    members?: ProjectMembersAddEntry[];
    owners?: ProjectMembersAddEntry[];
    reviewers?: ProjectMembersAddEntry[];
    member_people_groups?: number[];
};
type ProjectMembersDeleteInput = {
    name?: string;
    users?: number[];
    people_groups?: PeopleGroupIdOrSlug[];
};
type ProjectMemberPeopleGroupOutput = {
    id: number;
    description: string;
    name: string;
};
type ProjectTeamOutput = {
    members: ProjectMemberOutput[];
    owners: ProjectMemberOutput[];
    reviewers: ProjectMemberOutput[];
    people_groups: ProjectMemberPeopleGroupOutput[];
};
type ProjectMemberOutput = ProjectMemberModel;
type QueryFilterProject = Partial<{
    ordering: Ordering<'created_at' | 'updated_at'>;
    member_role: ProjectMemberRoleType[];
    group_role: ProjectGroupRoleType[];
    life_status: ProjectStatusType[];
    creation_year: string[];
    ids: ProjectModel['id'][];
    modules: 'none' | ProjectModulesKeys[];
    serializer: 'light' | 'superlight';
} & PaginationQuery>;
type QueryFilterProjectMembers = Partial<{
    ordering: Ordering<'role'>;
    role: ProjectMemberRoleType;
} & PaginationQuery>;

/**
 * @name CommentModel
 * @description Comment of a project
 * */
interface ProjectMessageModel extends BaseModel {
    id: number;
    content: string;
    author: UserModel;
    created_at: string;
    deleted_at: string;
    updated_at: string;
    replies: ProjectMessageModel[];
}
type TranslatedProjectMessage = Translated<Omit<ProjectMessageModel, 'replies'>, 'content'> & {
    replies: TranslatedProjectMessage[];
};
type ProjectMessageInputModel = Required<ProjectMessageModel> & {
    author_id: number;
    reply_on: number;
    project_id: string;
    project_message_id: string;
};
type ProjectMessageForm = Partial<{
    id: number;
    content: string;
    project_id: ProjectSlugOrId;
    images_ids: ImageModel['id'][];
    reply_on: number;
    reply_on_id: number;
}>;
type QueryFilterProjectMessage = Partial<{
    ordering: Ordering<'created_at' | 'updated_at'>;
} & PaginationQuery>;

type QueryFilterRecomendation = Partial<{
    count: number;
    pool: number;
}>;

interface ReportModel extends BaseModel {
    id: number;
    title: string;
    message: string;
    url: string;
    reported_by: string;
}
type ReportForm = Omit<ReportModel, 'id'> & {
    recaptcha: string;
};
interface ContactModel extends BaseModel {
    id: number;
    subject: string;
    email: string;
    content: string;
}
type ContactForm = Omit<ContactModel, 'id'> & {
    recaptcha: string;
};

/**
 * @name ReviewModel
 * @description Review of a project
 */
interface ReviewModel extends BaseModel {
    id: number;
    description: string;
    title: string;
    reviewer: UserModel;
    created_at: string;
    updated_at: string;
}
type ReviewId = ReviewModel['id'];
type TranslatedReview = Translated<ReviewModel, 'title' | 'description'>;
type QueryFilterReviews = Partial<{
    project: number;
    reviewer: number;
    ordering: Ordering<'created_at' | 'updated_at'>;
} & PaginationQuery>;
type ReviewForm = Partial<Pick<ReviewModel, 'id' | 'title' | 'description'> & {
    project_id: ProjectSlugOrId;
    reviewer_id: ReviewModel['reviewer']['id'];
    publish: boolean;
    lock: boolean;
}>;

interface BaseSearchResult extends BaseModel {
    id: number;
    type: SearchObjectType;
    project: ProjectModel | null;
    user: UserModel | null;
    people_group: PeopleGroupModel | null;
    last_update: string;
}
interface SearchResultProject extends BaseSearchResult {
    type: 'project';
    project: ProjectModel;
    user: null;
    people_group: null;
}
type TranslatedSearchResultProject = Omit<SearchResultProject, 'project'> & {
    project: TranslatedProject;
};
interface SearchResultUser extends BaseSearchResult {
    type: 'user';
    project: null;
    user: UserModel;
    people_group: null;
}
type TranslatedSearchResultUser = Omit<SearchResultUser, 'user'> & {
    user: TranslatedUserModel;
};
interface SearchResultGroup extends BaseSearchResult {
    type: 'people_group';
    project: null;
    user: null;
    people_group: PeopleGroupModel;
}
type TranslatedSearchResultGroup = Omit<SearchResultGroup, 'people_group'> & {
    people_group: TranslatedPeopleGroupModel;
};
type SearchResultAll = SearchResultProject | SearchResultUser | SearchResultGroup;
type TranslatedSearchResultAll = TranslatedSearchResultProject | TranslatedSearchResultUser | TranslatedSearchResultGroup;
type QueryFilterSearch = Partial<{
    ordering: Ordering<'type' | 'last_update'>;
    types: ('user' | 'project' | 'people_group')[];
    fuzziness: number;
    search_type: 'most_fields' | 'best_fields';
    organizations: OrganizationModel['code'][];
    sdgs: number[];
    skills: SkillModel['tag']['id'][];
    can_mentor: boolean;
    needs_mentor: boolean;
    can_mentor_on: SkillModel['tag']['id'][];
    needs_mentor_on: SkillModel['tag']['id'][];
    languages: Language[];
    categories: ProjectCategoryModel['id'][];
    members: UserModel['id'][];
    tags: TagModel['id'][];
    projects: ProjectSlugOrId[];
    people_group: PeopleGroupIdOrSlug[];
    modules: 'none' | ProjectModulesKeys[] | PeopleGroupModulesKeys[] | UserModulesKeys[];
    exclude_projects: ProjectModel['id'][];
    exclude_projects_in_project: ProjectModel['id'];
    exclude_groups_in_project: ProjectModel['id'];
    exclude_users_in_project: ProjectModel['id'];
    exclude_groups: PeopleGroupModel['id'][];
    exclude_projects_in_group: PeopleGroupModel['id'];
    exclude_users_in_group: PeopleGroupModel['id'];
} & PaginationQuery>;

type Stats = {
    total: number;
    by_sdg: {
        sdg: number;
        project_count: number;
    }[];
    by_month: {
        month: string;
        created_count: number;
        updated_count: number;
    }[];
    top_tags: (TagModel & {
        project_count: number;
        projects: ProjectSlugOrId[];
    })[];
};

type TagClassificationModel = BaseModel & {
    id: number;
    type: TagType;
    organization: OrganizationModel;
    is_public: boolean;
    title: string;
    slug: string;
    outdated_slugs: string[];
    description: string;
    tags: TagModel[];
    is_enabled_for_projects?: boolean;
    is_enabled_for_skills?: boolean;
};
type QueryFilterTagClassification = Partial<{
    search: string;
    language: LanguageType;
} & PaginationQuery>;

export type { ProjectMemberPeopleGroupOutput as $, AddGroupMembers as A, BaseSearchResult as B, CommentModel as C, FollowOutput as D, FollowOutputList as E, FollowCategoryInput as F, FollowProjectOutput as G, FollowedProjectRef as H, GoalForm as I, GoalModel as J, GroupMember as K, GroupModel as L, GroupModelInput as M, GroupOuput as N, HierarchyGroupModel as O, InvitationModel as P, InvitationModelInput as Q, Mentoring as R, MentoringContactForm as S, NewsfeedModel as T, NotificationModel as U, NotificationSettingsForm as V, NotificationSettingsModel as W, PostGroupData as X, PostGroupProjects as Y, ProjectMemberModel as Z, ProjectMemberOutput as _, AddManyFollowedProject as a, ProjectMembersAddEntry as a0, ProjectMembersAddInput as a1, ProjectMembersDeleteInput as a2, ProjectMessageForm as a3, ProjectMessageInputModel as a4, ProjectMessageModel as a5, ProjectTeamModel as a6, ProjectTeamOutput as a7, QueryFilterAnnouncement as a8, QueryFilterBlogEntry as a9, TranslatedComment as aA, TranslatedGoal as aB, TranslatedGroupMember as aC, TranslatedNewsfeed as aD, TranslatedProjectMember as aE, TranslatedProjectMessage as aF, TranslatedReview as aG, TranslatedSearchResultAll as aH, TranslatedSearchResultGroup as aI, TranslatedSearchResultProject as aJ, TranslatedSearchResultUser as aK, TrasnlatedHierarchyGroupModel as aL, UnfollowCategoryInput as aM, QueryFilterComments as aa, QueryFilterNotification as ab, QueryFilterProject as ac, QueryFilterProjectMembers as ad, QueryFilterProjectMessage as ae, QueryFilterRecomendation as af, QueryFilterReviews as ag, QueryFilterSearch as ah, QueryFilterTagClassification as ai, RemoveGroupMember as aj, RemoveGroupModelInput as ak, ReportForm as al, ReportModel as am, ReviewForm as an, ReviewId as ao, ReviewModel as ap, SearchResultAll as aq, SearchResultGroup as ar, SearchResultProject as as, SearchResultUser as at, Stats as au, TagClassificationModel as av, TranslatedAnnouncement as aw, TranslatedAttachmentFile as ax, TranslatedAttachmentLink as ay, TranslatedBlogEntry as az, AddParentGroupModelInput as b, AnnouncementApplyForm as c, AnnouncementApplyInput as d, AnnouncementForm as e, AnnouncementId as f, AnnouncementInput as g, AnnouncementModel as h, AttachmentFileForm as i, AttachmentFileId as j, AttachmentFileInput as k, AttachmentFileModel as l, AttachmentForm as m, AttachmentLinkForm as n, AttachmentLinkId as o, AttachmentLinkInput as p, AttachmentLinkModel as q, AttachmentLinkOutput as r, BlogEntryForm as s, BlogEntryId as t, BlogEntryModel as u, ContactForm as v, ContactModel as w, FollowInput as x, FollowManyOutput as y, FollowModel as z };
