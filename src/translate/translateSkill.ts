import { Language, SkillModel, TranslatedSkill } from '../models'
import { translateTag } from './translateTag'

export const translateSkill = (data: SkillModel, locale: Language | null): TranslatedSkill => {
  if (!data) {
    return data
  }

  return {
    ...data,
    tag: translateTag(data.tag, locale),
  }
}
