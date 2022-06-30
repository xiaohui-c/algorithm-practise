function isMatch(left: String, right: string): boolean {
  if (left === "{" && right === "}") return true;
  if (left === "[" && right === "]") return true;
  if (left === "(" && right === ")") return true;
  return false;
}
export function matchBracket(str: string): boolean {
  // 输入检测
  const length = str.length;
  if (length === 0) return true;

  const stack: String[] = [];

  const leftSymbols = "({[";
  const rightSymbols = "]})";

  for (let i = 0; i < length; i++) {//O(n)
    const flag = str[i];
    if (leftSymbols.includes(flag)) {
      stack.push(flag);
    } else if (rightSymbols.includes(flag)) {
      const top = stack[stack.length - 1];
      if (isMatch(top, flag)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// 功能测试
const str = "(a{b}c)";
console.info(matchBracket(str));
