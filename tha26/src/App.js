import Input from "./components/Input";
import Output from "./components/Output";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux Demo</h2>
      </header>
      <div className="content">
        <Input />
        <Output/>
      </div>
    </div>
  );
};
export default App;