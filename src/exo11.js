const unique = (array) => {
    return array.filter(function (a) {
        return !this[a] ? (this[a] = true) : false
    }, {})
}

console.log(unique([1, 2, 3, 1, 2, 3, 4, 5, 5, 6]))
