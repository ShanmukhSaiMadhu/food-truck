import './App.css';
import Banner from './components/Banner';
import Topbar from './components/Topbar';
import service from './assets/service.png'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Banner />
      <img src={service} alt="" />
    </div>
  );
}

export default App;
