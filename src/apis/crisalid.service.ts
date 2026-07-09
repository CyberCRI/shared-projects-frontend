import { ResearcherDocument, ResearcherDocumentType, QueryFilterResearcher, Researcher, ResearcherDocumentAnalytics } from '../models/researcher.model'
import { OrganizationModel, PeopleGroupIdOrSlug } from '../models'
import { clientAPI, clientAPIOptions } from './client'
import { PaginationResult } from '../interfaces/pagination'

export async function getOwnResearchDocument(
  organisationCode: string,
  researchId: Researcher['id'],
  ResearcherdocumentType: ResearcherDocumentType,
  config = {}
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
  config = {}
) {
  return await clientAPI<PaginationResult<ResearcherDocument>>(
    `crisalid/organization/${organisationCode}/people-group/${groupId}/${ResearcherdocumentType}/`,
    config
  )
}

export async function getOwnResearchDocumentAnalytics(
  organisationCode: string,
  researchId: Researcher['id'],
  ResearcherdocumentType: ResearcherDocumentType,
  config = {}
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
  config = {}
) {
  return await clientAPI<ResearcherDocumentAnalytics>(
    `crisalid/organization/${organisationCode}/people-group/${groupId}/${ResearcherdocumentType}/analytics/`,
    config
  )
}

export async function getResearchDocumentSimilars(
  organisationCode: string,
  documentId: ResearcherDocument['id'],
  config = {}
) {
  return await clientAPI<PaginationResult<ResearcherDocument>>(
    `crisalid/organization/${organisationCode}/document/${documentId}/similars/`,
    config
  )
}

type ConfigSearch = clientAPIOptions<QueryFilterResearcher>
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
