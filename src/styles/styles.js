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

export { wrapperStyle, errorStyle, xStyle, buttonStyle, clearFix};