import { PaginationQuery, PaginationResult } from '../interfaces'
import { OrganizationModel, QueryFilterTagClassification, TagClassificationModel, TagModel } from '../models'
import {clientAPI, type clientAPIOptions } from './client'

export type Config = clientAPIOptions<PaginationQuery>

export async function getAllOrgClassifications(
  organizationCode: OrganizationModel['code'],
  config: Config = {}
) {
  return await clientAPI<PaginationResult<TagModel>>(
    `organization/${organizationCode}/tag-classification/`,
    config
  )
}

export async function getOrgClassification(
  organizationCode: OrganizationModel['code'],
  classificationId: TagClassificationModel['id'],
  config: Config = {}
) {
  return await clientAPI<TagClassificationModel>(
    `organization/${organizationCode}/tag-classification/${classificationId}/`,
    config
  )
}

export async function postOrgClassification(
  organizationCode: OrganizationModel['code'],
  classification: Partial<TagClassificationModel>
) {
  return await clientAPI<TagClassificationModel>(
    `organization/${organizationCode}/tag-classification/`,
    {
      body: classification,
      method: 'POST',
    }
  )
}

export async function putOrgClassification(
  organizationCode: OrganizationModel['code'],
  classificationId: TagClassificationModel['id'],
  classification: Partial<TagClassificationModel>
) {
  return await clientAPI<TagClassificationModel>(
    `organization/${organizationCode}/tag-classification/${classificationId}/`,
    {
      body: classification,
      method: 'PUT',
    }
  )
}

export async function patchOrgClassification(
  organizationCode: OrganizationModel['code'],
  classificationId: TagClassificationModel['id'],
  classification: Partial<TagClassificationModel>
) {
  return await clientAPI<TagClassificationModel>(
    `organization/${organizationCode}/tag-classification/${classificationId}/`,
    {
      body: classification,
      method: 'PATCH',
    }
  )
}

export async function deleteOrgClassification(
  organizationCode: OrganizationModel['code'],
  classificationId: TagClassificationModel['id']
) {
  return await clientAPI<undefined>(
    `organization/${organizationCode}/tag-classification/${classificationId}/`,
    {
      method: 'DELETE',
    }
  )
}

type ConfigClassification = clientAPIOptions<QueryFilterTagClassification>

export async function getOrgClassificationTags(
  organizationCode: OrganizationModel['code'],
  classificationId: TagClassificationModel['id'] | 'enabled-for-projects' | 'enabled-for-skills',
  config: ConfigClassification = {}
) {
  return await clientAPI<PaginationResult<TagClassificationModel>>(
    `organization/${organizationCode}/tag-classification/${classificationId}/tag/`,
    config
  )
}

export async function getTags(ids: number[], config: Config = {}) {
  return await clientAPI<TagModel[]>(`tag/`, {
    ...config,
    query: {
      ...(config.query || {}),
      ids: ids.join(','),
    },
  })
}

export async function getAllTagsById(ids: number[], config: Config = {}) {
  return {
    count: -1,
    next: null,
    previous: null,
    results: await Promise.all(ids.map(async (id) => await clientAPI(`tag/${id}/`, config))),
  }
}

export async function putClassificationTag(
  organizationCode: OrganizationModel['code'],
  classificationId: TagClassificationModel['id'],
  tagtId: TagModel['id'],
  tag: TagModel
) {
  return await clientAPI<TagModel>(
    `/organization/${organizationCode}/tag-classification/${classificationId}/tag/${tagtId}/`,
    { body: tag, method: 'PUT' }
  )
}

export async function patchClassificationTag(
  organizationCode: OrganizationModel['code'],
  classificationId: TagClassificationModel['id'],
  tagtId: TagModel['id'],
  tag: TagModel
) {
  return await clientAPI<TagModel>(
    `/organization/${organizationCode}/tag-classification/${classificationId}/tag/${tagtId}/`,
    { body: tag, method: 'PATCH' }
  )
}

export async function deleteClassificationTag(
  organizationCode: OrganizationModel['code'],
  classificationId: TagClassificationModel['id'],
  tagtId: TagModel['id']
) {
  return await clientAPI<TagModel>(
    `/organization/${organizationCode}/tag-classification/${classificationId}/tag/${tagtId}/`,
    { method: 'DELETE' }
  )
}

export async function postClassificationTag(
  organizationCode: OrganizationModel['code'],
  classificationId: TagClassificationModel['id'],
  tag: TagModel
) {
  return await clientAPI<TagModel>(
    `organization/${organizationCode}/tag-classification/${classificationId}/tag/`,
    {
      body: tag,
      method: 'POST',
    }
  )
}
