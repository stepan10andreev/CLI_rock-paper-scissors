const { createHmac } = await import('node:crypto');

export class HMAC {
    constructor(cryptokey, data) {
        this.hmac = this.generate(cryptokey, data);
    }

    generate(cryptokey, data) {
        const key = createHmac('sha256', cryptokey)
            .update(data)
            .digest('hex');
        return key;
    }
}