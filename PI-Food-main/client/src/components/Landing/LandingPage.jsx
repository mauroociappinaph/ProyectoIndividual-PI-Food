
import React from "react";
import { Link } from "react-router-dom";

const  LandingPage = () => {
  
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <Link to="/home">
      <button>Click me</button>
      </Link>
    </div>
  );
};


export default  LandingPage