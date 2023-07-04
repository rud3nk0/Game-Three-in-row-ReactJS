import React from 'react';


function Record(props) {
  return (
    <div className="Score">
        {props.record} {/* наибольшие кол-во выбытих вместе шаров за 1 игру */}
    <h2> Record:</h2>
    <div className='RecordWindow'><h2></h2></div>
    </div>
  );
}

export default Record;