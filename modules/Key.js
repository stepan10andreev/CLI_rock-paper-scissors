const {
    randomBytes,
} = await import('node:crypto');
const { createHmac } = await import('node:crypto');

export class Key {
    constructor() {
        this.cryptoKey = this.generateCryptoKey();
    }

    generateCryptoKey() {
        return randomBytes(32).toString('hex');
    }

    static generateHMAC(cryptokey, data) {
        const HMAC = createHmac('sha256', cryptokey)
            .update(data)
            .digest('hex');
        return HMAC;
    }
}