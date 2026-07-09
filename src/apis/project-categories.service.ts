import {
  FollowOutput,
  ImageModel,
  ImageModelCreated,
  OrganizationModel,
  ProjectCategoryCreateInput,
  ProjectCategoryModel,
  ProjectCategoryPatchInput,
  ProjectCategoryPutInput,
  UserSlugOrId,
} from '../models'
import { clientAPI, type clientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

export async function getProjectCategory(
  organizationCode: OrganizationModel['code'],
  categoryId: ProjectCategoryModel['id'],
  config: clientAPIOptions = {}
) {
  return await clientAPI<ProjectCategoryModel>(
    `organization/${organizationCode}/category/${categoryId}/`,
    config
  )
}

export async function createProjectCategory(
  organizationCode: OrganizationModel['code'],
  body: ProjectCategoryCreateInput | FormData,
  config: clientAPIOptions = {}
) {
  return await clientAPI<ProjectCategoryModel>(`organization/${organizationCode}/category/`, {
    ...config,
    body,
    method: 'POST',
  })
}

export async function putProjectCategory(
  organizationCode: OrganizationModel['code'],
  categoryId: ProjectCategoryModel['id'],
  body: ProjectCategoryPutInput | FormData,
  config: clientAPIOptions = {}
) {
  return await clientAPI<ProjectCategoryModel>(
    `organization/${organizationCode}/category/${categoryId}/`,
    {
      ...config,
      body,
      method: 'PATCH',
    }
  )
}

export async function patchProjectCategory(
  organizationCode: OrganizationModel['code'],
  categoryId: ProjectCategoryModel['id'],
  body: ProjectCategoryPatchInput | FormData,
  config: clientAPIOptions = {}
) {
  return await clientAPI<ProjectCategoryModel>(
    `organization/${organizationCode}/category/${categoryId}/`,
    {
      ...config,
      body,
      method: 'PATCH',
    }
  )
}

export async function deleteProjectCategory(
  organizationCode: OrganizationModel['code'],
  categoryId: ProjectCategoryModel['id'],
  config: clientAPIOptions = {}
) {
  await clientAPI(`organization/${organizationCode}/category/${categoryId}/`, {
    ...config,
    method: 'DELETE',
  })
}

export async function getAllProjectCategories(
  organizationCode: OrganizationModel['code'],
  config: clientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<ProjectCategoryModel>>(
    `organization/${organizationCode}/category/`,
    config
  )
}

export async function getRootProjectCategory(
  organizationCode: OrganizationModel['code'],
  config: clientAPIOptions = {}
) {
  return await clientAPI<ProjectCategoryModel>(
    `organization/${organizationCode}/categories-hierarchy/`,
    config
  )
}

export async function getProjectCategoriesHierarchy(
  organizationCode: OrganizationModel['code'],
  categoryId: ProjectCategoryModel['id'],
  config: clientAPIOptions = {}
) {
  return await clientAPI<ProjectCategoryModel>(
    `organization/${organizationCode}/category/${categoryId}/hierarchy/`,
    config
  )
}

export async function postProjectCategoryBackground(
  organizationCode: OrganizationModel['code'],
  { id, body }: { id: ProjectCategoryModel['id']; body: any },
  config: clientAPIOptions = {}
) {
  return await clientAPI<ImageModelCreated>(
    `organization/${organizationCode}/category/${id}/background/`,
    {
      ...config,
      body,
      method: 'POST',
    }
  )
}

export async function patchProjectCategoryBackground(
  organizationCode: OrganizationModel['code'],
  { id, imageId, body }: { id: ProjectCategoryModel['id']; body: any; imageId: ImageModel['id'] },
  config: clientAPIOptions = {}
) {
  return await clientAPI<ImageModelCreated>(
    `organization/${organizationCode}/category/${id}/background/${imageId}/`,
    {
      ...config,
      body,
      method: 'PATCH',
    }
  )
}

export async function deleteProjectCategoryBackground(
  organizationCode: OrganizationModel['code'],
  { category_id, id }: { category_id: ProjectCategoryModel['id']; id: any },
  config: clientAPIOptions = {}
) {
  await clientAPI(`organization/${organizationCode}/category/${category_id}/background/${id}/`, {
    ...config,
    method: 'DELETE',
  })
}

export async function getProjectCategoriesFollow(
  userId: UserSlugOrId,
  config: clientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<FollowOutput>>(`user/${userId}/category-follow/`, config)
}

export async function postProjectCategoryFollow(
  userId: UserSlugOrId,
  category_id: number,
  config: clientAPIOptions = {}
) {
  return await clientAPI<FollowOutput>(`user/${userId}/category-follow/`, {
    ...config,
    body: { category_id },
    method: 'POST',
  })
}

export async function deleteProjectCategoryFollow(
  userId: UserSlugOrId,
  category_follow_id: number,
  config: clientAPIOptions = {}
) {
  await clientAPI(`user/${userId}/category-follow/${category_follow_id}/`, {
    ...config,
    method: 'DELETE',
  })
}
