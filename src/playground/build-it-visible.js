const divStyle = {
  maxWidth: '926px',
  margin: '0 auto',
  textAlign:'center',
  padding: '0',
  fontFamily: 'Helvetica, Arial, sans-serif'

}

const showDetails = {
  margin: '10px auto',
  textAlign:'center',
  padding: '10px',
  maxWidth: '80%',
  fontFamily:'Arial',
  backgroundColor: 'rgba(0,255,55,0.6)',
  opacity: '1',
  transition: '0.3s ease-out'
}


class VisibilityToggle extends React.Component{
  constructor(props){
    super(props)
    this.state = {visibility: false}
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility(){
    this.setState((prevState)=>{
      return{
        visibility: !prevState.visibility
      }
    })
  }
  render(){
    return(
     <div style={divStyle} >
      <h1>Visibility Toggle</h1>
      <button onClick={this.handleToggleVisibility} >
        {this.state.visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {this.state.visibility && (
        <div style={showDetails}>Here are some details you can now see.</div>
      )}
    </div>     
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector("#app"));