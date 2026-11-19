import { Language, TranslatedUserModel, UserModel } from '../models'
import { translateResearcher } from './translateResearcher'
import { translateEntity } from './utils'

export const translateUser = (data: UserModel, locale: Language | null): TranslatedUserModel => {
  if (!data) {
    return data
  }

  const translated = translateEntity<TranslatedUserModel>(
    data,
    ['description', 'job', 'short_description'],
    locale
  )
  if (data.researcher) {
    translated.researcher = translateResearcher(data.researcher, locale)
  }

  return translated
}
