export class ScoSelectItem<T> {
    public label: string;
    public value: T;
    public selected?: boolean;

    constructor(label: string, value: any, selected?: boolean) {
        this.label = label;
        this.value = value;
        this.selected = selected;
    }
}
