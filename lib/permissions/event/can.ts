import { Right } from "../../../interfaces/permissions";
import { EventModel } from "../../../models/event.model";
import { OrganizationModel } from "../../../models/organization.model";
import {isAdminOrFacilitator} from "../isAdminOrFacilitator"

export const canCreateEvent = (rights: Right, organizationId: OrganizationModel['id']) => {
  return isAdminOrFacilitator(rights, organizationId)
}

// TODO, EventId is not used 
export const canEditEvent = (rights: Right, organizationId: OrganizationModel['id'], eventId: EventModel['id']) => {
    return isAdminOrFacilitator(rights, organizationId)
}

export const canDeleteEvent = (rights: Right, organizationId: OrganizationModel['id'], eventId: EventModel['id']) => {
    return isAdminOrFacilitator(rights, organizationId)
}

