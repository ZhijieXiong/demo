import React from "react";

class Receipt extends React.Component {
  renderItem(item, index) {
    return (
    <div className="receipt-item" key={index}> {/* key也可以用item.name */}
      <div className="receipt-text">
        {item.productName} x {item.count}
      </div>
      <div className="receipt-text">
        {item.price} 元
      </div>
    </div>
  );
  }

  render() {
    let totalPrice = 0;
    this.props.cartItems.forEach((item) => {
      totalPrice += item.price * item.count;
    })
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {this.props.cartItems.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">{totalPrice}元</div>
        </div>
      </div>
    );
  }
}

export default Receipt;
