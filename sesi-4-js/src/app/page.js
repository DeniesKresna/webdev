"use client"
import HobbyList from "@/components/hobby-list"
import {useState, useEffect, useRef} from "react"

export default function Home() {
  // block code
  const nama = "Denies"

  const [tujuanSalam, setTujuanSalam] = useState("")
  const [bisaKlikTombol, setBisaKlikTombol] = useState(true)
  const [hobbies, setHobbies] = useState([])

  const kelasTombolSalam = "jeda tombol ml-4 cursor-pointer"

  const handleChangeInputSalam = (e) => {
    setTujuanSalam(e.target.value)
  }

  const handleClickButtonSalam = () => {
    alert(`hallo ${tujuanSalam}, nama saya ${nama}`)
  }

  useEffect(() => {
    if(tujuanSalam.length <= 3){
      setBisaKlikTombol(false)
    }else{
      setBisaKlikTombol(true)
    }
  }, [tujuanSalam])

  const inputTambahHobiRef = useRef(null)

  const handleClickButtonTambahHobi = () => {
    const hobi = inputTambahHobiRef.current.value
    const newHobbies = [...hobbies, hobi]
    setHobbies(newHobbies)
  }

  const handleHapusHobi = (hobi) => {
    // hobi = makan
    const newHobbies = hobbies.filter((el) => el != hobi)
    setHobbies(newHobbies)
  }

  // [page]
  // block kembalian ui
  return (
    <>
      <div className="konten">
        <div className="text-2xl">Hello {nama}</div>
        <h3 className="jeda text-xl" style={{color: 'blue'}}>Sampaikan Salam</h3>
        <button disabled={!bisaKlikTombol} className={kelasTombolSalam} onClick={handleClickButtonSalam}>
          Salam
        </button>
        <input className="inputan" type="text" onChange={handleChangeInputSalam}></input>
        
        <div className="jeda">
          <div>Masukkan hobi:</div>
          <div>
            <button className={kelasTombolSalam} onClick={handleClickButtonTambahHobi}>
              Tambah
            </button>
            <input className="inputan" type="text" ref={inputTambahHobiRef}></input>
          </div>
          <div className="jeda">
            <HobbyList namanya={tujuanSalam} alamat="Jakarta" hobbies={hobbies} handleHapusHobi={handleHapusHobi}/>
          </div>
        </div>
      </div>
    </>
  )
}