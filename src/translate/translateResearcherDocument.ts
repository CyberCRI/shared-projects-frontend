import { Language, ResearcherDocument, TranslatedResearcherDocument } from '../models'
import { translateResearcherDomain } from './translateResearcherDomains'
import { translateEntity, translateMany } from './utils'

export const translateResearcherDocument = (
  data: ResearcherDocument,
  locale: Language | null
): TranslatedResearcherDocument => {
  if (!data) {
    return data
  }

  const entity = translateEntity<TranslatedResearcherDocument>(
    data,
    ['title', 'description'],
    locale
  )
  if (entity.domains) {
    entity.domains = translateMany(translateResearcherDomain, entity.domains, locale)
  }
  return entity
}
