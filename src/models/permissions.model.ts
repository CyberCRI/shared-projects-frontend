export type PermissionType =
  // "Can access the admin panel"
  | 'access_admin'
  // "Can view stats"
  | 'view_stat'
  // "Can view community projects"
  | 'view_org_project'
  // "Can view community users"
  | 'view_org_projectuser'
  // "Can view community groups"
  | 'view_org_peoplegroup'
  // "Can lock and unlock a project"
  | 'lock_project'
  // "Can duplicate a project"
  | 'duplicate_project'
  // "Can update a locked project"
  | 'change_locked_project'
  // "Can manage access requests"
  | 'manage_accessrequest'
  // "Can view projects"
  | 'view_project'
  // "Can add projects"
  | 'add_project'
  // "Can change projects"
  | 'change_project'
  // "Can delete projects"
  | 'delete_project'
  // "Can view project messages"
  | 'view_projectmessage'
  // "Can add project messages"
  | 'add_projectmessage'
  // "Can change project messages"
  | 'change_projectmessage'
  // "Can delete project messages"
  | 'delete_projectmessage'
  // "Can view users"
  | 'view_projectuser'
  // "Can add users"
  | 'add_projectuser'
  // "Can change users"
  | 'change_projectuser'
  // "Can delete users"
  | 'delete_projectuser'
  // "Can view groups"
  | 'view_peoplegroup'
  // "Can add groups"
  | 'add_peoplegroup'
  // "Can change groups"
  | 'change_peoplegroup'
  // "Can delete groups"
  | 'delete_peoplegroup'
  // "Can view news"
  | 'view_news'
  // "Can add news"
  | 'add_news'
  // "Can change news"
  | 'change_news'
  // "Can delete news"
  | 'delete_news'
  // "Can view event"
  | 'view_event'
  // "Can add event"
  | 'add_event'
  // "Can change event"
  | 'change_event'
  // "Can delete event"
  | 'delete_event'
  // "Can view instructions"
  | 'view_instruction'
  // "Can add instructions"
  | 'add_instruction'
  // "Can change instructions"
  | 'change_instruction'
  // "Can delete instructions"
  | 'delete_instruction'
  // "Can view organization files"
  | 'view_organizationattachmentfile'
  // "Can add organization files"
  | 'add_organizationattachmentfile'
  // "Can change organization files"
  | 'change_organizationattachmentfile'
  // "Can delete organization files"
  | 'delete_organizationattachmentfile'
  // "Can add tags"
  | 'add_tag'
  // "Can change tags"
  | 'change_tag'
  // "Can delete tags"
  | 'delete_tag'
  // "Can add tag classifications"
  | 'add_tagclassification'
  // "Can change tag classifications"
  | 'change_tagclassification'
  // "Can delete tag classifications"
  | 'delete_tagclassification'
  // "Can add project categories"
  | 'add_projectcategory'
  // "Can change project categories"
  | 'change_projectcategory'
  // "Can delete project categories"
  | 'delete_projectcategory'
  // "Can add templates"
  | 'add_template'
  // "Can change templates"
  | 'change_template'
  // "Can delete templates"
  | 'delete_template'
  // "Can add invitation links"
  | 'add_invitation'
  // "Can change invitation links"
  | 'change_invitation'
  // "Can delete invitation links"
  | 'delete_invitation'
  // "Can add project's reviews"
  | 'add_review'
  // "Can change project's reviews"
  | 'change_review'
  // "Can delete project's reviews"
  | 'delete_review'
  // "Can add project's comments"
  | 'add_comment'
  // "Can change project's comments"
  | 'change_comment'
  // "Can delete project's comments"
  | 'delete_comment'
  // "Can add project's follows"
  | 'add_follow'
  // "Can change project's follows"
  | 'change_follow'
  // "Can delete project's follows"
  | 'delete_follow'
