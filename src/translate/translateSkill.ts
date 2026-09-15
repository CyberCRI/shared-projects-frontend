import { Language, SkillModel, TranslatedSkill } from 'shared-projects-frontend/models'
import { translateTag } from './translateTag'

export const translateSkill = (data: SkillModel, locale: Language): TranslatedSkill => {
  if (!data) {
    return data
  }

  return {
    ...data,
    tag: translateTag(data.tag, locale),
  }
}
