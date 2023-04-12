import logo from './logo.svg';
import './App.css';
import StatefulFunc from './Components/StatefulFunc';
import StatefulClass from './Components/StatefulClass';
import Form from './Day5/3)Form'
import ShowFormInput from './Day5/1)ShowFormInput';
import DeleteItem from './Day5/4)DeleteItem';

function App() {
  return (
    
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <StatefulFunc/>
      <StatefulClass/> */}
      {/* <ShowFormInput/>
      <Form/> */}
      <DeleteItem/>
    </div>
  );
}

export default App;
