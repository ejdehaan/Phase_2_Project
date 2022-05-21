import AddInspiration from "./components/AddInspiration";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Categories from "./components/Categories"
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <br/>
      <Navbar />
      <br/>

      <Switch>
        <Route path="/add-inspiration">
          <AddInspiration />
        </Route>

        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
