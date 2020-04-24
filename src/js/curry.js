// const t = {
//   a: {
//       b: (x, y) => x + y,
//       c: (x, y) => x - y,
//   },
//   d: (x, y, z) => x + y + z
// }

const t = {
  a: {
    b: {
      c: (x, y) => x + y,
      d: (x, y) => x - y,
    },
  },
  e: (x, y, z) => x + y + z
}

function curryFn(obj) {
  const newObj = {};
  return function (x, y, z) {
      for (let [key, value] of Object.entries(obj)) {
          if (typeof(value) === "function") {
              newObj[key] = value(x, y, z);
          } else if (typeof(value) === "object") {
              newObj[key] = curryFn(value)(x, y, z);
          } else {
              newObj[key] = value;
          }
      }
      return newObj;
  }
}
const output = curryFn(obj)(2,3,4);
console.log(output);

// const o ={
//   a: {
//     b: {
//       c: 5,
//       d: -1,
//     },
//   },
//   e: 9
// }

