import {
  BlogEntryForm,
  BlogEntryId,
  BlogEntryModel,
  ImageModelCreated,
  ProjectSlugOrId,
  QueryFilterBlogEntry,
} from '../models'
import { clientAPI, type ClientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

type ConfigBlogEntry = ClientAPIOptions
type ConfigBlogEntries = ClientAPIOptions<QueryFilterBlogEntry>

export async function getBlogEntries(projectId: ProjectSlugOrId, config: ConfigBlogEntries = {}) {
  return await clientAPI<PaginationResult<BlogEntryModel>>(
    `project/${projectId}/blog-entry/`,
    config
  )
}

export async function getBlogEntry(
  projectId: ProjectSlugOrId,
  blogEntryId: BlogEntryId,
  config: ConfigBlogEntry = {}
) {
  return await clientAPI<BlogEntryModel>(`project/${projectId}/blog-entry/${blogEntryId}/`, config)
}

export async function postBlogEntry(projectId: ProjectSlugOrId, body: BlogEntryForm) {
  return await clientAPI<BlogEntryModel>(`project/${projectId}/blog-entry/`, {
    body,
    method: 'POST',
  })
}

export async function patchBlogEntry(
  projectId: ProjectSlugOrId,
  blogEntryId: BlogEntryId,
  body: BlogEntryForm
) {
  return await clientAPI<BlogEntryModel>(`project/${projectId}/blog-entry/${blogEntryId}/`, {
    body,
    method: 'PATCH',
  })
}

export async function deleteBlogEntry(projectId: ProjectSlugOrId, blogEntryId: BlogEntryId) {
  await clientAPI(`project/${projectId}/blog-entry/${blogEntryId}/`, {
    method: 'DELETE',
  })
}

export async function postBlogEntryImage(
  projectId: ProjectSlugOrId,
  body: FormData,
  config: ConfigBlogEntry = {}
) {
  return await clientAPI<ImageModelCreated>(`project/${projectId}/blog-entry-image/`, {
    ...config,
    body,
    method: 'POST',
  })
}
