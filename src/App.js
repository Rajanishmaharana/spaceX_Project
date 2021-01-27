import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LunchProgram from "./component/feature/Lunch-program/LunchProgram";
import { Spinner } from "react-bootstrap";
import { useStateValue } from "./context/StateProvider";

function App() {

  const [{isLoading} , dispatch] = useStateValue();

  console.log(isLoading)
  return (
    <div className="App">

        <LunchProgram />
    </div>
  );
}

export default App;
