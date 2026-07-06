import { Right } from "../../../interfaces/permissions";
import { NewsModel } from "../../../models/news.model";
import { OrganizationModel } from "../../../models/organization.model";
import {isAdminOrFacilitator} from "../isAdminOrFacilitator"

export const canCreateNews = (rights: Right, organizationId: OrganizationModel['id']) => {
  return isAdminOrFacilitator(rights, organizationId)
}

// TODO, newsId is not used 
export const canEditNews = (rights: Right, organizationId: OrganizationModel['id'], newsId: NewsModel['id']) => {
    return isAdminOrFacilitator(rights, organizationId)
}

export const canDeleteNews = (rights: Right, organizationId: OrganizationModel['id'], newsId: NewsModel['id']) => {
    return isAdminOrFacilitator(rights, organizationId)
}

