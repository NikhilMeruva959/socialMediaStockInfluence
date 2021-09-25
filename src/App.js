import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home.jsx";
import Description from "./components/description/description.jsx";
import Trending from "./components/trending/trending"
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/description" component={Description} />
        <Route path="/home" component={Home} />
        <Route path = "/trending" component={Trending}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
