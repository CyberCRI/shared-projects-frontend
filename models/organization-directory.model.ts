import type { LanguageType } from './types'
import type BaseModel from './base.model'

/**
 * @name OrganizationDirectoryModel
 * @description Organization directory
 */
export interface OrganizationDirectoryModel extends BaseModel {
  name: string
  description: string
  logo: string
  language: LanguageType
}
