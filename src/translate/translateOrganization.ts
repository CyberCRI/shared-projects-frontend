import {
  Language,
  OrganizationModel,
  TermsAndConditions,
  TransaltedTermsAndConditions,
  TranslatedOrganizationModel,
} from '../models'
import { translateEntity } from './utils'

export const translateTermsAdnCondition = (
  data: TermsAndConditions,
  locale: Language | null
): TransaltedTermsAndConditions => {
  if (!data) {
    return data
  }

  return translateEntity<TransaltedTermsAndConditions>(data, ['displayed_content'], locale)
}

export const translateOrganization = (
  data: OrganizationModel,
  locale: Language | null
): TranslatedOrganizationModel => {
  if (!data) {
    return data
  }

  const translate = translateEntity<TranslatedOrganizationModel>(
    data,
    ['name', 'dashboard_title', 'dashboard_subtitle', 'description', 'chat_button_text'],
    locale
  )

  if (data.terms_and_conditions) {
    translate.terms_and_conditions = translateTermsAdnCondition(data.terms_and_conditions, locale)
  }

  return translate
}
