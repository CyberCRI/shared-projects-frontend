import { Mentoring, OrganizationModel, SkillModel } from '../models'
import { clientAPI, ClientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

// fetch mentorshup demand and offer for currentr user
export async function getUserMentorship(
  organizationCode: OrganizationModel['code'],
  config: ClientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<Mentoring>>(
    `organization/${organizationCode}/mentoring/`,
    config
  )
}

// fetch mentorshup demand and offer for currentr user
export async function getMentorshipDetails(
  organizationCode: OrganizationModel['code'],
  mentorshipId: any
) {
  return await clientAPI(`organization/${organizationCode}/mentoring/${mentorshipId}/`)
}

// offer mentroship fro a skill
export async function offerMentorship(
  organizationCode: OrganizationModel['code'],
  skill: SkillModel,
  payload: any
) {
  return await clientAPI(
    `organization/${organizationCode}/mentoring/contact-mentoree/${skill.id}/`,
    {
      body: payload,
      method: 'POST',
    }
  )
}

// ask mentorship for a skill
export async function askMentorship(
  organizationCode: OrganizationModel['code'],
  skill: SkillModel,
  payload: any
) {
  return await clientAPI(`organization/${organizationCode}/mentoring/contact-mentor/${skill.id}/`, {
    body: payload,
    method: 'POST',
  })
}
// respond to mentroship offer
export async function respondMentorship(
  organizationCode: OrganizationModel['code'],
  mentorshipId: Mentoring['id'],
  payload: any
) {
  return await clientAPI(`organization/${organizationCode}/mentoring/${mentorshipId}/respond/`, {
    body: payload,
    method: 'POST',
  })
}
