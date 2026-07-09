import type {
  PeopleGroupIdOrSlug,
  PeopleGroupModel,
  PeopleGroupModulesKeys,
  TranslatedPeopleGroupModel,
} from './people-group.model'
import type {
  ProjectModel,
  ProjectModulesKeys,
  ProjectSlugOrId,
  TranslatedProject,
} from './project.model'
import type { ProjectCategoryModel } from './project-category.model'
import type { TranslatedUserModel, UserModel } from './user.model'
import type { OrganizationModel } from './organization.model'
import { PaginationQuery } from '../interfaces/pagination'
import type { Language, SearchObjectType } from './types'
import type { Ordering } from '../interfaces/query'
import type { SkillModel } from './skill.model'
import type { TagModel } from './tag.model'
import type BaseModel from './base.model'

export interface BaseSearchResult extends BaseModel {
  id: number
  type: SearchObjectType
  project: ProjectModel | null
  user: UserModel | null
  people_group: PeopleGroupModel | null
  last_update: string
}

export interface SearchResultProject extends BaseSearchResult {
  type: 'project'
  project: ProjectModel
  user: null
  people_group: null
}
export type TranslatedSearchResultProject = Omit<SearchResultProject, 'project'> & {
  project: TranslatedProject
}

export interface SearchResultUser extends BaseSearchResult {
  type: 'user'
  project: null
  user: UserModel
  people_group: null
}
export type TranslatedSearchResultUser = Omit<SearchResultUser, 'user'> & {
  user: TranslatedUserModel
}

export interface SearchResultGroup extends BaseSearchResult {
  type: 'people_group'
  project: null
  user: null
  people_group: PeopleGroupModel
}
export type TranslatedSearchResultGroup = Omit<SearchResultGroup, 'people_group'> & {
  people_group: TranslatedPeopleGroupModel
}

export type SearchResultAll = SearchResultProject | SearchResultUser | SearchResultGroup

export type TranslatedSearchResultAll =
  TranslatedSearchResultProject | TranslatedSearchResultUser | TranslatedSearchResultGroup

export type QueryFilterSearch = Partial<
  {
    // order
    ordering: Ordering<'type' | 'last_update'>
    // search options
    types: ('user' | 'project' | 'people_group')[]
    fuzziness: number

    // default is 'most_fields
    search_type: 'most_fields' | 'best_fields'

    // filters
    organizations: OrganizationModel['code'][]
    sdgs: number[]
    skills: SkillModel['tag']['id'][]
    can_mentor: boolean
    needs_mentor: boolean
    can_mentor_on: SkillModel['tag']['id'][]
    needs_mentor_on: SkillModel['tag']['id'][]
    languages: Language[]
    categories: ProjectCategoryModel['id'][]
    members: UserModel['id'][]
    tags: TagModel['id'][]

    projects: ProjectSlugOrId[]
    people_group: PeopleGroupIdOrSlug[]

    // modules filtereds
    modules: 'none' | ProjectModulesKeys[] | PeopleGroupModulesKeys[]

    // extras

    exclude_projects: ProjectModel['id'][]
    exclude_projects_in_project: ProjectModel['id']
    exclude_groups_in_project: ProjectModel['id']
    exclude_users_in_project: ProjectModel['id']

    exclude_groups: PeopleGroupModel['id'][]
    exclude_projects_in_group: PeopleGroupModel['id']
    exclude_users_in_group: PeopleGroupModel['id']
  } & PaginationQuery
>
