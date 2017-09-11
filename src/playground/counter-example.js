
const buttonStyle = {
  marginRight:'5px',
  padding: '5px 20px',
  backgroundColor: 'blue',
  borderRadius: '12px',
  color:'white',
  fontSize:'1rem',
  display:'inline-block',
  border:'1px solid white'
}

class Counter extends React.Component{
  constructor(props){
    super(props);

    this.state = { count: 0};
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleResetAll = this.handleResetAll.bind(this);
  }
  handleAddOne(){
    this.setState((prevState)=>{
      return {
        count: prevState.count + 1
      }
    })
  }

  handleMinusOne(){
    this.setState((prevState)=>{
      if(prevState.count >0){
        return {
          count: prevState.count -1
        }
      }else{
        alert(`Count is ${prevState.count}. You are not allowed to go lower.`);
      }
    })
  }

  handleResetAll(){
    this.setState(()=>{
      return{
        count: 0
      }
    })
  }
  render(){
    return(
      <div>
        <h1>Count:{this.state.count} </h1>
        <button style={buttonStyle} onClick={this.handleAddOne}>+1</button>
        <button style={buttonStyle} onClick={this.handleMinusOne}>-1</button>
        <button style={buttonStyle} onClick={this.handleResetAll}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>,document.querySelector("#app"));