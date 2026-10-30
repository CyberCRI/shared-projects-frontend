import { Language, Researcher, ResearcherDocument, TranslatedResearcher } from '../models'
import { translateResearcherDomain } from './translateResearcherDomains'
import { translateEntity, translateMany } from './utils'

export const translateResearcher = (
  data: Researcher,
  locale: Language | null
): TranslatedResearcher => {
  if (!data) {
    return data
  }

  const entity = translateEntity<TranslatedResearcher>(data, ['bio'], locale)
  if (entity.domains) {
    entity.domains = translateMany(translateResearcherDomain, entity.domains, locale)
  }
  return entity
}
