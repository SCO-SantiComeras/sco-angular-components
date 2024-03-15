export class ScoToast {
    tittle: string;
    message: string;
    status: string;

    constructor(tittle?: string, message?: string, status?: string) {
        this.tittle = tittle;
        this.message = message;
        this.status = status;
    }
}
