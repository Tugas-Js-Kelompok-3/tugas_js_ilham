// soal no 1
const countUniqueValues = (array) => {
    const resultArray = []
    for(const item of array){
        if(!resultArray.includes(item)) resultArray.push(item)
}
console.log(resultArray.length)
}
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6])
countUniqueValues([])

// soal 2
function nama(arr)  {
    console.log(arr.join("-"))
 }
nama(["ilham", "fathurahman"])



// soal 3
function boolean (nomor) {
    if (nomor <= 0) {
        console.log(`true`);
    } 
    else {
          console.log(`false`);
    }

}

boolean(10)
boolean(-1)
boolean(0)



