// 1、小知识点
// （1）布尔值的jsx语法： <Timer autoPlays />   等价于   <Timer autoPlays={true} />
// 同理：<Timer />   等价于   <Timer  autoPlays={false} />



// 2、改变状态的办法
// （1）this.setState(obj)
// （2）this.setState((prevState, props) => {retrun obj})，这种更为准确，因为setState是异步的
//     其中prevStates是之前的状态，props是接收到的参数
// （3）setState会将接收到的参数（对象）合并到state中，所以才可以只更新一个状态
// （4）为什么不能直接该this.state：setState()方法通过一个队列机制实现state更新，当执行setState()的时候，
//     会将需要更新的state合并之后放入状态队列，而不会立即更新this.state(可以和浏览器的事件队列类比)。
//     如果我们不使用setState而是使用this.state.key来修改，将不会触发组件的re-render。
//     如果将this.state赋值给一个新的对象引用，那么其他不在对象上的state将不会被放入状态队列中，
//     当下次调用setState()并对状态队列进行合并时，直接造成了state丢失。


// 问题：1、在Timer里转换状态（BREAK和WORK）时，要重新初始化一个定时器，需不需要清除原来那个定时器，还是只需要在
//         componentWillUnmount里面清除