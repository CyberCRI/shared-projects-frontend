import { Language, ReviewModel, TranslatedReview } from '../models'
import { translateEntity } from './utils'

export const translateReview = (data: ReviewModel, locale: Language | null): TranslatedReview => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedReview>(data, ['title', 'description'], locale)
}
