import { translateLocation } from './translateLocation'
import { BaseLocationModel, Language } from '../models'

export const translateProjectLocation = <Location extends BaseLocationModel>(
  data: Location,
  locale: Language | null
) => {
  if (!data) {
    return data
  }

  return translateLocation(data, locale)
}
