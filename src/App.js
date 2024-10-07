import React from 'react';
import './App.css';
import './tailwind.css';
import Overlay from './Overlay';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//}

const App = () => {
  return (
    <div className="App">
      <Overlay />
    </div>
  );
};

export default App;
