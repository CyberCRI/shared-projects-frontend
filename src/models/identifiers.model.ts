// export type HarvesterType =
//   | 'orcid'
//   | 'idref'
//   | 'hal'
//   | 'idhals'
//   | 'idhali'
//   | 'scopus'
//   | 'scanr'
//   | 'openalex'
//   | 'scienceplus'
//   | 'sudoc'
//   | 'openedition'
//   | 'persee'
//   | 'local'
//   | 'eppn'
//   | 'ror'
//   | 'nns'
//   | 'uai'
//   | 'siren'
//   | 'siret'
//   | 'grid'
//   | 'wikidata'
//   | 'fundref'
//   | 'isni'
//   | 'googlescholar'
//   | 'viaf'
//   | 'doi'
//   | 'issn'
//   | 'arxiv'
//   | 'bibcode'
//   | 'biorxiv'
//   | 'cern'
//   | 'chemrxiv'
//   | 'ensam'
//   | 'ineris'
//   | 'inspire'
//   | 'ird'
//   | 'irstea'
//   | 'meditagri'
//   | 'nnt'
//   | 'okina'
//   | 'oatao'
//   | 'pii'
//   | 'pmid'
//   | 'pmcid'
//   | 'ppn'
//   | 'prodinra'
//   | 'sciencespo'
//   | 'swhid'
//   | 'uri'
//   | 'wos'

// OrganizationIdentifierType (structures and authority organizations)
export type OrganizationHarvesterType =
  | 'idref'
  | 'ror'
  | 'nns'
  | 'local'
  | 'uai'
  | 'siren'
  | 'siret'
  | 'wikidata'
  | 'scopus'
  | 'hal'
  | 'openalex'
  | 'isni'
  | 'viaf'
export type StructureIdentifierType = OrganizationHarvesterType
export type AuthorityOrganizationIdentifierType = OrganizationHarvesterType

// PersonIdentifierType
export type ResearcherIdentifierType =
  'orcid' | 'idref' | 'idhals' | 'idhali' | 'scopus' | 'local' | 'eppn'

// documents are identified by their source records ("recorded_by")
// https://github.com/CRISalid-esr/crisalid-ikg/blob/dev-main/app/models/harvesters.py
export type DocumentIdentifierType = 'hal' | 'scanr' | 'idref' | 'openalex' | 'scopus'

export type JournalIdentifierType = 'doi' | 'isnn'

export type Identifier<Harvester> = {
  id: number
  value: string
  harvester: Harvester
}

export type HarvesterType =
  | OrganizationHarvesterType
  | ResearcherIdentifierType
  | DocumentIdentifierType
  | JournalIdentifierType
