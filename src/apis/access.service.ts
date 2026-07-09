import { OrganizationModel, UserSlugOrId } from '../models'
import BaseModel from '../models/base.model'
import { Ordering } from '../interfaces'

export interface AccessRequestModel extends BaseModel {
  id?: number
  organization: OrganizationModel['code']
  created_at: string
  status: 'pending' | 'accepted' | 'declined'

  user: UserSlugOrId[]

  email: string
  given_name: string
  family_name: string
  job: string
  message: string
}

type AccessType = {
  status: 'error' | 'success' | 'warning'
  message: string
}

export type AccessRequestResult = {
  id: number
  email: string
  message: string
}

export type AccessRequest = {
  [key in AccessType['status']]: AccessRequest[]
}

export type QueryFilterAccessRequests = Partial<{
  status: AccessRequestModel['status']
  ordering: Ordering<'status' | 'created_at'>
}>
