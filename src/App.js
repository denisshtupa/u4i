import './App.css';
import React, { useEffect } from 'react';
import UseScript from './UseScript';

const App = () => {

  const dataId = `dfbba82e-f5d3-11eb-b839-0cc47a188158`;
  const url = `https://player.3qsdn.com/js3q.latest.js`;
  const container = "3q-player";

  useEffect(() => {

    const QQQPlayerScript = UseScript(url, dataId, container);

    document.body.appendChild(QQQPlayerScript);

    return () => {
      document.body.removeChild(QQQPlayerScript);
    }
  }, [url])

  return (
    <>
      <div className="main-container">
        <div id={container}></div>
      </div>
    </>
  );
}

export default App;
