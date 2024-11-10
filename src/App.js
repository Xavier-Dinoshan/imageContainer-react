import React from "react";
import dog from "./dog.png"
import "./style.css"
import d1 from "./d1.png"
import d2 from "./d2.png"
import d3 from "./d3.png"



function Conta(props) {
  return (
    <div class="img-container">
      <img style={{ width: "200px", height: "250px" }} src={props.img}></img>
      <h2>{props.name}</h2>
    </div>
  );
}


var imagess = [
  {
    name: "Julie's Rabbit Ears",
    img: d1
  },
  {
    name: "The Innocent Look",
    img: dog
  },
  {
    name: "Big Eyed Bugg",
    img: d2
  },
  {
    name: "The Sanit Doggo",
    img: d3
  },
  {
    name: "Big Eyed Buggy",
    img: d3
  },
  {
    name: "The Innocent Look",
    img: d2
  },
  {
    name: "The Sanit Doggo",
    img: dog
  },
  {
    name: "The Innocent Look",
    img: d1
  },
]

function App() {

  return (

    <>
      <div class="container">
        {imagess.map(function (item) {
          return <Conta name={item.name} img={item.img}></Conta>
        })}
      </div>
    </>
  );
}

export default App;
