import { Language, ProjectTabItem, TranslatedProjectTabItem } from 'shared-projects-frontend/models'
import { translateEntity } from './utils'

export const translateProjectTabItem = (
  data: ProjectTabItem,
  locale: Language
): TranslatedProjectTabItem => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedProjectTabItem>(data, ['title', 'content'], locale)
}
