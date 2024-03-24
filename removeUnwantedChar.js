const sumArr = (arr) => {
   
    let newArr= [];
            arr.forEach(val => {
                let clean_val = val.replace(/[^0-9]/g, "")//first find such character thet is not digit,then replace
                // console.log(Number(clean_val),typeof clean_val)
                // clean_val = Number(clean_val);
                if(clean_val!=="")
                newArr.push(Number(clean_val))
               
 
            });
     // console.log(newArr)
    return newArr.reduce((acc,cur)=>acc+cur,0)
    // console.log(sum,"sum")
};

console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"])); // 1512
console.log(sumArr(["asdasd"])); // 0
console.log(sumArr(["asdasd12"])); // 12
console.log(sumArr(["12"])); // 12
// =========================================================================================
const sumArr1 = (arr) => {
    // Regular expression to match only digits
    const regex = /\d+/g;
    let sum = 0;

    // Iterate through each element of the array
    arr.forEach((item) => {
        // Match all the numbers in the current item
        const numbers = item.match(regex);

        if (numbers) {
            // Sum up the matched numbers
            numbers.forEach((number) => {
                sum += parseInt(number);
            });
        }
    });

    return sum;
};

console.log(sumArr1(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"])); // 1512
console.log(sumArr1(["asdasd"])); // 0
console.log(sumArr1(["asdasd12"])); // 12
console.log(sumArr1(["12"])); // 12

