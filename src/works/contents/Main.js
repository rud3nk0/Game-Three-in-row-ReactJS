import React from 'react';
import Blue from '../../components/gameElements/Blue';
import Red from '../../components/gameElements/Red';
import Yellow from '../../components/gameElements/Yellow';
import White from '../../components/gameElements/White';
import Green from '../../components/gameElements/Green';




function Main() {

  let arrElement = [<Blue />, <Red />, <Yellow />, <White/>, <Green/>] ;
  
  let x = 1;
  let count = 0;

  const handlerClick = () =>{
    for(let i = 0; arrElement.length - 2; i++){
     
      if(arrElement[i] === x && arrElement[i+1] === x && arrElement[i+2] === x){
        count++;
        if(count === 3){
          alert(+3);
            break;
        } else {
            count = 0;
          }
      };

    
    }
   
  }

  return (
    <div className="Main">
      
    <table>
      <tr className='r1'>
        <td onClick={handlerClick} className='c-1'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td onClick={handlerClick} className='c-2'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td onClick={handlerClick} className='c-3'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td onClick={handlerClick} className='c-4'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td onClick={handlerClick} className='c-5'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td onClick={handlerClick} className='c-6'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td onClick={handlerClick} className='c-7'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td onClick={handlerClick} className='c-8'>{arrElement[Math.floor(Math.random() * 5)]}</td>
      </tr>
      {/* <tr className='r2'>
        <td className='c-1'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-2'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-3'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-4'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-5'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-6'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-7'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-8'>{arrElement[Math.floor(Math.random() * 5)]}</td>
      </tr>
      <tr className='r3'>
        <td className='c-1'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-2'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-3'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-4'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-5'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-6'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-7'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-8'>{arrElement[Math.floor(Math.random() * 5)]}</td>
      </tr>
      <tr className='r4'>
        <td className='c-1'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-2'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-3'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-4'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-5'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-6'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-7'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-8'>{arrElement[Math.floor(Math.random() * 5)]}</td>
      </tr>
      <tr className='r5'>
        <td className='c-1'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-2'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-3'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-4'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-5'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-6'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-7'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-8'>{arrElement[Math.floor(Math.random() * 5)]}</td>
      </tr>
      <tr className='r6'>
        <td className='c-1'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-2'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-3'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-4'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-5'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-6'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-7'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-8'>{arrElement[Math.floor(Math.random() * 5)]}</td>
      </tr>
      <tr className='r7'>
        <td className='c-1'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-2'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-3'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-4'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-5'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-6'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-7'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-8'>{arrElement[Math.floor(Math.random() * 5)]}</td>
      </tr>
      <tr className='r8'>
        <td className='c-1'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-2'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-3'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-4'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-5'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-6'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-7'>{arrElement[Math.floor(Math.random() * 5)]}</td>
        <td className='c-8'>{arrElement[Math.floor(Math.random() * 5)]}</td>
      </tr> */}
    </table>
  


     {/* <Blue/>
     <Red/>
     <Yellow/>
     <White/>
     <Green/>      */}

    </div>
  );
}

export default Main;