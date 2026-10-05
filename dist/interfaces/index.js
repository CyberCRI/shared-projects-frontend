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
  tabId: z.preprocess(Number, z.number().positive())
});
var ProjectTabItemParamsSchema = ProjectTabParamsSchema.extend({
  type: z.literal("project-tab-item"),
  tabItemId: z.preprocess(Number, z.number().positive())
});
var ProjectBlogParamsSchema = ProjectParamsSchema.extend({
  type: z.literal("project-blog"),
  blogId: z.preprocess(Number, z.number().positive())
});
var ProjectGoalParamsSchema = ProjectParamsSchema.extend({
  type: z.literal("project-goal"),
  goalId: z.preprocess(Number, z.number().positive())
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