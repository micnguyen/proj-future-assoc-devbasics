import logo from './logo.svg';
import './App.css';
import { MichaelNguyen, JuliaSharnina } from './components/MichaelNguyen/MichaelNguyen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name | Mantel Brand | Favourite Food | Last show watched</p>
        <MichaelNguyen /> 
        <JuliaSharnina />
      </header>
    </div>
  );
}

export default App;
