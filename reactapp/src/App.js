import './App.css';
import Counter from './componenets/Counter';
import ErrorBoundary from './componenets/ErrorBoundary';
import EventBind from './componenets/EventBind';
import Form from './componenets/Form';
import Greet from './componenets/Greet';
import Hero from './componenets/Hero';
import Message from './componenets/Message';
import NameList from './componenets/NameList';
import ParentComp from './componenets/ParentComp';
import ParentComponent from './componenets/ParentComponent';
import Test from './componenets/Test';
import UserGreetings from './componenets/UserGreetings';
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

       {/* <Message/> */}

       {/* <Counter/> */}

       {/* <EventBind/> */}

       {/* <ParentComponent/> */}

      {/* <UserGreetings/> */}

      {/* <NameList/> */}

      {/* <Form/> */}
      
      {/* <ParentComp/> */}

  <ErrorBoundary>
      <Hero heroname="Batman"/>
  </ErrorBoundary>

  <ErrorBoundary>
      <Hero heroname="Antman"/>
  </ErrorBoundary>
  
  <ErrorBoundary>
      <Hero heroname="Joker"/>
  </ErrorBoundary>


      </header>
    </div>
  );
}

export default App;
