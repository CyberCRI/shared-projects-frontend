import { B as BaseModel, c as Ordering, T as Translated, P as PaginationQuery, I as ImageModel } from './utils-Def92TDC.js';
import { ai as ProjectModel, ao as ProjectSlugOrId, a0 as OrganizationModel, bh as TranslatedProject, e as AttachmentType, bt as UserModel, aX as StatusType, X as NewsModel, bd as TranslatedNews, a$ as TagType, a_ as TagModel, bn as TranslatedTag } from './instruction.model-Cep24Cil.js';

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
    type: TagType[];
    enabled_for: ('projects' | 'skills')[];
} & PaginationQuery>;
type TranslatedTagClassification = Translated<Omit<TagClassificationModel, 'tags'>, 'title' | 'description'> & {
    tags: TranslatedTag[];
};

export type { AnnouncementApplyForm as A, BlogEntryForm as B, CommentModel as C, TranslatedAnnouncement as D, TranslatedAttachmentFile as E, TranslatedAttachmentLink as F, GoalForm as G, TranslatedBlogEntry as H, TranslatedComment as I, TranslatedGoal as J, TranslatedNewsfeed as K, TranslatedProjectMessage as L, TranslatedReview as M, NewsfeedModel as N, TranslatedTagClassification as O, ProjectMessageForm as P, QueryFilterAnnouncement as Q, ReviewForm as R, TagClassificationModel as T, AnnouncementApplyInput as a, AnnouncementForm as b, AnnouncementId as c, AnnouncementInput as d, AnnouncementModel as e, AttachmentFileForm as f, AttachmentFileId as g, AttachmentFileInput as h, AttachmentFileModel as i, AttachmentLinkForm as j, AttachmentLinkId as k, AttachmentLinkInput as l, AttachmentLinkModel as m, AttachmentLinkOutput as n, BlogEntryId as o, BlogEntryModel as p, GoalModel as q, ProjectMessageInputModel as r, ProjectMessageModel as s, QueryFilterBlogEntry as t, QueryFilterComments as u, QueryFilterProjectMessage as v, QueryFilterReviews as w, QueryFilterTagClassification as x, ReviewId as y, ReviewModel as z };
