import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/products";
import ShoppingCart from "./components/shopping-cart";

class App extends Component {
  state = {
    items: [],
  };

  addItem = (amount, name, price) => {
    let currentItems = this.state.items;

    let existingItem = this.state.items.find((item) => item.name === name);
    if (existingItem) {
      existingItem.amount++;
    } else {
      currentItems.push({
        amount,
        name,
        price,
      });
    }
    this.setState({ items: currentItems });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main-container">
          <div className="fruit-container">
            <Product
              onAdd={() => this.addItem(1, "Orange", 2.99)}
              title="Orangen"
              img="/assets/oranges.jpg"
              description="Unsere Orangen wurden frisch aus Übersee eingeflogen und werden reif und saftig geliefert"
            />
            <Product
              onAdd={() => this.addItem(1, "Äpfel", 4.99)}
              title="Äpfel"
              img="/assets/apple.jpg"
              description="Die schönsten Äpfel aus Deutschland"
            />
            <Product
              onAdd={() => this.addItem(1, "Birnen", 4.99)}
              title="Birnen"
              img="/assets/pears.jpg"
              description="Birnen direkt vom Baum ihn ihren Mund"
            />
            <Product
              onAdd={() => this.addItem(1, "Himbeeren", 8.99)}
              title="Himbeeren"
              img="/assets/raspberries.jpg"
              description="Süße kleine Verführungen, die am besten in wunderbaren Momenten genosst werden"
            />
          </div>
          <ShoppingCart items={this.state.items} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
