const wrapperStyle ={
  maxWidth:'960px',
  margin:'0 auto',
  fontFamily:'Helvetica, Arial, sans-serif'
}
const errorStyle = {
  backgroundColor:'#ff7f7f',
  padding:'15px',
  maxWidth: '100%',
  top:'0',
  left:'0',
  textAlign:'center',
  position:'relative',
  transition:'all ease-out 3s',
  clear:'both',
  display:'table',
  content:''
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

const buttonStyle={
  minWidth: '100px',
  padding: '3px',
  borderRadius: '12px',
  margin:'15px 3px',
  float:'left',
  backgroundColor:"rgba(0, 255,0,0.5)",
  border: '1px solid gray'
}

const clearFix = {
  clear:'both',
  display:'table',
  content:''
}
class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePickOptions = this.handlePickOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    } 
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
      console.log(json);
    }
    
  }

  componentWillUnmount(){
    console.log('The component unmounted');
    //localStorage.removeItem('options');
  }
  handlePickOptions(){
    let randomOption = Math.floor(Math.random()* this.state.options.length);
    alert([this.state.options[randomOption]]);
    let pickedOption = this.state.options[randomOption];
  }

  handleDeleteOptions (){
    this.setState(()=>({options:[]}))
  }

  handleDeleteOption(optionText){
    this.setState((prevState)=>{
      return{
        options:prevState.options.filter((option)=> optionText !== option)
      }
    })
  }

  handleAddOption (optionValue){

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

  render(){
    const subtitle="Putting your life in the hands of a computer!";
    return (
      <div style={wrapperStyle}>
        <Header subtitle={subtitle}/>
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
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options:[] //['ReactJS', 'Redux', 'NodeJS', 'SASS', 'Gulp', 'Grunt', 'Webpack']
}

const Header = (props)=>{
    return(
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    )
}

Header.defaultProps = {
  title:'Indecision App'
}
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


const Options =(props)=>{
    return(
      <div>
        <button style={buttonStyle} onClick={props.handleDeleteOptions}>
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
    this.setState(()=>({error:null}));
  }
  onAddOption(e){
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
          <p style={errorStyle}>{this.state.error}
          <span onClick={this.removeError} style={xStyle}>x</span></p> }   
        <form style={clearFix} onSubmit={this.onAddOption}>
          <input type="text" name="optionValue"/>
          <button type="submit">Add Option</button>
        </form>
      </div>
    )
  }
}

const Option = (props)=>(
  <div>
    <p style={props.index==0 ? clearFix : null} >{props.index+1}. {props.optionText}
    <button style={{ backgroundColor:'#d42150', transform:'scaleX(1.2)', marginLeft: '15px', color:'white' }} onClick={(e)=> props.handleDeleteOption(props.optionText)}>remove</button>
    </p>
  </div>
)



ReactDOM.render(<IndecisionApp />, document.getElementById("app"));