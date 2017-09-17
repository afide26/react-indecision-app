import React from 'react';
import Option from './Option';


const Options =(props)=>(
  <div>
    <button onClick={props.handleDeleteOptions}>
      {props.options.length > 0 ? 'Remove All' : 'No options to remove'}
    </button>
    {
      props.options.map((option,index)=>(
        <Option 
          key={index} 
          index={index} 
          optionText={option}
          handleDeleteOption = {props.handleDeleteOption} />
        )
      )
    }
  </div>
)

export default Options;