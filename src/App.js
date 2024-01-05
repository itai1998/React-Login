import './App.css';
import MyForm from './MyForm';
import BasicExample from './BasicExample';
import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <Router>
   <div className="App" >
      <BasicExample />
      <Switch>
        <Route exact path ="/">
          <MyForm />
        </Route>
        <Route path ="/welcome">
          <Welcome />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
