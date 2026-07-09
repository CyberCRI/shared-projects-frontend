import { clientAPI, clientAPIOptions } from './client'

export async function getOrgUnits(config: clientAPIOptions = {}) {
  return await clientAPI<string[]>(`google/org-units/`, config)
}
