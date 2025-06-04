
function simplifyPath(path: string): string {
  let stack: string[] = [];
  let parts = path.split('/'); 

  for (const part of parts) {
    if (part === '' || part === '.') {
      
      continue;
    } else if (part === '..') {
      // one level
      stack.pop();
    } else {
      //  push to stack
      stack.push(part);
    }
  }

  // Join the stack to form the canonical path
  return '/' + stack.join('/');
}

// Example usage
console.log(simplifyPath("/home/"));           // Output: "/home"

