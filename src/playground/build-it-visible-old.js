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
  backgroundColor: 'rgba(255,0,255,0.6)',
  opacity: '1',
  transition: '0.3s ease-out'
}

let visibility = true;
const toggleVisibility = ()=>{
  visibility = !visibility;
  renderVisibilityToggle();
}

const appRoot = document.querySelector("#app");


const renderVisibilityToggle = ()=>{
  const template = (
    <div style={divStyle} >
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility} >
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
        <div style={showDetails}>Here are some details you can now see.</div>
      )}
    </div>
  )
  ReactDOM.render(template, appRoot);
}

renderVisibilityToggle();