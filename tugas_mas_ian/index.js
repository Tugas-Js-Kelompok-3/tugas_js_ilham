// soal 1
function triangle(alas, tinggi) {
    return alas * tinggi / 2
}
console.log(triangle(8,10))
console.log(triangle(5,7))
console.log(triangle(9, 2))



// soal 2
function lessThan(num1, num2) {
    if(num1 + num2 <=100){
        return true
    }
    else {
        return false
    }
}
console.log(lessThan(22,15))
console.log(lessThan(83,34))
console.log(lessThan(3,77))


// soal 3
function comp(alphabet1) {
    if (alphabet1.length <= 2) {
        return true
    } else {
        return false
    }
}
console.log(comp("AB", "CD"))
console.log(comp("ABC", "DE"))
console.log(comp("hello", "edabit"))