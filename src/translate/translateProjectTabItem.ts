import { Language, ProjectTabItem, TranslatedProjectTabItem } from '../models'
import { translateEntity } from './utils'

export const translateProjectTabItem = (
  data: ProjectTabItem,
  locale: Language | null
): TranslatedProjectTabItem => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedProjectTabItem>(data, ['title', 'content'], locale)
}
