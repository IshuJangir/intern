import React from "react";
import Heading from "./components/Heading";
import Card from "./components/Card";
import reviews from "./data";

const App = () => {
  
  return(
    <div className="bg-[#e5e7eb] h-[100vh] overflow-hidden ">
        
        <Heading></Heading>
        <Card reviews={reviews}></Card>
    </div>
  );
};

export default App;
