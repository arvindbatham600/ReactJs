import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionalClickHandler from "./FunctionalClickHandler";
import ClassClickHandler from "./ClassClickHandler";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind /> */}
      {/* <FunctionalClickHandler />
      <ClassClickHandler /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Arvind">
        <button>Action</button>{" "}
      </Greet>
      <Greet name="Alex" />
      <Greet name="BS" /> */}

      {/* <Welcome name="Arvind" />
      <Welcome name="Alex" />
      <Welcome name="BS" /> */}
    </div>
  );
}

export default App;
