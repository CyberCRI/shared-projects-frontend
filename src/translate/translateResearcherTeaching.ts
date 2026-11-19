import { translateResearcherDomain } from './translateResearcherDomains'
import { Teaching, Language, TranslatedTeaching } from '../models'
import { translateResearcher } from './translateResearcher'
import { translateEntity, translateMany } from './utils'

export const translateTeaching = (data: Teaching, locale: Language | null): TranslatedTeaching => {
  if (!data) {
    return data
  }

  const translated = translateEntity<TranslatedTeaching>(
    data,
    ['name', 'description', 'spec'],
    locale
  )
  if (data.researcher) {
    translated.researcher = translateResearcher(data.researcher, locale)
  }
  if (data.domains) {
    translated.domains = translateMany(translateResearcherDomain, translated.domains, locale)
  }
  return translated
}
