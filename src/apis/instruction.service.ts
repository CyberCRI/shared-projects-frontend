import {
  InstructionId,
  InstructionInput,
  InstructionModel,
  OrganizationModel,
  QueryFilterInstruction,
} from '../models'
import { clientAPI, type clientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

type ConfigEvent = clientAPIOptions<QueryFilterInstruction>

export async function getAllInstructions(
  organizationCode: OrganizationModel['code'],
  config?: ConfigEvent
) {
  return await clientAPI<PaginationResult<InstructionModel>>(
    `organization/${organizationCode}/instruction/`,
    config
  )
}

export async function getInstruction(
  organizationCode: OrganizationModel['code'],
  idOrSlug: InstructionId,
  config?: ConfigEvent
) {
  return await clientAPI<InstructionModel>(
    `organization/${organizationCode}/instruction/${idOrSlug}/`,
    config
  )
}

export async function createInstruction(
  organizationCode: OrganizationModel['code'],
  body: InstructionInput
) {
  return await clientAPI<InstructionModel>(`organization/${organizationCode}/instruction/`, {
    body,
    method: 'POST',
  })
}

export async function putInstruction(
  organizationCode: OrganizationModel['code'],
  idOrSlug: InstructionId,
  body: InstructionInput
) {
  return await clientAPI<InstructionModel>(
    `organization/${organizationCode}/instruction/${idOrSlug}/`,
    { body, method: 'PUT' }
  )
}

export async function patchInstruction(
  organizationCode: OrganizationModel['code'],
  idOrSlug: InstructionId,
  body: InstructionInput
) {
  return await clientAPI<InstructionModel>(
    `organization/${organizationCode}/instruction/${idOrSlug}/`,
    {
      body,
      method: 'PATCH',
    }
  )
}

export async function deleteInstruction(
  organizationCode: OrganizationModel['code'],
  idOrSlug: InstructionId
) {
  await clientAPI(`organization/${organizationCode}/instruction/${idOrSlug}/`, {
    method: 'DELETE',
  })
}
