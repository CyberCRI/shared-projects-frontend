import {
  Award,
  Language,
  ResearcherAward,
  TranslatedAward,
  TranslatedResearcherAward,
} from '../models'
import { translateEntity } from './utils'

export const translateAward = (data: Award, locale: Language | null): TranslatedAward => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedAward>(data, ['name', 'description'], locale)
}

export const translateResearcherAward = (
  data: ResearcherAward,
  locale: Language | null
): TranslatedResearcherAward => {
  if (!data) {
    return data
  }

  return {
    ...data,
    award: translateAward(data.award, locale),
  }
}
