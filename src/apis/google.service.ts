import { clientAPI } from './client'

export async function getOrgUnits() {
  return await clientAPI(`google/org-units/`)
}
