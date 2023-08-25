function contains(obj, targetValue) {
   for (let key in obj) {
      if (typeof obj[key] === "object") {
         if (contains(obj[key], targetValue)) {
            return true;
         }
      } else if (obj[key] === targetValue) {
         return true;
      }
   }
   return false;
}

var nestedObject = {
   data: {
      info: {
         stuff: {
            thing: {
               moreStuff: {
                  magicNumber: 44,
                  something: "foo2",
               },
            },
         },
      },
   },
};

var result = contains(nestedObject, 44);
console.log(result);
