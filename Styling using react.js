/*App.js*/
import './App.css';
function App(){
    //Internal Styling//
  const h={
    color:'red',
    backgroundColor:'cyan',
    border:"5px solid yellow",
    padding:"20px",
    margin:"20px",
    borderRadius:"20px",
  }
  return(
    /*Inline Styling*/
    <div>
      <h1 style={h}> Hello MTIET</h1>
      <h2 style={{color:"green"}}>Hello World!!!!!!</h2>
    </div>

  );
    
}
export default App;
