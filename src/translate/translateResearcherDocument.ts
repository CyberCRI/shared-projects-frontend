import { Language, ResearcherDocument, TranslatedResearcherDocument } from '../models'
import { translateEntity } from './utils'

export const translateResearcherDocument = (
  data: ResearcherDocument,
  locale: Language | null
): TranslatedResearcherDocument => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedResearcherDocument>(data, ['title', 'description'], locale)
}
