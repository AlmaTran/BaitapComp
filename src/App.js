import logo from './logo.svg';
import './App.css';
import HeaderRCC from './Components/HeaderRCC';
import CardProducts from './Components/CardProducts';
import HomeComponent from './Components/BaiTapThucHanhLayout/HomeComponent';




//app : chứa các components con
function App() {
  return (
    <div className="App">
      <HomeComponent/>
    </div>
  );
}

export default App;
