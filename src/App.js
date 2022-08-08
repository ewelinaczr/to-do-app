import { useContext, Fragment } from "react";
// components
import Search from "./components/Search";
import ToDoList from "./components/ToDoList";
import { SingleToDoProvider } from "./components/context/SingleToDoContext";
import { AllToDoProvider } from "./components/context/AllToDoContext";
import Calculator from "./calcComponents/Calculator";

function App() {
  return (
    <Fragment>
      <AllToDoProvider>
        <SingleToDoProvider>
          <Search />
          <ToDoList />
        </SingleToDoProvider>
      </AllToDoProvider>
      <Calculator />
    </Fragment>
  );
}

export default App;
