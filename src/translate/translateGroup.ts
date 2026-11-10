import { Language, PeopleGroupModel, TranslatedPeopleGroupModel } from '../models'
import { translateStructure } from './translateStructure'
import { translateEntity, translateMany } from './utils'
import { translateLocation } from './translateLocation'

export const translateGroup = (
  data: PeopleGroupModel,
  locale: Language | null
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
    translated.locations = translateMany(translateLocation, data.locations, locale)
  }

  if (data.structure) {
    translated.structure = translateStructure(data.structure, locale)
  }

  return translated
}
