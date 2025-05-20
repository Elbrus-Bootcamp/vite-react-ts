import type { JSX } from 'react';
import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import elbrusLogo from '@/assets/elbrus.svg';
import viteLogo from '/vite.svg';
import '@/App.css';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <>
      <title>Elbrus Bootcamp</title>
      <meta name="description" content="Elbrus Bootcamp Vite React Typescript Template" />
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/Elbrus-Bootcamp" target="_blank" rel="noreferrer">
          <img src={elbrusLogo} className="logo elbrus" alt="Elbrus logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Elbrus Bootcamp</h2>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
