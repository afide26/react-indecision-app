import React from 'react';
import {buttonStyle} from '../styles/styles';


const Action = (props)=>{
  return(
    <div>
      <button style={buttonStyle} onClick={props.handlePickOptions} 
        disabled={!props.hasOptions}>
        What did I do?
      </button>
    </div>
  )
}

export default Action;