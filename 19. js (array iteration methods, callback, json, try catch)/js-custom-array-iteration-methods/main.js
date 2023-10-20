//Custom array method
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//custom map
Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

//custom filter
Array.prototype.myFilter = function (predicate) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

//custom find
Array.prototype.myFind = function (predicate) {
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i], i, this)) {
      return this[i];
    }
  }
};


// let arr = [1, 3, 8, 7, 4, 9, 11];
// const result = arr.myFind((item, idx, obj) => item % 2 == 0);
// console.log(result);
