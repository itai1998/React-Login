import './App.css';
import MyForm from './MyForm';
import BasicExample from './BasicExample';
import 'bootstrap/dist/css/bootstrap.min.css';

const backgroundImageStyle = {
  backgroundImage: 'url("https://brightspotcdn.byu.edu/dc/d7/c22c23614dd5870f2fcbbd473f06/jango-graduation-emmalee-169.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh', 
};

function App() {
  return (
    <div className="App" style={backgroundImageStyle}>
      <BasicExample />
      <div className="content">
      </div>
      <MyForm />
    </div>
  );
}

export default App;
