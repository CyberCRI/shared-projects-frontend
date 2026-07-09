import {
  AddGroupMembers,
  AddParentGroupModelInput,
  BaseLocationModel,
  EventModel,
  GroupMember,
  HierarchyGroupModel,
  ImageModelCreated,
  ImageModel,
  LocationModel,
  NewsModel,
  OrganizationModel,
  PeopleGroupIdOrSlug,
  PeopleGroupModel,
  PostGroupData,
  PostGroupProjects,
  ProjectModel,
  QueryFilterGroup,
  QueryFilterGroupHierarchy,
  RemoveGroupMember,
} from '../models'
import { clientAPI, type clientAPIOptions } from './client'
import { PaginationResult } from '../interfaces'

// HIERARCHY
export async function getHierarchyGroups(
  organizationCode: OrganizationModel['code'],
  config: clientAPIOptions<QueryFilterGroupHierarchy> = {}
) {
  return await clientAPI<HierarchyGroupModel>(
    `organization/${organizationCode}/people-groups-hierarchy/`,
    config
  )
}

export async function postGroup(
  organizationCode: OrganizationModel['code'],
  groupData: PostGroupData
) {
  return await clientAPI<PeopleGroupModel>(`organization/${organizationCode}/people-group/`, {
    body: groupData,
    method: 'POST',
  })
}

// GROUP
export async function addParentGroup(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  body: AddParentGroupModelInput
) {
  return await clientAPI(`organization/${organizationCode}/people-group/${groupId}/`, {
    body,
    method: 'PATCH',
  })
}

export function getGroup(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  config: clientAPIOptions<QueryFilterGroup> = {}
) {
  return clientAPI<PeopleGroupModel>(
    `organization/${organizationCode}/people-group/${groupId}/`,
    config
  )
}

export async function patchGroup(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  groupData: Partial<PostGroupData>
) {
  return await clientAPI<PeopleGroupModel>(
    `organization/${organizationCode}/people-group/${groupId}/`,
    {
      body: groupData,
      method: 'PATCH',
    }
  )
}

export async function deleteGroup(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug
) {
  await clientAPI(`organization/${organizationCode}/people-group/${groupId}/`, {
    method: 'DELETE',
  })
}

// GROUP MEMBERS

export async function getGroupMember(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  config: clientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<GroupMember>>(
    `organization/${organizationCode}/people-group/${groupId}/member/`,
    config
  )
}

export async function postGroupMembers(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  body: AddGroupMembers
) {
  return await clientAPI(`organization/${organizationCode}/people-group/${groupId}/member/add/`, {
    body,
    method: 'POST',
  })
}

export async function removeGroupMember(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  body: RemoveGroupMember
) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/member/remove/`,
    {
      body,
      method: 'POST',
    }
  )
}

// GROUP PROJECTS

export async function getGroupProject(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  config: clientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<ProjectModel>>(
    `organization/${organizationCode}/people-group/${groupId}/project/`,
    config
  )
}

export async function postGroupProjects(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  projectsData: PostGroupProjects
) {
  return await clientAPI(`organization/${organizationCode}/people-group/${groupId}/project/add/`, {
    body: projectsData,
    method: 'POST',
  })
}

export async function removeGroupProject(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  projectsData: PostGroupProjects
) {
  return await clientAPI(
    `organization/${organizationCode}/people-group/${groupId}/project/remove/`,
    {
      body: projectsData,
      method: 'POST',
    }
  )
}

// GROUP HEADER

export async function postGroupHeader(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  headerData: FormData
) {
  return await clientAPI(`organization/${organizationCode}/people-group/${groupId}/header/`, {
    body: headerData,
    method: 'POST',
  })
}

export async function patchGroupHeader(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  headerData: FormData
) {
  return await clientAPI(`organization/${organizationCode}/people-group/${groupId}/header/`, {
    body: headerData,
    method: 'PATCH',
  })
}

export async function getGroupSimilar(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  config: clientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<PeopleGroupModel>>(
    `organization/${organizationCode}/people-group/${groupId}/similars/`,
    config
  )
}

export async function getSubGroup(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  config: clientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<PeopleGroupModel>>(
    `organization/${organizationCode}/people-group/${groupId}/subgroups/`,
    config
  )
}

export async function getGroupAllLocations(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  config: clientAPIOptions = {}
) {
  return await clientAPI<LocationModel[]>(
    `organization/${organizationCode}/people-group/${groupId}/all-locations/`,
    config
  )
}

export async function getGroupLocation(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  config: clientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<LocationModel>>(
    `organization/${organizationCode}/people-group/${groupId}/locations/`,
    config
  )
}

export async function removeGroupLocation(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  locationId: number,
  config: clientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<LocationModel>>(
    `organization/${organizationCode}/people-group/${groupId}/locations/${locationId}/`,
    {
      ...config,
      method: 'DELETE',
    }
  )
}

export async function patchGroupLocation(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  locationId: number,
  payload: Partial<BaseLocationModel>,
  config: clientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<LocationModel>>(
    `organization/${organizationCode}/people-group/${groupId}/locations/${locationId}/`,
    {
      ...config,
      body: payload,
      method: 'PATCH',
    }
  )
}

export async function postGroupLocation(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  payload: BaseLocationModel,
  config: clientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<LocationModel>>(
    `organization/${organizationCode}/people-group/${groupId}/locations/`,
    {
      ...config,
      body: payload,
      method: 'POST',
    }
  )
}

export function getGroupGallery(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  config: clientAPIOptions = {}
) {
  return clientAPI<PaginationResult<ImageModel>>(
    `organization/${organizationCode}/people-group/${groupId}/gallery/`,
    {
      ...config,
    }
  )
}

export async function deleteGroupGallery(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  imageId: number,
  config: clientAPIOptions = {}
) {
  await clientAPI(`organization/${organizationCode}/people-group/${groupId}/gallery/${imageId}/`, {
    ...config,
    method: 'DELETE',
  })
}

export function postGroupGallery(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  body: FormData,
  config: clientAPIOptions = {}
) {
  return clientAPI<ImageModelCreated>(
    `organization/${organizationCode}/people-group/${groupId}/gallery/`,
    {
      ...config,
      body,
      method: 'POST',
    }
  )
}

export async function getGroupNews(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  config: clientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<NewsModel>>(
    `organization/${organizationCode}/people-group/${groupId}/news/`,
    {
      ...config,
      method: 'GET',
    }
  )
}

export async function getGroupEvent(
  organizationCode: OrganizationModel['code'],
  groupId: PeopleGroupIdOrSlug,
  config: clientAPIOptions = {}
) {
  return await clientAPI<PaginationResult<EventModel>>(
    `organization/${organizationCode}/people-group/${groupId}/event/`,
    {
      ...config,
      method: 'GET',
    }
  )
}
