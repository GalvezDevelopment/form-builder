export class FormError extends Error {
    constructor(public msg: string) {
        super(msg);
    }
}