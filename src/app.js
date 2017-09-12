const wrapperStyle ={
  maxWidth:'960px',
  margin:'0 auto',
  fontFamily:'Helvetica, Arial, sans-serif'
}
const errorStyle = {
  backgroundColor:'rgba(255,0,0,0.5)',
  padding:'15px',
  maxWidth: '100%',
  margin:'10px auto',
  textAlign:'center',
  position:'relative',
  transition:'all ease-out 3s'
};

const xStyle={
  position: 'absolute',
  top:'0',
  right:'0',
  transform:'scaleX(1.25)',
  marginRight:'10px',
  fontFamily:'Arial',
  cursor:'pointer'
}

class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePickOptions = this.handlePickOptions.bind(this);
    this.state = {
      options: []
    } 
  }
  handlePickOptions(){
    let randomOption = Math.floor(Math.random()* this.state.options.length);
    alert([this.state.options[randomOption]]);
    let pickedOption = this.state.options[randomOption];
  }
  handleDeleteOptions (){
    this.setState(()=>{
      return{
        options:[]
      }
    })
  }

  handleAddOption (optionValue){
    if(!optionValue){
      return 'You need to add an option';
    }else if(this.state.options.indexOf(optionValue)> -1){
      return 'That option is already in the list';
    }

    this.setState((prevState)=>{
      return{
        options: [...prevState.options, optionValue]
      }
    })
  }

  render(){
    const title = "Indecision";
    const subtitle="Put your life in the hands of a computer!";
    return (
      <div style={wrapperStyle}>
        <Header title={title} subtitle={subtitle}/>
        <h3>{this.state.options.length ? `Tasks: ${this.state.options.length}` : ''}</h3>
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePickOptions={this.handlePickOptions}/>
        <Options 
           options={this.state.options}
           handleDeleteOptions = {this.handleDeleteOptions}/>
        <AddOption handleAddOption ={this.handleAddOption} />
      </div>
    )
  }
}


class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component{
  render(){
    return(
      <div>
        <button onClick={this.props.handlePickOptions} 
          disabled={!this.props.hasOptions}>
          What did I do?
        </button>
      </div>
    )
  }
}


class Options extends React.Component {
  render(){
    return(
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option)=>{
            return <Option key={option} optionText={option} />
          })
        }
      </div>
    )
  }
}


class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.removeError = this.removeError.bind(this);
    this.onAddOption = this.onAddOption.bind(this);
    this.state = {
      error:undefined
    }
  }

  removeError(){
    this.setState(()=>{
      return{
        error:null
      }
    })
  }
  onAddOption(e){
    e.preventDefault();
    let optionValue = e.target.elements.optionValue.value.trim();
    let error = this.props.handleAddOption(optionValue);
   
    this.setState(()=>{
      return{
        error
      }
    });

     e.target.elements.optionValue.value = '';

    
  }
  render(){
    return(
      <div>
        {this.state.error && 
          <p style={errorStyle}>{this.state.error}
          <span onClick={this.removeError} style={xStyle}>x</span></p> }   
        <form onSubmit={this.onAddOption}>
          <input type="text" name="optionValue"/>
          <button type="submit">Add Option</button>
        </form>
      </div>
    )
  }
}


class Option extends React.Component{
  render(){
    return(
      <div>
       <p>{this.props.optionText}</p>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));