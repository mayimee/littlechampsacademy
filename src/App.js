import './App.css';
import EnrollmentFunction from './components/EnrollmentFunction';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LoginFunction from './components/LoginFunction';
import ConfirmationPage from './components/ConfirmationPage';
import Home from './components/Home';
import Products from './components/Products';
import Details from './components/Details';
import Payment from './components/Payment';
import ConfirmationProduct from './components/ConfirmationProduct'
import Index from './components/Index'
import Maintenance from './components/Maintenance';
import Chat from './components/Chat';

function App() {
  return (
    
    <Router>
        <div>
          <Navbar />
            <Switch>
              <Route exact path="/studentregistration" component={EnrollmentFunction}/>
              <Route exact path="/userlogin" component={LoginFunction}/> 
              <Route exact path="/confirmation" component={ConfirmationPage}/>
              <Route exact path='/e-commerce' component={Home}/>
              <Route exact path='/products' component={Products}/>
              <Route exact path='/payment' component={Payment}/>
              <Route exact path='/details/:id' component={Details}/>
              <Route exact path='/confirmationorder' component={ConfirmationProduct}/>
              <Route exact path='/' component={Index}/>
              <Route exact path='/undermaintenance' component={Maintenance}/>
            </Switch>
            <Chat />
            <Footer />
        </div>
    </Router>
  );
}

export default App;
