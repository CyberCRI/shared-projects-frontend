import { GoalModel, Language, TranslatedGoal } from '../models'
import { translateEntity } from './utils'

export const translateGoal = (data: GoalModel, locale: Language | null): TranslatedGoal => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedGoal>(data, ['title', 'description'], locale)
}
