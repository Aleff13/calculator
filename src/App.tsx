import "./App.css";
import { Calculator, Header } from "./components";
import useCalc from "./hooks/useCalc";

function App() {
  const { values, ...methods } = useCalc();

  return (
    <div className="container" onKeyDown={(event) => console.log(event.key)}>
      <Header {...values}></Header>

      <Calculator {...methods}></Calculator>
    </div>
  );
}

export default App;
