- var、let、const

  - let声明将变量限制在一个作用域中（代码块，语句或表达式），在同一个作用域中，使用let声明的变量不能重名

  - var只会把变量声明为全局变量或者函数局部变量（如for循环对于var声明的变量来说就不是一个作用域）

  - 在一个作用域中可以使用"use strict"开启严格模式，这样所有新变量必须使用let或const声明

  - 例子

    ```javascript
    // ES5
    var fun;
    for (var i = 0; i < 3; i++) {
    	if (i === 1) {
            fun = function () {
                return i;
            }
        }
    }
    console.log(fun());  // 结果为：3
    console.log(i);  // 结果为：3
    
    // ES6
    let fun;
    for (let i = 0; i < 3; i++) {
    	if (i === 1) {
            fun = function () {
                return i;
            }
        }
    }
    console.log(fun());  // 结果为：1
    console.log(i);  // 结果为：i不存在/未定义
    ```

  - 使用const声明的非对象变量不可更改，例子如下

    ```javascript
    const TEST_DATA = 10;
    TEST_DATA = 100;  // 报错
    const ARR = [1, 2, 3];
    ARR = 100;  // 报错
    ARR[1] = 100;  // 不会报错
    ```

    - ES6中使用Object.freeze()冻结对象（即该对象的属性不能被增删改）

- 箭头函数

  ```javascript
  // 例子1:有函数体
  const fun = (a, b) => {
  	c = a * b;
  	return c;
  }
  
  // 例子2:无函数体，且只有一个返回值
  const fun = () => 100;
  ```

- 函数默认参数

- rest接受多个参数到一个变量

  ```javascript
  function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2)); // 输出：You have passed 3 arguments.
  console.log(howMany("string", null, [1, 2, 3], { })); // 输出：You have passed 4 arguments.
  ```

- spread展开一个数组：用在数组作函数参数时

  ```javascript
  // 例子1
  const arr = [6, 89, 3, 45];
  const maximus = Math.max(...arr); // 返回 89
  
  // 例子2
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr2;
  (function() {
    "use strict";
    arr2 = [...arr1]; // 改变这一行
  })();
  ```

- 解构语法

  ```javascript
  // 例子1
  let voxel = {x: 3.6, y: 7.4, z: 6.54 };
  const { x, y, z } = voxel;  // x = 3.6, y = 7.4, z = 6.54
  const { x : a, y : b, z : c } = voxel;  // a = 3.6, b = 7.4, c = 6.54
  
  // 例子2
  const a = {
    start: { x: 5, y: 6},
    end: { x: 6, y: -9 }
  };
  const { start : { x: startX, y: startY }} = a;
  console.log(startX, startY); // 5, 6
  
  // 例子3
  const [a, b] = [1, 2, 3, 4, 5, 6];
  console.log(a, b); // 1, 2
  const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, c); // 1, 2, 5
  
  // 例子4
  const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
  console.log(a, b); // 1, 2
  console.log(arr); // [3, 4, 5, 7]
  
  // 例子5：在函数参数中解构对象
  const profileUpdate = ({ name, age, nationality, location }) => {
    /* 对这些参数执行某些操作 */
  }
  ```

- 模版字面量

  ```javascript
  const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  // string interpolation
  // ${}为占位符，``扩起来的字符串可以换行
  const greeting = `Hello, my name is ${person.name}! 
  I am ${person.age} years old.`;
  
  console.log(greeting); // 打印出
  // Hello, my name is Zodiac Hasbro!
  // I am 56 years old.
  ```

- 语法糖

  ```javascript
  // 创建字面量对象
  const createPerson = (name, age, gender) => {
    "use strict";
    // 在这行以下修改代码
    return {
      name,
      age,
      gender
    };
    // 在这行以上修改代码
  };
  console.log(createPerson("Zodiac Hasbro", 56, "male")); // 返回正确的对象
  
  // 声明函数
  const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
  console.log(bicycle.gear);
  
  // 创建构造函数
  class SpaceShuttle {
    constructor(targetPlanet){
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');  // 自动调用constructor函数
  ```

- 获取和改变私有变量

  ```javascript
  class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer(){
      return this._author;
    }
    // setter
    set writer(updatedAuthor){
      this._author = updatedAuthor;
    }
  }
  const lol = new Book('anonymous');
  console.log(lol.writer);  // anonymous
  lol.writer = 'wut';
  console.log(lol.writer);  // wut
  ```

  - 注意getter和setter不是函数