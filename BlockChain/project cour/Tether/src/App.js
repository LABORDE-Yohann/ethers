import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers';

function App() {
  const provider = ethers.getDefaultProvider(); //homstead (mainnet)

let abi = [
    "event Transfer(address indexed from, address indexed to, uint value)"
];
let contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
let contract = new ethers.Contract(contractAddress, abi, provider);

contract.on("Transfer", (from, to, value, event) => {
    console.log("# block # : ", event.blockNumber);
    console.log("# transmitter : " + from);
    console.log("# receiver : " + to);
    console.log("# value : " + value);
    console.log("");
    console.log("");
});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} background='true' className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
