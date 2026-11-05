import { translateResearcherDomain } from './translateResearcherDomains'
import { Language, Researcher, TranslatedResearcher } from '../models'
import { translateEntity, translateMany } from './utils'
import { translateUser } from './translateUser'

export const translateResearcher = (
  data: Researcher,
  locale: Language | null
): TranslatedResearcher => {
  if (!data) {
    return data
  }

  const entity = translateEntity<TranslatedResearcher>(data, ['bio', 'short_bio'], locale)
  if (data.user) {
    entity.user = translateUser(data.user, locale)
  }
  if (entity.domains) {
    entity.domains = translateMany(translateResearcherDomain, entity.domains, locale)
  }
  return entity
}
