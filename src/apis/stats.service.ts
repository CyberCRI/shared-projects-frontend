import { clientAPI, ClientAPIOptions } from './client'
import { Stats } from '../models/stats.model'
import { OrganizationModel } from '../models'

type Config = ClientAPIOptions<{
  publication_status: string
}>

export async function getStats(
  orgaizationCode: OrganizationModel['code'],
  config: Config = {
    query: { publication_status: 'all' },
  }
) {
  return await clientAPI<Stats>(`organization/${orgaizationCode}/stats/`, config)
}
