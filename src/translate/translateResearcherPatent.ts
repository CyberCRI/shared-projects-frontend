import {
  Patent,
  Language,
  ResearcherPatent,
  TranslatedPatent,
  TranslatedResearcherPatent,
} from '../models'
import { translateEntity } from './utils'

export const translatePatent = (data: Patent, locale: Language | null): TranslatedPatent => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedPatent>(data, ['name', 'description'], locale)
}

export const translateResearcherPatent = (
  data: ResearcherPatent,
  locale: Language | null
): TranslatedResearcherPatent => {
  if (!data) {
    return data
  }

  return {
    ...data,
    patent: translatePatent(data.patent, locale),
  }
}
