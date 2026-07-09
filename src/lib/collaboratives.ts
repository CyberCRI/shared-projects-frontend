import { ProviderParams } from '../interfaces/colaboratives'

/**
 * genereate roomRoomKey form params provided to hocuspocus
 *
 * @function
 * @name roomKeyFromParams
 * @kind variable
 * @param {ProviderParams} params
 * @returns {string | null}
 * @exports
 */
export const roomKeyFromParams = (params: ProviderParams): string | null => {
  const keys: [string, string | number][] = [['Organization', params.organizationId]]

  switch (params.type) {
    case 'project-description': {
      keys.push(['Project', params.projectId])
      break
    }
    case 'project-blog': {
      keys.push(['Project', params.projectId], ['Blog', params.blogId])
      break
    }
    case 'project-tab': {
      keys.push(['Project', params.projectId], ['Tab', params.tabId])
      break
    }
    case 'project-tab-item': {
      keys.push(['Project', params.projectId], ['Tab', params.tabId], ['Item', params.tabItemId])
      break
    }
    case 'project-goal': {
      keys.push(['Project', params.projectId], ['Goal', params.goalId])
      break
    }
    default:
      return null
  }

  return keys
    .map(([name, value]) => {
      return `${name}(${value})`
    })
    .join('::')
}
