/*
El <T> Hace que sea "generico", la clase que se le introduzca, ej: ScoAction<User>, marcara el valor de clase de la variable item: T
*/
export class ScoAction<T> {
    label: string;
    value: string;
    icon?: string;
    item?: T;
    index?: number;
}
