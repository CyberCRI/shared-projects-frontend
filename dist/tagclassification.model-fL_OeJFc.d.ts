import { B as BaseModel, c as Ordering, T as Translated, P as PaginationQuery, I as ImageModel, O as Optional } from './utils-Def92TDC.js';
import { ai as ProjectModel, ao as ProjectSlugOrId, a0 as OrganizationModel, bg as TranslatedProject, e as AttachmentType, bx as UserSlugOrId, bs as UserModel, aX as StatusType, w as GroupMemberRoleType, br as UserFromJWTModel, a4 as PeopleGroupModel, bf as TranslatedPeopleGroupModel, aW as SkillModel, X as NewsModel, bc as TranslatedNews, Z as NotificationType, ah as ProjectMemberRoleType, a3 as PeopleGroupIdOrSlug, af as ProjectGroupRoleType, ap as ProjectStatusType, ak as ProjectModulesKeys, bo as TranslatedUserModel, aS as SearchObjectType, L as Language, aa as ProjectCategoryModel, a_ as TagModel, a5 as PeopleGroupModulesKeys, bu as UserModulesKeys, a$ as TagType, C as LanguageType } from './instruction.model-CCk9WwMZ.js';

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
    user_id: string;
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
    profile_id?: UserSlugOrId;
    user_id?: UserSlugOrId;
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

export type { QueryFilterAnnouncement as $, AddGroupMembers as A, BaseSearchResult as B, CommentModel as C, GroupOuput as D, InvitationModelInput as E, MentoringContactForm as F, GoalForm as G, HierarchyGroupModel as H, InvitationModel as I, NotificationModel as J, NotificationSettingsForm as K, NotificationSettingsModel as L, Mentoring as M, NewsfeedModel as N, PostGroupProjects as O, PostGroupData as P, ProjectMemberModel as Q, ProjectMemberOutput as R, ProjectMemberPeopleGroupOutput as S, ProjectMembersAddEntry as T, ProjectMembersAddInput as U, ProjectMembersDeleteInput as V, ProjectMessageForm as W, ProjectMessageInputModel as X, ProjectMessageModel as Y, ProjectTeamModel as Z, ProjectTeamOutput as _, AddParentGroupModelInput as a, QueryFilterBlogEntry as a0, QueryFilterComments as a1, QueryFilterNotification as a2, QueryFilterProject as a3, QueryFilterProjectMembers as a4, QueryFilterProjectMessage as a5, QueryFilterRecomendation as a6, QueryFilterReviews as a7, QueryFilterSearch as a8, QueryFilterTagClassification as a9, TranslatedSearchResultProject as aA, TranslatedSearchResultUser as aB, TrasnlatedHierarchyGroupModel as aC, RemoveGroupMember as aa, RemoveGroupModelInput as ab, ReportForm as ac, ReportModel as ad, ReviewForm as ae, ReviewId as af, ReviewModel as ag, SearchResultAll as ah, SearchResultGroup as ai, SearchResultProject as aj, SearchResultUser as ak, Stats as al, TagClassificationModel as am, TranslatedAnnouncement as an, TranslatedAttachmentFile as ao, TranslatedAttachmentLink as ap, TranslatedBlogEntry as aq, TranslatedComment as ar, TranslatedGoal as as, TranslatedGroupMember as at, TranslatedNewsfeed as au, TranslatedProjectMember as av, TranslatedProjectMessage as aw, TranslatedReview as ax, TranslatedSearchResultAll as ay, TranslatedSearchResultGroup as az, AnnouncementApplyForm as b, AnnouncementApplyInput as c, AnnouncementForm as d, AnnouncementId as e, AnnouncementInput as f, AnnouncementModel as g, AttachmentFileForm as h, AttachmentFileId as i, AttachmentFileInput as j, AttachmentFileModel as k, AttachmentForm as l, AttachmentLinkForm as m, AttachmentLinkId as n, AttachmentLinkInput as o, AttachmentLinkModel as p, AttachmentLinkOutput as q, BlogEntryForm as r, BlogEntryId as s, BlogEntryModel as t, ContactForm as u, ContactModel as v, GoalModel as w, GroupMember as x, GroupModel as y, GroupModelInput as z };
