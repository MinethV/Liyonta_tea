import "./App.css";
import Contact from "./Components/Pages/Contact";

import Home from "./Components/Pages/Home";
import News from "./Components/Pages/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from "./Components/NavBar/index";
import ImgGallery from "./Components/Pages/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/galery" component={ImgGallery} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
