import {
  Award,
  Language,
  ResearcherAward,
  TranslatedAward,
  TranslatedResearcherAward,
} from '../models'
import { translateResearcher } from './translateResearcher'
import { translateEntity, translateMany } from './utils'

export const translateAward = (data: Award, locale: Language | null): TranslatedAward => {
  if (!data) {
    return data
  }

  const translated = translateEntity<TranslatedAward>(data, ['name', 'description'], locale)
  if (data.researchers) {
    translated.researchers = translateMany(translateResearcher, data.researchers, locale)
  }
  return translated
}

export const translateResearcherAward = (
  data: ResearcherAward,
  locale: Language | null
): TranslatedResearcherAward => {
  if (!data) {
    return data
  }

  return {
    ...translateEntity(data, ['description'], locale),
    award: translateAward(data.award, locale),
  }
}
