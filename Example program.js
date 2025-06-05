/*example.js*/
import React from 'react';
function example(){
    return(
        <div>
            <h1>
                This is Example Page
            </h1>
        </div>
    );
}
export default example;
/*Appjs*/
import React from 'react';
import Example from './example';
function App(){
  return(
    <div>
      <Example />
    </div>
  );
}
export default App;
