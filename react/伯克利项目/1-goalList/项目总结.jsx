// 1、列表渲染：react会自动渲染数组，例子如下
<ul className="item-list">
  {this.state.goals.map((item, index) => (
    <Item key={index} text={item} changeGoalsNumber={this.changeGoalsNumber} />
  ))}
</ul>



// 2、父子组件通信（react是单向数据流）
// （1）父组件改变子组件状态：父组件传递参数props给子组件，子组件根据props改变state
// （2）子组件改变父组件状态：父组件中定义可以改变状态的函数，将此函数作为props传递给子组件，
//     在子组件内部调用该函数以改变父组件状态



// 3、setState是异步操作，调用setState后状态不会立马改变，如果想要立即获得新的state，需要传入一个回调函数
class Item extends React.Component {
  constructor(props) {
    // ...
  }

  toggleDone() {
    this.setState({
      isDone: !this.state.isDone
    }, () => {
      this.props.changeGoalsNumber(this.state.isDone);
    });
  }

  render() {
    // ...
  }
}