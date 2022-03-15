import logo from './logo.svg';
import './App.css';
import { MichaelNguyen } from './components/MichaelNguyen/MichaelNguyen';
import { ChrisDenby } from './components/ChrisDenby/ChrisDenby';
import { AdamSchlicht } from './components/AdamSchlicht/AdamSchlicht';
import { EthanMoliver } from "./components/EthanMoliver/EthanMoliver";
import { RuhaabSheikh } from "./components/RuhaabSheikh/RuhaabSheikh";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name | Mantel Brand | Favourite Food | Last show watched</p>
        <MichaelNguyen /> 
        <ChrisDenby/>
        <MichaelNguyen />
        <AdamSchlicht /> 
        <EthanMoliver />
        <RuhaabSheikh />
      </header>
    </div>
  );
}

export default App;
