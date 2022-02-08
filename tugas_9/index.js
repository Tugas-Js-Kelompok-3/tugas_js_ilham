// nomor 3
function kesehatan(darah) {
    if (darah >= 100) {
        console.log("Ur Fine");
    }
    else if (darah >= 50 && darah < 100) {
        console.log("Be Carefull");
    }
    else if (darah < 50) {
        console.log("You Need Heal");
    }
}
kesehatan(49)

// nomor 4
const array = ["Ilham","Fathurahman"]
let select = array.toString();

console.log(select)

// nomor 5
class identitas{
    constructor (nama,umur,pekerjaan){
        this.Nama = nama
        this.Umur = umur
        this.Pekerjaan = pekerjaan
        this.Nikah = false
    }
}
var orang1 = new identitas ("Ilham",17,"nganggur");
console.log(orang1)