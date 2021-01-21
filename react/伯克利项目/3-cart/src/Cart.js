import React from "react";
import Product from "./Product";
import ProductData from "./Data";
import Receipt from "./Receipt";
import "./styles/cart.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
    this.getItemIndex = this.getItemIndex.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleDeleteGoods = this.handleDeleteGoods.bind(this);
    this.handleMinusFromCart = this.handleMinusFromCart.bind(this);
  }

  getItemIndex(productName) {
    let itemIndex = -1;
    this.state.cartItems.forEach((item, index) => {
      if (item.productName === productName) {
        itemIndex = index;
      }
    });
    return itemIndex;
  }

  handleAddToCart(productName, price) {
    // 不使用forEach
    // let itemIndex = -1;
    // for (let index in this.state.cartItems) {
    //   if (this.state.cartItems[index].productName === productName) {
    //     itemIndex = index;
    //     break;
    //   }
    // }
    let itemIndex = this.getItemIndex(productName);
    // 不知道怎么样用reduce实现
    // this.state.cartItems.reduce((previousItem, currentItem, currentIndex) => {
    //   if (currentItem.name === productName) {
    //     ItemIndex = currentIndex;
    //   }
    //   return ItemIndex;
    // }, -1);
    if (itemIndex === -1) {
      this.setState({
        cartItems: [...this.state.cartItems, {productName, price, count: 1}]
      });
    } else {
      let newCartItems = [...this.state.cartItems];
      newCartItems[itemIndex].count += 1;
      this.setState({
        cartItems: newCartItems
      });
      
    }
  }

  handleMinusFromCart(productName) {
    let itemIndex = this.getItemIndex(productName);
    if (itemIndex !== -1) {
      let newCartItems = [...this.state.cartItems];
      newCartItems[itemIndex].count -= 1;
      if (newCartItems[itemIndex].count === 0) {
        newCartItems.splice(itemIndex, 1);
      }
      this.setState({
        cartItems: newCartItems
      });
    }
  }

  handleDeleteGoods(productName) {
    let itemIndex = this.getItemIndex(productName);
    if (itemIndex !== -1) {
      let newCartItems = [...this.state.cartItems];
      newCartItems.splice(itemIndex, 1);
      this.setState({
        cartItems: newCartItems
      });
    }
  }

  render() {
    return (
        <div className="page-content">
            {/* <h2>Add your products here!</h2>  */}
            <div className="ui cards">
              {ProductData.products.map((product) => {
                return (
                  <Product 
                  key={product.name} 
                  productName={product.name} 
                  price={product.cost} 
                  onAddToCart={this.handleAddToCart} 
                  onDeleteGoods={this.handleDeleteGoods} 
                  onMinusFromCart={this.handleMinusFromCart}
                  />
                )
              })}
            </div>
            <Receipt 
            cartItems={this.state.cartItems} 
            />
        </div>
    );
  }

}

export default Cart;
