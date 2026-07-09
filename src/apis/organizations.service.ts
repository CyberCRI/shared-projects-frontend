import {
  GroupModelInput,
  ImageModelCreated,
  ImageOrganizationInput,
  OrganizationModel,
  OrganizationPatchInput,
  ProjectModel,
  ProjectSlugOrId,
  RemoveGroupModelInput,
  TermsAndConditions,
} from '../models'
import { AccessRequest, AccessRequestModel, QueryFilterAccessRequests } from './access.service'
import { _adaptParamsToGetQuery } from './utils.service'
import { clientAPI, clientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

export async function patchOrganization(
  organisationCode: OrganizationModel['code'],
  organization: OrganizationPatchInput | FormData
) {
  return await clientAPI<OrganizationModel>(`organization/${organisationCode}/`, {
    body: organization,
    method: 'PATCH',
  })
}

export async function getOrganizationByCode(
  organisationCode: OrganizationModel['code'],
  config: clientAPIOptions = {}
) {
  return await clientAPI<OrganizationModel>(`organization/${organisationCode}/`, config)
}

export async function getOrganizations(config: clientAPIOptions = {}) {
  return await clientAPI<PaginationResult<OrganizationModel>>(`organization/`, config)
}

export async function postOrganisationBanner({
  code,
  body,
}: {
  code: OrganizationModel['code']
  body: FormData
}) {
  return await clientAPI<ImageModelCreated>(`organization/${code}/banner/`, {
    body,
    method: 'POST',
  }) //.data.value
}

export async function patchOrganisationBanner(
  organisationCode: OrganizationModel['code'],
  banner_id: number,
  body: FormData
) {
  return await clientAPI<ImageModelCreated>(
    `organization/${organisationCode}/banner/${banner_id}/`,
    {
      body,
      method: 'PATCH',
    }
  )
}

export async function postOrganisationLogo({
  code,
  body,
}: {
  code: OrganizationModel['code']
  body: ImageOrganizationInput | FormData
}) {
  return await clientAPI<ImageModelCreated>(`organization/${code}/logo/`, { body, method: 'POST' })
}

export async function addOrgMember({ org_id, body }: { org_id: number; body: GroupModelInput[] }) {
  return await clientAPI(`organization/${org_id}/member/add/`, { body, method: 'POST' })
}

export async function removeOrgMember({
  org_id,
  body,
}: {
  org_id: number
  body: RemoveGroupModelInput[]
}) {
  return await clientAPI(`organization/${org_id}/member/remove/`, { body, method: 'POST' })
}

export async function postAccessRequest(organizationCode: OrganizationModel['code'], body: any) {
  return await clientAPI<AccessRequestModel>(`organization/${organizationCode}/access-request/`, {
    body,
    method: 'POST',
  })
}

export async function getAccessRequests(
  organizationCode: OrganizationModel['code'],
  config: clientAPIOptions<QueryFilterAccessRequests>
) {
  return await clientAPI<PaginationResult<AccessRequestModel>>(
    `organization/${organizationCode}/access-request/`,
    config
  )
}

export async function declineAccessRequest(
  organizationCode: OrganizationModel['code'],
  params: any
) {
  return await clientAPI<AccessRequest>(
    `organization/${organizationCode}/access-request/decline/`,
    {
      body: params,
      method: 'POST',
    }
  )
}

export async function acceptAccessRequest(
  organizationCode: OrganizationModel['code'],
  params: any
) {
  return await clientAPI<AccessRequest>(`organization/${organizationCode}/access-request/accept/`, {
    body: params,
    method: 'POST',
  })
}

// --- featured
type ConfigFeaturedProject = clientAPIOptions
type FeaturedProjectBody = {
  featured_projects_ids: ProjectSlugOrId[]
}
export async function getFeaturedProjects(
  organizationCode: OrganizationModel['code'],
  config: ConfigFeaturedProject = {}
) {
  return await clientAPI<PaginationResult<ProjectModel>>(
    `organization/${organizationCode}/featured-project/`,
    config
  )
}

export async function addFeaturedProject(
  organizationCode: OrganizationModel['code'],
  body: FeaturedProjectBody,
  config: ConfigFeaturedProject = {}
) {
  return await clientAPI<ProjectModel>(`organization/${organizationCode}/featured-project/add/`, {
    method: 'POST',
    body,
    ...config,
  })
}

export async function removeFeaturedProject(
  organizationCode: OrganizationModel['code'],
  body: FeaturedProjectBody,
  config: ConfigFeaturedProject = {}
) {
  await clientAPI(`organization/${organizationCode}/featured-project/remove/`, {
    method: 'POST',
    body,
    ...config,
  })
}

export async function postOrganizationImage({
  orgCode,
  body,
}: {
  orgCode: OrganizationModel['code']
  body: any
}) {
  return await clientAPI<ImageModelCreated>(`organization/${orgCode}/image/`, {
    body,
    method: 'POST',
  })
}

export async function patchTermsAndConditions(
  organization: OrganizationModel,
  content: TermsAndConditions['content'],
  config: clientAPIOptions = {}
) {
  return await clientAPI<TermsAndConditions>(
    `organization/${organization.code}/terms-and-conditions/${organization.terms_and_conditions?.id}/`,
    {
      ...config,
      body: { content },
      method: 'PATCH',
    }
  )
}
