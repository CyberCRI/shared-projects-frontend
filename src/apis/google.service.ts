import { clientAPI, ClientAPIOptions } from './client'

export async function getOrgUnits(config: ClientAPIOptions = {}) {
  return await clientAPI<string[]>(`google/org-units/`, config)
}
