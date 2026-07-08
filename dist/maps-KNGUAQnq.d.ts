import { B as BaseLocationModel, a4 as AnyLocation, a2 as Translated } from './location.model-DyvAbm5g.js';

type Geocoding = BaseLocationModel & {
    label?: string;
};
type MapPointerOption = {
    markerContent: HTMLElement;
    location: AnyLocation;
    tooltip?: HTMLElement;
};
type LocationGeneral = BaseLocationModel & {
    content_id: string;
    content_type: 'project' | 'people_group' | 'event' | 'news';
};
type TranslatedLocationGeneral = Translated<LocationGeneral, 'title' | 'description'>;

export type { Geocoding as G, LocationGeneral as L, MapPointerOption as M, TranslatedLocationGeneral as T };
