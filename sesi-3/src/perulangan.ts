// mulai dari; hingga; jalankan lalu i ditambah 1
for(let i=0; i < 3; i++){
  console.log(i)
}

let nameList: string[] = ["A", "B", "C"]
for (let name of nameList) {
  console.log(name)
}

let daftarHari: string[] = ["senin","selasa","rabu"]
daftarHari.map(itemnya => 
  console.log(itemnya)
)