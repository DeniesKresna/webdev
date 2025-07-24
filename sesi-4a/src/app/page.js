"use client"
import { useState, useEffect, useRef } from "react";
import HobbyList from "@/components/app/hobby-list";

export default function Home() {
  const nama = "Sugeng";

  const [tujuanSalam, setTujuanSalam] = useState("");
  const [isDisableButton, setIsDisableButton] = useState(true);
  const [hobbies, setHobbies] = useState([])

  const handleClickButtonSalam = () => {
    alert(`halo ${nama}, saya ${nama}`);
  }

  const handleChangeInputTujuanSalam = (e) => {
    setTujuanSalam(e.target.value)
  }

  useEffect(() => {
    let status = false;
    if(tujuanSalam.length <= 3){
      status = true;
    }
    setIsDisableButton(status)
  }, [tujuanSalam])

  const handleClickTambahHobi = () => {
    const hb = inputHobiRef.current.value
    const newHobbies = [...hobbies, hb]
    console.log(newHobbies)
    setHobbies(newHobbies)
  }

  const inputHobiRef = useRef(null)

  return (
    <div className="konten">
      <div className="text-2xl">Hello {nama}</div>
      <h3 className="jeda text-xl" style={{color: 'blue'}}>Sampaikan Salam</h3>

      {/* ketika 3 huruf, tombol salam tidak bisa diklik. disabled=true */}
      <button disabled={isDisableButton} className={`jeda tombol ${isDisableButton? "bg-amber-800" : "bg-white"}`} onClick={handleClickButtonSalam}>
        Salam
      </button>
      <input className="inputan" type="text" onChange={handleChangeInputTujuanSalam}></input>
      
      <div className="jeda">
        <div>Masukkan hobi:</div>
        <div>
          <button className="tombol" onClick={handleClickTambahHobi}>Tambah</button>
          <input className="inputan" type="text" ref={inputHobiRef}/>
        </div>
        <div>
          <HobbyList hobbies={hobbies}></HobbyList>
        </div>
      </div>
    </div>
  )
}