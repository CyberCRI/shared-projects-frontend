export { P as ProviderParams, a as ProviderParamsSchema, R as Right } from '../permissions-BKtXZsbf.js';
export { G as Geocoding, L as LocationGeneral, M as MapPointerOption, T as TranslatedLocationGeneral } from '../maps-BhkKbsQ5.js';
import { k as ImageModel } from '../location.model-B6Qp53Z2.js';
export { d as Document, X as DocumentCrisalidType, D as DocumentType, Y as HarvesterType, Z as Identifier, _ as Optional, W as Ordering, b as PaginationQuery, a as PaginationResult, $ as QueryFilterDocument, Q as QueryFilterResearcher, a0 as Relators, e as Researcher, R as ResearcherDocumentAnalytics, a1 as ResearcherLight, a2 as Translated, a3 as TranslatedDocument } from '../location.model-B6Qp53Z2.js';
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
