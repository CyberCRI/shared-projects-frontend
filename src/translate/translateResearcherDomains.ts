import { Language, TranslatedAbstractDomain } from '../models'
import { translateTag } from './translateTag'

export const translateResearcherDomain = <T extends TranslatedAbstractDomain>(
  data: T,
  locale: Language | null
): TranslatedAbstractDomain => {
  if (!data) {
    return data
  }

  return {
    ...data,
    tag: translateTag(data.domain, locale),
  }
}
