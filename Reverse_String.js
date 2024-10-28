// Write a function to reverse a string.

function word(string){
    let reversed = string.split("").reverse().join("");
    return reversed;

}

console.log(word("TENET"));