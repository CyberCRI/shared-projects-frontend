import { PaginationResult } from '../interfaces'
import { AnnouncementApplyForm, AnnouncementForm, AnnouncementId, AnnouncementModel, ProjectSlugOrId, QueryFilterAnnouncement } from '../models'
import { clientAPI, clientAPIOptions } from './client'


type Config = clientAPIOptions<QueryFilterAnnouncement>

export async function getAnnouncements(config: Config = {}) {
  return await clientAPI<PaginationResult<AnnouncementModel>>(`announcement/`, config)
}

export async function getProjectAnnouncements(projectId: ProjectSlugOrId, config: Config = {}) {
  return await clientAPI<PaginationResult<AnnouncementModel>>(
    `project/${projectId}/announcement/`,
    config
  )
}

export async function postAnnouncement(
  projectId: ProjectSlugOrId,
  body: AnnouncementForm,
  config: Config = {}
) {
  return await clientAPI<AnnouncementModel>(`project/${projectId}/announcement/`, {
    body,
    method: 'POST',
    ...config,
  })
}

export async function patchAnnouncement(
  projectId: ProjectSlugOrId,
  announcementId: AnnouncementId,
  body: AnnouncementForm,
  config: Config = {}
) {
  return await clientAPI<AnnouncementModel>(`project/${projectId}/announcement/${announcementId}/`, {
    body,
    method: 'PATCH',
    ...config,
  })
}

export async function deleteAnnouncement(
  projectId: ProjectSlugOrId,
  announcementId: AnnouncementId,
  config: Config = {}
) {
  await clientAPI(`project/${projectId}/announcement/${announcementId}/`, {
    method: 'DELETE',
    ...config,
  })
}

export async function applyAnnouncement(
  projectId: ProjectSlugOrId,
  announcementId: AnnouncementId,
  body: AnnouncementApplyForm
) {
  await clientAPI(`project/${projectId}/announcement/${announcementId}/apply/`, {
    body,
    method: 'POST',
  })
}
