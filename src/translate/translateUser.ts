import { Language, TranslatedUserModel, UserModel } from '../models'
import { translateEntity } from './utils'

export const translateUser = (data: UserModel, locale: Language | null): TranslatedUserModel => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedUserModel>(
    data,
    ['description', 'job', 'short_description'],
    locale
  )
}
