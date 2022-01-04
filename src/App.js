import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home.js";
import Description from "./components/description/description.jsx";
import Trending from "./components/trending/trending";
import { Route, BrowserRouter } from "react-router-dom";
import Stock from "./components/stockPage/stock.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/description" component={Description} />
        <Route path="/home" component={Home} />
        <Route path="/trending" component={Trending} />
        <Route path="/information" component={Stock} />
      </BrowserRouter>
    </div>
  );
}

export default App;
