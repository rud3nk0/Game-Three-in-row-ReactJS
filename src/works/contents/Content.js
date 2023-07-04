import React from 'react';
import Main from './Main';
import Sidebar from './Sidebar';


function Content() {
  return (
    <>
     <h2> Content </h2>
     <div className="Content">          
     <Sidebar/>
     <Main/>
    </div>
    </>
   
  );
}

export default Content;