import { Language, ResearcherDocument, TranslatedAward } from '../models'
import { translateEntity } from './utils'

export const translateResearcherAward = (
  data: ResearcherDocument,
  locale: Language | null
): TranslatedAward => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedAward>(data, ['name', 'description'], locale)
}
