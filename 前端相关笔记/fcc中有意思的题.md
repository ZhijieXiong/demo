- 使用箭头函数的语法来计算`squaredIntegers`数组里正整数的平方（分数不是整数）。

  ```javascript
  const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
  const squareList = (arr) => {
    "use strict";
    // 在这行以下修改代码
    const squaredIntegers = arr.filter((item) => item > 0 && item % 1 == 0).map((item) => item*item);
    // 在这行以上修改代码
    return squaredIntegers;
  };
  // 测试你的代码
  const squaredIntegers = squareList(realNumberArray);
  console.log(squaredIntegers);
  ```

- 使用解构语法去得到输入的`str`字符串的长度，并将长度赋值给`len`

  ```
  
  ```

  