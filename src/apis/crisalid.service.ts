import {
  ResearcherDocument,
  ResearcherDocumentType,
  QueryFilterResearcher,
  Researcher,
  ResearcherDocumentAnalytics,
  DocumentJournal,
  Patent,
  Award,
  QueryFilterAward,
  QueryFilterPatent,
} from '../models/researcher.model'
import { PaginationQuery, PaginationResult } from '../interfaces/pagination'
import { OrganizationModel, PeopleGroupIdOrSlug } from '../models'
import { clientAPI, ClientAPIOptions } from './client'

export async function getUserResearchDocument(
  organisationCode: string,
  researchId: Researcher['id'],
  ResearcherdocumentType: ResearcherDocumentType,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<ResearcherDocument>>(
    `crisalid/organization/${organisationCode}/researcher/${researchId}/${ResearcherdocumentType}/`,
    config
  )
}

export async function getGroupResearchDocument(
  organisationCode: string,
  groupId: PeopleGroupIdOrSlug,
  ResearcherdocumentType: ResearcherDocumentType,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<ResearcherDocument>>(
    `crisalid/organization/${organisationCode}/people-group/${groupId}/${ResearcherdocumentType}/`,
    config
  )
}

export async function getUserResearchDocumentAnalytics(
  organisationCode: string,
  researchId: Researcher['id'],
  ResearcherdocumentType: ResearcherDocumentType,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<ResearcherDocumentAnalytics>(
    `crisalid/organization/${organisationCode}/researcher/${researchId}/${ResearcherdocumentType}/analytics/`,
    config
  )
}

export async function getGroupResearchDocumentAnalytics(
  organisationCode: string,
  groupId: PeopleGroupIdOrSlug,
  ResearcherdocumentType: ResearcherDocumentType,
  config: ClientAPIOptions = {}
) {
  return await clientAPI<ResearcherDocumentAnalytics>(
    `crisalid/organization/${organisationCode}/people-group/${groupId}/${ResearcherdocumentType}/analytics/`,
    config
  )
}

export async function getResearchDocumentSimilars(
  organisationCode: string,
  documentId: ResearcherDocument['id'],
  config: ClientAPIOptions<PaginationQuery> = {}
) {
  return await clientAPI<PaginationResult<ResearcherDocument>>(
    `crisalid/organization/${organisationCode}/document/${documentId}/similars/`,
    config
  )
}

export async function getResearchDocumentCitations(
  organisationCode: string,
  documentId: ResearcherDocument['id'],
  config: ClientAPIOptions<PaginationQuery> = {}
) {
  return await clientAPI<PaginationResult<DocumentJournal>>(
    `crisalid/organization/${organisationCode}/document/${documentId}/citations/`,
    config
  )
}

type ConfigSearch = ClientAPIOptions<QueryFilterResearcher>
type ResearcherSearchResponse = {
  // key is harvester values
  [key: string | number]: Researcher
}
export async function searchResearcher(
  organizationCode: OrganizationModel['code'],
  config: ConfigSearch = {}
) {
  return clientAPI<PaginationResult<ResearcherSearchResponse>>(
    `crisalid/organization/${organizationCode}/researcher/search/`,
    config
  )
}

export const getResearcherAffiliated = (
  organizationCode: OrganizationModel['code'],
  researchId: Researcher['id'],
  config: ClientAPIOptions<PaginationResult> = {}
) => {
  return clientAPI<PaginationResult<Researcher>>(
    `crisalid/organization/${organizationCode}/researcher/${researchId}/affiliated/`,
    config
  )
}

export const getResearcherSimilar = (
  organizationCode: OrganizationModel['code'],
  researchId: Researcher['id'],
  config: ClientAPIOptions<PaginationResult> = {}
) => {
  return clientAPI<PaginationResult<Researcher>>(
    `crisalid/organization/${organizationCode}/researcher/${researchId}/similar/`,
    config
  )
}

export const generateResearcherBioIa = (
  organizationCode: OrganizationModel['code'],
  researchId: Researcher['id'],
  config: ClientAPIOptions<PaginationResult> = {}
) => {
  return clientAPI<string>(
    `crisalid/organization/${organizationCode}/researcher/${researchId}/bio-ia/`,
    config
  )
}

export const getResearcherCitations = (
  organizationCode: OrganizationModel['code'],
  researchId: Researcher['id'],
  config: ClientAPIOptions<PaginationResult> = {}
) => {
  return clientAPI<PaginationResult<DocumentJournal>>(
    `crisalid/organization/${organizationCode}/researcher/${researchId}/citations/`,
    config
  )
}

export const getResearcherPatent = (
  organizationCode: OrganizationModel['code'],
  researchId: Researcher['id'],
  config: ClientAPIOptions<QueryFilterPatent> = {}
) => {
  return clientAPI<PaginationResult<Patent>>(
    `crisalid/organization/${organizationCode}/researcher/${researchId}/patents/`,
    config
  )
}

export const getResearcherAward = (
  organizationCode: OrganizationModel['code'],
  researchId: Researcher['id'],
  config: ClientAPIOptions<QueryFilterAward> = {}
) => {
  return clientAPI<PaginationResult<Award>>(
    `crisalid/organization/${organizationCode}/researcher/${researchId}/awards/`,
    config
  )
}
