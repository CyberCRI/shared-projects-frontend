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
  tabId: z.preprocess(Number, z.number().positive()),
})

const ProjectTabItemParamsSchema = ProjectTabParamsSchema.extend({
  type: z.literal('project-tab-item'),
  tabItemId: z.preprocess(Number, z.number().positive()),
})

const ProjectBlogParamsSchema = ProjectParamsSchema.extend({
  type: z.literal('project-blog'),
  blogId: z.preprocess(Number, z.number().positive()),
})

const ProjectGoalParamsSchema = ProjectParamsSchema.extend({
  type: z.literal('project-goal'),
  goalId: z.preprocess(Number, z.number().positive()),
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
