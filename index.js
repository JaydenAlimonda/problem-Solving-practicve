/*

// var numArr = [3, 6, 2, 56, 32, 5, 89, 32];
function large (arr) {
    var largest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (largest < arr[i] ) {
            largest = arr[i];
        }
    }
return largest
}
//console.log(large([3, 5, 2, 8, 1]));
console.log( large ([6, 13, 250, 3]));
console.log(large([3, 5, 2, 8, 1])) // => 8
console.log(large([-13, 40, 3, 0, 19, 22]))

*/

var bla = ["poo!", "pee", "poopoo!"]
function finder (arr, targetChar) {
    var targerWords = []

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].includes(targetChar)){
            targerWords.push(arr[i])
    }
    }
    return targerWords
}
console.log(finder(["$hello!", "%%^%%", "test!"] , "!"))
console.log(finder(["#3", "$$$", "C%4!", "Hey!"], "!"))
console.log(finder(["yellow", "green", "^up^", "down", "dog"], "h"))

function isDivisible (num1 , num2 ){
    var divisible = false
if (num1 % num2 == 0) {
    var divisible = true
}
return divisible
}

console.log(isDivisible(4, 2))
console.log(isDivisible(9, 3))
console.log(isDivisible(15, 4))