module.exports = function reverse (n) {
    let modul = n*(-1)
    if (n < 0){
        return String(modul).split('').reverse().join('')
    }
    return String(n).split('').reverse().join('')
}
