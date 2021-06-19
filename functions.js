// 해시
////// 배열의 원소를 카운트하여 객체에 저장하는 함수//////
function arrayToObject(arr) {
    const obj = {}
    arr.forEach((el,idx,arr)=>{
          if(!obj[el]){
                obj[el]=1
          }else {
                obj[el]+=1
          }
    })
    return obj
}




/////////////// key Value 쌍을 객체로///////////////////
// [[0,a],[1,b],[2,c]]

const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }

const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }






///////////// 객체에서 entries 뽑아내기///////////////////
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }



///////////////문자열슬라이싱 ///////////////////////

const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"

