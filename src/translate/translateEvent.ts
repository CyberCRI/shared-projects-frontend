import { EventModel, Language, TranslatedEventModel } from '../models'
import { translateLocation } from './translateLocation'
import { translateEntity } from './utils'

export const translateEvent = (data: EventModel, locale: Language | null): TranslatedEventModel => {
  if (!data) {
    return data
  }

  const translate = translateEntity<TranslatedEventModel>(data, ['title', 'content'], locale)

  if (translate.location) {
    translate.location = translateLocation(translate.location, locale)
  }

  return translate
}
