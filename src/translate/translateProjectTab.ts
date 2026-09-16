import { Language, ProjectTab, TranslatedProjectTab } from '../models'
import { translateEntity } from './utils'

export const translateProjectTab = (
  data: ProjectTab,
  locale: Language | null
): TranslatedProjectTab => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedProjectTab>(data, ['title', 'description'], locale)
}
