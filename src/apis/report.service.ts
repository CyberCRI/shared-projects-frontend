import { ContactForm, OrganizationModel, ReportForm, ReportModel } from '../models'
import { clientAPI } from './client'

export async function reportBug(organizationCode: OrganizationModel['code'], formData: ReportForm) {
  return await clientAPI<ReportModel>(`organization/${organizationCode}/report/bug/`, {
    body: formData,
    method: 'POST',
  })
}

export async function reportAbuse(
  organizationCode: OrganizationModel['code'],
  formData: ReportForm
) {
  return await clientAPI<ReportModel>(`organization/${organizationCode}/report/abuse/`, {
    body: formData,
    method: 'POST',
  })
}

export async function contactUs(
  organizationCode: OrganizationModel['code'],
  formData: ContactForm
) {
  return await clientAPI(`organization/${organizationCode}/contact/us/`, {
    body: formData,
    method: 'POST',
  })
}
