// Function to filter out falsy values, can do !!value for actual
// or !value for opposite ex) !!5 is true value, !5 is false value,
// 5 is true
function filterOutFalsy(value1, value2){
    return value1 == false ? value1 : value2;
}
console.log(filterOutFalsy(0,500));
console.log(filterOutFalsy(false,100));
console.log(filterOutFalsy(true,'Dog'));

// Function to return the length of any given array
function arrLength(arr){
    return arr.length;
}
console.log(arrLength([1,2,3]));
console.log(arrLength([5,0,-4,1]));
console.log(arrLength([]));

// Function that gets the last element in an array
function lastElem(arr){
    return arr[arr.length - 1];
}
console.log(lastElem([3,2,0,6,2]));
console.log(lastElem(['dog','cat','ball']));
console.log(lastElem([null,5,false]));

// Function that finds the sum of an array
function arrSum(arr){
    let total = 0;
    for(let i = 0; i < arr.length; ++i){
        total = total + arr[i];
    }
    return total;
}
console.log(arrSum([2,2,2]));
console.log(arrSum([100,200,500]));
console.log(arrSum([0,-5,-10]));

// Function that adds up the numbers from a single number
function progressiveSum(num) {
    let sum = 0;
    for (let i = 0; i <= num; ++i){
        sum = sum + i;;
    }
    return sum;
}
console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));

// Function that calculates time
// Change to string and get the length of the string, if equal
// to one add a string '0' in front of it
function calcTime(seconds) {
    let ss = seconds % 60;
    let mm = Math.floor(seconds / 60);
    if (mm.toString().length === 1){
        mm = '0' + mm
    }
    if (ss.toString().length === 1){
        ss = '0' + ss
    }
    let time = mm + ':' + ss;
    return time;
}
console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));

// Function to find the largest number in an array
function getMax(arr) {
    let max = arr[0];
    for(let i = 0; i < arr.length; ++i){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max
}
console.log(getMax([5,10,0]));
console.log(getMax([12,10,-20]));
console.log(getMax([-300,-100,-200]));

// Function that reverse a string
/**
 * Incrementing For Loop
 * parse the string, then add the letter before the new string
 */
function reverseString(string) {
    let newString = ""
    for (let i = 0; i < string.length; ++i){
        let letter = string[i];
        newString = letter + newString;
    }
    return newString;
}
console.log(reverseString('abc'));
console.log(reverseString('David'));
console.log(reverseString('This is cool'));

// Function that reverse a string
/**
 * Decrementing For Loop
 * parse the string starting the end of the string using i = string.length -1
 * then add the letter after the new string 
 */
function reverseString2(string) {
    let newString = ""
    for (let i = (string.length - 1); i >= 0; --i){
        let letter = string.charAt(i);
        newString = newString + letter;
    }
    return newString;
}
console.log(reverseString2('abc'));
console.log(reverseString2('David'));
console.log(reverseString2('This is cool'));

// Function that reverse a string
/**
 * Array Reverse Method
 * Variable array of strings stores string.split which
 * turns a string into an array.
 * Afterwards use array.reverse() to reverse the array 
 * Then use array.join() to join the array back together 
 */
function reverseString3(string) {
    let arrayOfStrings = string.split("");
    return arrayOfStrings.reverse().join('');
}
console.log(reverseString3('abc'));
console.log(reverseString3('David'));
console.log(reverseString3('This is cool'));

// Function that turns every element in an array to 0
/**
 * For loop method, parses the array and sets all indexes 
 * of new array to 0
 */
function convertToZeros(arr) {
    let newArray = []
    for(let i = 0; i < arr.length; ++i){
        newArray.push(arr[i] * 0)
    }
    return newArray
}
console.log(convertToZeros([5,100,0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1,2,3,4,5]));

// Function that turns every element in an array to 0
/**
 * Map Method, this maps (converts) every index of an array by 
 * changing it to zero (or anything you choose)
 */
function convertToZeros2(arr) {
    let updatedArr = arr.map((element) => 0)
    return updatedArr
}
console.log(convertToZeros2([5,100,0]));
console.log(convertToZeros2([12]));
console.log(convertToZeros2([1,2,3,4,5]));

// Function that turns every element in an array to 0
/**
 * Fill Method, This allows us to return a new array 
 * that has the length of original arr.length, but filled
 * with zeros
 */
function convertToZeros3(arr) {
    return new Array(arr.length).fill(0);
}
console.log(convertToZeros3([5,100,0]));
console.log(convertToZeros3([12]));
console.log(convertToZeros3([1,2,3,4,5]));

// Function that filters out 'Apple'
/**
 * For loop method, traverse the array and checks each index of array,
 * if the element is not 'Apple' push it onto new array
 */
function removeApples (arr) {
    let updatedArr = [];
    for(let i = 0; i < arr.length; ++i){
        if (arr[i]!=='Apple'){
            updatedArr.push(arr[i]);
        }
    }
    return updatedArr
}
console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));
console.log(removeApples(['Tomato', 'Orange', 'Banana']));
console.log(removeApples(['Banana', 'Orange', 'Apple']));

// Function that filters out 'Apple'
/**
 * Filter method, this allows us to return a new array  that is filtered,
 * and checks each element in the array to see if it is not 'Apple'
 */
function removeApples2 (arr) {
    let updatedArr = arr.filter(element => element !== 'Apple')
    return updatedArr
}
console.log(removeApples2(['Banana', 'Apple', 'Orange', 'Apple']));
console.log(removeApples2(['Tomato', 'Orange', 'Banana']));
console.log(removeApples2(['Banana', 'Orange', 'Apple']));

// Function that filters out falsy values
/**
 * For Loop method, traverse through array then if !!arr[i],
 * so if array index element is true than add it to new array
 */
function filterOutFalsyValues(arr) {
    let updatedArr = [];
    for(let i = 0; i < arr.length; ++i){
        if (!!arr[i]){
            updatedArr.push(arr[i]);
        }
    }
    return updatedArr
}
console.log(filterOutFalsyValues(["", [], null, undefined, "0"]));
console.log(filterOutFalsyValues(['Tomato', 'Orange', 'Banana', false]));
console.log(filterOutFalsyValues(['Banana', 'Orange', 'Apple']));

// Function that filters out falsy values
/**
 * Filter method, this allows us to return a new array  that is filtered,
 * and checks each element in the array to see if it is true
 */
 function filterOutFalsyValues2(arr) {
    let updatedArr = arr.filter(element => !!element == true );
    return updatedArr;
 }
console.log(filterOutFalsyValues2(["", [], null, undefined, "0"]));
console.log(filterOutFalsyValues2(['Tomato', 'Orange', 'Banana', false]));
console.log(filterOutFalsyValues2(['Banana', 'Orange', 'Apple']));

// Function that returns true for truthy values and false for falsy values
/**
 * For Loop method, traverse through array then if !!arr[i],
 * so if array index element is true than add 'true' to new array
 * if array index element is false than add 'false' to new array
 * 
 */
function convertToBoolean(arr) {
    let updatedArr = [];
    for(let i = 0; i < arr.length; ++i){
        if (!!arr[i]){
            updatedArr.push('true');
        }
        if (!arr[i]){
            updatedArr.push('false');
        }
    }
    return updatedArr
}
console.log(convertToBoolean(["", [], null, undefined, "0"]));
console.log(convertToBoolean(['Tomato', 'Orange', 'Banana', false]));
console.log(convertToBoolean(['Banana', 'Orange', 'Apple']));
console.log(convertToBoolean([500, 0, "David", "", []]));

// Function that returns true for truthy values and false for falsy values
/**
 * You can map every element to see if it is truthy or falsy using !!element
 */
function convertToBoolean2 (arr) {
    return updatedArr = currentArr.map((element) => !!element)
}
console.log(convertToBoolean2(["", [], null, undefined, "0"]));
console.log(convertToBoolean2(['Tomato', 'Orange', 'Banana', false]));
console.log(convertToBoolean2(['Banana', 'Orange', 'Apple']));
console.log(convertToBoolean2([500, 0, "David", "", []]));