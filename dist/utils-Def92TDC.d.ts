/**
 * Type to modify interface with auto translate fields
 * use like Translated<BlogEntries, 'title' | 'content'>
 *
 * @typedef
 * @name Translated
 * @kind variable
 * @param {unknown} Model
 * @param {unknown} Fields
 * @exports
 */
type Translated<Model, Fields extends keyof Model> = Model & {
    $t: Pick<Model, Fields>;
};

type PaginationQuery = {
    limit: number;
    offset: number;
};
type PaginationResult<T = any> = {
    /** @example 123 */
    count: number;
    /** @example 123 */
    current_page?: number;
    /**
     * @format uri
     * @example "http://api.example.org/accounts/?offset=0&limit=100"
     */
    first?: string;
    /**
     * @format uri
     * @example "http://api.example.org/accounts/?offset=400&limit=100"
     */
    last?: string;
    /**
     * @format uri
     * @example "http://api.example.org/accounts/?offset=400&limit=100"
     */
    next?: string | null;
    /** @example 123 */
    next_page?: number;
    /**
     * @format uri
     * @example "http://api.example.org/accounts/?offset=200&limit=100"
     */
    previous?: string | null;
    /** @example 123 */
    previous_page?: number;
    results: T[];
    /** @example 123 */
    total_page?: number;
};

type Ordering<T extends string> = `-${T}` | T;

interface BaseModel {
}

interface ImageSize {
    scale_x: number | null;
    scale_y: number | null;
    left: number | null;
    top: number | null;
    natural_ratio: number | null;
}
/**
 * @name ImageModel
 * @description Image of a project
 */
type ImageModel = BaseModel & ImageSize & {
    id?: number;
    url: string;
    file: string;
    name: string;
    height?: number;
    width?: number;
    variations: {
        full: string;
        large: string;
        medium: string;
        original: string;
        small: string;
    };
};
type ImageVariations = keyof ImageModel['variations'];
type ImageModelCreated = ImageModel & {
    static_url: string;
};
type ImageInput = Partial<ImageModel> & {
    project_id: string;
};
type ImageOrganizationInput = Partial<ImageModel> & {
    organization_code: string;
};
type ImageTemplateInput = Partial<ImageModel> & {
    template_id: number;
};

interface Icon {
}
interface IconTab {
}

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type { BaseModel as B, ImageModel as I, Optional as O, PaginationQuery as P, Translated as T, Icon as a, IconTab as b, Ordering as c, PaginationResult as d, ImageInput as e, ImageModelCreated as f, ImageOrganizationInput as g, ImageSize as h, ImageTemplateInput as i, ImageVariations as j };
