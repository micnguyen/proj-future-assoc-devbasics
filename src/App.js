import logo from './logo.svg';
import './App.css';
import { MichaelNguyen } from './components/MichaelNguyen/MichaelNguyen';
import { KostaBarba } from './components/KostaBarba/KostaBarba';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name | Mantel Brand | Favourite Food | Last show watched</p>z
        <MichaelNguyen /> 
        <KostaBarba />
      </header>
    </div>
  );
}

export default App;
