import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/products";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="fruit-container">
          <Product
            title="Orangen"
            img="/assets/oranges.jpg"
            description="Unsere Orangen wurden frisch aus Übersee eingeflogen und werden reif und saftig geliefert"
          />
          <Product
            title="Äpfel"
            img="/assets/apple.jpg"
            description="Die schönsten Äpfel aus Deutschland"
          />
          <Product
            title="Birnen"
            img="/assets/pears.jpg"
            description="Birnen direkt vom Baum ihn ihren Mund"
          />
          <Product
            title="Himbeere"
            img="/assets/raspberries.jpg"
            description="Süße kleine Verführungen, die am besten in wunderbaren Momenten genosst werden"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
