import { Language, ResearcherDocument, TranslatedPatent } from '../models'
import { translateEntity } from './utils'

export const translateResearcherPatent = (
  data: ResearcherDocument,
  locale: Language | null
): TranslatedPatent => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedPatent>(data, ['name', 'description'], locale)
}
