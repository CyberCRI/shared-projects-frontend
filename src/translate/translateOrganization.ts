import { Language, OrganizationModel, TranslatedOrganizationModel } from '../models'
import { translateEntity } from './utils'

export const translateOrganization = (
  data: OrganizationModel,
  locale: Language | null
): TranslatedOrganizationModel => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedOrganizationModel>(
    data,
    ['name', 'dashboard_title', 'dashboard_subtitle', 'description', 'chat_button_text'],
    locale
  )
}
