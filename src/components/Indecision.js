import React from 'react';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{
  state = {
    options:[],
    selected: undefined
  }

  handlePickOptions = ()=> {
    let randomOption = Math.floor(Math.random()* this.state.options.length);
    let pickedOption = this.state.options[randomOption];
    this.setState(()=>{
      return{
        selected: pickedOption
      }
    })
  }

  handleClearOption = ()=>{
    this.setState(()=>{
      return{
        selected: undefined
      }
    })
  }
  handleDeleteOptions = ()=>{
    this.setState(()=>({options:[]}))
  }

  handleDeleteOption(optionText){
    this.setState((prevState)=>{
      return{
        options:prevState.options.filter((option)=> optionText !== option)
      }
    })
  }

  handleAddOption = (optionValue)=>{
    let optionLowerCased = this.state.options.map((option)=> option.toLowerCase());
    if(!optionValue){
      return 'You need to add an option';
    }else if(optionLowerCased.indexOf(optionValue.toLowerCase())> -1){
      return 'That option is already in the list';
    }

    this.setState((prevState)=>({
      options:[...prevState.options, optionValue]
    }))
  }

  componentDidMount(){
    
        try{
          //Run the code below when componentDidMount
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            // Only change the state if the options array is not empty
            if(options){
              this.setState(()=>{
                return{
                  options:options
                }
              })
            }
          //When there are errors when the code ran, catch will take effect
        }catch(e){
          //In this application, do nothing
          //Just revert the options to being an empty array;
        }
    
      }
    
      componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
          const json = JSON.stringify(this.state.options);
          localStorage.setItem('options', json)
        }
        
      }
    
      componentWillUnmount(){
        console.log('The component unmounted');
        //localStorage.removeItem('options');
      }
  render(){
    return (
      <div>
        <Header/>
        <h3>{this.state.options.length ? `Tasks: ${this.state.options.length}` : ''}</h3>
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePickOptions={this.handlePickOptions}
         />
        <Options 
           options={this.state.options}
           handleDeleteOption ={this.handleDeleteOption}
           handleDeleteOptions = {this.handleDeleteOptions}/>
        <AddOption handleAddOption ={this.handleAddOption} />
        <OptionModal 
            handleClearOption = {this.handleClearOption} 
            selectedOption = {this.state.selected} 
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options:[] //['ReactJS', 'Redux', 'NodeJS', 'SASS', 'Gulp', 'Grunt', 'Webpack']
}

export default IndecisionApp;