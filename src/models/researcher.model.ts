import { PaginationQuery, PaginationResult } from '../interfaces/pagination'
import { Translated } from '../interfaces/translated'
import { TagModel, TranslatedTag } from './tag.model'
import { Ordering } from '../interfaces/query'
import { UserModel } from './user.model'

// meta front DocumentTypeCentralized backend
export type ResearcherDocumentType = 'publications' | 'conferences'

export type Relators =
  | 'abr'
  | 'acp'
  | 'act'
  | 'adi'
  | 'adp'
  | 'aft'
  | 'anc'
  | 'anl'
  | 'anm'
  | 'ann'
  | 'ant'
  | 'ape'
  | 'apl'
  | 'app'
  | 'aqt'
  | 'arc'
  | 'ard'
  | 'arr'
  | 'art'
  | 'asg'
  | 'asn'
  | 'ato'
  | 'att'
  | 'auc'
  | 'aud'
  | 'aue'
  | 'aui'
  | 'aup'
  | 'aus'
  | 'aut'
  | 'bdd'
  | 'bjd'
  | 'bka'
  | 'bkd'
  | 'bkp'
  | 'blw'
  | 'bnd'
  | 'bpd'
  | 'brd'
  | 'brl'
  | 'bsl'
  | 'cad'
  | 'cas'
  | 'ccp'
  | 'chr'
  | 'cli'
  | 'cll'
  | 'clr'
  | 'clt'
  | 'cmm'
  | 'cmp'
  | 'cmt'
  | 'cnd'
  | 'cng'
  | 'cns'
  | 'coe'
  | 'col'
  | 'com'
  | 'con'
  | 'cop'
  | 'cor'
  | 'cos'
  | 'cot'
  | 'cou'
  | 'cov'
  | 'cpc'
  | 'cpe'
  | 'cph'
  | 'cpl'
  | 'cpt'
  | 'cre'
  | 'crp'
  | 'crr'
  | 'crt'
  | 'csl'
  | 'csp'
  | 'cst'
  | 'ctb'
  | 'cte'
  | 'ctg'
  | 'ctr'
  | 'cts'
  | 'ctt'
  | 'cur'
  | 'cwt'
  | 'dbd'
  | 'dbp'
  | 'dfd'
  | 'dfe'
  | 'dft'
  | 'dgc'
  | 'dgg'
  | 'dgs'
  | 'dis'
  | 'djo'
  | 'dln'
  | 'dnc'
  | 'dnr'
  | 'dpc'
  | 'dpt'
  | 'drm'
  | 'drt'
  | 'dsr'
  | 'dst'
  | 'dtc'
  | 'dte'
  | 'dtm'
  | 'dto'
  | 'dub'
  | 'edc'
  | 'edd'
  | 'edm'
  | 'edt'
  | 'egr'
  | 'elg'
  | 'elt'
  | 'eng'
  | 'enj'
  | 'etr'
  | 'evp'
  | 'exp'
  | 'fac'
  | 'fds'
  | 'fld'
  | 'flm'
  | 'fmd'
  | 'fmk'
  | 'fmo'
  | 'fmp'
  | 'fnd'
  | 'fon'
  | 'fpy'
  | 'frg'
  | 'gdv'
  | 'gis'
  | 'his'
  | 'hnr'
  | 'hst'
  | 'ill'
  | 'ilu'
  | 'ink'
  | 'ins'
  | 'inv'
  | 'isb'
  | 'itr'
  | 'ive'
  | 'ivr'
  | 'jud'
  | 'jug'
  | 'lbr'
  | 'lbt'
  | 'ldr'
  | 'led'
  | 'lee'
  | 'lel'
  | 'len'
  | 'let'
  | 'lgd'
  | 'lie'
  | 'lil'
  | 'lit'
  | 'lsa'
  | 'lse'
  | 'lso'
  | 'ltg'
  | 'ltr'
  | 'lyr'
  | 'mcp'
  | 'mdc'
  | 'med'
  | 'mfp'
  | 'mfr'
  | 'mka'
  | 'mod'
  | 'mon'
  | 'mrb'
  | 'mrk'
  | 'msd'
  | 'mte'
  | 'mtk'
  | 'mup'
  | 'mus'
  | 'mxe'
  | 'nan'
  | 'nrt'
  | 'onp'
  | 'opn'
  | 'org'
  | 'orm'
  | 'osp'
  | 'oth'
  | 'own'
  | 'pad'
  | 'pan'
  | 'pat'
  | 'pbd'
  | 'pbl'
  | 'pdr'
  | 'pfr'
  | 'pht'
  | 'plt'
  | 'pma'
  | 'pmn'
  | 'pnc'
  | 'pop'
  | 'ppm'
  | 'ppt'
  | 'pra'
  | 'prc'
  | 'prd'
  | 'pre'
  | 'prf'
  | 'prg'
  | 'prm'
  | 'prn'
  | 'pro'
  | 'prp'
  | 'prs'
  | 'prt'
  | 'prv'
  | 'pta'
  | 'pte'
  | 'ptf'
  | 'pth'
  | 'ptt'
  | 'pup'
  | 'rap'
  | 'rbr'
  | 'rcd'
  | 'rce'
  | 'rcp'
  | 'rdd'
  | 'red'
  | 'ren'
  | 'res'
  | 'rev'
  | 'rpc'
  | 'rps'
  | 'rpt'
  | 'rpy'
  | 'rse'
  | 'rsg'
  | 'rsp'
  | 'rsr'
  | 'rst'
  | 'rth'
  | 'rtm'
  | 'rxa'
  | 'sad'
  | 'sce'
  | 'scl'
  | 'scr'
  | 'sde'
  | 'sds'
  | 'sec'
  | 'sfx'
  | 'sgd'
  | 'sgn'
  | 'sht'
  | 'sll'
  | 'sng'
  | 'spk'
  | 'spn'
  | 'spy'
  | 'srv'
  | 'std'
  | 'stg'
  | 'stl'
  | 'stm'
  | 'stn'
  | 'str'
  | 'swd'
  | 'tad'
  | 'tau'
  | 'tcd'
  | 'tch'
  | 'ths'
  | 'tld'
  | 'tlg'
  | 'tlh'
  | 'tlp'
  | 'trc'
  | 'trl'
  | 'tyd'
  | 'tyg'
  | 'uvp'
  | 'vac'
  | 'vdg'
  | 'vfx'
  | 'voc'
  | 'wac'
  | 'wal'
  | 'wam'
  | 'wat'
  | 'waw'
  | 'wdc'
  | 'wde'
  | 'wfs'
  | 'wft'
  | 'wfw'
  | 'win'
  | 'wit'
  | 'wpr'
  | 'wst'
  | 'wts'

export type DocumentCrisalidType =
  | 'Document'
  | 'ScholarlyPublication'
  | 'Article'
  | 'JournalArticle'
  | 'ConferenceArticle'
  | 'ConferenceAbstract'
  | 'Preface'
  | 'Comment'
  | 'BookChapter'
  | 'Book'
  | 'Monograph'
  | 'Proceedings'
  | 'BookOfChapters'
  | 'Presentation'
  | 'UNKNOWN'

export type HarvesterType =
  | 'orcid'
  | 'idref'
  | 'hal'
  | 'idhals'
  | 'idhali'
  | 'scopus'
  | 'scanr'
  | 'openalex'
  | 'scienceplus'
  | 'sudoc'
  | 'openedition'
  | 'persee'
  | 'local'
  | 'eppn'
  | 'ror'
  | 'nns'
  | 'uai'
  | 'siren'
  | 'siret'
  | 'grid'
  | 'wikidata'
  | 'fundref'
  | 'isni'
  | 'googlescholar'
  | 'viaf'
  | 'doi'
  | 'issn'
  | 'arxiv'
  | 'bibcode'
  | 'biorxiv'
  | 'cern'
  | 'chemrxiv'
  | 'ensam'
  | 'ineris'
  | 'inspire'
  | 'ird'
  | 'irstea'
  | 'meditagri'
  | 'nnt'
  | 'okina'
  | 'oatao'
  | 'pii'
  | 'pmid'
  | 'pmcid'
  | 'ppn'
  | 'prodinra'
  | 'sciencespo'
  | 'swhid'
  | 'uri'
  | 'wos'

export type ResearcherIdentifier = {
  id: number
  value: string
  harvester: HarvesterType
}

export type AbstractDomain<Domain = TagModel> = {
  id: number
  level: number
  domain: Domain
}

export type TranslatedAbstractDomain<Domain = TranslatedTag> = {
  id: number
  level: number
  domain: Domain
}

export type ResearcherDomain = AbstractDomain
export type TranslatedResearcherDomain = TranslatedAbstractDomain

export type Researcher = {
  id: number
  user: null | UserModel
  display_name: string
  identifiers: ResearcherIdentifier[]
  bio: string | null

  domains: ResearcherDomain[]

  h_index: number | null
  i10_index: number | null

  modules: {
    publications: number
    conferences: number
    similars: number
    affiliated: number
    citations: number
  }
}

export type TranslatedResearcher = Translated<Omit<Researcher, 'domains'>, 'bio'> & {
  domains: TranslatedResearcherDomain[]
}

export type DocumentDomain = AbstractDomain
export type TranslatedDocumentDomain = TranslatedAbstractDomain

export type ResearcherDocument = {
  id: number
  title: string
  description: string
  document_type: null | string
  contributors: Researcher[]
  identifiers: ResearcherIdentifier[]
  publication_date: string | null | Date
  domains: DocumentDomain[]

  modules: {
    similars: number
    journals: number
  }
}

export type TranslatedResearcherDocument = Translated<
  Omit<ResearcherDocument, 'domains'>,
  'title' | 'description'
> & {
  domains: TranslatedDocumentDomain[]
}

// journal

export type Journal = {
  uid?: string
  title: string
  acronym: string[]
}

export type DocumentJournal = {
  journal: Journal
  document: ResearcherDocument

  pages?: string
  volume?: string
  issue?: string
}

export type Patent = {
  name: string
  description: string
  date: string | null
  link: string | null
}

export type TranslatedPatent = Translated<Patent, 'name' | 'description'>

export type Award = {
  name: string
  description: string
  date: string | null
  link: string | null
}

export type TranslatedAward = Translated<Patent, 'name' | 'description'>

// TODO: journal is not translated field
export type TranslatedJournal = Journal

export type TranslatedDocumentJournal = Omit<DocumentJournal, 'document' | 'journal'> & {
  journal: TranslatedJournal
  document: TranslatedResearcherDocument
}

export type ResearcherDocumentAnalytics = {
  document_types: { [key in DocumentCrisalidType]?: number }
  years: Array<{
    year: number
    total: number
  }>
  roles: { [key in Relators]?: number }
}

export type QueryFilterResearcher = Partial<
  {
    harvester: HarvesterType
    values: string // TODO: change to string[] (need to update backend)
  } & PaginationQuery
>

export type DocumentModulesKeys = keyof ResearcherDocument['modules']

export type QueryFilterDocument = Partial<{
  year: number
  document_type: DocumentCrisalidType | ''
  roles: Relators
  modules: 'none' | DocumentModulesKeys[]
  ordering: Ordering<'publication_date'>
}>

export type QueryFilterAward = Partial<
  {
    name: string
    description: string
    date_after: Date | string
    date_before: Date | string
    ordering: Ordering<'date'>
  } & PaginationResult
>

export type QueryFilterPatent = Partial<
  {
    name: string
    description: string
    date_after: Date | string
    date_before: Date | string
    ordering: Ordering<'date'>
  } & PaginationResult
>
