import {
  DocumentJournal,
  Journal,
  Language,
  TranslatedDocumentJournal,
  TranslatedJournal,
} from '../models'
import { translateResearcherDocument } from './translateResearcherDocument'

// now we don't translate anything, journal have not transaltdfield
export const translateJournal = (data: Journal, locale: Language | null): TranslatedJournal => {
  if (!data) {
    return data
  }

  void locale
  return data
}

export const translateDocumentJournal = (
  data: DocumentJournal,
  locale: Language | null
): TranslatedDocumentJournal => {
  if (!data) {
    return data
  }

  return {
    ...data,
    journal: translateJournal(data.journal, locale),
    document: translateResearcherDocument(data.document, locale),
  }
}
