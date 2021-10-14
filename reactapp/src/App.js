import './App.css';
import Greet from './componenets/Greet';
import Test from './componenets/Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Test></Test> */}

       <Greet name="Bruce" heroName="Batman">
         <p>This is children props</p>
         <button>Click Here</button>
       </Greet>

       <Greet name="Clark" heroName="Superman"></Greet>
       <Greet name="Diana"  heroName="Wonder Women"></Greet>

      </header>
    </div>
  );
}

export default App;
