import { BaseLocationModel, Language, TranslatedLocation } from '../models'

export const translateLocation = <Location extends BaseLocationModel>(
  data: Location,
  locale: Language | null
): TranslatedLocation => {
  if (!data) {
    return data
  }

  const translate = translateLocation(data, locale)

  return translate
}
