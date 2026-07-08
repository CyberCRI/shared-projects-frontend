import { z } from "zod";

const BaseSchema = z.object({
  organizationId: z.union([z.string(), z.number()]),
});

const ProjectParamsSchema = BaseSchema.extend({
  type: z.literal("project-description"),
  projectId: z.string(),
});

const ProjectTabParamsSchema = BaseSchema.extend({
  type: z.literal("project-tab"),
  projectId: z.string(),
  tabId: z.string(),
});

const ProjectTabItemParamsSchema = BaseSchema.extend({
  type: z.literal("project-tab-item"),
  projectId: z.string(),
  tabId: z.string(),
  tabItemId: z.string(),
});

const ProjectBlogParamsSchema = BaseSchema.extend({
  type: z.literal("project-blog"),
  projectId: z.string(),
  blogId: z.string(),
});

const ProjectGoalParamsSchema = BaseSchema.extend({
  type: z.literal("project-goal"),
  projectId: z.string(),
  goalId: z.string(),
});

// provide a schema
export const ProviderParamsSchema = z.discriminatedUnion("type", [
  ProjectParamsSchema,
  ProjectTabParamsSchema,
  ProjectTabItemParamsSchema,
  ProjectBlogParamsSchema,
  ProjectGoalParamsSchema,
]);

export type ProviderParams = z.infer<typeof ProviderParamsSchema>;