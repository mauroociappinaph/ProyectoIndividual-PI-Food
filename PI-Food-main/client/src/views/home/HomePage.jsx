import Searchbar from "../../components/searchbar/Searchbar";
import Cards from "../../components/cards/cards";
import Paginator from "../../components/paginator/paginator";

import "./HomePage.module.css";


function HomePage() {
  return (
    <div className="App">
      <h1> Estoy Homepage </h1>
      <Searchbar />
      <Cards />
      <Paginator />

    </div>
  );
}

export default HomePage;

/*

*/
