import { ScoAction } from '../../../common/sco-action';

export class ScoTableItem<T> {
    item: T;
    actions?: ScoAction<T>[];
    index?: number;
}
