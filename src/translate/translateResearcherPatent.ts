import { Patent, Language, TranslatedPatent } from '../models'
import { translateResearcher } from './translateResearcher'
import { translateEntity, translateMany } from './utils'

export const translatePatent = (data: Patent, locale: Language | null): TranslatedPatent => {
  if (!data) {
    return data
  }

  const translated = translateEntity<TranslatedPatent>(data, ['name', 'description'], locale)
  if (data.researchers) {
    translated.researchers = translateMany(translateResearcher, data.researchers, locale)
  }
  return translated
}
