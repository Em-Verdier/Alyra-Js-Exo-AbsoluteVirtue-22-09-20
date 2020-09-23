const factorial = (integer) => {
    if (integer < 0) return undefined
    else if (integer == 0) return 1
    else {
        return integer * factorial(integer - 1)
    }
}

console.log(factorial(5))
