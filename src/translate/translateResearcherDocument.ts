import {
  Language,
  ResearcherDocument,
  TranslatedResearcherDocument,
} from 'shared-projects-frontend/models'
import { translateEntity } from './utils'

export const translateResearcherDocument = (
  data: ResearcherDocument,
  locale: Language
): TranslatedResearcherDocument => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedResearcherDocument>(data, ['title', 'description'], locale)
}
