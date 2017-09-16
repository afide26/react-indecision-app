import React from 'react';



const Action = (props)=>{
  return(
    <div>
      <button onClick={props.handlePickOptions} 
        disabled={!props.hasOptions}>
        What did I do?
      </button>
    </div>
  )
}

export default Action;