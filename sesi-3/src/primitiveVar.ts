// string = "kata / kalimat / huruf"
// number = bilangan
// boolean = true / false
// null = ada kotak tapi isinya kosong
// undefined = kotak belum terdefinisi
// any = bebas
// unknown

let kalimat:string
let merk:string = "aqua"
kalimat = `saya suka minum ${merk} walau hari ini mahal`
console.log(kalimat)

let jumlahHari:number = 7
kalimat = `jumlah hari adalah ${jumlahHari}`
console.log(kalimat)

let hariInikamis:boolean = true
kalimat = `hari ini adalah kamis. status ${hariInikamis}`
console.log(kalimat)

let testNull:null = null
kalimat = `hari ini adalah kamis. status ${testNull}`
console.log(kalimat)

let testUndefined:undefined = undefined
kalimat = `hari ini adalah kamis. status ${testUndefined}`
console.log(kalimat)