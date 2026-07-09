import { ContactForm, OrganizationModel, ReportForm, ReportModel } from '../models'
import { clientAPI, clientAPIOptions } from './client'

export async function reportBug(
  organizationCode: OrganizationModel['code'],
  body: ReportForm,
  config: clientAPIOptions = {}
) {
  await clientAPI<ReportModel>(`organization/${organizationCode}/report/bug/`, {
    ...config,
    body,
    method: 'POST',
  })
}

export async function reportAbuse(
  organizationCode: OrganizationModel['code'],
  body: ReportForm,
  config: clientAPIOptions = {}
) {
  await clientAPI<ReportModel>(`organization/${organizationCode}/report/abuse/`, {
    ...config,
    body,
    method: 'POST',
  })
}

export async function contactUs(
  organizationCode: OrganizationModel['code'],
  body: ContactForm,
  config: clientAPIOptions = {}
) {
  await clientAPI(`organization/${organizationCode}/contact/us/`, {
    ...config,
    body,
    method: 'POST',
  })
}
