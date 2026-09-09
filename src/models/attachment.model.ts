import type { ProjectSlugOrId } from './project.model'
import type { UserSlugOrId } from './user.model'

export type AttachmentForm = {
  id?: number
  title: string
  description: string

  file?: File
  site_url?: string

  project_id?: ProjectSlugOrId

  profile_id?: UserSlugOrId
  user_id?: UserSlugOrId
}
