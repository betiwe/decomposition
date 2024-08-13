import './App.css';
import { Ether } from './components/Ether';
import { News } from './components/News';
import { Search } from './components/Search';
import { Teleprogramm } from './components/Teleprogramm';
import { Watched } from './components/Watched';
import './components/components.css';

function App() {
  return (
    <>
      <News />
      <Search />
      <div className='other'>
        <Teleprogramm />
        <Ether />
        <Watched />
      </div>
    </>
  );
}

export default App;
