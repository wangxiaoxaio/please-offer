/* 
    统计执行算法所需要的时间
*/
function spendT(arr, sort) {
  let start = Date.now();
  sort(arr);
  let end = Date.now();
  let time = (end - start) / 1000;
  console.log(sort.name + " spend time: " + time + " 秒");
}

/* 
    生成随机数组
*/
function providerArr(n, left, right) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let value = parseInt(Math.random() * right + left);
    arr.push(value);
  }
  return arr;
}

/*
    生成近乎有序的数组 
 */
function providerSortedArr(len, n) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  for (let i = 0; i < n; i++) {
    let x = parseInt(Math.random() * len);
    let y = parseInt(Math.random() * len);
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
  return arr;
}

/* 
    选择排序法，升序
*/
function selectedSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
}

/* 
    插入排序，升序
*/

function insertSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      let tmp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = tmp;
    }
  }
}

/* 插入排序优化版，升序 */

function insertSort1(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let ret = arr[i];
    let j; //该轮循环，位置i处的元素该插入的位置
    for (j = i; j > 0 && ret < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = ret;
  }
}

/* 
    冒泡排序，升序
*/
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}
/*  
    希尔排序，升序
    希尔排序：确定增量，根据增量对数组进行分组，对每一组进行插入排序，然后增量减半，重复以上过程，直到增量为1时，此时数组已经是’宏观‘上有序的了，只需要微调部分元素即可。
    e.g 
    arr = [9,4,3,56,2,8,1]
    当增量为
*/
function shellSort(arr) {
  let len = arr.length,
    i,
    j,
    temp,
    number = parseInt(len / 2); //number 为增量
  while (number >= 1) {
    //这层循环为不同增量下的分组
    for (i = number; i < len; i++) {
      //这层循环为对某个增量下的分组进行插入排序
      temp = arr[i];
      j = i - number;
      while (j >= 0 && arr[j] > temp) {
        //升序
        arr[j + number] = arr[j];
        j -= number;
      }
      arr[j + number] = temp;
    }
    number = parseInt(number / 2);
  }
}

let arr = providerArr(100000, 1, 100);
let arr1 = providerSortedArr(100000, 10);
spendT([].concat(arr1), selectedSort);
spendT([].concat(arr1), insertSort);
spendT([].concat(arr1), insertSort1);
spendT([].concat(arr1), bubbleSort);
spendT([].concat(arr1), shellSort);

console.log("*********************************");

spendT([].concat(arr), selectedSort);
spendT([].concat(arr), insertSort);
spendT([].concat(arr), insertSort1);
spendT([].concat(arr), bubbleSort);
spendT([].concat(arr), shellSort);
