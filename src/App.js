import './App.scss';
import { WelcomeScreenComponent } from './components/welcomeScreen/welcomeScreenComponent';
import { ListMakerComponent } from './components/listMaker/listMakerComponent';

function App() {
  return (
    <div className="main">
      <WelcomeScreenComponent />
      <ListMakerComponent />
    </div>
  );
}

export default App;
