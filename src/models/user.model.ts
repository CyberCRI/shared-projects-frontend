/**
 * @name UserModel
 * @description user data set on the project app
 */
import type { ImageModel } from './image.model'

import type { Translated } from '../interfaces/translated'
import type { ResearcherLight } from './researcher.model'

import { Ordering, PaginationQuery } from '../interfaces'
import { OrganizationModel } from './organization.model'
import type BaseModel from './base.model'
import { Roles } from './types'

export type PrivacyValue = 'hide' | 'org' | 'pub'

export interface PrivacySettings extends BaseModel {
  id?: number
  publication_status: PrivacyValue
  profile_picture: PrivacyValue
  skills: PrivacyValue
  mobile_phone: PrivacyValue
  email: PrivacyValue
  socials: PrivacyValue
}

export interface UserModel extends BaseModel {
  id: number
  slug: string
  // uuid
  people_id?: string

  created_at: string

  email_verified?: boolean
  current_org_role?: Roles
  pronouns?: string

  email: string
  given_name: string
  family_name: string
  profile_picture?: ImageModel
  description?: string
  short_description?: string
  job?: string
  sdgs?: number[]

  location: string
  linkedin: string | null
  facebook: string | null
  twitter: string | null
  website: string | null
  landline_phone: string | null
  mobile_phone: string | null
  skype: string | null

  researcher?: ResearcherLight

  signed_terms_and_conditions?: {
    [key: string]: { version: number | null; date: string | null }
  } | null

  is_superuser: boolean
  roles: string[]
  permissions: string[]

  modules: {
    conferences: number
    files: number
    follows_categories: number
    follows_projects: number
    groups: number
    links: number
    mentor: number
    mentoree: number
    projects: number
    publications: number
    skills: number
    notifications: number
  }
}

export type UserModulesKeys = keyof UserModel['modules']
export type UserModuleExtra = UserModulesKeys | 'resources'

export type UserSlugOrId = UserModel['id'] | UserModel['slug']

export interface UserFromJWTModel {
  id: string
  given_name: string
  family_name: string
  email: string
  groups: string[]
}

export interface NotificationsSettings {
  notify_added_to_project: boolean
  announcement_published: boolean
  followed_project_has_been_edited: boolean
  project_has_been_commented: boolean
  project_has_been_edited: boolean
  project_ready_for_review: boolean
  project_has_been_reviewed: boolean
  comment_received_a_response: boolean
  organization_has_new_access_request: boolean
  invitation_link_will_expire: boolean
  new_instruction: boolean
}

export interface UserPatchModel {
  birthdate?: string
  pronouns?: string
  short_description?: string
  description?: string
  location?: string
  job?: string
  sdgs?: number[]
  facebook?: string
  mobile_phone?: string
  linkedin?: string
  medium?: string
  website?: string
  skype?: string
  landline_phone?: string
  twitter?: string
  language?: string
  email?: string
  given_name?: string
  family_name?: string
  roles_to_add?: number[]
  roles_to_remove?: number[]
  permissions_ids?: number[]
  onboarding_status?: object
  signed_terms_and_conditions?: {
    [key: string]: { version: number | null; date: string | null }
  } | null
}

export interface UserPrivacyPatchModel {
  profile_picture?: PrivacyValue
  profile?: PrivacyValue
  skills?: PrivacyValue
  hobbies?: PrivacyValue
  facebook?: PrivacyValue
  mobile_phone?: PrivacyValue
  linkedin?: PrivacyValue
  medium?: PrivacyValue
  website?: PrivacyValue
  personal_email?: PrivacyValue
  skype?: PrivacyValue
  landline_phone?: PrivacyValue
  twitter?: PrivacyValue
}

export type TranslatedUserModel = Translated<
  UserModel,
  'description' | 'short_description' | 'job'
> & {}

export type QueryFilterUser = Partial<
  {
    ordering: Ordering<
      | 'given_name'
      | 'family_name'
      | 'job'
      | 'current_org_role'
      | 'email_verified'
      | 'password_created'
      | 'last_login'
      | 'created_at'
    >
    search: string
    modules: 'none' | UserModulesKeys[]
    serializer: 'light' | 'superlight'

    // TODO check if array is need to is csv (separate by coma)
    // OrganizationModel['code'][]
    organizations: string
    // OrganizationModel['id'][]
    current_org_pk: string | number
    // Roles[]
    current_org_role: string
    can_mentor: boolean
    needs_mentor: boolean

    // TagModel['id'][]
    can_mentor_on: string
    // TagModel['id'][]
    needs_mentor_on: string
  } & PaginationQuery
>

export type QueryFilterUserEmail = Partial<{
  current_org_pk: OrganizationModel['id']
}>

export type QueryFilterResetPassword = Partial<{
  redirect_uri: string
}>


export type UserForm = Partial<Omit<UserModel, 'slug'
  | 'researcher'
  | 'is_superuser'
  | 'roles'
  | 'permissions'
  | 'modules'
  >>