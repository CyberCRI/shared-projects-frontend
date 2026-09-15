import { GoalModel, Language, TranslatedGoal } from 'shared-projects-frontend/models'
import { translateEntity } from './utils'

export const translateGoal = (data: GoalModel, locale: Language): TranslatedGoal => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedGoal>(data, ['title', 'description'], locale)
}
