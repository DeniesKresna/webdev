"use client"
import React, { useState, useRef, useEffect } from 'react';
import HobbyListComponent from "@/components/app/hobby-list";

export default function App() {
  const nama: string = 'Sugeng';
  const [tujuanSalam, setTujuanSalam] = useState<string>('');
  const [isDisableButton, setIsDisableButton] = useState<boolean>(true);
  const [hobbies, setHobbies] = useState<string[]>([]);

  const alertPengguna = () => {
    alert(`Halo ${tujuanSalam}, dari ${nama}`);
  };

  const handleChangeTujuanSalam = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTujuanSalam(e.target.value);
  };

  useEffect(() => {
    setIsDisableButton(tujuanSalam.length <= 3);
  }, [tujuanSalam]);

  const inputHobiRef = useRef<HTMLInputElement>(null);

  const handleClickTambahHobi = () => {
    const newHobi = inputHobiRef.current?.value;
    if (newHobi && newHobi.trim() !== '') {
      setHobbies([...hobbies, newHobi]);
      if (inputHobiRef.current) inputHobiRef.current.value = ''
    }
  };

  const handleDeleteHobby = (hobi:string) => {
    const updatedHobbies = hobbies.filter(hobby => hobby !== hobi);
    setHobbies(updatedHobbies);
  }

  return (
    <div className="konten">
      <div className="jeda text-2xl">Hallo {nama}</div>
      <h3 className="jeda text-xl" style={{ color: 'blue' }}>
        Sampaikan Salam
      </h3>
      <button onClick={alertPengguna} disabled={isDisableButton} className={`tombol ${isDisableButton? "bg-amber-800" : "bg-gray-100"}`}>
        Salam
      </button>
      <input className="inputan" type="text" onChange={handleChangeTujuanSalam} />

      <div className="jeda">
        {tujuanSalam !== '' && <p>Tujuan salam terdefinisi</p>}
      </div>

      <div className="jeda">
        <div>Masukkan hobi:</div>
        <div>
          <button onClick={handleClickTambahHobi} className="tombol">Tambah</button>
          <input className="inputan" ref={inputHobiRef} type="text" />
        </div>
        <div>
          <HobbyListComponent hobbies={hobbies} name={nama} handleDeleteHobby={handleDeleteHobby}/>
        </div>
      </div>
    </div>
  );
}