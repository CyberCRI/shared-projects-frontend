import { LocationId, LocationModel, ProjectLocationForm, ProjectSlugOrId } from '../models'
import { LocationGeneral } from '../models/location.model'
import { clientAPI, ClientAPIOptions } from './client'

type Config = ClientAPIOptions

export async function getProjectLocations(projectId: ProjectSlugOrId, config: Config = {}) {
  return await clientAPI<LocationModel[]>(`project/${projectId}/location/`, config)
}

export async function getProjectLocation(
  projectId: ProjectSlugOrId,
  locationId: LocationId,
  config: Config = {}
) {
  return await clientAPI<LocationModel>(`project/${projectId}/location/${locationId}/`, config)
}

export async function postLocations(projectId: ProjectSlugOrId, body: ProjectLocationForm) {
  return await clientAPI<LocationModel>(`project/${projectId}/location/`, {
    body,
    method: 'POST',
  })
}

export async function patchLocation(
  projectId: ProjectSlugOrId,
  locationId: LocationId,
  body: ProjectLocationForm
) {
  return await clientAPI<LocationModel>(`project/${projectId}/location/${locationId}/`, {
    body,
    method: 'PATCH',
  })
}

export async function deleteLocation(projectId: ProjectSlugOrId, locationId: LocationId) {
  await clientAPI(`project/${projectId}/location/${locationId}/`, {
    method: 'DELETE',
  })
}

export async function getLocations(organizationCode: string, config: Config = {}) {
  return await clientAPI<LocationGeneral[]>(`organization/${organizationCode}/location/`, config)
}
