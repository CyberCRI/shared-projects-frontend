import {
  Language,
  PeopleGroupModel,
  TranslatedPeopleGroupModel,
} from 'shared-projects-frontend/models'
import { translateEntity, translateMany } from './utils'
import { translateLocation } from './translateLocation'

export const translateGroup = (
  data: PeopleGroupModel,
  locale: Language
): TranslatedPeopleGroupModel => {
  if (!data) {
    return data
  }

  const translated = translateEntity<TranslatedPeopleGroupModel>(
    data,
    ['name', 'description', 'short_description'],
    locale
  )

  if (data.locations) {
    data.locations = translateMany(translateLocation, data.locations, locale)
  }

  return translated
}
