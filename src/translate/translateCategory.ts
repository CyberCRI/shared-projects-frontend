import { Language, ProjectCategoryModel, TranslatedProjectCategory } from '../models'
import { translateEntity, translateMany } from './utils'
import { translateTag } from './translateTag'

export const translateCategory = (
  data: ProjectCategoryModel,
  locale: Language | null
): TranslatedProjectCategory => {
  if (!data) {
    return data
  }

  const translate = translateEntity<TranslatedProjectCategory>(
    data,
    ['name', 'description'],
    locale
  )

  if (data.children) {
    translate.children = translateMany(translateCategory, data.children, locale)
  }

  if (data.hierarchy) {
    translate.hierarchy = translateMany(translateCategory, data.hierarchy, locale)
  }

  if (translate.tags) {
    translate.tags = translateMany(translateTag, translate.tags, locale)
  }

  return translate
}
