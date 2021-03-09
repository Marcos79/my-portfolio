import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import  Project from "./components/Project";
import Navbar from "./components/NavBar";
import "tailwindcss/tailwind.css"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>

      
      <Route component = {Home} path = '/' exact />
      <Route component = {About} path = '/about' />
      <Route component = {Project} path = '/project' />

      
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
