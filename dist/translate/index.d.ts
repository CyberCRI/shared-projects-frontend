import { e as AnnouncementModel, E as TranslatedAnnouncement, p as BlogEntryModel, I as TranslatedBlogEntry, T as TagClassificationModel, S as TranslatedTagClassification, C as CommentModel, J as TranslatedComment, i as AttachmentFileModel, F as TranslatedAttachmentFile, q as GoalModel, K as TranslatedGoal, m as AttachmentLinkModel, H as TranslatedAttachmentLink, N as NewsfeedModel, L as TranslatedNewsfeed, s as ProjectMessageModel, M as TranslatedProjectMessage, D as ReviewModel, O as TranslatedReview } from '../tagclassification.model-TPC_o_dI.js';
import { V as Language, as as ProjectCategoryModel, c4 as TranslatedProjectCategory, q as EventModel, bT as TranslatedEventModel, B as BaseLocationModel, bS as TranslatedEventLocation, al as PeopleGroupModel, c2 as TranslatedPeopleGroupModel, S as InstructionModel, bV as TranslatedInstruction, l as DocumentJournal, bR as TranslatedDocumentJournal, T as Journal, bW as TranslatedJournal, i as BaseTranslatedLocationModel, a9 as NewsModel, b_ as TranslatedNews, b$ as TranslatedNewsLocation, af as OrganizationModel, c0 as TranslatedOrganizationModel, bL as TermsAndConditions, bM as TransaltedTermsAndConditions, bY as TranslatedLocation, aA as ProjectModel, c3 as TranslatedProject, a1 as LocationModel, aI as ProjectTab, c5 as TranslatedProjectTab, aK as ProjectTabItem, c6 as TranslatedProjectTabItem, bf as Researcher, c7 as TranslatedResearcher, h as Award, bP as TranslatedAward, bg as ResearcherAward, c8 as TranslatedResearcherAward, bh as ResearcherDocument, c9 as TranslatedResearcherDocument, bO as TranslatedAbstractDomain, I as Funding, bU as TranslatedFunding, aj as Patent, c1 as TranslatedPatent, bE as Teaching, cg as TranslatedTeaching, bt as SkillModel, cc as TranslatedSkill, bn as ResearcherStructure, cb as TranslatedResearcherStructure, bv as Structure, cd as TranslatedStructure, by as StructureRelation, ce as TranslatedStructureRelation, bz as StructureResearcher, bN as TranslateStructureResearcher, bC as TagModel, cf as TranslatedTag, bI as TemplateModel, ci as TranslatedTemplate, cn as UserModel, cj as TranslatedUserModel, X as LinkedProject, bX as TranslatedLinkedProject } from '../instruction.model-Cxf6KAKL.js';
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

declare const translateStructure: (data: Structure, locale: Language | null) => TranslatedStructure;
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
