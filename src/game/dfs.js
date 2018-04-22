module.exports = dfs = (current) => {
    let flagArr = []
    let stack = []
    let componentArr = []
    
    for (let i = 0; i < window.matrix.length; i++) {   
        flagArr[i] = false;
    }
    stack.push(current);
    while (stack.length != 0) {
        node = stack.pop()

        if (window.proxyArray.indexOf(node) != -1) {
            return true;
        }
        window.matrix[node].forEach((element, index) => {
            if (element == 1 && !flagArr[index]) {
                flagArr[node] = true;
                componentArr.push(node)  
                stack.push(index)
            }
        });
    }
    return componentArr;
}