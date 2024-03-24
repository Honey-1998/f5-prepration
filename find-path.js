/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (object, path) => {
    const keys = path.split('.');
    
    // Initialize a variable to keep track of the current value
    let value = object;
    
    // Iterate over each key in the keys array
    for (let key of keys) {
        // If the current value is an object and it has the current key,
        // update the value to the value of the current key
        if (value && typeof value === 'object' && key in value) {
            value = value[key];
        } else {
            // If the key is not found or the value is not an object, return undefined
            return undefined;
        }
    }
    
    // Return the final value found at the end of the path
    return value;

};


console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null
