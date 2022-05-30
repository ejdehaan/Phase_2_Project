import AddInspiration from "./components/AddInspiration";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories"
import { Switch, Route } from 'react-router-dom'
import CategoryItem from "./components/CategoryItem";

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

        {/* <Route path="/categories">
          <Categories />
        </Route> */}

        <Route path="/">
          <Home />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
