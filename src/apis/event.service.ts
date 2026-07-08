import { PaginationResult } from '../interfaces'
import { EventIdOrSlug, EventInput, EventModel, OrganizationModel, QueryFilterEvent } from '../models'
import {clientAPI, type clientAPIOptions } from './client'

type ConfigEvent = clientAPIOptions<QueryFilterEvent>

export async function getAllEvents(
  organizationCode: OrganizationModel['code'],
  config?: ConfigEvent
) {
  return await clientAPI<PaginationResult<EventModel>>(
    `organization/${organizationCode}/event/`,
    config
  )
}

export async function getEvent(
  organizationCode: OrganizationModel['code'],
  idOrSlug: EventIdOrSlug,
  config?: ConfigEvent
) {
  return await clientAPI<EventModel>(`organization/${organizationCode}/event/${idOrSlug}/`, config)
}

export async function createEvent(organizationCode: OrganizationModel['code'], body: EventInput) {
  return await clientAPI<EventModel>(`organization/${organizationCode}/event/`, {
    body,
    method: 'POST',
  })
}

export async function putEvent(
  organizationCode: OrganizationModel['code'],
  idOrSlug: EventIdOrSlug,
  body: EventInput
) {
  return await clientAPI<EventModel>(`organization/${organizationCode}/event/${idOrSlug}/`, {
    body,
    method: 'PUT',
  })
}

export async function patchEvent(
  organizationCode: OrganizationModel['code'],
  idOrSlug: EventIdOrSlug,
  body: EventInput
) {
  return await clientAPI<EventModel>(`organization/${organizationCode}/event/${idOrSlug}/`, {
    body,
    method: 'PATCH',
  })
}

export async function deleteEvent(
  organizationCode: OrganizationModel['code'],
  idOrSlug: EventIdOrSlug
) {
  return await clientAPI<undefined>(`organization/${organizationCode}/event/${idOrSlug}/`, {
    method: 'DELETE',
  })
}
