console.log('No 1')

const laptop =  ["Dell","Lenovo","Acer","Asus"];

for (let i = 0; i < laptop.length;  i++) {
      console.log( laptop[i])
}

const hp =  ["Samsung","Apple","Oppo","Nokia"];

for (let a in hp){
    console.log(` ${hp[a]}`)
} 

const hewan = ["Monyet","Jerapah","Gajah"]

for (let b of hewan) {
    console.log(b)
}

console.log("no 2");

function operatorBilangan(perkalian = "6") {
    console.log(perkalian * 10)
}
operatorBilangan()

console.log("no 3");

function angka(num1, ...args) {
    console.log(num1, ...args)
}
angka(1, "lucky", 2, true)

console.log("no 4");

function bilamganBulat(perkalian) {
    console.log(10 * 10)
}
bilamganBulat()

console.log("no 5")

const func = (arr) =>{ 
   return arr.join(" ")
}
console.log(func(["ilham", "fathurahman"]))