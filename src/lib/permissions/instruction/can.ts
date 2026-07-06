import { Right } from "../../../interfaces/permissions";
import { OrganizationModel } from "../../../models/organization.model";
import { InstructionModel } from "../../../models/instruction.model";
import {isAdminOrFacilitator} from "../isAdminOrFacilitator"

export const canCreateInstruction = (rights: Right, organizationId: OrganizationModel['id']) => {
  return isAdminOrFacilitator(rights, organizationId)
}

// TODO, instructionId is not used 
export const canEditInstruction = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  instructionId: InstructionModel["id"],
) => {
  return isAdminOrFacilitator(rights, organizationId);
};

export const canDeleteInstruction = (
  rights: Right,
  organizationId: OrganizationModel["id"],
  instructionId: InstructionModel["id"],
) => {
  return isAdminOrFacilitator(rights, organizationId);
};

