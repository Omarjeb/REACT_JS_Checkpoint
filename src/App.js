
import './App.css';
import Cards from './Components/Cards';
import Home from './Components/Home';
import Location from './Components/Location';
import Search from './Components/Search';
import SwiperCard from './Components/SwiperCard';

function App() {
  return (
    <div className="App">
       <Search/>
       <Home/>
       <Cards/>
       <SwiperCard/>
       <Location/>
    </div>
  );
}

export default App;
