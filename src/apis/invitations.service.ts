import { InvitationModel, InvitationModelInput, OrganizationModel } from '../models'
import { clientAPI } from './client'

export async function getInvitation(
  organizationCode: OrganizationModel['code'],
  token: string,
  config = {}
) {
  return await clientAPI<InvitationModel>(
    `organization/${organizationCode}/invitation/${token}/`,
    config
  )
}
export async function getInvitations(organizationCode: OrganizationModel['code'], config = {}) {
  return await clientAPI<InvitationModel>(`organization/${organizationCode}/invitation/`, config)
}
export async function postInvitation(
  organizationCode: OrganizationModel['code'],
  formData: InvitationModelInput,
  config = {}
) {
  return await clientAPI<InvitationModel>(`organization/${organizationCode}/invitation/`, {
    ...config,
    body: formData,
    method: 'POST',
  })
}

export async function deleteInvitation(
  organizationCode: OrganizationModel['code'],
  id: OrganizationModel['id'],
  config = {}
) {
  await clientAPI(`organization/${organizationCode}/invitation/${id}/`, {
    ...config,
    method: 'DELETE',
  })
}
