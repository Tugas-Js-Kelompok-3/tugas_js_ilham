// object
const myObj = [
    { name: 'shark', likes: 'ocean' },
    { name: 'whale', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' },
    { name: 'lion', likes: 'land' },
    { name: 'nemo', likes: 'ocean' },
]
const nama = myObj.map((item) => {
    const penyimpanan = {}

   penyimpanan [item.name] = item.likes
   penyimpanan.totalSpecies = item.name.length * Math.floor(Math.random() * 100) 

   return penyimpanan
})
console.log(nama)

const habitat = myObj.filter((per) => {
    return per.likes == 'ocean'
})
console.log(habitat)

// map call

const name = "ilham"
const map = Array.prototype.map;

const newName = map.call(name, el => {
    return `${el}am`
})
for(let i = 4; i< newName.length; i++){
    console.log(newName[2])
}

// no 4 
const num = [100,25,16,56,87]
const newArr = num.map(el => {
    return el * 5
});

console.log(newArr)


// no 5
const num = [100,25,16,56,87]
const newArr = num.map(el =>{
    return el -100
} );

console.log(newArr)

// no 6
const num = [100,25,16,56,87]
const newArr = num.map(el => {
    return el + 5;
});

console.log(newArr)

// no 7
const num = [1,2,3,4,5,6,7,8,9,10]
const checknum = num.filter(el => {
    return el > 5;
});

console.log(checknum)

// no8
const num = [1,2,3,4,5,6,7,8,9,10]
const checknum = num.filter(item => {
    return item < 6;
});
console.log(checknum)


// no 9
const num = [1,2,3,4,5,6,5,4,7,54,5,6,7,8,7,5,5,5,5]
const select = num.filter(item =>{
    return item == 5
});
console.log(select)

// soal 10

const nama =  ['lucky', 'Lucky', 'Lucky', 'fauzi', 'fauzi','Lucky', 'lucky']
const select = nama.filter(el => {
    return el == "Lucky"
});

console.log(select)

// beres