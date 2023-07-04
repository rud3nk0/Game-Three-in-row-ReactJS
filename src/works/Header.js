import React from 'react';
import Score from '../components/Score';
import Record from '../components/Record';

function Header() {

  let count = "000";
  let record = " "

  return (
    
    <div className="Header">
     <h1>Tree in a Row</h1>
     <Score count= {count} /> {/* let count - кол-во выбитых шаров */}
     <Record record= {record}/> {/* let count - кол-во выбитых шаров */}
     
    </div>
  );
}

export default Header;