import logo from './logo.svg';
import './App.css';
import { NauvooPerez } from './components/NauvooPerez/NauvooPerez';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name | Mantel Brand | Favourite Food | Last show watched</p>
        <NauvooPerez /> 
      </header>
    </div>
  );
}

export default App;
