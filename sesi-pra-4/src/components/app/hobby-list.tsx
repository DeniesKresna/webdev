import React from 'react';

type HobbyListComponentProps = {
  hobbies: string[];
  name: string;
  handleDeleteHobby: (val:string) => void;
};

export default function HobbyListComponent({ hobbies, name, handleDeleteHobby }: HobbyListComponentProps) {
  return (
    <div className="jeda">
      {hobbies.length > 0 && <p>Daftar Hobi {name}</p>}
      <ul className="list-disc ml-6">
        {hobbies.map((el) => (
          <li key={el}>{el.toUpperCase()} -
            <span className="text-blue-700 cursor-pointer ml-2" onClick={() => handleDeleteHobby(el)}>[remove]</span>
            <span className="text-purple-700 cursor-pointer ml-2"><a href={`/dashboard/hobi/${el.toUpperCase()}`}>[detail]</a></span>
          </li>
        ))}
      </ul>
    </div>
  );
}