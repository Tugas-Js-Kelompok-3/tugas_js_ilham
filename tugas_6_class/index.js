// soal 1
class Persegi {
    constructor(sisi){
        this.sisi = sisi;
    };
    perkalian(){
        return this.sisi * this.sisi;
    }
    pertambahan(){
        return this.sisi + this.sisi;
    }
    pengurangan(){
        return this.sisi - this.sisi;
    }
    pembagian(){
        return this.sisi / this.sisi;
    }
}
const persegi = new Persegi(20)
console.log(persegi.perkalian());


// soal 2
const map = Array.prototype.map;
function seperate(String) {
    const seperated = map.call(String, el =>{
        return `${el}`;
    });
    console.log(seperated.sort());
}
seperate("ilham")

// soal 3
class saya {
    constructor(nama, kelas, umur){
    this.Nama = nama;
    this.Kelas = kelas;
    this.Umur = umur;
 };
}
const saya1 = new saya  ("ilham","XI RPL 2",17)
console.log(saya1);

// soal 4
class saya {
    constructor(nama, kelas, umur){
    this.Nama = nama;
    this.Kelas = kelas;
    this.Umur = umur;
 };

    greeting(){
        return "Halo nama saya " + this.Nama
    }
}
const saya1 = new saya ("ilham","XI RPL 2",17)
console.log(saya1.greeting());


// soal 5
class Person {
    constructor(nama, kelas, umur){
        this.Nama = nama;
        this.Kelas = kelas;
        this.Umur = umur;
    };
    greeting (){
        return (
            "namaku " + this.Nama + " aku kelas " + this.Kelas + " umurku " + this.Umur
        )
    }
};

const pender = new Person("Ilham", 11, 17)
console.log(pender.greeting());