import React from 'react';

function Button(props) {
  return (
  <>
    <button style={{background: props.background}}>{props.text}</button>
  </>
  );
}

export default Button;