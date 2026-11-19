export { P as ProviderParams, a as ProviderParamsSchema, R as Right } from '../permissions-CUX6tqOY.js';
import { I as ImageModel } from '../utils-BmWqX80r.js';
export { a as Icon, b as IconTab, M as ModulesQuery, O as Optional, c as Ordering, P as PaginationQuery, d as PaginationResult, T as Translated } from '../utils-BmWqX80r.js';
import 'zod';

type CollaborativeUser = {
    name: string;
    color: string;
    pid: number;
    profile_picture: ImageModel;
};

export type { CollaborativeUser };
