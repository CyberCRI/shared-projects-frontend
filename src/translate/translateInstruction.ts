import { InstructionModel, Language, TranslatedInstruction } from 'shared-projects-frontend/models'
import { translateEntity } from './utils'

export const translateInstruction = (
  data: InstructionModel,
  locale: Language
): TranslatedInstruction => {
  if (!data) {
    return data
  }

  const translated = translateEntity<TranslatedInstruction>(data, ['content', 'title'], locale)

  return translated
}
