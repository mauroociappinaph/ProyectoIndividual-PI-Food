import { Route, BrowserRouter, Switch } from "react-router-dom";

import Landing from "./components/Landing/LandingPage";
import Detail from "./components/Detail/Detail";

import HomePage from "./components/home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={HomePage} />
        <Route path="/detail/:id" component={Detail} />
      </div>
    </BrowserRouter>
  );
}

export default App;

       //  <Route path="/form" component={Form} />