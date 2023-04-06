////////////////soal3
const array = [
  { name: "zahra", age: 5 },
  { name: "ali", age: 45 },
  { name: "sepideh", age: 20 },
  { name: "john", age: 15 },
];
function sortByAge(arr) {
  return arr.sort((a, b) => {
    return a.age - b.age;
  });
}
console.log(sortByAge(array));
