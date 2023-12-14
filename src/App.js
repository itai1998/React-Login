import './App.css';
import MyForm from './MyForm';
import BasicExample from './BasicExample';
import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const backgroundImageStyle = {
  backgroundImage: 'url("https://brightspotcdn.byu.edu/dc/d7/c22c23614dd5870f2fcbbd473f06/jango-graduation-emmalee-169.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh', 
};

function App() {
  return (
    <Router>
   <div className="App" style={backgroundImageStyle}>
      <BasicExample />
      <Switch>
        <Route exact path ="/">
          <MyForm />
        </Route>
        <Route path ="/welcome">
          <Welcome />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
