import { Language, TranslatedUserModel, UserModel } from 'shared-projects-frontend/models'
import { translateEntity } from './utils'

export const translateUser = (data: UserModel, locale: Language): TranslatedUserModel => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedUserModel>(
    data,
    ['description', 'job', 'short_description'],
    locale
  )
}
