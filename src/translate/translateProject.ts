import { Language, ProjectModel, TranslatedProject } from '../models'
import { translateEntity, translateMany } from './utils'
import { translateTemplate } from './translateTemplate'
import { translateCategory } from './translateCategory'
import { translateTag } from './translateTag'

export const translateProject = (
  data: ProjectModel,
  locale: Language | null
): TranslatedProject => {
  if (!data) {
    return data
  }

  const translated = {
    ...translateEntity<TranslatedProject>(data, ['description', 'title', 'purpose'], locale),
  }
  if (data.template) {
    translated.template = translateTemplate(data.template, locale)
  }
  if (data.categories) {
    translated.categories = translateMany(translateCategory, data.categories, locale)
  }
  if (data.tags) {
    translated.tags = translateMany(translateTag, data.tags, locale)
  }

  return translated
}
