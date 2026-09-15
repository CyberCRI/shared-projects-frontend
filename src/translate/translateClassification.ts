import {
  Language,
  TagClassificationModel,
  TranslatedTagClassification,
} from 'shared-projects-frontend/models'
import { translateEntity, translateMany } from './utils'
import { translateTag } from './translateTag'

export const translateClassification = (
  data: TagClassificationModel,
  locale: Language
): TranslatedTagClassification => {
  if (!data) {
    return data
  }

  const translate = translateEntity<TranslatedTagClassification>(
    data,
    ['title', 'description'],
    locale
  )

  if (data.tags) {
    translate.tags = translateMany(translateTag, data.tags, locale)
  }

  return translate
}
