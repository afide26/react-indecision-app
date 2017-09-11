
class IndecisionApp extends React.Component{
  constructor(){
    super()

  }
  render(){

    const title = "Indecision";
    const subtitle="Put your life in the hands of a computer!";
    const options = ['ReactJS', 'Redux', 'SASS']
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options} />
        <AddOption />
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
  //class based method
  handlePick(){
    alert('clicked Add Option')
  }
  render(){
    return(
      <div>
        <button onClick={this.handlePick}>
          What did I do?
        </button>
      </div>
    )
  }
}


class Options extends React.Component {
  constructor(props){
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll(){
    console.log(this.props.options)
    // alert('Remove all buttons')
  }
  render(){
    return(
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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

  handleAddOption(e){
    e.preventDefault();
    let optionValue = e.target.elements.optionValue.value.trim();

    if(!optionValue){
      alert('You must add an option to submit');
    }else{
      alert('New option added!');
      e.target.elements.optionValue.value = '';
    }
  }
  render(){
    return(
      <div>    
        <form onSubmit={this.handleAddOption.bind(this)}>
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