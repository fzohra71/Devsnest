import Card from "./components/Card"
import "./style.css"
function App() {

    return(
      <div className="App"> <Navbar/>
      <Card/>
      <Card/><Card/>
  <h1>Hello World!</h1>
      </div>
    )
  }
  
  function Navbar(){
    return<h1>Navbar</h1>
  }

export default App;