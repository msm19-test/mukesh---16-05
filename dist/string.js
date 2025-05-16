"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class CustomSorter {
    customSortString(order, s) {
        const orderstr = order.split('');
        const str = s.split('');
        const freq = new Array(orderstr.length).fill(0);
        const extras = [];
        for (let i = 0; i < str.length; i++) {
            const ch = str[i];
            let found = false;
            for (let j = 0; j < orderstr.length; j++) {
                if (ch === orderstr[j]) {
                    freq[j]++;
                    found = true;
                    break;
                }
            }
            if (!found) {
                extras.push(ch);
            }
        }
        let result = '';
        for (let i = 0; i < orderstr.length; i++) {
            result += orderstr[i].repeat(freq[i]);
        }
        // characters not in the custom order
        result += extras.join('');
        return result;
    }
}
const sorter = new CustomSorter();
const order = prompt('Enter custom order: ');
const s = prompt('Enter string to sort: ');
const sorted = sorter.customSortString(order, s);
console.log('Custom sorted string:', sorted);
