import {
  ImageModel,
  ImageModelCreated,
  NewsInput,
  NewsModel,
  OrganizationModel,
  QueryFilterNews,
} from '../models'
import { clientAPI, type clientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

type ConfigNews = clientAPIOptions<QueryFilterNews>

export async function getAllNews(
  organizationCode: OrganizationModel['code'],
  config: ConfigNews = {}
) {
  return await clientAPI<PaginationResult<NewsModel>>(
    `organization/${organizationCode}/news/`,
    config
  )
}

export async function getNews(
  organizationCode: OrganizationModel['code'],
  newsId: NewsModel['id'],
  config: clientAPIOptions = {}
) {
  return await clientAPI<NewsModel>(`organization/${organizationCode}/news/${newsId}/`, config)
}

export async function createNews(
  organizationCode: OrganizationModel['code'],
  body: NewsInput,
  config: clientAPIOptions = {}
) {
  return await clientAPI<NewsModel>(`organization/${organizationCode}/news/`, {
    ...config,
    body,
    method: 'POST',
  })
}

export async function putNews(
  organizationCode: OrganizationModel['code'],
  newsId: NewsModel['id'],
  body: NewsInput,
  config: clientAPIOptions = {}
) {
  return await clientAPI<NewsModel>(`organization/${organizationCode}/news/${newsId}/`, {
    ...config,
    body,
    method: 'PUT',
  })
}

export async function patchNews(
  organizationCode: OrganizationModel['code'],
  newsId: NewsModel['id'],
  body: NewsInput,
  config: clientAPIOptions = {}
) {
  return await clientAPI<NewsModel>(`organization/${organizationCode}/news/${newsId}/`, {
    ...config,
    body,
    method: 'PATCH',
  })
}

export async function deleteNews(
  organizationCode: OrganizationModel['code'],
  newsId: NewsModel['id'],
  config: clientAPIOptions = {}
) {
  await clientAPI(`organization/${organizationCode}/news/${newsId}/`, {
    ...config,
    method: 'DELETE',
  })
}

export async function postNewsHeader(
  organizationCode: OrganizationModel['code'],
  newsId: NewsModel['id'],
  body: FormData,
  config: clientAPIOptions = {}
) {
  return await clientAPI<ImageModelCreated>(
    `organization/${organizationCode}/news/${newsId}/header/`,
    {
      ...config,
      body,
      method: 'POST',
    }
  )
}

export async function patchNewsHeader(
  organizationCode: OrganizationModel['code'],
  newsId: NewsModel['id'],
  imageId: ImageModel['id'],
  body: FormData,
  config: clientAPIOptions = {}
) {
  return await clientAPI<ImageModelCreated>(
    `organization/${organizationCode}/news/${newsId}/header/${imageId}/`,
    {
      ...config,
      body,
      method: 'PATCH',
    }
  )
}
