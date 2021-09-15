import logo from './logo.svg';
import './App.scss';
import { WelcomeScreenComponent } from './components/welcomeScreen/welcomeScreenComponent';
import { ListMakerComponent } from './component/listMaker/listMakerComponent';

function App() {
  return (
    <div className="main">
      <WelcomeScreenComponent />
      <ListMakerComponent />
    </div>
  );
}

export default App;
