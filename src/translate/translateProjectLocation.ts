import { BaseLocationModel, Language } from 'shared-projects-frontend/models'
import { translateLocation } from './translateLocation'

export const translateProjectLocation = <Location extends BaseLocationModel>(
  data: Location,
  locale: Language
) => {
  if (!data) {
    return data
  }

  return translateLocation(data, locale)
}
