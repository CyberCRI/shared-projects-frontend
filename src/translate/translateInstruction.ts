import { InstructionModel, Language, TranslatedInstruction } from '../models'
import { translateEntity } from './utils'

export const translateInstruction = (
  data: InstructionModel,
  locale: Language | null
): TranslatedInstruction => {
  if (!data) {
    return data
  }

  const translated = translateEntity<TranslatedInstruction>(data, ['content', 'title'], locale)

  return translated
}
