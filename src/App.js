import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/home/home.jsx";
import Login from "./components/login/login.jsx";
import Main from "./components/main/main.jsx";

function App() {
  <div>
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/login" component={Main} />
    </BrowserRouter>
  </div>;
}

export default App;
