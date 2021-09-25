import "./App.css";
import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import Description from "./components/description/description.jsx";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route exact path="/description" component={Description} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
