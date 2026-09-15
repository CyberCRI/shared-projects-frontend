import {
  Language,
  ProjectCategoryModel,
  TranslatedProjectCategory,
} from 'shared-projects-frontend/models'
import { translateEntity, translateMany } from './utils'
import { translateTag } from './translateTag'

export const translateCategory = (
  data: ProjectCategoryModel,
  locale: Language
): TranslatedProjectCategory => {
  if (!data) {
    return data
  }

  const translate = translateEntity<TranslatedProjectCategory>(
    data,
    ['name', 'description'],
    locale
  )

  if (translate.children) {
    translate.children = translateMany(translateCategory, translate.children, locale)
  }

  if (translate.hierarchy) {
    translate.hierarchy = translateMany(translateCategory, translate.hierarchy, locale)
  }

  if (translate.tags) {
    translate.tags = translateMany(translateTag, translate.tags, locale)
  }

  return translate
}
