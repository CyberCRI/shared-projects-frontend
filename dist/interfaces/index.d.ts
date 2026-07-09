export { P as ProviderParams, a as ProviderParamsSchema, R as Right } from '../permissions-BKtXZsbf.js';
import { I as ImageModel } from '../utils-CGQ8Ykiw.js';
export { O as Optional, a as Ordering, P as PaginationQuery, b as PaginationResult, T as Translated } from '../utils-CGQ8Ykiw.js';
export { I as Icon, a as IconTab } from '../icons-CQJqJYOy.js';
import 'zod';

type CollaborativeUser = {
    name: string;
    color: string;
    pid: number;
    profile_picture: ImageModel;
};

export type { CollaborativeUser };
