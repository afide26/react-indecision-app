
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

    this.state = {};
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
  componentDidMount(){
   try{
      const stringCount = JSON.parse(localStorage.getItem('count'));
      const count = parseInt(stringCount, 10)
      if(!isNaN(count)){
        this.setState(()=>{
          return{
            count
          }
        })
      }

   }catch(e){
    console.log(e);
   }

  }
  

  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count.toString())
    }
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