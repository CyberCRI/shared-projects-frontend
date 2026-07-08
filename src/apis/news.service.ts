import { PaginationResult } from '../interfaces'
import { ImageModel, NewsInput, NewsModel, OrganizationModel, QueryFilterNews } from '../models'
import {clientAPI, type clientAPIOptions } from './client'

type ConfigNews = clientAPIOptions<QueryFilterNews>

export async function getAllNews(
  organizationCode: OrganizationModel['code'],
  config: ConfigNews = {}
) {
  return await clientAPI<PaginationResult<NewsModel>>(`organization/${organizationCode}/news/`, config)
}

export async function getNews(
  organizationCode: OrganizationModel['code'],
  newsId: NewsModel['id'],
  config: ConfigNews = {}
) {
  return await clientAPI<NewsModel>(`organization/${organizationCode}/news/${newsId}/`, config)
}

export async function createNews(organizationCode: OrganizationModel['code'], body: NewsInput) {
  return await clientAPI<NewsModel>(`organization/${organizationCode}/news/`, { body, method: 'POST' })
}

export async function putNews(
  organizationCode: OrganizationModel['code'],
  newsId: NewsModel['id'],
  body: NewsInput
) {
  return await clientAPI<NewsModel>(`organization/${organizationCode}/news/${newsId}/`, {
    body,
    method: 'PUT',
  })
}

export async function patchNews(
  organizationCode: OrganizationModel['code'],
  newsId: NewsModel['id'],
  body: NewsInput
) {
  return await clientAPI<NewsModel>(`organization/${organizationCode}/news/${newsId}/`, {
    body,
    method: 'PATCH',
  })
}

export async function deleteNews(
  organizationCode: OrganizationModel['code'],
  newsId: NewsModel['id']
) {
  return await clientAPI(`organization/${organizationCode}/news/${newsId}/`, { method: 'DELETE' })
}

export async function postNewsHeader(
  organizationCode: OrganizationModel['code'],
  newsId: NewsModel['id'],
  body: any
) {
  return await clientAPI(`organization/${organizationCode}/news/${newsId}/header/`, {
    body,
    method: 'POST',
  })
}

export async function patchNewsHeader(
  organizationCode: OrganizationModel['code'],
  newsId: NewsModel['id'],
  imageId: ImageModel['id'],
  body: any
) {
  return await clientAPI(`organization/${organizationCode}/news/${newsId}/header/${imageId}/`, {
    body,
    method: 'PATCH',
  })
}
