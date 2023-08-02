const {
    randomBytes,
} = await import('node:crypto');


export class CryptoKey {
    constructor() {
        this.key = this.generate();
    }

    generate() {
        return randomBytes(32).toString('hex');
    }
}