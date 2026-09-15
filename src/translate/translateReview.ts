import { Language, ReviewModel, TranslatedReview } from 'shared-projects-frontend/models'
import { translateEntity } from './utils'

export const translateReview = (data: ReviewModel, locale: Language): TranslatedReview => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedReview>(data, ['title', 'description'], locale)
}
