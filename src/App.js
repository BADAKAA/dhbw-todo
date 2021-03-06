import './App.scss';
import { WelcomeScreenComponent } from './components/welcomeScreen/welcomeScreenComponent';
import { ListMakerComponent } from './components/listMaker/listMakerComponent';

function App() {
  //Wir speichern im State ob die Komponente sichtbar ist
  return (  
    <>
      <WelcomeScreenComponent />
      <h1 id="title">TODO LIST</h1>
      <ListMakerComponent />
    </>
  );
}

export default App;
