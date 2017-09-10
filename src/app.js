console.log("TEST");

// Styles Import
// import {optionsStyle, headerStyle, formStyle} from './styles';
const app = {
  title:"Indecision App",
  subtitle:"Put your life in the computer's hands.",
  options:
  ['React Guru', 'Redux Master', 'Sass Virtuoso']
}

const returnOptions = (options)=>{
  if(options){
    return(
      <ol>
        {options.map((i, index)=><li style={optionsInputStyle} key={index}>{i}</li>)}
      </ol>
    )
  }else{
    return "No options available";
  }

}

const onFormSubmit = (e)=>{
  e.preventDefault();
  const option = e.target.elements.option.value;
  const wipeout = e.target.elements.wipeout;

  if(option){
    app.options.push(option);
    renderIndecisionApp();
    e.target.elements.option.value = '';
  }else if(wipeout){
    app.options = [];
    renderIndecisionApp();
  }
}

const optionsStyle = {
  fontSize:'1.2rem', 
  fontFamily:'Arial', 
  textAlign:'center',
  fontWeight: '600',
  listStyleType: 'none'
}
const optionsInputStyle = {
  fontSize:'1.2rem', 
  fontFamily:'Arial', 
  textAlign:'left',
  fontWeight: '600',
}
const headerStyle = {
  fontSize:'2rem', 
  fontFamily:'Arial', 
  textAlign:'center',
  fontWeight: '800'
}
const formStyle = {
  fontSize:'1rem',
  padding: '0',
  margin:'0 auto', 
  fontFamily:'Arial', 
  textAlign:'center',
  fontWeight: '600'
}
const buttonStyle ={border:'none', display:'block', background:'red', textAlign:'center', color: 'white', borderRadius:'15px', margin:'5px auto'}
const appRoot = document.querySelector("#app");

const onMakeDecision = ()=> {
  const randomNum =Math.floor(Math.random()*app.options.length);
  const option = app.options[randomNum]
 alert(option);
}
const renderIndecisionApp = ()=>{
  const template = (
  <div>
    {app.title && <h1 style={headerStyle} >{app.title}</h1>}
    <p style={optionsStyle}><strong>{app.subtitle ? app.subtitle : 'No subtitle'}</strong></p>
    <p style={optionsStyle}>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
    <p 
      style={optionsStyle}>
      {app.options.length >0 ? `Options count ${app.options.length}` : null}</p>
      {returnOptions(app.options)}
      <button type="button" disabled={app.options.length === 0} style={buttonStyle} onClick={onMakeDecision}>Make Decision</button>
    <form style={formStyle} onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button type="submit">Add Options</button>
      <button name="wipeout" style={buttonStyle} type="submit">Wipe Out</button>
    </form>
</div>
  )

ReactDOM.render(template,appRoot);
}


renderIndecisionApp();
