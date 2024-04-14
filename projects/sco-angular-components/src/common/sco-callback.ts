/*
El <T> Hace que sea "generico", la clase que se le introduzca, ej: ScoAction<User>, marcara el valor de clase de la variable item: T
*/
export class ScoCallback<T> {
    item: T;
    callBack: any;
    extension?: any;
}
