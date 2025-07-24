import React from 'react';
import {useState, useRef, useEffect} from 'react'
import "./index.css"
import HobbyListComponent from './Hobi'

export default function App(props) {
  const nama = "Sugeng"
  const [tujuanSalam, setTujuanSalam] = useState("")
  const [isDisableButton, setIsDisableButton] = useState(true)
  const [hobbies, setHobbies] = useState([])

  const alertPengguna = () => {
    alert(`Halo ${tujuanSalam}, dari ${nama}`)
  }

  const handleChangeTujuanSalam = (e) => {
    setTujuanSalam(e.target.value)
  }

  useEffect(() => {
    if(tujuanSalam.length > 3) {
      setIsDisableButton(false)
    }else{
      setIsDisableButton(true)
    }
  }, [tujuanSalam])

  const inputHobiRef = useRef(null);
  const handleClickTambahHobi = () => {
    const newHobi = inputHobiRef.current.value
    setHobbies([...hobbies, newHobi]);
    inputHobiRef.current.value = ""
  }

  return (
    <div>
      <h1 className="jeda">Hallo {nama}</h1>
      <h3  className="jeda" style={{color: "blue"}}>Sampaikan Salam</h3>
      <button onClick={alertPengguna} disabled={isDisableButton}>Salam</button>
      <input type="text" onChange={handleChangeTujuanSalam}></input>

      <div className="jeda">
        <div>Masukkan hobi:</div>
        <div>
          <button onClick={handleClickTambahHobi}>Tambah</button>
          <input ref={inputHobiRef} type="text"></input>
        </div>
        <div>
          <HobbyListComponent hobbies={hobbies} name={nama}/>
        </div>
      </div>
    </div>
  );
}

// Log to console

// ==========

import React, {useEffect} from 'react';
import "./index.css"
export default function HobbyListComponent({hobbies, nama}){
  return (
    <>
      <div className="jeda">
        {hobbies.length > 0 && <p>Daftar Hobi {nama}</p>}
        <ul>
          {hobbies.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

// =============
.jeda{
  margin-top: 10px;
}