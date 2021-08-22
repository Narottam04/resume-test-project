import './App.css';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import Resume from './Resume';
import Editor from './Editor'
import Text from './Text'



const App = (props) => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const resumeOnlyMode = params.get('resumeonly');

  // print
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="App" >
      {!resumeOnlyMode && (
        <Editor/>
      )}
      {!resumeOnlyMode && (
        <button onClick={handlePrint} id="dontPrintMe">Print this out!</button>
      )}
      <main className="pdf font-jost hyphens-manual">
        <Resume componentRef={componentRef} />
      </main>
    </div>
  );
}

export default App;
