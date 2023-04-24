import { Route } from "react-router-dom";

import Landing from "./views/Principal/Landing/Landing";
import Detail from "./views/Principal/Detail/Detail";
import Form from "./views/Principal/Form/Form";
import HomePage from "./views/home/HomePage";

function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={HomePage} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/form" component={Form} />
    </div>
  );
}

export default App;
