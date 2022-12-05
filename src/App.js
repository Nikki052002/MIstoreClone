import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Slider from "./components/Slider.js" 
import data from "./data/data.json"
//import {banner} from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
function App() {
  return ( //jsx written in following div
    <Router>  
      <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
      
      <Routes>
      <Route exact path="/music"/>
      
      
      </Routes>
      
      
    </Router>
  );
}

export default App;

/*<Route exact path="/music">
<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
</Route>*/



