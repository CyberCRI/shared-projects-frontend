import { e as AnnouncementModel, O as TranslatedAnnouncement, p as BlogEntryModel, W as TranslatedBlogEntry, T as TagClassificationModel, a3 as TranslatedTagClassification, C as CommentModel, X as TranslatedComment, i as AttachmentFileModel, U as TranslatedAttachmentFile, r as GoalModel, Y as TranslatedGoal, m as AttachmentLinkModel, V as TranslatedAttachmentLink, N as NewsfeedModel, Z as TranslatedNewsfeed, u as ProjectMessageModel, _ as TranslatedProjectMessage, I as ReviewModel, a0 as TranslatedReview, S as Structure, a2 as TranslatedStucture, J as StructureRelation, a1 as TranslatedStructureRelation, K as StructureResearcher, L as TranslateStructureResearcher } from '../tagclassification.model-Cox3416v.js';
import { O as Language, ah as ProjectCategoryModel, bA as TranslatedProjectCategory, o as EventModel, bo as TranslatedEventModel, B as BaseLocationModel, bn as TranslatedEventLocation, ab as PeopleGroupModel, by as TranslatedPeopleGroupModel, M as InstructionModel, bp as TranslatedInstruction, j as DocumentJournal, bm as TranslatedDocumentJournal, N as Journal, bq as TranslatedJournal, h as BaseTranslatedLocationModel, a1 as NewsModel, bu as TranslatedNews, bv as TranslatedNewsLocation, a6 as OrganizationModel, bw as TranslatedOrganizationModel, bh as TermsAndConditions, bi as TransaltedTermsAndConditions, bs as TranslatedLocation, ap as ProjectModel, bz as TranslatedProject, W as LocationModel, ax as ProjectTab, bB as TranslatedProjectTab, az as ProjectTabItem, bC as TranslatedProjectTabItem, aW as Researcher, bD as TranslatedResearcher, g as Award, bk as TranslatedAward, aX as ResearcherAward, bE as TranslatedResearcherAward, aY as ResearcherDocument, bF as TranslatedResearcherDocument, bj as TranslatedAbstractDomain, a9 as Patent, bx as TranslatedPatent, b6 as SkillModel, bH as TranslatedSkill, ba as TagModel, bI as TranslatedTag, be as TemplateModel, bJ as TranslatedTemplate, bO as UserModel, bK as TranslatedUserModel, Q as LinkedProject, br as TranslatedLinkedProject } from '../instruction.model-C-eQFs24.js';
import '../utils-Def92TDC.js';
import 'typescript';

declare const translateAnnouncement: (data: AnnouncementModel, locale: Language | null) => TranslatedAnnouncement;

declare const translateBlogEntry: (data: BlogEntryModel, locale: Language | null) => TranslatedBlogEntry;

declare const translateCategory: (data: ProjectCategoryModel, locale: Language | null) => TranslatedProjectCategory;

declare const translateClassification: (data: TagClassificationModel, locale: Language | null) => TranslatedTagClassification;

declare const translateComment: (data: CommentModel, locale: Language | null) => TranslatedComment;

declare const translateEvent: (data: EventModel, locale: Language | null) => TranslatedEventModel;

declare const translateEventsLocation: <Location extends BaseLocationModel>(data: Location, locale: Language | null) => TranslatedEventLocation;

declare const translateFile: (data: AttachmentFileModel, locale: Language | null) => TranslatedAttachmentFile;

declare const translateGoal: (data: GoalModel, locale: Language | null) => TranslatedGoal;

declare const translateGroup: (data: PeopleGroupModel, locale: Language | null) => TranslatedPeopleGroupModel;

declare const translateInstruction: (data: InstructionModel, locale: Language | null) => TranslatedInstruction;

declare const translateJournal: (data: Journal, locale: Language | null) => TranslatedJournal;
declare const translateDocumentJournal: (data: DocumentJournal, locale: Language | null) => TranslatedDocumentJournal;

declare const translateLink: (data: AttachmentLinkModel, locale: Language | null) => TranslatedAttachmentLink;

declare const translateLocation: <TranslatedLocation extends BaseTranslatedLocationModel = BaseTranslatedLocationModel, Location extends BaseLocationModel = BaseLocationModel>(data: Location, locale: Language | null) => TranslatedLocation;

declare const translateNewsFeed: (datas: NewsfeedModel[], locale: Language | null) => TranslatedNewsfeed[];

declare const translateOneNews: (data: NewsModel, locale: Language | null) => TranslatedNews;

declare const translateOneNewsLocation: <Location extends BaseLocationModel>(data: Location, locale: Language | null) => TranslatedNewsLocation;

declare const translateTermsAdnCondition: (data: TermsAndConditions, locale: Language | null) => TransaltedTermsAndConditions;
declare const translateOrganization: (data: OrganizationModel, locale: Language | null) => TranslatedOrganizationModel;

declare const translatePeopleGroupLocation: <Location extends BaseLocationModel>(data: Location, locale: Language | null) => TranslatedLocation;

declare const translateProject: (data: ProjectModel, locale: Language | null) => TranslatedProject;

declare const translateProjectLocation: <Location extends LocationModel>(data: Location, locale: Language | null) => TranslatedLocation;

declare const translateProjectMessage: (data: ProjectMessageModel, locale: Language | null) => TranslatedProjectMessage;

declare const translateProjectTab: (data: ProjectTab, locale: Language | null) => TranslatedProjectTab;

declare const translateProjectTabItem: (data: ProjectTabItem, locale: Language | null) => TranslatedProjectTabItem;

declare const translateResearcher: (data: Researcher, locale: Language | null) => TranslatedResearcher;

declare const translateAward: (data: Award, locale: Language | null) => TranslatedAward;
declare const translateResearcherAward: (data: ResearcherAward, locale: Language | null) => TranslatedResearcherAward;

declare const translateResearcherDocument: (data: ResearcherDocument, locale: Language | null) => TranslatedResearcherDocument;

declare const translateResearcherDomain: <T extends TranslatedAbstractDomain>(data: T, locale: Language | null) => TranslatedAbstractDomain;

declare const translatePatent: (data: Patent, locale: Language | null) => TranslatedPatent;

declare const translateReview: (data: ReviewModel, locale: Language | null) => TranslatedReview;

declare const translateSkill: (data: SkillModel, locale: Language | null) => TranslatedSkill;

declare const translateStructure: (data: Structure, locale: Language | null) => TranslatedStucture;
declare const translateStructureRelation: (data: StructureRelation, locale: Language | null) => TranslatedStructureRelation;
declare const translateStructureResearcher: (data: StructureResearcher, locale: Language | null) => TranslateStructureResearcher;

declare const translateTag: (data: TagModel, locale: Language | null) => TranslatedTag;

declare const translateTemplate: (data: TemplateModel, locale: Language | null) => TranslatedTemplate;

declare const translateUser: (data: UserModel, locale: Language | null) => TranslatedUserModel;

declare const translatedProjectLinked: (data: LinkedProject, locale: Language | null) => TranslatedLinkedProject;

declare const getTranslatableField: <DataT extends Record<string, any>, Field extends keyof DataT = keyof DataT>(entity: DataT, field: Field, locale: Language | null) => string;
declare const getTranslatableFields: <DataT extends Record<string, any>, Field extends keyof DataT = keyof DataT>(entity: DataT, fields: Field[], locale: Language | null) => Record<Field, string>;
/**
 * translate a object, entiry the object we need to translate, the fields is array of keys need to translate (need to be exists)
 *
 * @constant
 * @name translateEntity
 * @kind variable
 * @type {<ResultT extends { [key: string]: any; : Record<string, any>; }, Fields extends keyof ResultT[""] = keyof ResultT[""], DataT = any>(entity: DataT, fields: Fields[], locale: Language | null) => DataT | (DataT & ResultT)}
 * @exports
 */
declare const translateEntity: <ResultT extends {
    $t: Record<string, any>;
    [key: string]: any;
}, Fields extends keyof ResultT["$t"] = keyof ResultT["$t"]>(entity: any, fields: Fields[], locale: Language | null) => ResultT;
/**
 * translate array of objects
 *
 * @constant
 * @name translateMany
 * @kind variable
 * @type {<Result, Data>(func: (data: Data, locale: Language | null) => Result, datas: Data[], locale: Language | null) => Result[]}
 * @exports
 */
declare const translateMany: <Result, Data>(func: (data: Data, locale: Language | null) => Result, datas: Data[], locale: Language | null) => Result[];

export { getTranslatableField, getTranslatableFields, translateAnnouncement, translateAward, translateBlogEntry, translateCategory, translateClassification, translateComment, translateDocumentJournal, translateEntity, translateEvent, translateEventsLocation, translateFile, translateGoal, translateGroup, translateInstruction, translateJournal, translateLink, translateLocation, translateMany, translateNewsFeed, translateOneNews, translateOneNewsLocation, translateOrganization, translatePatent, translatePeopleGroupLocation, translateProject, translateProjectLocation, translateProjectMessage, translateProjectTab, translateProjectTabItem, translateResearcher, translateResearcherAward, translateResearcherDocument, translateResearcherDomain, translateReview, translateSkill, translateStructure, translateStructureRelation, translateStructureResearcher, translateTag, translateTemplate, translateTermsAdnCondition, translateUser, translatedProjectLinked };
