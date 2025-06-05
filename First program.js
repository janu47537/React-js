//firstprog.js//
import React from 'react';
function firstprog(){
    return(
        <h1>Hello Students</h1>
    );
}
export default firstprog;
//App.js//
import React from 'react';
import Example from './firstprog';
function App(){
  return(
    <div>
      <Example />
    </div>
  );
}
export default App;