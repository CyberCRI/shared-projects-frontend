import { PaginationResult } from '../interfaces'
import { FollowOutput, ImageModel, OrganizationModel, ProjectCategoryCreateInput, ProjectCategoryModel, ProjectCategoryPatchInput, ProjectCategoryPutInput, UserIdOrSlug } from '../models'
import {clientAPI, type clientAPIOptions } from './client'

type Config = clientAPIOptions

export async function createProjectCategory(
  organizationCode: OrganizationModel['code'],
  category: ProjectCategoryCreateInput | FormData
) {
  return await clientAPI(`organization/${organizationCode}/category/`, {
    body: category,
    method: 'POST',
  }) // .data.value
}

export async function putProjectCategory(
  organizationCode: OrganizationModel['code'],
  id: number,
  category: ProjectCategoryPutInput | FormData
) {
  return await clientAPI(`organization/${organizationCode}/category/${id}/`, {
    body: category,
    method: 'PATCH',
  })
}

export async function patchProjectCategory(
  organizationCode: OrganizationModel['code'],
  id: number,
  category: ProjectCategoryPatchInput | FormData
) {
  return await clientAPI(`organization/${organizationCode}/category/${id}/`, {
    body: category,
    method: 'PATCH',
  })
}

export async function deleteProjectCategory(
  organizationCode: OrganizationModel['code'],
  id: number
) {
  await clientAPI(`organization/${organizationCode}/category/${id}/`, { method: 'DELETE' })
}

export async function getProjectCategory(organizationCode: OrganizationModel['code'], id: number) {
  return await clientAPI(`organization/${organizationCode}/category/${id}/`)
}

export async function getAllProjectCategories(
  organizationCode: OrganizationModel['code'],
  config: Config = {}
) {
  return await clientAPI<PaginationResult<ProjectCategoryModel>>(
    `organization/${organizationCode}/category/`,
    config
  )
}

export async function getRootProjectCategory(organizationCode: OrganizationModel['code']) {
  return await clientAPI(`organization/${organizationCode}/categories-hierarchy/`)
}

export async function getProjectCategoriesHierarchy(
  organizationCode: OrganizationModel['code'],
  rootId: number
) {
  return await clientAPI(`organization/${organizationCode}/category/${rootId}/hierarchy/`)
}

export async function postProjectCategoryBackground(
  organizationCode: OrganizationModel['code'],
  { id, body }: {id: ProjectCategoryModel['id'], body: any}
) {
  return await clientAPI(`organization/${organizationCode}/category/${id}/background/`, {
    body,
    method: 'POST',
  })
}

export async function patchProjectCategoryBackground(
  organizationCode: OrganizationModel['code'],
  { id, imageId, body }: { id: ProjectCategoryModel['id'], body: any, imageId: ImageModel['id'] }
) {
  return await clientAPI(`organization/${organizationCode}/category/${id}/background/${imageId}/`, {
    body,
    method: 'PATCH',
  })
}

export async function deleteProjectCategoryBackground(
  organizationCode: OrganizationModel['code'],
  { category_id, id }: { category_id: ProjectCategoryModel['id'], id: any }
) {
  await clientAPI(
    `organization/${organizationCode}/category/${category_id}/background/${id}/`,
    { method: 'DELETE' }
  )
}

export async function getProjectCategoriesFollow(userId: number) {
  return await clientAPI<PaginationResult<FollowOutput>>(`user/${userId}/category-follow/`)
}

export async function postProjectCategoryFollow(userId: UserIdOrSlug, category_id: number) {
  return await clientAPI<FollowOutput>(`user/${userId}/category-follow/`, { body: { category_id }, method: 'POST' })
}

export async function deleteProjectCategoryFollow(userId: UserIdOrSlug, category_follow_id: number) {
  await clientAPI(`user/${userId}/category-follow/${category_follow_id}/`, { method: 'DELETE' })
}
