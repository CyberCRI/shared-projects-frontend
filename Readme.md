[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]
# shared-project-frontend
![https://projects.directory.com](https://api.projects.lp-i.org/static/projects_logo.png)

Front-end shared library for interacting with the projects-backend. This library centralizes API calls, data models, utility interfaces, and permission logic common to multiple applications.

# 📁 Project Structure
shared-project-frontend/
```
├── apis/                       # All backend API calls (TypeScript)
│   └── configureAPI   # Header and global config setup (via ofetch)
├── models/                  # Data models corresponding to the backend
├── interfaces/              # Utility interfaces shared throughout the application
└── lib/                         # Shared libraries (e.g., permission management)
    └── permissions.ts    # Access checks (modify/delete objects, organizations, etc.)
```

# 🚀 Installation

```sh
npm install shared-project-frontend
# or
yarn add shared-project-frontend
```

# ⚙️ API Configuration
Configure the ofetch instance before any usage:

```ts
import { configureOptionsAPI, configureClientAPI } from '@shared-projects-frontend/apis';

// optional, custom ofetch instance
const myofetch = ofetch.create(...)
configureClientAPI(myofetch)

// a callback called before each request
configureOptionsAPI(() => ({
  baseURL: 'my-base-url',
  headers: {
    'my default-header': 'my-default-value'
  }
}));
```

# 📦 Usage
## API Call
```ts
import { getProjects, getUser, getOrganization, ... } from '@shared-projects-frontend/apis';

const projects = await getProjects();
```

## Accessing Models
```ts
import type { Project, Organization, ... } from '@shared-projects-frontend/models';

const project: Project = /* ... */;
```

## Utility Interfaces
```ts
import type { PaginatedResult, Query, .... } from '@shared-projects-frontend/interfaces';
```

## Permissions
```ts
import { getAllProjects } from '@shared-projects-frontend/apis';
import { canEditProject, canDeleteOrganization, userRights } from '@shared-projects-frontend/lib';

const user = getUser()
const projects = getAllProjects()
const organization = getOrganization("LPI") 

const rights = userRights(user)

projects.forEach((project) => {
    if (canEditProject(rights, organization.id, project)) {
        // Allowed
    }
})
```



# License
This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
