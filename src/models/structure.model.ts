import { OrganizationModel, TranslatedOrganizationModel } from './organization.model'
import { PeopleGroupModel, TranslatedPeopleGroupModel } from './people-group.model'
import { Identifier, StructureIdentifierType } from './identifiers.model'
import { Researcher, TranslatedResearcher } from './researcher.model'
import { PaginationQuery, Translated } from '../interfaces'
import BaseModel from './base.model'

// Generic organization type from crisalid
export type GenericType =
  | 'institution'
  | 'institution_subdivision'
  | 'doctoral_school'
  | 'unit'
  | 'unit_subdivision'
  | 'team'

export type MissionType =
  'research' | 'scientific_services' | 'administrative_services' | 'teaching'

// Represents a research structure (or 'OrganizationUnit') in the Crisalid system.
export interface Structure extends BaseModel {
  id: number
  organization: OrganizationModel
  generic_type: GenericType
  national_type: string | null
  main_mission: MissionType

  name: string
  acronym: string
  description: string
  external: boolean
  identifiers: Identifier<StructureIdentifierType>[]
  related_structures: Structure[]

  researchers?: Researcher[]
  people_group?: PeopleGroupModel

  modules: {
    publications: number
    conferences: number
    researchers: number
    sub_structures: number
    parent_structures: number
    supervising_structures: number
    supervised_structures: number
    research_domains: number
    collaborations: number
    citations: number
  }
}

export type StructureModules = keyof Structure['modules']

export type TranslatedStucture = Omit<
  Translated<Structure, 'description'>,
  'related_structures' | 'researchers' | 'people_group' | 'organization'
> & {
  related_structures: TranslatedStucture[]
  researchers?: TranslatedResearcher[]
  people_group?: TranslatedPeopleGroupModel
  organization?: TranslatedOrganizationModel
}

// Relation between two structures
export interface StructureRelation extends BaseModel {
  id: number
  relation_type: 'part_of' | 'member_of'
  position: 'main_supervision' | 'associated_supervision' | 'participating_supervision'
  structure: Structure
  related_structure: Structure
}
export type TranslatedStructureRelation = Omit<
  StructureRelation,
  'structure' | 'related_structure'
> & {
  structure: TranslatedStucture
  related_structure: TranslatedStucture
}

export type RelationType = 'membership' | 'employment'
// HCERES positions of researchers in structures (crisalid "position_code")
export type PositionCode =
  | 'PR'
  | 'DIR'
  | 'Phys'
  | 'Astro'
  | 'PUPH'
  | 'PR_AutMin'
  | 'ATER'
  | 'MCF'
  | 'Phys_adj'
  | 'Astro_adj'
  | 'MCUPH'
  | 'MC_AutMin'
  | 'PREM'
  | 'MCFEM'
  | 'CCA'
  | 'AHU'
  | 'PHU'
  | 'ECC'
  | 'PAST'
  | 'Autre_EC'
  | 'ChPJ'
  | 'DR'
  | 'CR'
  | 'CBIB'
  | 'CPAT'
  | 'DREM'
  | 'CJC'
  | 'C_contractuel'
  | 'Post-doc'
  | 'Invité'
  | 'Docteur'
  | 'Autre_Ch'
  | 'PRAG'
  | 'PCAP'
  | 'IR'
  | 'IE'
  | 'AI'
  | 'TECH'
  | 'AJT'
  | 'BIB'
  | 'BIBAS'
  | 'ASBIB'
  | 'MABIB'
  | 'PH'
  | 'AJH'
  | 'ASPM'
  | 'SEC'
  | 'TEC'
  | 'INF'
  | 'SF'
  | 'ARC'
  | 'CS'
  | 'Igh'
  | 'CP'
  | 'PATP'
  | 'CDD'
  | 'CDDA'
  | 'CDDB'
  | 'CDDC'
  | 'Autre_AP'
  | 'Stag'

// Relation between a researcher and a structure(MEMBER_OF / EMPLOYED_AT in crisalid)
export interface ResearcherStructure extends BaseModel {
  id: number
  start_date: string | null
  end_date: string | null
  researcher: Researcher
  structure: Structure
  relation_type: RelationType
  position_code: PositionCode
}

export type TranslatedResearcherStructure = Omit<
  ResearcherStructure,
  'researcher' | 'structure'
> & {
  researcher: TranslatedResearcher
  structure: TranslatedStucture
}

export type QueryFilterStructure = Partial<
  {
    id: number[]
    people_group: PeopleGroupModel['id']
    generic_type: GenericType
    modules: 'none' | StructureModules[]
  } & PaginationQuery
>

export interface StructureResearcher extends Researcher {
  position_code: PositionCode
  position: string | null
}

export interface TranslateStructureResearcher extends TranslatedResearcher {
  position_code: StructureResearcher['position_code']
  position: StructureResearcher['position']
}
