import './App.css';
import Form from './Form';
import BasicExample from './BasicExample';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BasicExample />
      <div className="content">
        <h1>Please Log in</h1>
      </div>
      <Form />
    </div>
  );
}

export default App;
