import { B as BaseModel, b as IconTab, I as ImageModel, c as Ordering, P as PaginationQuery, T as Translated, h as ImageSize, O as Optional } from './utils-Def92TDC.js';

type LanguageType = string;
type AttachmentType = 'file' | 'image' | 'video';
type ProjectPublicationStatusType = 'public' | 'private' | 'org';
type ProjectStatusType = 'running' | 'completed' | 'canceled' | 'toreview';
type SearchObjectType = 'project' | 'people_group' | 'user';
type Roles = 'superadmins' | 'default' | 'reviewers' | 'owners' | 'reviewer_groups' | 'owner_groups' | 'member_groups' | 'leaders' | 'managers' | 'members' | 'admins' | 'facilitators' | 'users' | 'viewers';
type GroupDataRole = Roles;
type NotificationType = 'comment' | 'reply' | 'review' | 'project_message' | 'ready_for_review' | 'project_created' | 'project_updated' | 'member_added_self' | 'group_member_added_self' | 'member_updated_self' | 'member_added' | 'member_updated' | 'member_removed' | 'group_member_removed' | 'group_member_added' | 'announcement' | 'application' | 'blog_entry' | 'invitation_today_reminder' | 'invitation_week_reminder' | 'access_request' | 'pending_access_requests' | 'new_instruction';
type ProjectMemberRoleType = 'owners' | 'members' | 'reviewers';
type ProjectGroupRoleType = 'owner_groups' | 'member_groups' | 'reviewer_groups';
type GroupMemberRoleType = 'leaders' | 'managers' | 'members';
type ProjectRoleType = ProjectMemberRoleType | ProjectGroupRoleType;
type TagType = 'Wikipedia' | 'ESCO' | 'Custom';
type SecondaryTagType = 'skill' | 'occupation' | 'tag';
type StatusType = 'na' | 'ongoing' | 'complete' | 'cancel';
type LocationType = 'team' | 'impact' | 'address' | 'news' | 'event';
type Language = 'en' | 'fr' | 'de' | 'nl' | 'et' | 'ca' | 'es';
type ProjectTabType = 'text' | 'blog' | 'members' | 'groups' | 'linked_projects' | 'locations' | 'comments' | 'goals' | 'resources' | 'blogs' | 'announcements' | 'messages' | 'reviews' | 'description';

interface ProjectTab extends BaseModel {
    id: number;
    slug: string;
    project?: ProjectModel;
    uuid: string;
    title: string;
    type: ProjectTabType;
    description: string | null;
    icon: keyof IconTab | null;
    images?: ImageModel[];
    show_preview: boolean;
    show_tab: boolean;
    order: number;
    modules: {
        items: number;
    };
}
type ProjectTabModulesKeys = keyof ProjectTab['modules'];
type TabSlugOrId = ProjectTab['slug'] | ProjectTab['id'];
type ProjectTabForm = Partial<Omit<ProjectTab, 'id' | 'modules' | 'images'> & {
    id?: ProjectTab['id'];
    images_ids: number[];
}>;
type TranslatedProjectTab = Translated<ProjectTab, 'title' | 'description'>;
interface ProjectTabItem extends BaseModel {
    id: number;
    tab?: ProjectTab;
    title: string;
    content: string;
    images?: number[];
    created_at: string;
    updated_at: string;
}
type TranslatedProjectTabItem = Translated<ProjectTabItem, 'title' | 'content'>;
type ProjectTabItemForm = Partial<ProjectTabItem & {
    images_ids: number[];
}>;
type QueryFilterProjectTab = Partial<{
    ordering: Ordering<'order'>;
    type: ProjectTabType[];
    show_preview: boolean;
    show_tab: boolean;
    modules: 'none' | ProjectTabModulesKeys[];
} & PaginationQuery>;
type QueryFilterProjectTabItem = Partial<{
    ordering: Ordering<'created_at' | 'updated_at'>;
    from_date: string;
    to_date: string;
} & PaginationQuery>;

/**
 * @name OrganizationDirectoryModel
 * @description Organization directory
 */
interface OrganizationDirectoryModel extends BaseModel {
    name: string;
    description: string;
    logo: string;
    language: LanguageType;
}

/**
 * @name FaqModel
 * @description Faq of an organization
 */
interface FaqModel extends BaseModel {
    id: number;
    title: string;
    content: string;
    images: FaqImageModel[];
}
interface FaqImageModel {
    file: string;
    name: string;
    gallery: string;
}
type FaqInput = Required<FaqModel> & {
    organization_code: string;
};

/**
 * @name TagModel
 * @description Tag of an organization or project or project-category
 */
interface TagModel extends BaseModel {
    id: number;
    title: string;
    title_en: string;
    title_fr: string;
    organization?: string;
    type?: TagType;
    secondary_type?: SecondaryTagType;
    description: string;
    description_en: string;
    description_fr: string;
}
type TranslatedTag = Translated<TagModel, 'title' | 'description'>;

type Relators = 'abr' | 'acp' | 'act' | 'adi' | 'adp' | 'aft' | 'anc' | 'anl' | 'anm' | 'ann' | 'ant' | 'ape' | 'apl' | 'app' | 'aqt' | 'arc' | 'ard' | 'arr' | 'art' | 'asg' | 'asn' | 'ato' | 'att' | 'auc' | 'aud' | 'aue' | 'aui' | 'aup' | 'aus' | 'aut' | 'bdd' | 'bjd' | 'bka' | 'bkd' | 'bkp' | 'blw' | 'bnd' | 'bpd' | 'brd' | 'brl' | 'bsl' | 'cad' | 'cas' | 'ccp' | 'chr' | 'cli' | 'cll' | 'clr' | 'clt' | 'cmm' | 'cmp' | 'cmt' | 'cnd' | 'cng' | 'cns' | 'coe' | 'col' | 'com' | 'con' | 'cop' | 'cor' | 'cos' | 'cot' | 'cou' | 'cov' | 'cpc' | 'cpe' | 'cph' | 'cpl' | 'cpt' | 'cre' | 'crp' | 'crr' | 'crt' | 'csl' | 'csp' | 'cst' | 'ctb' | 'cte' | 'ctg' | 'ctr' | 'cts' | 'ctt' | 'cur' | 'cwt' | 'dbd' | 'dbp' | 'dfd' | 'dfe' | 'dft' | 'dgc' | 'dgg' | 'dgs' | 'dis' | 'djo' | 'dln' | 'dnc' | 'dnr' | 'dpc' | 'dpt' | 'drm' | 'drt' | 'dsr' | 'dst' | 'dtc' | 'dte' | 'dtm' | 'dto' | 'dub' | 'edc' | 'edd' | 'edm' | 'edt' | 'egr' | 'elg' | 'elt' | 'eng' | 'enj' | 'etr' | 'evp' | 'exp' | 'fac' | 'fds' | 'fld' | 'flm' | 'fmd' | 'fmk' | 'fmo' | 'fmp' | 'fnd' | 'fon' | 'fpy' | 'frg' | 'gdv' | 'gis' | 'his' | 'hnr' | 'hst' | 'ill' | 'ilu' | 'ink' | 'ins' | 'inv' | 'isb' | 'itr' | 'ive' | 'ivr' | 'jud' | 'jug' | 'lbr' | 'lbt' | 'ldr' | 'led' | 'lee' | 'lel' | 'len' | 'let' | 'lgd' | 'lie' | 'lil' | 'lit' | 'lsa' | 'lse' | 'lso' | 'ltg' | 'ltr' | 'lyr' | 'mcp' | 'mdc' | 'med' | 'mfp' | 'mfr' | 'mka' | 'mod' | 'mon' | 'mrb' | 'mrk' | 'msd' | 'mte' | 'mtk' | 'mup' | 'mus' | 'mxe' | 'nan' | 'nrt' | 'onp' | 'opn' | 'org' | 'orm' | 'osp' | 'oth' | 'own' | 'pad' | 'pan' | 'pat' | 'pbd' | 'pbl' | 'pdr' | 'pfr' | 'pht' | 'plt' | 'pma' | 'pmn' | 'pnc' | 'pop' | 'ppm' | 'ppt' | 'pra' | 'prc' | 'prd' | 'pre' | 'prf' | 'prg' | 'prm' | 'prn' | 'pro' | 'prp' | 'prs' | 'prt' | 'prv' | 'pta' | 'pte' | 'ptf' | 'pth' | 'ptt' | 'pup' | 'rap' | 'rbr' | 'rcd' | 'rce' | 'rcp' | 'rdd' | 'red' | 'ren' | 'res' | 'rev' | 'rpc' | 'rps' | 'rpt' | 'rpy' | 'rse' | 'rsg' | 'rsp' | 'rsr' | 'rst' | 'rth' | 'rtm' | 'rxa' | 'sad' | 'sce' | 'scl' | 'scr' | 'sde' | 'sds' | 'sec' | 'sfx' | 'sgd' | 'sgn' | 'sht' | 'sll' | 'sng' | 'spk' | 'spn' | 'spy' | 'srv' | 'std' | 'stg' | 'stl' | 'stm' | 'stn' | 'str' | 'swd' | 'tad' | 'tau' | 'tcd' | 'tch' | 'ths' | 'tld' | 'tlg' | 'tlh' | 'tlp' | 'trc' | 'trl' | 'tyd' | 'tyg' | 'uvp' | 'vac' | 'vdg' | 'vfx' | 'voc' | 'wac' | 'wal' | 'wam' | 'wat' | 'waw' | 'wdc' | 'wde' | 'wfs' | 'wft' | 'wfw' | 'win' | 'wit' | 'wpr' | 'wst' | 'wts';
type DocumentCrisalidType = 'Document' | 'ScholarlyPublication' | 'Article' | 'JournalArticle' | 'ConferenceArticle' | 'ConferenceAbstract' | 'Preface' | 'Comment' | 'BookChapter' | 'Book' | 'Monograph' | 'Proceedings' | 'BookOfChapters' | 'Presentation' | 'UNKNOWN';
type HarvesterType = 'orcid' | 'idref' | 'hal' | 'idhals' | 'idhali' | 'scopus' | 'scanr' | 'openalex' | 'scienceplus' | 'sudoc' | 'openedition' | 'persee' | 'local' | 'eppn' | 'ror' | 'nns' | 'uai' | 'siren' | 'siret' | 'grid' | 'wikidata' | 'fundref' | 'isni' | 'googlescholar' | 'viaf' | 'doi' | 'issn' | 'arxiv' | 'bibcode' | 'biorxiv' | 'cern' | 'chemrxiv' | 'ensam' | 'ineris' | 'inspire' | 'ird' | 'irstea' | 'meditagri' | 'nnt' | 'okina' | 'oatao' | 'pii' | 'pmid' | 'pmcid' | 'ppn' | 'prodinra' | 'sciencespo' | 'swhid' | 'uri' | 'wos';
type ResearcherIdentifier = {
    id: number;
    value: string;
    harvester: HarvesterType;
};
type Researcher = {
    id: number;
    user: null | UserModel;
    display_name: string;
    identifiers: ResearcherIdentifier[];
};
type ResearcherLight = Researcher & {
    documents: {
        publications: number;
        conferences: number;
    };
};
type ResearcherDocument = {
    id: number;
    title: string;
    description: string;
    document_type: null | string;
    contributors: Researcher[];
    identifiers: ResearcherIdentifier[];
    publication_date: string | null | Date;
    modules: {
        similars: number;
    };
};
type ResearcherDocumentType = keyof ResearcherLight['documents'];
type TranslatedResearcherDocument = Translated<ResearcherDocument, 'title' | 'description'>;
type ResearcherDocumentAnalytics = {
    document_types: {
        [key in DocumentCrisalidType]?: number;
    };
    years: Array<{
        year: number;
        total: number;
    }>;
    roles: {
        [key in Relators]?: number;
    };
};
type QueryFilterResearcher = Partial<{
    harvester: HarvesterType;
    values: string;
} & PaginationQuery>;
type DocumentModulesKeys = keyof ResearcherDocument['modules'];
type QueryFilterDocument = Partial<{
    year: number;
    document_type: DocumentCrisalidType | '';
    roles: Relators;
    modules: 'none' | DocumentModulesKeys[];
    ordering: Ordering<'publication_date'>;
}>;

/**
 * @name UserModel
 * @description user data set on the project app
 */

type PrivacyValue = 'hide' | 'org' | 'pub';
interface PrivacySettings extends BaseModel {
    id?: number;
    publication_status: PrivacyValue;
    profile_picture: PrivacyValue;
    skills: PrivacyValue;
    mobile_phone: PrivacyValue;
    email: PrivacyValue;
    socials: PrivacyValue;
}
interface UserModel extends BaseModel {
    id: number;
    slug: string;
    people_id?: string;
    created_at: string;
    email_verified?: boolean;
    current_org_role?: Roles;
    pronouns?: string;
    email: string;
    given_name: string;
    family_name: string;
    profile_picture?: ImageModel;
    description?: string;
    short_description?: string;
    job?: string;
    sdgs?: number[];
    location: string;
    linkedin: string | null;
    facebook: string | null;
    twitter: string | null;
    website: string | null;
    landline_phone: string | null;
    mobile_phone: string | null;
    skype: string | null;
    researcher?: ResearcherLight;
    signed_terms_and_conditions?: {
        [key: string]: {
            version: number | null;
            date: string | null;
        };
    } | null;
    is_superuser: boolean;
    roles: string[];
    permissions: string[];
    modules: {
        conferences: number;
        files: number;
        reviews_projects: number;
        follows_categories: number;
        follows_projects: number;
        groups: number;
        links: number;
        mentor: number;
        mentoree: number;
        projects: number;
        publications: number;
        skills: number;
        notifications: number;
    };
    role?: string;
}
type UserModulesKeys = keyof UserModel['modules'];
type UserModuleExtra = UserModulesKeys | 'resources' | 'privacy';
type UserSlugOrId = UserModel['id'] | UserModel['slug'];
interface UserFromJWTModel {
    id: string;
    given_name: string;
    family_name: string;
    email: string;
    groups: string[];
}
interface NotificationsSettings {
    notify_added_to_project: boolean;
    announcement_published: boolean;
    followed_project_has_been_edited: boolean;
    project_has_been_commented: boolean;
    project_has_been_edited: boolean;
    project_ready_for_review: boolean;
    project_has_been_reviewed: boolean;
    comment_received_a_response: boolean;
    organization_has_new_access_request: boolean;
    invitation_link_will_expire: boolean;
    new_instruction: boolean;
}
interface UserPatchModel {
    birthdate?: string;
    pronouns?: string;
    short_description?: string;
    description?: string;
    location?: string;
    job?: string;
    sdgs?: number[];
    facebook?: string;
    mobile_phone?: string;
    linkedin?: string;
    medium?: string;
    website?: string;
    skype?: string;
    landline_phone?: string;
    twitter?: string;
    language?: string;
    email?: string;
    given_name?: string;
    family_name?: string;
    roles_to_add?: number[];
    roles_to_remove?: number[];
    permissions_ids?: number[];
    onboarding_status?: object;
    signed_terms_and_conditions?: {
        [key: string]: {
            version: number | null;
            date: string | null;
        };
    } | null;
}
interface UserPrivacyPatchModel {
    profile_picture?: PrivacyValue;
    profile?: PrivacyValue;
    skills?: PrivacyValue;
    hobbies?: PrivacyValue;
    facebook?: PrivacyValue;
    mobile_phone?: PrivacyValue;
    linkedin?: PrivacyValue;
    medium?: PrivacyValue;
    website?: PrivacyValue;
    personal_email?: PrivacyValue;
    skype?: PrivacyValue;
    landline_phone?: PrivacyValue;
    twitter?: PrivacyValue;
}
type TranslatedUserModel = Translated<UserModel, 'description' | 'short_description' | 'job'> & {};
type QueryFilterUser = Partial<{
    ordering: Ordering<'given_name' | 'family_name' | 'job' | 'current_org_role' | 'email_verified' | 'password_created' | 'last_login' | 'created_at'>;
    search: string;
    modules: 'none' | UserModulesKeys[];
    serializer: 'light' | 'superlight';
    organizations: string;
    current_org_pk: string | number;
    current_org_role: string;
    can_mentor: boolean;
    needs_mentor: boolean;
    can_mentor_on: string;
    needs_mentor_on: string;
} & PaginationQuery>;
type QueryFilterUserEmail = Partial<{
    current_org_pk: OrganizationModel['id'];
}>;
type QueryFilterResetPassword = Partial<{
    redirect_uri: string;
}>;
type UserForm = Partial<Omit<UserModel, 'slug' | 'researcher' | 'is_superuser' | 'roles' | 'permissions' | 'modules' | 'created_at' | 'email_verified' | 'people_id' | 'profile_picture'> & {
    imageSizes: ImageSize | null;
    profile_picture: ImageModel | File | null;
}>;

interface SkillModel extends BaseModel {
    id: number;
    user?: UserSlugOrId;
    tag: TagModel;
    level: number;
    level_to_reach: number;
    category: string;
    type: 'skill' | 'hobby';
    can_mentor: boolean;
    needs_mentor: boolean;
    comment: string;
}
type QueryFilterSkill = Partial<{
    search: string;
}>;
type TranslatedSkill = Omit<SkillModel, 'tag'> & {
    tag: TranslatedTag;
};
type SkillForm = Partial<TranslatedSkill>;
type SkillCleanedForm = Partial<Omit<SkillForm, 'tag'> & {
    tag: TagModel['id'];
}>;

interface TermsAndConditions {
    id: number;
    organization: OrganizationModel['code'];
    displayed_updated_at: Date | string;
    displayed_version: number;
    displayed_content: string;
}
interface OrganizationModel extends BaseModel {
    id: number;
    background_color: string;
    banner_image: ImageModel;
    code: string;
    contact_email: string;
    dashboard_title: string;
    dashboard_subtitle: string;
    language: LanguageType;
    languages: LanguageType[];
    logo_image: ImageModel;
    main_org_logo_visibility: boolean;
    is_logo_visible_on_parent_dashboard: boolean;
    name: string;
    website_url: string;
    faq: FaqModel;
    children: string[];
    enabled_projects_tag_classifications: any[];
    enabled_skills_tag_classifications: any[];
    terms_and_conditions: TermsAndConditions | null;
    description: string;
    chat_button_text: string;
    auto_translate_content: boolean;
    onboarding_enabled: boolean;
    chat_url?: string;
}
type OrganizationPatchInput = Partial<OrganizationModel> & {
    tags?: number[];
    default_skills_tags?: SkillModel[] | number[];
    default_projects_tags?: TagModel[] | number[];
};
type OrganizationOutput = BaseModel & Required<OrganizationModel> & {
    faq: FaqModel;
    organization_directory: OrganizationDirectoryModel;
    tags: TagModel[];
    children: string[];
    access_request_enabled?: boolean;
    languages?: string[];
    default_skills_tags?: TagModel[];
    default_projects_tags?: TagModel[];
};
type TransaltedTermsAndConditions = Translated<TermsAndConditions, 'displayed_content'>;
type TranslatedOrganizationModel = Translated<Omit<OrganizationOutput, 'terms_and_conditions'>, 'name' | 'dashboard_title' | 'dashboard_subtitle' | 'description' | 'chat_button_text'> & {
    terms_and_conditions: TransaltedTermsAndConditions;
};

interface TemplateTab extends BaseModel {
    id?: number;
    template?: number;
    uuid: ProjectTab['uuid'];
    title: ProjectTab['title'];
    description: ProjectTab['description'];
    type: ProjectTab['type'];
    icon: ProjectTab['icon'];
    show_preview: ProjectTab['show_preview'];
    show_tab: ProjectTab['show_tab'];
    order: ProjectTab['order'];
    title_item: ProjectTabItem['title'];
    content_item: ProjectTabItem['content'];
}
/**
 * @name TemplateModel
 * @description Template of a category
 */
interface TemplateModel extends BaseModel {
    id: number;
    name: string;
    description: string;
    language: LanguageType;
    images: ImageModel[];
    organization: OrganizationModel;
    categories: ProjectCategoryModel[];
    project_title: string;
    project_description: string;
    project_purpose: string;
    project_tags: TagModel[];
    blogentry_title: string;
    blogentry_content: string;
    goal_title: string;
    goal_description: string;
    review_title: string;
    review_description: string;
    comment_content: string;
    tabs: TemplateTab[];
    enable_tab: boolean;
}
type TemplateId = TemplateModel['id'];
type TranslatedTemplate = Omit<Translated<TemplateModel, 'name' | 'description' | 'project_title' | 'project_description' | 'project_purpose' | 'project_tags' | 'blogentry_title' | 'blogentry_content' | 'goal_title' | 'goal_description' | 'review_title' | 'review_description' | 'comment_content'>, 'project_tags'> & {
    project_tags: TranslatedTag[];
};
type TemplateTabForm = Partial<TemplateTab>;
type TemplateForm = Partial<Omit<TemplateModel, 'tabs'>> & {
    tabs: TemplateTabForm[];
    project_categories_ids: number[];
};
type QueryFilterTemplate = Partial<{
    search: string;
    ordering: Ordering<'updated_at' | 'created_at' | 'title'>;
    categories: ProjectCategoryModel['id'][];
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
type FollowedModel = {
    is_followed: boolean;
    follow_id: number;
};

/**
 * @name ProjectCategoryModel
 * @description Category of an organization or project
 */
interface ProjectCategoryModel extends BaseModel {
    id: number;
    name: string;
    slug: string;
    outdated_slugs?: string[];
    description: string;
    background_image: ImageModel | null;
    organization: OrganizationModel | OrganizationModel['code'];
    is_reviewable: boolean;
    order_index: number;
    tags: TagModel[];
    only_reviewer_can_publish: boolean;
    is_root: boolean;
    parent: ProjectCategoryModel | null;
    is_followed: FollowedModel;
    background_color: string;
    foreground_color: string;
    children?: ProjectCategoryModel[];
    projects_count?: number;
    hierarchy?: ProjectCategoryModel[];
    templates: TemplateModel[];
}
type TranslatedProjectCategory = Omit<Translated<ProjectCategoryModel, 'name' | 'description'>, 'hierarchy' | 'templates' | 'children' | 'tags'> & {
    hierarchy?: TranslatedProjectCategory[];
    children?: TranslatedProjectCategory[];
    templates?: TranslatedTemplate[];
    tags?: TranslatedTag[];
};
type ProjectCategoryCreateInput = Required<Omit<ProjectCategoryModel, 'tags'>> & {
    organization_code: string;
    tags?: number[];
};
type ProjectCategoryPutInput = Required<Omit<ProjectCategoryModel, 'tags'>> & {
    tags: number[];
};
type ProjectCategoryPatchInput = Partial<Omit<ProjectCategoryModel, 'tags'>> & {
    tags?: number[];
};
type ProjectCategoryOutput = BaseModel & Required<Omit<ProjectCategoryModel, 'tags'>> & {
    template: TemplateModel;
    organization: OrganizationModel['code'];
    tags: TagModel[];
};
type ProjectCategoryForm = Omit<ProjectCategoryModel, 'parent' | 'is_followed'> & {
    parent: number;
    imageSizes?: ImageSize;
};

/**
 * @name NewsModel
 * @description News of an organization
 */
interface EventModel extends BaseModel {
    id: number;
    title: string;
    content: string;
    start_date: string;
    end_date: string;
    created_at?: string;
    updated_at?: string;
    visible_by_all: boolean;
    location: BaseLocationModel | null;
    people_groups: string[];
}
type EventIdOrSlug = EventModel['id'];
type EventInput = Required<Omit<EventModel, 'id' | 'created_at' | 'updated_at'>>;
type EventForm = Omit<Optional<EventModel, 'id'>, 'people_groups' | 'start_date' | 'end_date'> & {
    start_date: Date;
    end_date: Date;
    people_groups: {
        [key: number]: boolean;
    };
};
type TranslatedEventModel = Translated<EventModel, 'title' | 'content'> & {
    location: BaseTranslatedLocationModel;
};
type QueryFilterEvent = Partial<{
    ordering: Ordering<'start_date' | 'end_date' | 'updated_at' | 'created_at'>;
    from_date: string;
    to_date: string;
    serializer: 'light';
} & PaginationQuery>;

type SubGroup = {
    id: number;
    name: string;
};
interface PeopleGroupModel {
    id: number;
    slug: string;
    name: string;
    description: string;
    short_description: string;
    email: string;
    type: string;
    role?: GroupDataRole;
    header_image: ImageModel;
    publication_status: string;
    organization: OrganizationModel;
    children: PeopleGroupModel[];
    hierarchy: any;
    sdgs: number[];
    tags: TagModel[];
    locations: BaseLocationModel[];
    modules: {
        members: number;
        featured_projects: number;
        publications: number;
        conferences: number;
        similars: number;
        subgroups: number;
        gallery: number;
        locations: number;
        news: number;
        event: number;
    };
}
type PeopleGroupIdOrSlug = PeopleGroupModel['id'] | PeopleGroupModel['slug'];
type PeopleGroupModulesKeys = keyof PeopleGroupModel['modules'];
type TranslatedPeopleGroupModel = Omit<Translated<PeopleGroupModel, 'name' | 'description' | 'short_description'>, 'locations'> & {
    locations: BaseTranslatedLocationModel[];
};
type GeneralLocationPeopleGroup = BaseTranslatedLocationModel & {
    people_group: TranslatedPeopleGroupModel;
};
type QueryFilterGroup = Partial<{
    modules: PeopleGroupModulesKeys[] | 'none';
    serializer: 'light' | 'superlight';
}>;
type QueryFilterGroupHierarchy = QueryFilterGroup & Partial<{
    depth: number;
    parent: PeopleGroupIdOrSlug;
}>;

/**
 * @name NewsModel
 * @description News of an organization
 */
interface NewsModel extends BaseModel {
    id: number;
    title: string;
    content: string;
    images: NewsImageModel[];
    header_image?: ImageModel;
    publication_date: string;
    people_groups: PeopleGroupModel[];
    created_at: string;
    updated_at: string;
    organization: OrganizationModel;
    visible_by_all: boolean;
    location: BaseLocationModel;
}
interface NewsImageModel {
    file: string;
    name: string;
    gallery: string;
}
type TranslatedNews = Omit<Translated<NewsModel, 'title' | 'content'>, 'location'> & {
    location: BaseTranslatedLocationModel;
};
type NewsOutput = BaseModel & Required<NewsModel> & {
    images?: Array<NewsImageModel>;
};
type NewsInput = Required<Omit<NewsModel, 'id' | 'created_at' | 'updated_at' | 'organization' | 'images'>>;
type NewsForm = Omit<NewsInput, 'people_groups'> & {
    id?: NewsModel['id'];
    organization_code?: string;
    imageSizes?: ImageSize;
    people_groups: {
        [key: number]: boolean;
    };
};
type QueryFilterNews = Partial<{
    ordering: Ordering<'created_at' | 'updated_at' | 'publication_date'>;
    from_date: string;
    to_date: string;
    serializer: 'light';
} & PaginationQuery>;

interface BaseLocationModel extends BaseModel {
    id: number;
    lat: number;
    lng: number;
    type: LocationType;
    title: string;
    description: string;
}
type LocationId = BaseLocationModel['id'];
type BaseTranslatedLocationModel = Translated<BaseLocationModel, 'title' | 'description'>;
interface NewsLocation extends BaseLocationModel {
    news: NewsModel;
}
interface TranslatedNewsLocation extends BaseTranslatedLocationModel {
    news: TranslatedNews;
}
interface EventLocation extends BaseLocationModel {
    event: EventModel;
}
interface TranslatedEventLocation extends BaseTranslatedLocationModel {
    event: TranslatedEventModel;
}
interface LocationModel extends BaseLocationModel {
    project: ProjectModel;
}
type TranslatedLocation = BaseTranslatedLocationModel & {
    project: TranslatedProject;
};
type LocationInput = Required<LocationModel> & {
    project_id: string;
};
type LocationOutput = Omit<Required<LocationModel>, 'project'>;
type LocationForm = Partial<Omit<LocationModel, 'id' | 'project'> & {
    id?: LocationModel['id'];
}>;
type ProjectLocationForm = LocationForm & {
    project_id: string;
};
type AnyLocation = BaseLocationModel & {
    [key: string]: any;
};
type AnyTranslatedLocation = Omit<BaseTranslatedLocationModel, '$t'> & {
    $t?: BaseTranslatedLocationModel['$t'];
    [key: string]: any;
};
type LocationGeneral = BaseLocationModel & {
    content_id: string;
    content_type: 'project' | 'people_group' | 'event' | 'news';
};
type TranslatedLocationGeneral = Translated<LocationGeneral, 'title' | 'description'>;

/**
 * @name ProjectModel
 * @description Project
 */
interface ProjectModel extends Omit<BaseModel, 'id'> {
    id: string;
    title: string;
    description: string;
    header_image: ImageModel;
    is_locked: boolean;
    is_shareable: boolean;
    purpose: string;
    categories: ProjectCategoryModel[];
    organizations: OrganizationModel[];
    language: LanguageType;
    publication_status: ProjectPublicationStatusType;
    life_status: ProjectStatusType;
    tags: TagModel[];
    sdgs: number[];
    is_followed: FollowedModel;
    slug: string;
    updated_at: string;
    created_at: string;
    views?: number;
    modules: {
        members: number;
        groups: number;
        linked_projects: number;
        similars: number;
        locations: number;
        comments: number;
        goals: number;
        blogs: number;
        announcements: number;
        links: number;
        files: number;
        reviews: number;
        messages: number;
        tabs: number;
    };
    template?: TemplateModel;
}
type ProjectModulesKeys = keyof ProjectModel['modules'];
type ProjectModuleExtra = ProjectModulesKeys | 'resources' | 'description';
type TranslatedProject = Translated<Omit<ProjectModel, 'template' | 'categories' | 'tags'>, 'title' | 'description' | 'purpose'> & {
    template?: TranslatedTemplate;
    categories: TranslatedProjectCategory[];
    tags: TranslatedTag[];
};
type ProjectSlugOrId = ProjectModel['slug'];
type LinkedProject = {
    id: number;
    project: ProjectModel;
    target?: ProjectModel;
};
type TranslatedLinkedProject = Omit<LinkedProject, 'project' | 'target'> & {
    project: TranslatedProject;
    target?: TranslatedProject;
};
type LinkedProjectRef = {
    project_id: string;
    target_id: string;
};
type AddManyLinkedProjectInput = LinkedProjectRef[];
type RemoveLinkedProjectInput = {
    project_ids: string[];
};
type ProjectOutput = Required<ProjectModel> & {
    organizations: OrganizationOutput[];
    categories: ProjectCategoryOutput[];
    geolocation_coordinates: LocationOutput;
    tags: TagModel[];
    sdgs: number[];
    images: ImageModel[];
    views: number;
    template: TemplateModel;
    slug: string;
};
type ProjectForm = Partial<Pick<ProjectModel, 'id' | 'title' | 'purpose' | 'language' | 'description' | 'sdgs' | 'is_locked' | 'is_shareable' | 'publication_status' | 'life_status' | 'template'> & {
    imageSizes: any;
    file: ImageModel | File;
    organizations_codes: OrganizationModel['code'][];
    categories: TranslatedProjectCategory | ProjectCategoryModel;
    categorie: TranslatedProjectCategory;
    project_categories_ids: TranslatedProjectCategory['id'][];
    template_id: number;
    tags: TranslatedTag[];
}>;
type AnyProject = ProjectModel | TranslatedProject;
type QueryFilterProjectSimilars = {
    organizations: OrganizationModel['code'][];
    threshold?: number;
};

/**
 * @name NewsModel
 * @description News of an organization
 */
interface InstructionModel extends BaseModel {
    id: number;
    title: string;
    content: string;
    publication_date: Date | string;
    people_groups: PeopleGroupModel[];
    has_to_be_notified: boolean;
    visible_by_all: boolean;
}
type InstructionId = InstructionModel['id'] | string;
type InstructionForm = Omit<InstructionModel, 'id' | 'people_groups'> & {
    id?: number;
    people_groups: any;
};
type InstructionInput = Required<Omit<InstructionModel, 'id' | 'people_groups'>> & {
    id?: InstructionModel['id'];
    people_groups: {
        [key: string]: PeopleGroupModel;
    };
    organization_code?: string;
    people_groups_ids: string[];
};
type TranslatedInstruction = Translated<InstructionModel, 'title' | 'content'>;
type QueryFilterInstruction = Partial<{
    ordering: Ordering<'publication_date' | 'updated_at' | 'created_at'>;
    from_date: string;
    to_date: string;
} & PaginationQuery>;

export type { NotificationsSettings as $, AddManyFollowedProject as A, BaseLocationModel as B, InstructionModel as C, DocumentCrisalidType as D, EventForm as E, FaqImageModel as F, GeneralLocationPeopleGroup as G, HarvesterType as H, InstructionForm as I, LanguageType as J, LinkedProject as K, Language as L, LinkedProjectRef as M, LocationForm as N, LocationGeneral as O, LocationId as P, LocationInput as Q, LocationModel as R, LocationOutput as S, LocationType as T, NewsForm as U, NewsImageModel as V, NewsInput as W, NewsLocation as X, NewsModel as Y, NewsOutput as Z, NotificationType as _, AddManyLinkedProjectInput as a, SubGroup as a$, OrganizationDirectoryModel as a0, OrganizationModel as a1, OrganizationOutput as a2, OrganizationPatchInput as a3, PeopleGroupIdOrSlug as a4, PeopleGroupModel as a5, PeopleGroupModulesKeys as a6, PrivacySettings as a7, PrivacyValue as a8, ProjectCategoryCreateInput as a9, QueryFilterGroupHierarchy as aA, QueryFilterInstruction as aB, QueryFilterNews as aC, QueryFilterProjectSimilars as aD, QueryFilterProjectTab as aE, QueryFilterProjectTabItem as aF, QueryFilterResearcher as aG, QueryFilterResetPassword as aH, QueryFilterSkill as aI, QueryFilterTemplate as aJ, QueryFilterUser as aK, QueryFilterUserEmail as aL, Relators as aM, RemoveLinkedProjectInput as aN, Researcher as aO, ResearcherDocument as aP, ResearcherDocumentAnalytics as aQ, ResearcherDocumentType as aR, ResearcherIdentifier as aS, ResearcherLight as aT, Roles as aU, SearchObjectType as aV, SecondaryTagType as aW, SkillCleanedForm as aX, SkillForm as aY, SkillModel as aZ, StatusType as a_, ProjectCategoryForm as aa, ProjectCategoryModel as ab, ProjectCategoryOutput as ac, ProjectCategoryPatchInput as ad, ProjectCategoryPutInput as ae, ProjectForm as af, ProjectGroupRoleType as ag, ProjectLocationForm as ah, ProjectMemberRoleType as ai, ProjectModel as aj, ProjectModuleExtra as ak, ProjectModulesKeys as al, ProjectOutput as am, ProjectPublicationStatusType as an, ProjectRoleType as ao, ProjectSlugOrId as ap, ProjectStatusType as aq, ProjectTab as ar, ProjectTabForm as as, ProjectTabItem as at, ProjectTabItemForm as au, ProjectTabModulesKeys as av, ProjectTabType as aw, QueryFilterDocument as ax, QueryFilterEvent as ay, QueryFilterGroup as az, AnyLocation as b, TabSlugOrId as b0, TagModel as b1, TagType as b2, TemplateForm as b3, TemplateId as b4, TemplateModel as b5, TemplateTab as b6, TemplateTabForm as b7, TermsAndConditions as b8, TransaltedTermsAndConditions as b9, UserPrivacyPatchModel as bA, UserSlugOrId as bB, TranslatedEventLocation as ba, TranslatedEventModel as bb, TranslatedInstruction as bc, TranslatedLinkedProject as bd, TranslatedLocation as be, TranslatedLocationGeneral as bf, TranslatedNews as bg, TranslatedNewsLocation as bh, TranslatedOrganizationModel as bi, TranslatedPeopleGroupModel as bj, TranslatedProject as bk, TranslatedProjectCategory as bl, TranslatedProjectTab as bm, TranslatedProjectTabItem as bn, TranslatedResearcherDocument as bo, TranslatedSkill as bp, TranslatedTag as bq, TranslatedTemplate as br, TranslatedUserModel as bs, UnfollowCategoryInput as bt, UserForm as bu, UserFromJWTModel as bv, UserModel as bw, UserModuleExtra as bx, UserModulesKeys as by, UserPatchModel as bz, AnyProject as c, AnyTranslatedLocation as d, AttachmentType as e, BaseTranslatedLocationModel as f, DocumentModulesKeys as g, EventIdOrSlug as h, EventInput as i, EventLocation as j, EventModel as k, FaqInput as l, FaqModel as m, FollowCategoryInput as n, FollowInput as o, FollowManyOutput as p, FollowModel as q, FollowOutput as r, FollowOutputList as s, FollowProjectOutput as t, FollowedModel as u, FollowedProjectRef as v, GroupDataRole as w, GroupMemberRoleType as x, InstructionId as y, InstructionInput as z };
