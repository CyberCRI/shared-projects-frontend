import { BaseLocationModel, Language, TranslatedLocation } from '../models'
import { translateProject } from './translateProject'
import { translateEntity } from './utils'

export const translatePeopleGroupLocation = <Location extends BaseLocationModel>(
  data: Location,
  locale: Language | null
): TranslatedLocation => {
  if (!data) {
    return data
  }

  const translate = translateEntity<TranslatedLocation>(data, ['title', 'description'], locale)

  if (translate.project) {
    translate.project = translateProject(translate.project, locale)
  }

  return translate
}
