import React from 'react';


const Option = (props)=>(
  <div>
    <p>{props.index+1}. {props.optionText}
    <button onClick={(e)=> props.handleDeleteOption(props.optionText)}>remove</button>
    </p>
  </div>
)

export default Option;