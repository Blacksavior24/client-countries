import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './Components/landingpage.jsx/LandingPage';
import Countries from './Components/countries/Countries'
import CardDetail from './Components/cardsdetails/CardDetail';
import Nav from './Components/nav/Nav';
import Addactivity from './Components/addactivity/Addactivity';

function App() {
  return (
    <div className="App">
    <Route exact path='/' component={LandingPage} />
    <Route exact path='/countries' component={Nav}/>
    <Route exact path='/countries' component={Countries}/>
    <Route exact path='/activity/create' component={Addactivity}/>
    <Route exact path='/countries/:id' component={Nav}/>
    <Route exact path='/countries/:id' component={CardDetail}/>
    </div>
  );
}

export default App;
