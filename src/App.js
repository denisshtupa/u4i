import React from 'react';
import { Fragment } from 'react';
import { MultipleChoice } from 'react-qti';

function App() {
  return (
    <>
      <h4>qti</h4>
      <MultipleChoice  path="/multiple-choice.xml" as="div">
        <MultipleChoice.Exercise>
          {({prompt}) => (
            <Fragment>
              <h1>{prompt}</h1>
              <MultipleChoice.Choice />
              {          console.log("🚀 ~ file: App.js ~ line 11 ~ App ~ prompt", prompt)
}
            </Fragment>
            
          )}
        </MultipleChoice.Exercise>
        {/* <MultipleChoice.Button /> */}
      </MultipleChoice>
    </>
  );
}

export default App;
