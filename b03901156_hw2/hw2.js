// getType function;
function getType(obj) {
  if (typeof (obj) === 'number') {
    if (isNaN(obj)) {
      return 'NaN';
    }
    else { return typeof (obj); }
  }
  else { return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase(); }
}

//counter function;
function counter() {
  let count = 0;
  return {
    getCount: function () {
      return count;
    },
    increase: function () {
      count += 1;
    },
    decrease: function () {
      count -= 1;
    },
  };
}

//currying functiion;
function curry(func) {
  let num = func.length;
  return function func1() {
    let args = Array.prototype.slice.call(arguments, 0);
    if (num <= args.length) {
      return func.apply(null, args);
    }
    else{
      return function func2() {
        let args2 = Array.prototype.slice.call(arguments, 0);
        return func1.apply(null, args.concat(args2));
      };
    }
  };
}

let curringSum = curry(function (x, y, z) {
  return x + y + z;
});
