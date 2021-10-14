import './App.css';
import Greet from './componenets/Greet';
import Message from './componenets/Message';
import Test from './componenets/Test';
import Welcome from './componenets/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Test></Test> */}

       {/* <Greet name="Bruce" heroName="Batman">
         <p>This is children props</p>
         <button>Click Here</button>
       </Greet>

       <Greet name="Clark" heroName="Superman"></Greet>
       <Greet name="Diana"  heroName="Wonder Women"></Greet>


       <Welcome name="Tony"  heroName="Iron man"></Welcome>
       <Welcome name="John"  heroName="Turtule Ninja"></Welcome> */}

       <Message/>

      </header>
    </div>
  );
}

export default App;
