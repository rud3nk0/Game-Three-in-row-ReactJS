import React from 'react';
import Button from '../../elements/Button';

function Sidebar() {

 function handlerStart(e){
  alert("start game")
 }

  let pause = (e) =>{
    alert("click! Game start")
}

let restart = (e) =>{
  alert("click! Game start")
}

let exit = (e) =>{
  alert("click! Game start")
}

  return (
    <div className="Slidebar">
      Dash Board
      <Button bacground="#000" text=" Старт " onClick={handlerStart} />  
      <Button bacground="#000" text=" Пауза " onClick={pause}/>
      <Button bacground="#000" text=" Почати знов " onClick={restart}/>
      <Button bacground="#000" text=" Завершити " onClick={exit}/>
    </div>
  );
}

export default Sidebar;