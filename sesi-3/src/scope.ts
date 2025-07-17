let globalVar:string = "Hello"

const sayHi = () => {
  let funcVar:string = "Hi"

  if(true){
    let blockVar:string = "Hooooy"
    console.log(blockVar)
    console.log(funcVar)
    console.log(globalVar)
  }
}

sayHi()
console.log(globalVar)
