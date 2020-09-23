const sortAscend = (list = []) => {
    return list.sort((b, a) => {
        return b - a
    })
}

console.log(sortAscend([14, 12, 8, 9, 11, 6, 7]))
