import { Language, NewsModel, TranslatedNews } from '../models'
import { translateLocation } from './translateLocation'
import { translateEntity } from './utils'

export const translateOneNews = (data: NewsModel, locale: Language | null): TranslatedNews => {
  if (!data) {
    return data
  }

  const translated = translateEntity<TranslatedNews>(data, ['content', 'title'], locale)

  if (translated.location) {
    translated.location = translateLocation(translated.location, locale)
  }

  return translated
}
