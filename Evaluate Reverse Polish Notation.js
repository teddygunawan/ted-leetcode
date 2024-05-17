/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];


    /**
    Pseudocode
    [4, 13, 5, /, *, 4, *]

    1. Create stack
    2. Start iteration
    3. In each iteration, if the current string is number, put it in the stack
       OR. If the current string is an operand, pop two item in the stack, execute it
       based on the operand, and put the result back into the stack.
    4. Repeat until the end
    5. Return the first item in the stack
    
    Edge cases:
    1. Is it possible that the stack size is bigger than 1 at the end? say there is not enough operator for the entire operation.


     */
    for(let i = 0; i < tokens.length; i++){
        const item = tokens[i];
        const isNumber = !Number.isNaN(Number(item));

        if(isNumber){
            stack.push(Number(item))
        }else{
            const first = stack.pop();
            const second = stack.pop();

            const res = Math.trunc(eval(`(${second})${item}(${first})`))
            stack.push(res);
        }
    }


    return stack.pop();
};