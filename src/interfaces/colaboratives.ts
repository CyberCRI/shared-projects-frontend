import { z } from 'zod'

const BaseSchema = z.object({
  organizationId: z.union([z.string(), z.number()]),
})

const ProjectParamsSchema = BaseSchema.extend({
  type: z.literal('project-description'),
  projectId: z.string(),
})

const ProjectTabParamsSchema = ProjectParamsSchema.extend({
  type: z.literal('project-tab'),
  tabId: z.number(),
})

const ProjectTabItemParamsSchema = ProjectTabParamsSchema.extend({
  type: z.literal('project-tab-item'),
  tabItemId: z.number(),
})

const ProjectBlogParamsSchema = ProjectParamsSchema.extend({
  type: z.literal('project-blog'),
  blogId: z.number(),
})

const ProjectGoalParamsSchema = ProjectParamsSchema.extend({
  type: z.literal('project-goal'),
  goalId: z.number(),
})

// provide a schema
export const ProviderParamsSchema = z.discriminatedUnion('type', [
  ProjectParamsSchema,
  ProjectTabParamsSchema,
  ProjectTabItemParamsSchema,
  ProjectBlogParamsSchema,
  ProjectGoalParamsSchema,
])

export type ProviderParams = z.infer<typeof ProviderParamsSchema>
