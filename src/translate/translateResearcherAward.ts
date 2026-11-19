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
  if (data.contributors) {
    translated.contributors = translateMany(translateResearcherAward, data.contributors, locale)
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

  const translated = translateEntity<TranslatedResearcherAward>(data, ['description'], locale)
  if (data.award) {
    translated.award = translateAward(data.award, locale)
  }
  if (data.researcher) {
    translated.researcher = translateResearcher(data.researcher, locale)
  }

  return translated
}
