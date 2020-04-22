const t = {
  a: {
      b: (x, y) => x + y,
      c: (x, y) => x - y,
  },
  d: (x, y, z) => x + y + z
}

// curryFn(t)(2,3,4)

o =>
{
  a: {
      b: 5,
      c: -1,
  },
  d: 9
}

function curryFn(obj) {
  let newObj ={}
  return function(x, y, z) {
    for(key in obj) {
      if obj[key] is an object
      curryFn(obj[key])
      else 
      let k = obj[key]
      newObj[key] = {b: k(x, y)}

      
    }
  }
  return { a: { }}
}
