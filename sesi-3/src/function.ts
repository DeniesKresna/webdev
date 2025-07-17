function salam1():void {
  let nama:string = "programmer"
  console.log(`halo ${nama}`)
}
salam1()

function besarkanHurufProgrammer():string {
  let nama:string = "programmer"
  let besarHuruf:string = nama.toUpperCase()
  return besarHuruf
}

console.log(besarkanHurufProgrammer())

function salamNama(nama:string): void {
  console.log(`hallo ${nama}`)
}

let namaProgramer:string = "Sugeng"
salamNama(namaProgramer)

function tambah(angka1:number, angka2:number): number {
  return angka1 + angka2
}
let hasil = tambah(5, 3)
console.log(`hasil = ${hasil}`)

function salamDefault(nama:string="Denies"): void {
  console.log(`hallo ${nama}`)
}
salamDefault()

function salamOptional(nama?:string): void {
  console.log(`hallo ${nama?? "Guest"}`)
}
salamOptional("denies")

