import React from 'react';
import { useData } from './Store/Zustand';
import { useAtom } from 'jotai';
import { Todo } from './Store/Jotai';
import { useSelector } from 'react-redux';

const App = () => {
  const {data, deleteUser} = useData()
  const [Data] = useAtom(Todo)
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          {Data.map((item2) => {
            if(item.id == item2.id)
            return (
            <div key={item2.id}>
              <img src={item.image} alt="" />
              <h1>{item.name}</h1>
              <h2>{item2.phone}</h2>
              <h1>{item2.status ? "Active" : "Inactive"}</h1>
              <button>EDIT</button>
              <button onClick={() => deleteUser(item.id)}>DELETE</button>
            </div>
          )})}
        </div>
      ))}

      <br /><br />
      
    </div>
  );
}

export default App;
