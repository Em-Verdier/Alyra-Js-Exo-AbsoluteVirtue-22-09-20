const add = (a, b) => {
    return a + b
}
const sub = (a, b) => {
    return a - b
}

const mul = (a, b) => {
    return a * b
}

const div = (a, b) => {
    return a / b
}

const calc = (operator, a, b) => {
    switch (operator) {
        case '+':
            return add(a, b)
            break
        case '-':
            return sub(a, b)
            break
        case '*':
            return mul(a, b)
            break
        case '/':
            return div(a, b)
        default:
            break
    }
}

console.log(calc('+', 10, 11))
console.log(calc('-', 10, 11))
console.log(calc('*', 10, 11))
console.log(calc('/', 10, 11))
