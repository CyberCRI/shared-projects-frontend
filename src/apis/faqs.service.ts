import { FaqInput, OrganizationModel } from '../models'
import { clientAPI } from './client'

export async function getFaq(organisationCode: OrganizationModel['code']) {
  return await clientAPI(`organization/${organisationCode}/faq/`, {})
}

export async function createFaq(body: FaqInput) {
  return await clientAPI(`organization/${body.organization_code}/faq/`, { body, method: 'POST' })
}

export async function putFaq(body: FaqInput) {
  return await clientAPI(`organization/${body.organization_code}/faq/`, { body, method: 'PUT' })
}

export async function patchFaq(organisationCode: OrganizationModel['code'], body: FaqInput) {
  return await clientAPI(`organization/${organisationCode}/faq/`, { body, method: 'PATCH' })
}

export async function deleteFaq({ orgCode }: { orgCode: OrganizationModel['code'] }) {
  return await clientAPI(`organization/${orgCode}/faq/`, { method: 'DELETE' })
}

export async function postFaqImage({ orgCode, body }: { orgCode: OrganizationModel['code'], body: any }) {
  return await clientAPI(`organization/${orgCode}/faq-image/`, { body, method: 'POST' })
}
