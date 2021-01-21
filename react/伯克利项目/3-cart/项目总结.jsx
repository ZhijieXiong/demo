// 1、列表渲染的key，方法如下
{items.map((item, index) => {
  return (
    <p key={index}>item</p>
  );
})}
// 为什么要添加key
/*
为了提高性能：给列表里每一个元素记一个key，这样列表改变，当react重新渲染时，会通过对比key来决定是否需要重新渲染这个元素
比如只是改变了数组中元素的位置，key没变，那么只会交换列表元素的位置，不会重新渲染
注意：不要使用数组的index作为key，这样的话改变数组元素的位置，react会删除原来的节点重新渲染，会降低性能
     即每一个key需要是独一无二的
不建议将索引用作键，因为项目的顺序可能会更改，并且可能会对性能产生负面影响。
React使用键作为启发式算法来实现O（n）差异树的算法，而不是O（n ^ 3），这是用于生成将一棵树转换为另一棵树的最小操作数的最新技术！）。
(https://reactjs.org/docs/reconciliation.html)
*/

// 2、什么样的组件不需要状态：在该例子中Produc不需要状态，它只是一个功能。我们传入一些东西（例如名称，价格等），
// 它弹出一个呈现在屏幕上的JSX元素。这个元素不会改变，因为它总是根据给定的props做同样的事情。


// 3、类组件的方法需要绑定，错误例子如下
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
    this.getItemIndex = this.getItemIndex.bind(this);
    // this.handleAddToCart = this.handleAddToCart.bind(this);  不绑定
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
    let itemIndex = this.getItemIndex(productName);  // 因为没有绑定，所以报错getItemIndex不是一个函数
    // ...
  }

  render() {
    // ...
  }
}
// 为什么要绑定