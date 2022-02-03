var nama = 'ilham';

console.log(nama);

function perkenalan(namaDepan,namaBelakang,kelas) {
    return(`Hallo nama saya ${namaDepan} ${namaBelakang} dari ${kelas}`)
}
perkenalan("ilham","fathurahman","XI RPL 2")

function yearsToDay(years) {
    return(years * 365)
}
console.log(yearsToDay(2))

function daytoHours(day) {
    return(day * 24)
}
console.log(daytoHours(2))

function hoursToMinute(hours) {
    return(hours * 60)
}
console.log(hoursToMinute(2))

function minuteToSecond(minute) {
    return(minute * 60)
}
console.log(minuteToSecond(5))