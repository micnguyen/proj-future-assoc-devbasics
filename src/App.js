import logo from './logo.svg';
import './App.css';
import { MichaelNguyen } from './components/MichaelNguyen/MichaelNguyen';
import { ColinLoh } from './components/ColinLoh/ColinLoh';
import { AdamSchlicht } from './components/AdamSchlicht/AdamSchlicht';
import { EthanMoliver } from "./components/EthanMoliver/EthanMoliver";
import { DanielChegwidden } from './components/DanielChegwidden/DanielChegwidden';
import { RuhaabSheikh } from "./components/RuhaabSheikh/RuhaabSheikh";
import { NauvooPerez } from './components/NauvooPerez/NauvooPerez';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name | Mantel Brand | Favourite Food | Last show watched</p>
        <MichaelNguyen /> 
        <ColinLoh /> 
        <MichaelNguyen />
        <AdamSchlicht /> 
        <EthanMoliver />
        <DanielChegwidden /> 
        <RuhaabSheikh />
        <NauvooPerez /> 
      </header>
    </div>
  );
}

export default App;
