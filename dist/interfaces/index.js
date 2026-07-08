// src/interfaces/colaboratives.ts
import { z } from "zod";
var BaseSchema = z.object({
  organizationId: z.union([z.string(), z.number()])
});
var ProjectParamsSchema = BaseSchema.extend({
  type: z.literal("project-description"),
  projectId: z.string()
});
var ProjectTabParamsSchema = ProjectParamsSchema.extend({
  type: z.literal("project-tab"),
  tabId: z.number()
});
var ProjectTabItemParamsSchema = ProjectTabParamsSchema.extend({
  type: z.literal("project-tab-item"),
  tabItemId: z.number()
});
var ProjectBlogParamsSchema = ProjectParamsSchema.extend({
  type: z.literal("project-blog"),
  blogId: z.number()
});
var ProjectGoalParamsSchema = ProjectParamsSchema.extend({
  type: z.literal("project-goal"),
  goalId: z.number()
});
var ProviderParamsSchema = z.discriminatedUnion("type", [
  ProjectParamsSchema,
  ProjectTabParamsSchema,
  ProjectTabItemParamsSchema,
  ProjectBlogParamsSchema,
  ProjectGoalParamsSchema
]);
export {
  ProviderParamsSchema
};
//# sourceMappingURL=index.js.map