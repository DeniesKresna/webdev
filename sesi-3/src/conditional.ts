let score:number = 30

if(score > 90){
  console.log("Lulus")
} else if (score>50) {
  console.log("Remidi")
} else {
  console.log("Tidak Lulus")
}

let grade:string = "A"

switch (grade){
  case "A": 
    console.log("Lulus")
    break
  case "B":
    console.log("Remidi")
    break
  default:
    console.log("Tidak Lulus")
}