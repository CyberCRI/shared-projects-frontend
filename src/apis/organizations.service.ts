import { PaginationResult } from '../interfaces'
import { GroupModelInput, ImageModelCreated, ImageOrganizationInput, OrganizationModel, OrganizationPatchInput, ProjectModel, ProjectSlugOrId, RemoveGroupModelInput } from '../models'
import { clientAPI, clientAPIOptions } from './client'
import { _adaptParamsToGetQuery } from './utils.service'

export async function patchOrganization(
  code: string,
  organization: OrganizationPatchInput | FormData
) {
  return await clientAPI<OrganizationModel>(`organization/${code}/`, {
    body: organization,
    method: 'PATCH',
  })
}

export async function getOrganizationByCode(code: string, config = {}) {
  return await clientAPI<OrganizationModel>(`organization/${code}/`, config)
}

export async function getOrganizations(config = {}) {
  return await clientAPI<PaginationResult<OrganizationModel>>(`organization/`, config)
}

export async function postOrganisationBanner({ code, body }: { code: string; body: FormData }) {
  return await clientAPI(`organization/${code}/banner/`, { body, method: 'POST' }) //.data.value
}

export async function patchOrganisationBanner(code: string, banner_id: number, body: FormData) {
  return await clientAPI(`organization/${code}/banner/${banner_id}/`, { body, method: 'PATCH' })
}

export async function postOrganisationLogo({
  code,
  body,
}: {
  code: string
  body: ImageOrganizationInput | FormData
}) {
  return await clientAPI(`organization/${code}/logo/`, { body, method: 'POST' })
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
  return await clientAPI(`organization/${org_id}/member/remove/`, { body, method: 'POST' }) // .data.value
}

export async function postAccessRequest(organizationCode: OrganizationModel['code'], body: any) {
  return await clientAPI(`organization/${organizationCode}/access-request/`, { body, method: 'POST' })
}

export async function getAccessRequests(organizationCode: OrganizationModel['code'], params: any) {
  return await clientAPI(`organization/${organizationCode}/access-request/`, {
    ..._adaptParamsToGetQuery(params),
  })
}

export async function declineAccessRequest(organizationCode: OrganizationModel['code'], params: any) {
  return await clientAPI(`organization/${organizationCode}/access-request/decline/`, {
    body: params,
    method: 'POST',
  })
}

export async function acceptAccessRequest(organizationCode: OrganizationModel['code'], params: any) {
  return await clientAPI(`organization/${organizationCode}/access-request/accept/`, {
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
  return await clientAPI<undefined>(`organization/${organizationCode}/featured-project/remove/`, {
    method: 'POST',
    body,
    ...config,
  })
}

export async function postOrganizationImage({ orgCode, body }: {orgCode: OrganizationModel['code'], body: any}) {
  return await clientAPI<ImageModelCreated>(`organization/${orgCode}/image/`, { body, method: 'POST' })
}

export async function patchTermsAndConditions(organization: OrganizationModel, content: string) {
  return await clientAPI(
    `organization/${organization.code}/terms-and-conditions/${organization.terms_and_conditions?.id}/`,
    {
      body: { content },
      method: 'PATCH',
    }
  )
}
