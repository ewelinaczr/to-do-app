import { useContext, Fragment } from "react";
// components
import Search from "./components/Search";
import ToDoList from "./components/ToDoList";
import { SingleToDoProvider } from "./components/context/SingleToDoContext";
import { AllToDoProvider } from "./components/context/AllToDoContext";

function App() {
  return (
    <Fragment>
      <AllToDoProvider>
        <SingleToDoProvider>
          <Search />
          <ToDoList />
        </SingleToDoProvider>
      </AllToDoProvider>
    </Fragment>
  );
}

export default App;
