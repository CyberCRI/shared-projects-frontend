export { P as ProviderParams, a as ProviderParamsSchema, R as Right } from '../permissions-BKtXZsbf.js';
export { G as Geocoding, L as LocationGeneral, M as MapPointerOption, T as TranslatedLocationGeneral } from '../maps-DzgTvKt-.js';
import { o as ImageModel } from '../location.model-gxy2F_gL.js';
export { aV as Document, aW as DocumentCrisalidType, aX as DocumentType, aY as HarvesterType, aZ as Identifier, a_ as Optional, aT as Ordering, aU as PaginationQuery, a$ as PaginationResult, b0 as QueryFilterDocument, b1 as QueryFilterResearcher, b2 as Relators, b3 as Researcher, b4 as ResearcherDocumentAnalytics, b5 as ResearcherLight, T as Translated, b6 as TranslatedDocument } from '../location.model-gxy2F_gL.js';
export { I as Icon, a as IconTab } from '../icons-CQJqJYOy.js';
import 'zod';

type ImageGalleryForm = {
    files: {
        file: File;
        url: string;
    }[];
};

type CollaborativeUser = {
    name: string;
    color: string;
    pid: number;
    profile_picture: ImageModel;
};

export type { CollaborativeUser, ImageGalleryForm };
