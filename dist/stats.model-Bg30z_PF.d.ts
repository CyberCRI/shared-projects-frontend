import { ap as ProjectSlugOrId, bB as UserSlugOrId, bw as UserModel, x as GroupMemberRoleType, bv as UserFromJWTModel, a5 as PeopleGroupModel, bj as TranslatedPeopleGroupModel, a1 as OrganizationModel, aZ as SkillModel, _ as NotificationType, aj as ProjectModel, ai as ProjectMemberRoleType, a4 as PeopleGroupIdOrSlug, ag as ProjectGroupRoleType, aq as ProjectStatusType, al as ProjectModulesKeys, bs as TranslatedUserModel, aV as SearchObjectType, L as Language, ab as ProjectCategoryModel, b1 as TagModel, a6 as PeopleGroupModulesKeys, by as UserModulesKeys, bk as TranslatedProject } from './instruction.model-9lq0nOax.js';
import { T as Translated, I as ImageModel, B as BaseModel, c as Ordering, O as Optional, P as PaginationQuery } from './utils-Def92TDC.js';

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

export type { AddGroupMembers as A, BaseSearchResult as B, ContactForm as C, SearchResultGroup as D, SearchResultProject as E, SearchResultUser as F, GroupMember as G, HierarchyGroupModel as H, InvitationModel as I, Stats as J, TranslatedProjectMember as K, TranslatedSearchResultAll as L, Mentoring as M, NotificationModel as N, TranslatedSearchResultGroup as O, PostGroupData as P, QueryFilterNotification as Q, RemoveGroupMember as R, SearchResultAll as S, TranslatedGroupMember as T, TranslatedSearchResultProject as U, TranslatedSearchResultUser as V, TrasnlatedHierarchyGroupModel as W, AddParentGroupModelInput as a, AttachmentForm as b, ContactModel as c, GroupModel as d, GroupModelInput as e, GroupOuput as f, InvitationModelInput as g, MentoringContactForm as h, NotificationSettingsForm as i, NotificationSettingsModel as j, PostGroupProjects as k, ProjectMemberModel as l, ProjectMemberOutput as m, ProjectMemberPeopleGroupOutput as n, ProjectMembersAddEntry as o, ProjectMembersAddInput as p, ProjectMembersDeleteInput as q, ProjectTeamModel as r, ProjectTeamOutput as s, QueryFilterProject as t, QueryFilterProjectMembers as u, QueryFilterRecomendation as v, QueryFilterSearch as w, RemoveGroupModelInput as x, ReportForm as y, ReportModel as z };
