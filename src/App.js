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
        {
        	isLoading?(<div className="loder"><Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner></div>):null
      	}
        <LunchProgram />
    </div>
  );
}

export default App;
