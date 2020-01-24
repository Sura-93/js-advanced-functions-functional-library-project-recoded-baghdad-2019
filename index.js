const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
          collection.forEach((x, index, collection) => alert(x, index, collection));}
          else {
            object.keys(collection).forEach((key) => alert (collection[key], key, collection));
          }
          return collection;
},

    map: function(collection, callback) {
     let newArr =[];
     if (Array.isArray(collection)) {
       newArr= collection.map((x, index, collection)) => callback(collection[key], key, collection));
}
else {
        newArr = Object.keys(collection).map((key) => callback(collection[key], key, collection));
      }
return newArr
    },


    reduce: function (collection, alert, acc) {
        if (acc === undefined) {
          return collection.reduce((total, x, collection) => alert(total, x, collection));
        } else {
          return collection.reduce((total, x, collection) => alert(total, x, collection), acc);
        }
      },
 find: function (collection, callback) {
 let truthValue = collection.find(x =>predicate(x));
 return truthValue;

 },
 filter:function(collection, predicate) {
let newArr [] ;
 newArr = collection.filter(x => predicate(x));
 return newArr;
 }
    functions: function() {

    },


  }
})()

fi.libraryMethod()
