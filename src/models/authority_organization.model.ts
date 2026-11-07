import { Identifier } from 'typescript'
import BaseModel from './base.model'

// Authority organization type from crisalid (AuthorityOrganizationType)
export type OrganizationType =
  | 'organization'
  | 'institution'
  | 'institution_group'
  | 'laboratory'
  | 'laboratory_group'
  | 'research_team'
  | 'research_team_group'

// Organization from documents affiliations in the Crisalid system
export interface AuthorityOrganization extends BaseModel {
  id: number
  crisalid_uid: string
  name: string
  type: OrganizationType
  identifiers: Identifier[]
}
