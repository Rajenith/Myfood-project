import './App.css';
import Wel from './components/wel';
import Signup from './components/signup/signup';
import Dlogin from './components/Login/login';
import Navbar from './components/Home/navbar/navbar';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Single from './components/datas/single/single';
import Cart from './components/Home/navbar/cart/cart';
import Footer from './components/footer/footer';
import Datas from './components/datas/data';
import Foodslide from './components/Home/carosel/carousel';
import Profile from './components/Home/profile/profile';
import Navhead from './components/navhead/navhead';
import SingleOne from './components/datas/single/single1';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'><Wel/></Route>
            <Route path='/sign'><Signup /></Route>
            <Route path='/login'><Dlogin /></Route>
            <Route path='/navbar'><Navbar /></Route>
            <Route path='/data'><Datas /></Route>
            <Route path='/single'><Single /></Route>
            <Route path='/cart'><Cart/></Route>
            <Route path='/footer'><Footer id="foot"/></Route>
            <Route path='/foodslide'><Foodslide /></Route>
            <Route path='/profile'><Profile/></Route>
            <Route path='/navhead'><Navhead/></Route>
            <Route path='/single1'><SingleOne/></Route>
          </Switch>
        </BrowserRouter>
        
        
        

      </Provider>

    </div>
  );
}

export default App;
