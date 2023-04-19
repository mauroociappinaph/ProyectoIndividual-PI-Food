import { Route } from "react-router-dom";

import Create from "./views/Principal/Create/Create";
import Detail from "./views/Principal/Detail/Detail";
import HomePage from "./views/home/HomePage";

function App() {
  return (
    
      <div>
        <Route exact path="/home" component={HomePage} />
        <Route path="/home/:id" component={Detail} />
        <Route path="/create" component={Create} />
      </div>
   
  );
}

export default App;
