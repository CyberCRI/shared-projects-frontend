import { e as AnnouncementModel, U as TranslatedAnnouncement, p as BlogEntryModel, X as TranslatedBlogEntry, T as TagClassificationModel, a4 as TranslatedTagClassification, C as CommentModel, Y as TranslatedComment, i as AttachmentFileModel, V as TranslatedAttachmentFile, r as GoalModel, Z as TranslatedGoal, m as AttachmentLinkModel, W as TranslatedAttachmentLink, N as NewsfeedModel, _ as TranslatedNewsfeed, u as ProjectMessageModel, $ as TranslatedProjectMessage, I as ReviewModel, a1 as TranslatedReview, E as ResearcherStructure, a0 as TranslatedResearcherStructure, S as Structure, a3 as TranslatedStucture, K as StructureRelation, a2 as TranslatedStructureRelation, L as StructureResearcher, O as TranslateStructureResearcher } from '../tagclassification.model-B-rk8N99.js';
import { U as Language, ap as ProjectCategoryModel, bP as TranslatedProjectCategory, q as EventModel, bC as TranslatedEventModel, B as BaseLocationModel, bB as TranslatedEventLocation, aj as PeopleGroupModel, bN as TranslatedPeopleGroupModel, R as InstructionModel, bE as TranslatedInstruction, l as DocumentJournal, bA as TranslatedDocumentJournal, S as Journal, bF as TranslatedJournal, i as BaseTranslatedLocationModel, a7 as NewsModel, bJ as TranslatedNews, bK as TranslatedNewsLocation, ad as OrganizationModel, bL as TranslatedOrganizationModel, bv as TermsAndConditions, bw as TransaltedTermsAndConditions, bH as TranslatedLocation, ax as ProjectModel, bO as TranslatedProject, a0 as LocationModel, aF as ProjectTab, bQ as TranslatedProjectTab, aH as ProjectTabItem, bR as TranslatedProjectTabItem, b5 as Researcher, bS as TranslatedResearcher, h as Award, by as TranslatedAward, b6 as ResearcherAward, bT as TranslatedResearcherAward, b7 as ResearcherDocument, bU as TranslatedResearcherDocument, bx as TranslatedAbstractDomain, I as Funding, bD as TranslatedFunding, ah as Patent, bM as TranslatedPatent, bo as Teaching, bY as TranslatedTeaching, bh as SkillModel, bW as TranslatedSkill, bm as TagModel, bX as TranslatedTag, bs as TemplateModel, b_ as TranslatedTemplate, c3 as UserModel, b$ as TranslatedUserModel, W as LinkedProject, bG as TranslatedLinkedProject } from '../instruction.model-zr4glRQ5.js';
import '../utils-Def92TDC.js';

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

declare const translateFunding: (data: Funding, locale: Language | null) => TranslatedFunding;

declare const translatePatent: (data: Patent, locale: Language | null) => TranslatedPatent;

declare const translateTeaching: (data: Teaching, locale: Language | null) => TranslatedTeaching;

declare const translateReview: (data: ReviewModel, locale: Language | null) => TranslatedReview;

declare const translateSkill: (data: SkillModel, locale: Language | null) => TranslatedSkill;

declare const translateStructure: (data: Structure, locale: Language | null) => TranslatedStucture;
declare const translateStructureRelation: (data: StructureRelation, locale: Language | null) => TranslatedStructureRelation;
declare const translateStructureResearcher: (data: StructureResearcher, locale: Language | null) => TranslateStructureResearcher;
declare const translateResearcherStructure: (data: ResearcherStructure, locale: Language | null) => TranslatedResearcherStructure;

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

export { getTranslatableField, getTranslatableFields, translateAnnouncement, translateAward, translateBlogEntry, translateCategory, translateClassification, translateComment, translateDocumentJournal, translateEntity, translateEvent, translateEventsLocation, translateFile, translateFunding, translateGoal, translateGroup, translateInstruction, translateJournal, translateLink, translateLocation, translateMany, translateNewsFeed, translateOneNews, translateOneNewsLocation, translateOrganization, translatePatent, translatePeopleGroupLocation, translateProject, translateProjectLocation, translateProjectMessage, translateProjectTab, translateProjectTabItem, translateResearcher, translateResearcherAward, translateResearcherDocument, translateResearcherDomain, translateResearcherStructure, translateReview, translateSkill, translateStructure, translateStructureRelation, translateStructureResearcher, translateTag, translateTeaching, translateTemplate, translateTermsAdnCondition, translateUser, translatedProjectLinked };
