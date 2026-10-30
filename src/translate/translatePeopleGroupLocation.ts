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

  // @ts-expect-error ignore project
  if (data.project) {
    // @ts-expect-error ignore project
    translate.project = translateProject(data.project, locale)
  }

  return translate
}
