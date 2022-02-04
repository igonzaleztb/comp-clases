import React, { Component } from "react";
import "./App.css";
import List from "./List/List";
class App extends Component {
 
 

  render() {
    return (
      <div className="container">
    
     <h1>LISTA DE LA COMPRA</h1> 
     <div className="container-products">
        <List  product={"Tomates"}/>
        <List  product={"Manzanas"}/>
        <List  product={"Zanahorias"}/>
        <List  product={"Zanahorias"}/>
        
        
        </div>
      </div>
    );
  }
}

export default App;
