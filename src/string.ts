



import promptSync from 'prompt-sync';

const prompt = promptSync();

class CustomSorter {
  customSortString(order: string, s: string): string {
    const orderstr: string[] = order.split('');
    const str: string[] = s.split('');

    const freq: number[] = new Array(orderstr.length).fill(0);
    const extras: string[] = [];

    
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
const order: string = prompt('Enter custom order: ');
const s: string = prompt('Enter string to sort: ');

const sorted: string = sorter.customSortString(order, s);
console.log('Custom sorted string:', sorted);
