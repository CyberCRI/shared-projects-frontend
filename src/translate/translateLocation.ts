import { BaseLocationModel, GeneralLocationPeopleGroup, Language } from '../models'
import { translateGroup } from './translateGroup'

export const translateLocation = <Location extends BaseLocationModel>(
  data: Location,
  locale: Language | null
): GeneralLocationPeopleGroup => {
  if (!data) {
    return data
  }

  const translate = translateLocation(data, locale)

  if (translate.people_group) {
    translate.people_group = translateGroup(translate.people_group, locale)
  }

  return translate
}
