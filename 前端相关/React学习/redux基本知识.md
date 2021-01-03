# 1、基本使用

- 流程如下

  - 第一步：创建sotre（`const store = createStore(reducer, defaultState)`）

    - store存储所有数据

  - 第二步：用户发出action（`const action = {type: "toDoSomething"}`），store通过dispatch改变state（`store.dispatch(state)`），从而改变view

    - state和view一一对应，可以通过getState获取state（`const state = store.getState()`）
    - dispatch是view发出action的唯一方法

  - 第三步：store收到action后，通过reducer计算出新的state

    ```javascript
    const reducer = function (state, action){
    	pass;
    	return newState;
    }
    ```

    - reducer无需手动调用，在创建store的时候就可以将reducer传入，这样store每次调用dispatch时就会自动触发reducer

  - 第四步：可以通过subscribe设置监听函数（`sconst unSubscribe = tore.subscribe(listener)`）

    - 可以通过subscribe来实现view的自动渲染
    - 调用unSubscribe可以中止监听