import { BaseLocationModel, Language, TranslatedEventLocation } from '../models'
import { translateLocation } from './translateLocation'
import { translateEvent } from './translateEvent'

export const translateEventsLocation = <Location extends BaseLocationModel>(
  data: Location,
  locale: Language | null
): TranslatedEventLocation => {
  if (!data) {
    return data
  }

  const translate = translateLocation(data, locale) as unknown as TranslatedEventLocation
  if (translate.event) {
    translate.event = translateEvent(translate.event, locale)
  }

  return translate
}
