import { Funding, Language, TranslatedFunding } from '../models'
import { translateResearcher } from './translateResearcher'
import { translateEntity, translateMany } from './utils'

export const translateFunding = (data: Funding, locale: Language | null): TranslatedFunding => {
  if (!data) {
    return data
  }

  const translated = translateEntity<TranslatedFunding>(data, ['name', 'description'], locale)
  if (data.researchers) {
    translated.researchers = translateMany(translateResearcher, data.researchers, locale)
  }
  return translated
}
