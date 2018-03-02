let arrayOfArrays = [[1,2,3,4], 1, [2,1], [[2], [2,1,1]]];

let log = arrayOfArrays.reduce((a,b) => a.concat(b), [])

console.log(log);

function flatten(arr) {
      return arr.reduce(function (flat, toFlatten) {
              return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
            }, []);
}

console.log(flatten(arrayOfArrays));

