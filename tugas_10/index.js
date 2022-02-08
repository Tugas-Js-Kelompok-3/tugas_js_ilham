function minMax(numberArr) {
    const small = Math.min(...numberArr);
    const big = Math.max(...numberArr);
    console.log(small,big);
}
minMax([1,2,3,4,5])
minMax([2334454, 5])
minMax([1])


// soal 2 
function dropright(num) {
    const removed = num.filter(el => {
        return el < 3
    })
    console.log(removed)
}  
dropright([1, 2, 3])

function dropright1(num) {
    const removed = num.filter(el => {
        return el < 2
    })
    console.log(removed)
}  
dropright1([1, 2, 3],2)

function dropright2(num) {
    const removed = num.filter(el => {
        return el < 1
    })
    console.log(removed)
}  
dropright2([1, 2, 3],5)

function dropright3(num) {
    const removed = num.filter(el => {
        return el > 0
    })
    console.log(removed)
}  
dropright3([1, 2, 3],0)

// soal 3
// function findAverage(array) {
//     let average = 0;
//     for
// }