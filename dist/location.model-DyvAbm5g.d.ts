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
type ProjectTabType = 'text' | 'blog';

interface BaseModel {
}

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

interface ImageSize {
    scale_x: number | null;
    scale_y: number | null;
    left: number | null;
    top: number | null;
    natural_ratio: number | null;
}
/**
 * @name ImageModel
 * @description Image of a project
 */
type ImageModel = BaseModel & ImageSize & {
    id?: number;
    url: string;
    file: string;
    name: string;
    height?: number;
    width?: number;
    variations: {
        full: string;
        large: string;
        medium: string;
        original: string;
        small: string;
    };
};
type ImageVariations = keyof ImageModel['variations'];
type ImageModealCreated = ImageModel & {
    static_url: string;
};
type ImageInput = Partial<ImageModel> & {
    project_id: string;
};
type ImageOrganizationInput = Partial<ImageModel> & {
    organization_code: string;
};
type ImageTemplateInput = Partial<ImageModel> & {
    template_id: number;
};

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
 * Type to modify interface with auto translate fields
 * use like Translated<BlogEntries, 'title' | 'content'>
 *
 * @typedef
 * @name Translated
 * @kind variable
 * @param {unknown} Model
 * @param {unknown} Fields
 * @exports
 */
type Translated<Model, Fields extends keyof Model> = Model & {
    $t: Pick<Model, Fields>;
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

type PaginationQuery = {
    limit: number;
    offset: number;
};
type PaginationResult<T = any> = {
    /** @example 123 */
    count: number;
    /** @example 123 */
    current_page?: number;
    /**
     * @format uri
     * @example "http://api.example.org/accounts/?offset=0&limit=100"
     */
    first?: string;
    /**
     * @format uri
     * @example "http://api.example.org/accounts/?offset=400&limit=100"
     */
    last?: string;
    /**
     * @format uri
     * @example "http://api.example.org/accounts/?offset=400&limit=100"
     */
    next?: string | null;
    /** @example 123 */
    next_page?: number;
    /**
     * @format uri
     * @example "http://api.example.org/accounts/?offset=200&limit=100"
     */
    previous?: string | null;
    /** @example 123 */
    previous_page?: number;
    results: T[];
    /** @example 123 */
    total_page?: number;
};

type Ordering<T extends string> = `-${T}` | T;

type Relators = 'abr' | 'acp' | 'act' | 'adi' | 'adp' | 'aft' | 'anc' | 'anl' | 'anm' | 'ann' | 'ant' | 'ape' | 'apl' | 'app' | 'aqt' | 'arc' | 'ard' | 'arr' | 'art' | 'asg' | 'asn' | 'ato' | 'att' | 'auc' | 'aud' | 'aue' | 'aui' | 'aup' | 'aus' | 'aut' | 'bdd' | 'bjd' | 'bka' | 'bkd' | 'bkp' | 'blw' | 'bnd' | 'bpd' | 'brd' | 'brl' | 'bsl' | 'cad' | 'cas' | 'ccp' | 'chr' | 'cli' | 'cll' | 'clr' | 'clt' | 'cmm' | 'cmp' | 'cmt' | 'cnd' | 'cng' | 'cns' | 'coe' | 'col' | 'com' | 'con' | 'cop' | 'cor' | 'cos' | 'cot' | 'cou' | 'cov' | 'cpc' | 'cpe' | 'cph' | 'cpl' | 'cpt' | 'cre' | 'crp' | 'crr' | 'crt' | 'csl' | 'csp' | 'cst' | 'ctb' | 'cte' | 'ctg' | 'ctr' | 'cts' | 'ctt' | 'cur' | 'cwt' | 'dbd' | 'dbp' | 'dfd' | 'dfe' | 'dft' | 'dgc' | 'dgg' | 'dgs' | 'dis' | 'djo' | 'dln' | 'dnc' | 'dnr' | 'dpc' | 'dpt' | 'drm' | 'drt' | 'dsr' | 'dst' | 'dtc' | 'dte' | 'dtm' | 'dto' | 'dub' | 'edc' | 'edd' | 'edm' | 'edt' | 'egr' | 'elg' | 'elt' | 'eng' | 'enj' | 'etr' | 'evp' | 'exp' | 'fac' | 'fds' | 'fld' | 'flm' | 'fmd' | 'fmk' | 'fmo' | 'fmp' | 'fnd' | 'fon' | 'fpy' | 'frg' | 'gdv' | 'gis' | 'his' | 'hnr' | 'hst' | 'ill' | 'ilu' | 'ink' | 'ins' | 'inv' | 'isb' | 'itr' | 'ive' | 'ivr' | 'jud' | 'jug' | 'lbr' | 'lbt' | 'ldr' | 'led' | 'lee' | 'lel' | 'len' | 'let' | 'lgd' | 'lie' | 'lil' | 'lit' | 'lsa' | 'lse' | 'lso' | 'ltg' | 'ltr' | 'lyr' | 'mcp' | 'mdc' | 'med' | 'mfp' | 'mfr' | 'mka' | 'mod' | 'mon' | 'mrb' | 'mrk' | 'msd' | 'mte' | 'mtk' | 'mup' | 'mus' | 'mxe' | 'nan' | 'nrt' | 'onp' | 'opn' | 'org' | 'orm' | 'osp' | 'oth' | 'own' | 'pad' | 'pan' | 'pat' | 'pbd' | 'pbl' | 'pdr' | 'pfr' | 'pht' | 'plt' | 'pma' | 'pmn' | 'pnc' | 'pop' | 'ppm' | 'ppt' | 'pra' | 'prc' | 'prd' | 'pre' | 'prf' | 'prg' | 'prm' | 'prn' | 'pro' | 'prp' | 'prs' | 'prt' | 'prv' | 'pta' | 'pte' | 'ptf' | 'pth' | 'ptt' | 'pup' | 'rap' | 'rbr' | 'rcd' | 'rce' | 'rcp' | 'rdd' | 'red' | 'ren' | 'res' | 'rev' | 'rpc' | 'rps' | 'rpt' | 'rpy' | 'rse' | 'rsg' | 'rsp' | 'rsr' | 'rst' | 'rth' | 'rtm' | 'rxa' | 'sad' | 'sce' | 'scl' | 'scr' | 'sde' | 'sds' | 'sec' | 'sfx' | 'sgd' | 'sgn' | 'sht' | 'sll' | 'sng' | 'spk' | 'spn' | 'spy' | 'srv' | 'std' | 'stg' | 'stl' | 'stm' | 'stn' | 'str' | 'swd' | 'tad' | 'tau' | 'tcd' | 'tch' | 'ths' | 'tld' | 'tlg' | 'tlh' | 'tlp' | 'trc' | 'trl' | 'tyd' | 'tyg' | 'uvp' | 'vac' | 'vdg' | 'vfx' | 'voc' | 'wac' | 'wal' | 'wam' | 'wat' | 'waw' | 'wdc' | 'wde' | 'wfs' | 'wft' | 'wfw' | 'win' | 'wit' | 'wpr' | 'wst' | 'wts';
type DocumentCrisalidType = 'Document' | 'ScholarlyPublication' | 'Article' | 'JournalArticle' | 'ConferenceArticle' | 'ConferenceAbstract' | 'Preface' | 'Comment' | 'BookChapter' | 'Book' | 'Monograph' | 'Proceedings' | 'BookOfChapters' | 'Presentation' | 'UNKNOWN';
type QueryFilterDocument = Partial<{
    year: number;
    document_type: DocumentCrisalidType | '';
    roles: Relators;
    ordering: Ordering<'publication_date'>;
}>;
type HarvesterType = 'orcid' | 'idref' | 'hal' | 'idhals' | 'idhali' | 'scopus' | 'scanr' | 'openalex' | 'scienceplus' | 'sudoc' | 'openedition' | 'persee' | 'local' | 'eppn' | 'ror' | 'nns' | 'uai' | 'siren' | 'siret' | 'grid' | 'wikidata' | 'fundref' | 'isni' | 'googlescholar' | 'viaf' | 'doi' | 'issn' | 'arxiv' | 'bibcode' | 'biorxiv' | 'cern' | 'chemrxiv' | 'ensam' | 'ineris' | 'inspire' | 'ird' | 'irstea' | 'meditagri' | 'nnt' | 'okina' | 'oatao' | 'pii' | 'pmid' | 'pmcid' | 'ppn' | 'prodinra' | 'sciencespo' | 'swhid' | 'uri' | 'wos';
type Identifier = {
    id: number;
    value: string;
    harvester: HarvesterType;
};
type Researcher = {
    id: number;
    user: null | UserModel;
    display_name: string;
    identifiers: Identifier[];
};
type ResearcherLight = Researcher & {
    documents: {
        publications: number;
        conferences: number;
    };
};
type DocumentType = keyof ResearcherLight['documents'];
type Document = {
    id: number;
    title: string;
    description: string;
    document_type: null | string;
    contributors: Researcher[];
    identifiers: Identifier[];
    publication_date: string | null | Date;
    similars: number;
};
type TranslatedDocument = Translated<Document, 'title' | 'description'>;
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

/**
 * @name UserModel
 * @description user data set on the project app
 */

type PrivacyValue = 'hide' | 'org' | 'pub';
type PrivacySettings = {
    publication_status: PrivacyValue;
    profile_picture: PrivacyValue;
    skills: PrivacyValue;
    mobile_phone: PrivacyValue;
    email: PrivacyValue;
    socials: PrivacyValue;
};
interface UserModel extends BaseModel {
    id: number;
    name: {
        firstname: string;
        lastname: string;
    };
    keycloack_id?: number;
    pronouns?: string;
    slug: string;
    email: string;
    roles: string[];
    orgs: string[];
    given_name: string;
    family_name: string;
    profile_picture?: ImageModel;
    permissions: string[];
    description?: string;
    short_description?: string;
    job?: string;
    people_groups?: PeopleGroupModel[];
    skills?: UserSkillModel[];
    notifications?: number;
    researcher?: ResearcherLight;
    resources: {
        files: number;
        links: number;
    };
    signed_terms_and_conditions?: {
        [key: string]: {
            version: number | null;
            date: string | null;
        };
    } | null;
    privacy_settings?: PrivacySettings;
    sdgs?: number[];
    is_superuser: boolean;
    linkedin: string | null;
    facebook: string | null;
    twitter: string | null;
    website: string | null;
}
type UserIdOrSlug = UserModel['id'] | UserModel['slug'];
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
interface UserSkillModel extends BaseModel {
    id: number;
    user: string;
    tag: TagModel;
    level: number;
    level_to_reach: number;
    category: string;
    type: 'skill' | 'hobby';
    can_mentor: boolean;
    needs_mentor: boolean;
    comment: string;
}
type TranslatedUserModel = Translated<Omit<UserModel, 'people_groups'>, 'description' | 'short_description' | 'job'> & {
    people_groups: TranslatedPeopleGroupModel[];
};

interface TermsAndConditions {
    id: number;
    version: number;
    content: string;
    displayed_version: number;
    displayed_content: string;
    displayed_updated_at: string;
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
    default_skills_tags?: UserSkillModel[] | number[];
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
type TranslatedOrganizationModel = Translated<OrganizationOutput, 'name' | 'dashboard_title' | 'dashboard_subtitle' | 'description' | 'chat_button_text'>;

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
}
type TemplateId = TemplateModel['id'];
type TranslatedTemplate = Omit<Translated<TemplateModel, 'name' | 'description' | 'project_title' | 'project_description' | 'project_purpose' | 'project_tags' | 'blogentry_title' | 'blogentry_content' | 'goal_title' | 'goal_description' | 'review_title' | 'review_description' | 'comment_content'>, 'project_tags'> & {
    project_tags: TranslatedTag[];
};
type TemplateForm = Partial<TemplateModel> & {
    project_categories_ids: number[];
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
    background_color: string;
    foreground_color: string;
    children?: ProjectCategoryModel[];
    projects_count?: number;
    hierarchy?: ProjectCategoryModel[];
    templates: TemplateModel[];
}
type TranslatedProjectCategory = Translated<ProjectCategoryModel, 'name' | 'description' | 'hierarchy' | 'templates'> & {
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
type ProjectCategoryForm = Omit<ProjectCategoryModel, 'parent'> & {
    parent: number;
    imageSizes?: ImageSize;
};

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
    is_followed: {
        is_followed: boolean;
        follow_id: number;
    };
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
type ProjectModuleExtra = ProjectModulesKeys | 'resources';
type TranslatedProject = Translated<Omit<ProjectModel, 'template' | 'categories' | 'tags'>, 'title' | 'description' | 'purpose'> & {
    template?: TranslatedTemplate;
    categories: TranslatedProjectCategory[];
    tags: TranslatedTag[];
};
type ProjectSlugOrId = ProjectModel['id'];
type LinkedProject = {
    id: number;
    project: ProjectModel;
    target?: ProjectModel;
};
type TranslatedLinkedProject = LinkedProject & {
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

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

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

export type { QueryFilterDocument as $, QueryFilterProjectSimilars as A, BaseLocationModel as B, AddManyLinkedProjectInput as C, Document as D, EventInput as E, FaqInput as F, LinkedProject as G, ProjectForm as H, ImageModealCreated as I, TemplateId as J, TemplateModel as K, LocationModel as L, LanguageType as M, NewsModel as N, OrganizationModel as O, ProjectSlugOrId as P, QueryFilterResearcher as Q, ResearcherDocumentAnalytics as R, ProjectMemberRoleType as S, TagModel as T, UserModel as U, Ordering as V, DocumentCrisalidType as W, DocumentType as X, HarvesterType as Y, Identifier as Z, Optional as _, PaginationResult as a, TranslatedPeopleGroupModel as a$, Relators as a0, ResearcherLight as a1, Translated as a2, TranslatedDocument as a3, AnyLocation as a4, Roles as a5, ImageVariations as a6, AnyProject as a7, AnyTranslatedLocation as a8, AttachmentType as a9, PrivacySettings as aA, PrivacyValue as aB, ProjectCategoryForm as aC, ProjectCategoryOutput as aD, ProjectGroupRoleType as aE, ProjectModuleExtra as aF, ProjectModulesKeys as aG, ProjectOutput as aH, ProjectPublicationStatusType as aI, ProjectRoleType as aJ, ProjectStatusType as aK, ProjectTabType as aL, RemoveLinkedProjectInput as aM, SearchObjectType as aN, SecondaryTagType as aO, StatusType as aP, SubGroup as aQ, TagType as aR, TemplateForm as aS, TermsAndConditions as aT, TranslatedEventLocation as aU, TranslatedEventModel as aV, TranslatedLinkedProject as aW, TranslatedLocation as aX, TranslatedNews as aY, TranslatedNewsLocation as aZ, TranslatedOrganizationModel as a_, BaseTranslatedLocationModel as aa, EventForm as ab, EventLocation as ac, FaqImageModel as ad, FaqModel as ae, GeneralLocationPeopleGroup as af, GroupDataRole as ag, GroupMemberRoleType as ah, ImageInput as ai, ImageSize as aj, ImageTemplateInput as ak, Language as al, LinkedProjectRef as am, LocationForm as an, LocationInput as ao, LocationOutput as ap, LocationType as aq, NewsForm as ar, NewsImageModel as as, NewsLocation as at, NewsOutput as au, NotificationType as av, NotificationsSettings as aw, OrganizationDirectoryModel as ax, OrganizationOutput as ay, PeopleGroupModulesKeys as az, PaginationQuery as b, TranslatedProject as b0, TranslatedProjectCategory as b1, TranslatedTag as b2, TranslatedTemplate as b3, TranslatedUserModel as b4, UserFromJWTModel as b5, BaseModel as b6, PeopleGroupIdOrSlug as c, Researcher as d, EventModel as e, EventIdOrSlug as f, QueryFilterEvent as g, QueryFilterGroup as h, PeopleGroupModel as i, ImageModel as j, ProjectModel as k, QueryFilterGroupHierarchy as l, LocationId as m, ProjectLocationForm as n, NewsInput as o, QueryFilterNews as p, OrganizationPatchInput as q, ImageOrganizationInput as r, UserPatchModel as s, UserPrivacyPatchModel as t, UserSkillModel as u, UserIdOrSlug as v, ProjectCategoryCreateInput as w, ProjectCategoryModel as x, ProjectCategoryPatchInput as y, ProjectCategoryPutInput as z };
