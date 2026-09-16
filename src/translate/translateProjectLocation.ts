import { Language, LocationModel, TranslatedLocation } from '../models'
import { translateLocation } from './translateLocation'
import { translateProject } from './translateProject'

export const translateProjectLocation = <Location extends LocationModel>(
  data: Location,
  locale: Language | null
): TranslatedLocation => {
  if (!data) {
    return data
  }

  const translated = translateLocation<TranslatedLocation>(data, locale)
  if (data.project) {
    translated.project = translateProject(data.project, locale)
  }
  return translated
}
