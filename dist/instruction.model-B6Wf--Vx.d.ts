import { B as BaseModel, P as PeopleGroupModel, O as Ordering, a as PaginationQuery, T as Translated } from './location.model-OhKDYxPT.js';

/**
 * @name NewsModel
 * @description News of an organization
 */
interface InstructionModel extends BaseModel {
    id: number;
    title: string;
    content: string;
    publication_date: Date | string;
    people_groups: PeopleGroupModel[];
    has_to_be_notified: boolean;
    visible_by_all: boolean;
}
type InstructionId = InstructionModel['id'] | string;
type InstructionForm = Omit<InstructionModel, 'id' | 'people_groups'> & {
    id?: number;
    people_groups: any;
};
type InstructionInput = Required<Omit<InstructionModel, 'id' | 'people_groups'>> & {
    id?: InstructionModel['id'];
    people_groups: {
        [key: string]: PeopleGroupModel;
    };
    organization_code?: string;
    people_groups_ids: string[];
};
type TranslatedInstruction = Translated<InstructionModel, 'title' | 'content'>;
type QueryFilterInstruction = Partial<{
    ordering: Ordering<'publication_date' | 'updated_at' | 'created_at'>;
    from_date: string;
    to_date: string;
} & PaginationQuery>;

export type { InstructionForm as I, QueryFilterInstruction as Q, TranslatedInstruction as T, InstructionId as a, InstructionInput as b, InstructionModel as c };
