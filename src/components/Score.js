import React from 'react';




function Score(props) {
 
  return (
    
    <div className="Score">
     <h2>Score:</h2>
        {props.count}  {/* приходит кол-во выбитых шаров */}
     <div className='ScoreWindow'><h2></h2></div>
    </div>
  );
}

export default Score;