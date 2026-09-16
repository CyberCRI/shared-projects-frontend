import { BaseLocationModel, BaseTranslatedLocationModel, Language } from '../models'
import { translateEntity } from './utils'

export const translateLocation = <
  TranslatedLocation extends BaseTranslatedLocationModel = BaseTranslatedLocationModel,
  Location extends BaseLocationModel = BaseLocationModel,
>(
  data: Location,
  locale: Language | null
): TranslatedLocation => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedLocation>(data, ['title', 'description'], locale)
}
