const isPalindrome = (str) => {
    str = str.toLowerCase()
    return str.split('').reverse().join('').toLowerCase() == str
}

console.log(isPalindrome('Tenet'))
