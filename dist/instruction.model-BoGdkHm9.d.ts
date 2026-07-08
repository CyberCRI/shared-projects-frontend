import { b6 as BaseModel, i as PeopleGroupModel, V as Ordering, b as PaginationQuery, a2 as Translated } from './location.model-DyvAbm5g.js';

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

export type { InstructionInput as I, QueryFilterInstruction as Q, TranslatedInstruction as T, InstructionModel as a, InstructionId as b, InstructionForm as c };
