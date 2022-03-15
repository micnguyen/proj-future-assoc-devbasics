
import logo from './logo.svg';
import './App.css';
import { MichaelNguyen } from './components/MichaelNguyen/MichaelNguyen';
import { JuliaSharnina } from './components/MichaelNguyen/JuliaSharnina';
import { EthanMoliver } from "./components/EthanMoliver/EthanMoliver";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name | Mantel Brand | Favourite Food | Last show watched</p>

        <MichaelNguyen /> 
        <JuliaSharnina />
        <EthanMoliver />

      </header>
    </div>
  );
}

export default App;
