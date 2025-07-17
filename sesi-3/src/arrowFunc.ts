const salam1 = ():void => {
  let nama:string = "programmer"
  console.log(`halo ${nama}`)
}

salam1()

const besarkanHurufProgrammer = ():string => {
  let nama:string = "programmer"
  let besarHuruf:string = nama.toUpperCase()
  return besarHuruf
}

console.log(besarkanHurufProgrammer())

const salamNama = (nama:string): void => {
  console.log(`hallo ${nama}`)
}

salamNama("Sugeng")