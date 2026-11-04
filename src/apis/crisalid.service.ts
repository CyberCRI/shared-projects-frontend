import {
  ResearcherDocument,
  ResearcherDocumentType,
  QueryFilterResearcher,
  Researcher,
  ResearcherDocumentAnalytics,
  DocumentJournal,
  QueryFilterAward,
  QueryFilterPatent,
  ResearcherAward,
  Patent,
  Award,
  Teaching,
  Funding,
  QueryFilterFunding,
  QueryFilterTeaching,
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

export const getResearcherSimilars = (
  organizationCode: OrganizationModel['code'],
  researchId: Researcher['id'],
  config: ClientAPIOptions<PaginationResult> = {}
) => {
  return clientAPI<PaginationResult<Researcher>>(
    `crisalid/organization/${organizationCode}/researcher/${researchId}/similars/`,
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

export const getResearcherPatents = (
  organizationCode: OrganizationModel['code'],
  researchId: Researcher['id'],
  config: ClientAPIOptions<QueryFilterPatent> = {}
) => {
  return clientAPI<PaginationResult<Patent>>(
    `crisalid/organization/${organizationCode}/researcher/${researchId}/patents/`,
    config
  )
}

export const getResearcherAwards = (
  organizationCode: OrganizationModel['code'],
  researchId: Researcher['id'],
  config: ClientAPIOptions<QueryFilterAward> = {}
) => {
  return clientAPI<PaginationResult<ResearcherAward>>(
    `crisalid/organization/${organizationCode}/researcher/${researchId}/awards/`,
    config
  )
}

export const getResearcherTeachings = (
  organizationCode: OrganizationModel['code'],
  researchId: Researcher['id'],
  config: ClientAPIOptions<QueryFilterTeaching> = {}
) => {
  return clientAPI<PaginationResult<Teaching>>(
    `crisalid/organization/${organizationCode}/researcher/${researchId}/teaching/`,
    config
  )
}

export const getResearcherFundings = (
  organizationCode: OrganizationModel['code'],
  researchId: Researcher['id'],
  config: ClientAPIOptions<QueryFilterFunding> = {}
) => {
  return clientAPI<PaginationResult<Funding>>(
    `crisalid/organization/${organizationCode}/researcher/${researchId}/funding/`,
    config
  )
}

// award
export const getAllAward = (
  organizationCode: OrganizationModel['code'],
  config: ClientAPIOptions<QueryFilterAward> = {}
) => {
  return clientAPI<PaginationResult<Award>>(
    `crisalid/organization/${organizationCode}/award/`,
    config
  )
}

export const getAward = (
  organizationCode: OrganizationModel['code'],
  awardId: Award['id'],
  config: ClientAPIOptions = {}
) => {
  return clientAPI<Award>(`crisalid/organization/${organizationCode}/award/${awardId}/`, config)
}

// patent
export const getAllPatent = (
  organizationCode: OrganizationModel['code'],
  config: ClientAPIOptions<QueryFilterPatent> = {}
) => {
  return clientAPI<PaginationResult<Patent>>(
    `crisalid/organization/${organizationCode}/patent/`,
    config
  )
}

export const getPatent = (
  organizationCode: OrganizationModel['code'],
  patentId: Patent['id'],
  config: ClientAPIOptions = {}
) => {
  return clientAPI<Award>(`crisalid/organization/${organizationCode}/patent/${patentId}/`, config)
}

// teaching
export const getAllTeaching = (
  organizationCode: OrganizationModel['code'],
  config: ClientAPIOptions<QueryFilterTeaching> = {}
) => {
  return clientAPI<PaginationResult<Teaching>>(
    `crisalid/organization/${organizationCode}/teaching/`,
    config
  )
}

export const getTeaching = (
  organizationCode: OrganizationModel['code'],
  teachingId: Teaching['id'],
  config: ClientAPIOptions = {}
) => {
  return clientAPI<Award>(
    `crisalid/organization/${organizationCode}/teaching/${teachingId}/`,
    config
  )
}

// funding
export const getAllFunding = (
  organizationCode: OrganizationModel['code'],
  config: ClientAPIOptions<QueryFilterFunding> = {}
) => {
  return clientAPI<PaginationResult<Funding>>(
    `crisalid/organization/${organizationCode}/funding/`,
    config
  )
}

export const getFunding = (
  organizationCode: OrganizationModel['code'],
  fundingId: Funding['id'],
  config: ClientAPIOptions = {}
) => {
  return clientAPI<Award>(`crisalid/organization/${organizationCode}/funding/${fundingId}/`, config)
}
