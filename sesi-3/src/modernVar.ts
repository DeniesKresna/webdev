let listHari: string[] = ["senin","selasa","rabu","kamis"]
console.log(listHari)
console.log("hari ini adalah " + listHari[3])

let dataUser: [string, number, string] = ["Denies", 30, "Surabaya"]
console.log(`nama ${dataUser[0]}, umur ${dataUser[1]} tahun, domisili di ${dataUser[2]}`)

interface User {
  name: string,
  age: number,
  domicile: string
}

let dataMente: User = {
  name: "Sugeng",
  age: 20,
  domicile: "Bandung"
}

console.log(`nama ${dataMente.name}, umur ${dataMente.age} tahun, domisili di ${dataMente.domicile}`)