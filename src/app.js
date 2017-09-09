console.log("TEST");
var app = {
  title:"JSX Expressions",
  subtitle:"React's way of typing HTML and XML",
  options:['ReactJS', 'SASS', 'HTML', "APIs", "NODEJS", "REDUX", "REACT NATIVE"]
}

function returnOptions(options){
  // return options.map((item, index)=>{
  //   return <ol key ={index}><li>{item}</li></ol>
  // })
  if(options){
    return(
      <ol>
        {options.map((i, index)=><li key={index}>{i}</li>)}
      </ol>
    )
  }else{
    return "No options available";
  }

}
var template = (
<div>
  {app.title && <h1>{app.title}</h1>}
  <p>{app.subtitle ? app.subtitle : 'No subtitle'}</p>
  <p><strong>Expertise</strong></p>
    {returnOptions(app.options)}
 
</div>
);

let count = 0;
const addOne = ()=>{
  count++;
  renderCounterApp();
  console.log('addOne', count);
};

const minusOne = ()=>{
  if(count>=1){
    count --;
    renderCounterApp();
    console.log('minusOne');
  }
  
  return false;
  
}

const resetCount = ()=>{
  count = 0;
  renderCounterApp();
  console.log('Reset button clicked!');
}


const appRoot = document.querySelector("#app");



const renderCounterApp = ()=>{
    const templateTwo = (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}


renderCounterApp();