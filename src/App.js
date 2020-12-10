import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">


          <button type="button" className="btn btn-primary" id="discoverPrinterBtn" >Click Me</button>

        </div>
      </header>
    </div>
  );
}

export default App;
