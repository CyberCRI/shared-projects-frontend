import type { ProjectSlugOrId } from './project.model'

export type AttachmentForm = {
  id?: number
  title: string
  description: string

  file?: File
  site_url?: string

  project_id?: ProjectSlugOrId
}
