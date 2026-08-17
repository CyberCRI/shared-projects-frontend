export { P as ProviderParams, a as ProviderParamsSchema, R as Right } from '../permissions-CUX6tqOY.js';
import { I as ImageModel } from '../utils-Def92TDC.js';
export { a as Icon, b as IconTab, O as Optional, c as Ordering, P as PaginationQuery, d as PaginationResult, T as Translated } from '../utils-Def92TDC.js';
import 'zod';

type CollaborativeUser = {
    name: string;
    color: string;
    pid: number;
    profile_picture: ImageModel;
};

export type { CollaborativeUser };
