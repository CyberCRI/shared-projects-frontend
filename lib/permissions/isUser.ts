import {Right} from "../../interfaces/permissions"
import { OrganizationModel } from "../../models/organization.model";

export const isUser = (rights: Right, organizationId: OrganizationModel['id']): boolean => {
  return rights.roles.includes(`organization:#${organizationId}:users`);
};
