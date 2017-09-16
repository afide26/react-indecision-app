import React from 'react';
import {buttonStyle, clearFix} from '../styles/styles';

const Option = (props)=>(
  <div>
    <p style={props.index==0 ? clearFix : null} >{props.index+1}. {props.optionText}
    <button style={{ backgroundColor:'#d42150', transform:'scaleX(1.2)', marginLeft: '15px', color:'white' }} onClick={(e)=> props.handleDeleteOption(props.optionText)}>remove</button>
    </p>
  </div>
)

export default Option;