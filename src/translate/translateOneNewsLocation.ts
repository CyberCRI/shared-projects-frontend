import {
  BaseLocationModel,
  Language,
  TranslatedNewsLocation,
} from 'shared-projects-frontend/models'
import { translateLocation } from './translateLocation'
import { translateOneNews } from './translateOneNews'

export const translateOneNewsLocation = <Location extends BaseLocationModel>(
  data: Location,
  locale: Language
): TranslatedNewsLocation => {
  if (!data) {
    return data
  }

  const translate = translateLocation(data, locale) as unknown as TranslatedNewsLocation
  if (translate.news) {
    translate.news = translateOneNews(translate.news, locale)
  }

  return translate
}
