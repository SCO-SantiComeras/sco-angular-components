import { ScoAction } from '../../../common/sco-action';

export class ScoBlockItem<T, K = {}> {
    item: T;
    subitems?: K[];
    subitemSelected?: K; // use to return
    borderColor?: string;
    actions?: ScoAction<T>[];
    index?: number;
    indexSubItem?: number;
}
