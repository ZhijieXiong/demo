import React from 'react';

// 这是第一个子项目：实际上Produc不需要状态，它只是一个功能。您传入一些东西（例如名称，价格等），
// 它弹出一个呈现在屏幕上的JSX元素。这个元素不会改变，因为它总是根据给定的props做同样的事情。
// class Product extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clickCounter: 0,
//     };
//     this.addToCart = this.addToCart.bind(this);
//   }

//   addToCart(event) {
//     if (this.props.limit === 0) {
//       alert("该商品缺货");
//     } else if (this.state.clickCounter > this.props.limit) {
//       alert("您到购物车有太多" + this.props.productName);
//     } else {
//       this.setState({
//         clickCounter: this.state.clickCounter+1
//       }, () => {
//         alert("购物车中有" + this.state.clickCounter + "个" + this.props.productName);
//       });
//     }
//   }

//   render() {
//     return (
//       <div className="card">
//         <div className="content">
//           <div className="header">{this.props.productName}</div>
//           <div className="description">
//             价格：{this.props.price}元
//           </div>
//         </div>
//         <div className="ui bottom attached button" onClick={(e) => {this.addToCart(e)}}>
//           <i className="add icon"></i>
//           添加到购物车
//         </div>
//       </div>
//     );
//   } 
// }


function Product(props) {
  return (
    <div className="card">
      <div className="content">
        <div className="header">{props.productName}</div>
        <div className="description">
          价格：{props.price}元
        </div>
      </div>
      <div className="ui bottom attached button" onClick={() => {props.onAddToCart(props.productName, props.price)}}>
        <i className="add icon"></i>
        添加商品到购物车
      </div>
      <div className="ui bottom attached button" onClick={() => {props.onMinusFromCart(props.productName)}}>
        <i className="minus icon"></i>
        移除一件商品
      </div>
      <div className="ui bottom attached button" onClick={() => {props.onDeleteGoods(props.productName)}}>
        <i className="icon"></i>
        从购物车中删除该商品
      </div>
    </div>
  );
}

export default Product;