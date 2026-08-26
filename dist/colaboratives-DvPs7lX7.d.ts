import { z } from 'zod';

type Right = {
    permissions: {
        [key: string]: boolean;
    };
    roles: string[];
};

declare const ProviderParamsSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    organizationId: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
    type: z.ZodLiteral<"project-description">;
    projectId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    organizationId: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
    projectId: z.ZodString;
    type: z.ZodLiteral<"project-tab">;
    tabId: z.ZodPreprocess<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    organizationId: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
    projectId: z.ZodString;
    tabId: z.ZodPreprocess<z.ZodNumber>;
    type: z.ZodLiteral<"project-tab-item">;
    tabItemId: z.ZodPreprocess<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    organizationId: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
    projectId: z.ZodString;
    type: z.ZodLiteral<"project-blog">;
    blogId: z.ZodPreprocess<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    organizationId: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
    projectId: z.ZodString;
    type: z.ZodLiteral<"project-goal">;
    goalId: z.ZodPreprocess<z.ZodNumber>;
}, z.core.$strip>], "type">;
type ProviderParams = z.infer<typeof ProviderParamsSchema>;

export { type ProviderParams as P, type Right as R, ProviderParamsSchema as a };
