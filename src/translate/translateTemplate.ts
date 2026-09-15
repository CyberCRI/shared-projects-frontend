import { Language, TemplateModel, TranslatedTemplate } from '../models'
import { translateEntity, translateMany } from './utils'
import { translateCategory } from './translateCategory'
import { translateTag } from './translateTag'

export const translateTemplate = (
  data: TemplateModel,
  locale: Language | null
): TranslatedTemplate => {
  if (!data) {
    return data
  }

  const translated = {
    ...translateEntity<TranslatedTemplate>(
      data,
      [
        'name',
        'description',
        'project_title',
        'project_description',
        'project_purpose',
        'blogentry_title',
        'blogentry_content',
        'goal_title',
        'goal_description',
        'comment_content',
      ],
      locale
    ),
  }

  if (data.project_tags) {
    translated.project_tags = translateMany(translateTag, data.project_tags, locale)
  }

  if (data.categories) {
    translated.categories = translateMany(translateCategory, data.categories, locale)
  }

  return translated
}
