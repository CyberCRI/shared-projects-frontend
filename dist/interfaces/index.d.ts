export { P as ProviderParams, a as ProviderParamsSchema, R as Right } from '../permissions-BKtXZsbf.js';
import { b as BaseLocationModel, A as AnyLocation, I as ImageModel } from '../location.model-OhKDYxPT.js';
export { c as Optional, O as Ordering, a as PaginationQuery, d as PaginationResult, T as Translated } from '../location.model-OhKDYxPT.js';
export { I as Icon, a as IconTab } from '../icons-CQJqJYOy.js';
import 'zod';

type Geocoding = BaseLocationModel & {
    label?: string;
};
type MapPointerOption = {
    markerContent: HTMLElement;
    location: AnyLocation;
    tooltip?: HTMLElement;
};

type CollaborativeUser = {
    name: string;
    color: string;
    pid: number;
    profile_picture: ImageModel;
};

export type { CollaborativeUser, Geocoding, MapPointerOption };
