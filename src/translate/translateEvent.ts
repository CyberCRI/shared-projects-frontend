import { EventModel, Language, TranslatedEventModel } from 'shared-projects-frontend/models'
import { translateLocation } from './translateLocation'
import { translateEntity } from './utils'

export const translateEvent = (data: EventModel, locale: Language): TranslatedEventModel => {
  if (!data) {
    return data
  }

  const translate = translateEntity<TranslatedEventModel>(data, ['title', 'content'], locale)

  if (translate.location) {
    translate.location = translateLocation(translate.location, locale)
  }

  return translate
}
