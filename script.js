Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
onus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] 
should return [[1,2], ["2", "3"]]

//sol:
debugger;
let ArrayFromAbove = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
var array = ArrayFromAbove.sort((a,b) => a - b);
console.log(array);
//stackoverflow answer
let grouped = array.reduce((accumulator, currentValue, index, array) => {
    if (currentValue === array[index - 1]) {
        accumulator[accumulator.length - 1].push(currentValue);
    } else {
        accumulator.push(currentValue === array[index + 1] ? [currentValue] : currentValue);
    }
    return accumulator;
}, []);
    
console.log(grouped);


Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, 
give the target number. For example: answer([1,2,3], 4)should return [1,3]

//sol
//1. Naive approach with o(n^2)
//debugger;
return_array = [];
function answer(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === x) {
                return_array.push([arr[i], arr[j]]);
            }
        }
    }
return return_array;
}
answer([1,2,3], 4)


//using hashtable. o(n)
debugger;
function answer(arr, x) {
    sum = []
    hashTable = {}
    for (let i = 0; i <arr.length; i++) {
        let num2 = x - arr[i];
        if(hashTable[num2] !== undefined) {
            sum.push([arr[i], num2]);
        }
        hashTable[arr[i]] = arr[i];
    }
    return sum;
}
answer([1,2,3],4)





Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats 
so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

//sol:
function myFunction() {
    let input = prompt("Please enter the digit: ");
    const hex = '[0-9a-fA-F]';
    const re = new RegExp(`^(${hex}{4}|${hex}{7})$`);
    if(re.test(input)) {
       return hexToRGB(input);
    }
    else {
        return RGBToHex(input);
    }
}
myFunction();

function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return "rgb("+ +r + "," + +g + "," + +b + ")";  //variables are prepended with + to convert string back to numbers
}
//hexToRGB('2222')
//hexToRGB('4616625')

//debugger;
function RGBToHex(r,g,b) {
    let x = r.split(',').map(Number);
    r = x[0].toString(16);
    g = x[1].toString(16);
    b = x[2].toString(16);

    if(r.length == 1) {
        r = "0" + r;
    }
    else if (g.length == 1) {
        g = "0" + g;
    }
    else {
        b = "0" + b;
    }    
    return "#" + r + g + b;
}
//RGBToHex(252, 177, 3)

    
