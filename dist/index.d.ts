import * as _tiptap_extension_underline from '@tiptap/extension-underline';
import * as _tiptap_extension_color from '@tiptap/extension-color';
import * as _tiptap_extension_table_cell from '@tiptap/extension-table-cell';
import * as _tiptap_core from '@tiptap/core';
import { Extension } from '@tiptap/core';
import { StarterKitOptions } from '@tiptap/starter-kit';
import { Attrs } from '@tiptap/pm/model';
import * as highlight_js from 'highlight.js';
import * as hast from 'hast';
import * as _lowlight from 'lowlight';
import { CodeBlockLowlightOptions } from '@tiptap/extension-code-block-lowlight';

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

type PaginationQuery = {
    limit: number;
    offset: number;
};

type Ordering<T extends string> = `-${T}` | T;

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

interface Icon {
}
interface IconTab {
}

interface ProjectTab extends BaseModel {
    id: number;
    project?: ProjectModel;
    title: string;
    type: ProjectTabType;
    description: string | null;
    icon: keyof IconTab | null;
    images?: ImageModel[];
    show_preview: boolean;
    modules: {
        items: number;
    };
}
type ProjectTabForm = Partial<Omit<ProjectTab, "id" | "modules" | "images"> & {
    id?: ProjectTab['id'];
    images_ids: number[];
}>;
type TranslatedProjectTab = Translated<ProjectTab, "title" | "description">;
interface ProjectTabItem extends BaseModel {
    id: number;
    tab?: ProjectTab;
    title: string;
    content: string;
    images?: number[];
    created_at: string;
    updated_at: string;
}
type TranslatedProjectTabItem = Translated<ProjectTabItem, "title" | "content">;
type ProjectTabItemForm = Partial<ProjectTabItem & {
    images_ids: number[];
}>;
type QueryFilterProjectTab = Partial<{
    type: ProjectTabType;
    show_preview: boolean;
} & PaginationQuery>;
type QueryFilterProjectTabItem = Partial<{
    ordering: Ordering<"created_at" | "updated_at">;
    from_date: string;
    to_date: string;
} & PaginationQuery>;

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

interface ProviderParamsContentType<T extends string> {
    type: T;
}
interface ProjectParams extends ProviderParamsContentType<'project-description'> {
    projectId: ProjectSlugOrId;
}
interface ProjectTabParams extends ProviderParamsContentType<'project-tab'> {
    projectId: ProjectSlugOrId;
    tabId: ProjectTab['id'];
}
interface ProjectTabItemParams extends ProviderParamsContentType<'project-tab-item'> {
    projectId: ProjectSlugOrId;
    tabId: ProjectTab['id'];
    tabItemId: ProjectTabItem['id'];
}
interface ProjectBlogParams extends ProviderParamsContentType<'project-blog'> {
    projectId: ProjectSlugOrId;
    blogId: BlogEntryId;
}
interface ProjectGoalParams extends ProviderParamsContentType<'project-goal'> {
    projectId: ProjectSlugOrId;
    goalId: GoalModel['id'];
}
type ProviderParamsChoices = ProjectParams | ProjectTabParams | ProjectTabItemParams | ProjectBlogParams | ProjectGoalParams;
type ProviderParams = {
    organizationId: string | number;
} & ProviderParamsChoices;

/**
 * genereate roomRoomKey form params provided to hocuspocus
 *
 * @function
 * @name roomKeyFromParams
 * @kind variable
 * @param {ProviderParams} params
 * @returns {string | null}
 * @exports
 */
declare const roomKeyFromParams: (params: ProviderParams) => string | null;

type Right = {
    permissions: {
        [key: string]: boolean;
    };
    roles: string[];
};

type PermissionType = "access_admin" | "view_stat" | "view_org_project" | "view_org_projectuser" | "view_org_peoplegroup" | "lock_project" | "duplicate_project" | "change_locked_project" | "manage_accessrequest" | "view_project" | "add_project" | "change_project" | "delete_project" | "view_projectmessage" | "add_projectmessage" | "change_projectmessage" | "delete_projectmessage" | "view_projectuser" | "add_projectuser" | "change_projectuser" | "delete_projectuser" | "view_peoplegroup" | "add_peoplegroup" | "change_peoplegroup" | "delete_peoplegroup" | "view_news" | "add_news" | "change_news" | "delete_news" | "view_event" | "add_event" | "change_event" | "delete_event" | "view_instruction" | "add_instruction" | "change_instruction" | "delete_instruction" | "view_organizationattachmentfile" | "add_organizationattachmentfile" | "change_organizationattachmentfile" | "delete_organizationattachmentfile" | "add_tag" | "change_tag" | "delete_tag" | "add_tagclassification" | "change_tagclassification" | "delete_tagclassification" | "add_projectcategory" | "change_projectcategory" | "delete_projectcategory" | "add_template" | "change_template" | "delete_template" | "add_invitation" | "change_invitation" | "delete_invitation" | "add_review" | "change_review" | "delete_review" | "add_comment" | "change_comment" | "delete_comment" | "add_follow" | "change_follow" | "delete_follow";

declare function hasPermission(permissions: Right["permissions"], app: "organizations" | "projects" | "accounts" | "peoplegroup", permissionName: PermissionType, identification?: number | string | Roles | null): boolean;

declare const isAdmin: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;

declare const isAdminOrFacilitator: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;

declare const isSuperAdmin: (rights: Right) => boolean;

declare const isFacilitator: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;

declare const isViewer: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;

declare const isUser: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;

declare const canPermission: (rights: Right, organizationId: OrganizationModel["id"], elementType: "projects" | "accounts" | "peoplegroup", identification: (number | string | Roles | null) | undefined, perrmissionName: PermissionType) => boolean;

declare const getExtensions: (options?: Partial<StarterKitOptions>) => (_tiptap_core.Node<{
    inline: boolean;
    HTMLAttributes: {};
    sizes: ImageVariations[];
    aligns: string[];
}, any> | _tiptap_core.Node<_tiptap_extension_table_cell.TableCellOptions, any> | _tiptap_core.Node<{
    inline: boolean;
    HTMLAttributes: {};
    sizes: ImageVariations[];
    allowBase64: boolean;
}, any> | _tiptap_core.Extension<StarterKitOptions, any> | _tiptap_core.Extension<_tiptap_extension_color.ColorOptions, any> | _tiptap_core.Mark<_tiptap_extension_underline.UnderlineOptions, any>)[];

declare const lowlight: {
    highlight: (language: string, value: string, options?: Readonly<_lowlight.Options> | null | undefined) => hast.Root;
    highlightAuto: (value: string, options?: Readonly<_lowlight.AutoOptions> | null | undefined) => hast.Root;
    listLanguages: () => Array<string>;
    register: {
        (grammars: Readonly<Record<string, highlight_js.LanguageFn>>): undefined;
        (name: string, grammar: highlight_js.LanguageFn): undefined;
    };
    registerAlias: {
        (aliases: Readonly<Record<string, ReadonlyArray<string> | string>>): undefined;
        (language: string, alias: ReadonlyArray<string> | string): undefined;
    };
    registered: (aliasOrName: string) => boolean;
};

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        clearhistoryws: {
            /**
             * clear history
             */
            clearHistoryWS: () => ReturnType;
        };
    }
}
declare const ClearHistoryWS: Extension<{}, any>;

type Options = {
    src: string;
    alt?: string;
    title?: string;
    width?: number;
    height?: number;
    size?: ImageVariations;
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        CustomImage: {
            setImage: (options: Options) => ReturnType;
        };
    }
}

type Option = {
    size?: ImageVariations;
    src: string;
    aligns?: "left" | "center" | "right";
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        ExternalVideo: {
            setExternalVideo: (option: Option) => ReturnType;
            deleteExternalVideo: () => ReturnType;
            setAlign: (attributes: Attrs) => ReturnType;
        };
    }
}
declare const getFormatedVideoSrc: (newVideoId: string) => string;

declare const DEFAULT_LANGUAGE = "plaintext";
declare const DEFAULT_THEME = "dark";
declare const DEFAULT_TAB = 2;
interface LpiBlockOptions extends CodeBlockLowlightOptions {
    tabClassPrefix: string;
    themeClassPrefix: string;
    defaultTheme: string | null | undefined;
}

declare const isOwner: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;

declare const isMember: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;

declare const canPermissionProject: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"], perrmissionName: PermissionType) => boolean;
declare const canCreateProject: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;
declare const canEditProject: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canDeleteProject: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canCreateReview: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canEditReview: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canDeleteReview: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canCreateComment: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canEditComment: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canDeleteComment: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;

declare const canCreateGroup: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;
declare const canEditGroup: (rights: Right, organizationId: OrganizationModel["id"], groupId: PeopleGroupModel["id"]) => boolean;

declare const canEditUser: (rights: Right, organizationId: OrganizationModel["id"], userId: UserModel["id"]) => boolean;

declare const canCreateNews: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;
declare const canEditNews: (rights: Right, organizationId: OrganizationModel["id"], newsId: NewsModel["id"]) => boolean;
declare const canDeleteNews: (rights: Right, organizationId: OrganizationModel["id"], newsId: NewsModel["id"]) => boolean;

declare const canCreateEvent: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;
declare const canEditEvent: (rights: Right, organizationId: OrganizationModel["id"], eventId: EventModel["id"]) => boolean;
declare const canDeleteEvent: (rights: Right, organizationId: OrganizationModel["id"], eventId: EventModel["id"]) => boolean;

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

declare const canCreateInstruction: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;
declare const canEditInstruction: (rights: Right, organizationId: OrganizationModel["id"], instructionId: InstructionModel["id"]) => boolean;
declare const canDeleteInstruction: (rights: Right, organizationId: OrganizationModel["id"], instructionId: InstructionModel["id"]) => boolean;

type ImageGalleryForm = {
    files: {
        file: File;
        url: string;
    }[];
};

type Geocoding = BaseLocationModel & {
    label?: string;
};
type MapPointerOption = {
    markerContent: HTMLElement;
    location: AnyLocation;
    tooltip?: HTMLElement;
};
type LocationGeneral = BaseLocationModel & {
    content_id: string;
    content_type: 'project' | 'people_group' | 'event' | 'news';
};
type TranslatedLocationGeneral = Translated<LocationGeneral, 'title' | 'description'>;

type CollaborativeUser = {
    name: string;
    color: string;
    pid: number;
    profile_picture: ImageModel;
};

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

interface SkillModel {
    id: number;
    user: string;
    tag: TagModel;
    level: number;
    level_to_reach: number;
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

/**
 * @name PeopleModel
 * @description user data from people
 */
interface PeopleModel {
    slug: string;
    roles?: Array<string>;
    permissions?: Array<string>;
    is_superuser?: boolean;
    current_org_role: Roles;
    people_groups: PeopleGroupModel[];
    notifications?: number;
    privacy_settings?: object;
    skills: Array<object>;
    id: number;
    language: string;
    email: string;
    email_verified: boolean;
    given_name: string;
    family_name: string;
    birthday?: any;
    pronouns?: string;
    short_description?: string;
    description?: string;
    location?: string;
    job: string;
    mobile_phone?: string;
    personnal_email: string;
    sdgs: number[];
    facebook?: string;
    linkedin?: string;
    medium?: string;
    website?: string;
    mobile?: string;
    skype?: string;
    landline_phone?: string;
    twitter?: string;
    created_at?: string;
}
type TranslatedPeopleModel = Translated<PeopleModel, 'description' | 'short_description' | 'job'> & {
    people_groups: TranslatedPeopleGroupModel;
};
interface UserPostData {
    email: string;
    given_name: string;
    family_name: string;
    job: string;
}

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

/**
 * @name SdgModel
 * @description Sdg goal of a project
 */
interface SdgModel {
    id: number;
    background_color: string;
}

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
    modules: 'none' | ProjectModulesKeys[] | PeopleGroupModulesKeys[];
    exclude_projects: ProjectModel['id'][];
    exclude_projects_in_project: ProjectModel['id'];
    exclude_groups_in_project: ProjectModel['id'];
    exclude_users_in_project: ProjectModel['id'];
    exclude_groups: PeopleGroupModel['id'][];
    exclude_projects_in_group: PeopleGroupModel['id'];
    exclude_users_in_group: PeopleGroupModel['id'];
} & PaginationQuery>;

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

export { type AddGroupMembers, type AddManyFollowedProject, type AddManyLinkedProjectInput, type AddParentGroupModelInput, type AnnouncementApplyForm, type AnnouncementApplyInput, type AnnouncementForm, type AnnouncementId, type AnnouncementInput, type AnnouncementModel, type AnyLocation, type AnyProject, type AnyTranslatedLocation, type AttachmentFileForm, type AttachmentFileId, type AttachmentFileInput, type AttachmentFileModel, type AttachmentForm, type AttachmentLinkForm, type AttachmentLinkId, type AttachmentLinkInput, type AttachmentLinkModel, type AttachmentLinkOutput, type AttachmentType, type BaseLocationModel, type BaseSearchResult, type BaseTranslatedLocationModel, type BlogEntryForm, type BlogEntryId, type BlogEntryModel, ClearHistoryWS, type CollaborativeUser, type CommentModel, type ContactForm, type ContactModel, DEFAULT_LANGUAGE, DEFAULT_TAB, DEFAULT_THEME, type Document, type DocumentCrisalidType, type DocumentType, type EventForm, type EventIdOrSlug, type EventInput, type EventLocation, type EventModel, type FaqImageModel, type FaqInput, type FaqModel, type FollowCategoryInput, type FollowInput, type FollowManyOutput, type FollowModel, type FollowOutput, type FollowOutputList, type FollowProjectOutput, type FollowedProjectRef, type GeneralLocationPeopleGroup, type Geocoding, type GoalForm, type GoalModel, type GroupDataRole, type GroupMember, type GroupMemberRoleType, type GroupModel, type GroupModelInput, type GroupOuput, type HarvesterType, type HierarchyGroupModel, type Icon, type IconTab, type Identifier, type ImageGalleryForm, type ImageInput, type ImageModealCreated, type ImageModel, type ImageOrganizationInput, type ImageSize, type ImageTemplateInput, type ImageVariations, type InstructionForm, type InstructionId, type InstructionInput, type InstructionModel, type InvitationModel, type InvitationModelInput, type Language, type LanguageType, type LinkedProject, type LinkedProjectRef, type LocationForm, type LocationGeneral, type LocationId, type LocationInput, type LocationModel, type LocationOutput, type LocationType, type LpiBlockOptions, type MapPointerOption, type Mentoring, type MentoringContactForm, type NewsForm, type NewsImageModel, type NewsInput, type NewsLocation, type NewsModel, type NewsOutput, type NewsfeedModel, type NotificationModel, type NotificationType, type NotificationsSettings, type Optional, type Ordering, type OrganizationDirectoryModel, type OrganizationModel, type OrganizationOutput, type OrganizationPatchInput, type PaginationQuery, type PeopleGroupIdOrSlug, type PeopleGroupModel, type PeopleGroupModulesKeys, type PeopleModel, type PermissionType, type PostGroupData, type PostGroupProjects, type PrivacySettings, type PrivacyValue, type ProjectCategoryCreateInput, type ProjectCategoryForm, type ProjectCategoryModel, type ProjectCategoryOutput, type ProjectCategoryPatchInput, type ProjectCategoryPutInput, type ProjectForm, type ProjectGroupRoleType, type ProjectLocationForm, type ProjectMemberModel, type ProjectMemberOutput, type ProjectMemberPeopleGroupOutput, type ProjectMemberRoleType, type ProjectMembersAddEntry, type ProjectMembersAddInput, type ProjectMembersDeleteInput, type ProjectMessageForm, type ProjectMessageInputModel, type ProjectMessageModel, type ProjectModel, type ProjectModuleExtra, type ProjectModulesKeys, type ProjectOutput, type ProjectPublicationStatusType, type ProjectRoleType, type ProjectSlugOrId, type ProjectStatusType, type ProjectTab, type ProjectTabForm, type ProjectTabItem, type ProjectTabItemForm, type ProjectTabType, type ProjectTeamModel, type ProjectTeamOutput, type ProviderParams, type QueryFilterAnnouncement, type QueryFilterBlogEntry, type QueryFilterComments, type QueryFilterDocument, type QueryFilterEvent, type QueryFilterGroup, type QueryFilterGroupHierarchy, type QueryFilterInstruction, type QueryFilterNews, type QueryFilterProject, type QueryFilterProjectMembers, type QueryFilterProjectMessage, type QueryFilterProjectSimilars, type QueryFilterProjectTab, type QueryFilterProjectTabItem, type QueryFilterResearcher, type QueryFilterReviews, type QueryFilterSearch, type QueryFilterTagClassification, type Relators, type RemoveGroupMember, type RemoveGroupModelInput, type RemoveLinkedProjectInput, type ReportForm, type ReportModel, type Researcher, type ResearcherDocumentAnalytics, type ResearcherLight, type ReviewForm, type ReviewId, type ReviewModel, type Right, type Roles, type SdgModel, type SearchObjectType, type SearchResultAll, type SearchResultGroup, type SearchResultProject, type SearchResultUser, type SecondaryTagType, type SkillModel, type StatusType, type SubGroup, type TagClassificationModel, type TagModel, type TagType, type TemplateForm, type TemplateId, type TemplateModel, type TermsAndConditions, type Translated, type TranslatedAnnouncement, type TranslatedAttachmentFile, type TranslatedAttachmentLink, type TranslatedBlogEntry, type TranslatedComment, type TranslatedDocument, type TranslatedEventLocation, type TranslatedEventModel, type TranslatedGoal, type TranslatedGroupMember, type TranslatedInstruction, type TranslatedLinkedProject, type TranslatedLocation, type TranslatedLocationGeneral, type TranslatedNews, type TranslatedNewsLocation, type TranslatedNewsfeed, type TranslatedOrganizationModel, type TranslatedPeopleGroupModel, type TranslatedPeopleModel, type TranslatedProject, type TranslatedProjectCategory, type TranslatedProjectMember, type TranslatedProjectMessage, type TranslatedProjectTab, type TranslatedProjectTabItem, type TranslatedReview, type TranslatedSearchResultAll, type TranslatedSearchResultGroup, type TranslatedSearchResultProject, type TranslatedSearchResultUser, type TranslatedTag, type TranslatedTemplate, type TranslatedUserModel, type TrasnlatedHierarchyGroupModel, type UnfollowCategoryInput, type UserFromJWTModel, type UserModel, type UserPatchModel, type UserPostData, type UserPrivacyPatchModel, type UserSkillModel, canCreateComment, canCreateEvent, canCreateGroup, canCreateInstruction, canCreateNews, canCreateProject, canCreateReview, canDeleteComment, canDeleteEvent, canDeleteInstruction, canDeleteNews, canDeleteProject, canDeleteReview, canEditComment, canEditEvent, canEditGroup, canEditInstruction, canEditNews, canEditProject, canEditReview, canEditUser, canPermission, canPermissionProject, getExtensions, getFormatedVideoSrc, hasPermission, isAdmin, isAdminOrFacilitator, isFacilitator, isMember, isOwner, isSuperAdmin, isUser, isViewer, lowlight, roomKeyFromParams };
