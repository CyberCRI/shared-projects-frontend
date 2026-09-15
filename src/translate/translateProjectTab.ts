import { Language, ProjectTab, TranslatedProjectTab } from 'shared-projects-frontend/models'
import { translateEntity } from './utils'

export const translateProjectTab = (data: ProjectTab, locale: Language): TranslatedProjectTab => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedProjectTab>(data, ['title', 'description'], locale)
}
