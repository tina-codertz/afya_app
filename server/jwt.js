// 64 bytes -> hex (very strong)
import { randomBytes } from 'crypto';
const secret = randomBytes(64).toString('hex');
console.log(secret);
