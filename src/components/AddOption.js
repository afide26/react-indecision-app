import React from 'react';


export default class AddOption extends React.Component{
  state = {
    error:undefined
  }

  removeError = () => {
    this.setState(()=>({error:null}));
  }
  onAddOption = (e)=>{
    e.preventDefault();
    let optionValue = e.target.elements.optionValue.value.trim();
    let error = this.props.handleAddOption(optionValue);

    this.setState(()=>({error}));
    
    if(!error){
      e.target.elements.optionValue.value = '';
    } 
  }
  render(){
    return(
      <div>
        {this.state.error && 
          <p>{this.state.error}
          <span style={{marginLeft:"10px"}} onClick={this.removeError}>x</span></p> }   
        <form onSubmit={this.onAddOption}>
          <input type="text" name="optionValue"/>
          <button type="submit">Add Option</button>
        </form>
      </div>
    )
  }
}

