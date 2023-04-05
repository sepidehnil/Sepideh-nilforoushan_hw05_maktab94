////////////////soal1
const user = {
  name: "john",
  age: 30,
  sayHelllo: function () {
    console.log(`Hello ${this.name}`);
  },
};
user.sayHelllo();
