import logo from './logo.svg';
import './App.css';
import { MichaelNguyen } from './components/MichaelNguyen/MichaelNguyen';
import { ChristianTorrisi } from './components/ChristianTorrisi/ChristianTorrisi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name | Mantel Brand | Favourite Food | Last show watched</p>
        <MichaelNguyen /> 
        <ChristianTorrisi /> 
      </header>
    </div>
  );
}

export default App;
