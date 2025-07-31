console.log('Using Caesar Cipher ...') //shows that the script is running

const phrase = process.argv[2]; // first user input -> the phrase to encrypt
const shift = process.argv[3]; // second input -> letters to encrypt 

let stringToNumber = parseInt(shift) //turns the string (shift) into number
let encrypted = "" // is the result

//for... of loops are perfect for strings, forEach() is perfect for arrays
for (char of phrase) {
    let cryptoCode = char.charCodeAt(0) //charCodeAt() converts the char into ASCII

    if (cryptoCode >= 65 && cryptoCode <= 90) { //this checks if letter is an uppercase
       
        newCode = cryptoCode + stringToNumber
        if (newCode > 90) { //if it goes past Z(90) wrap around with -26
            newCode -= 26
            }
        if (newCode < 65) { //if it goes below, wrap forward with +26 
            newCode += 26
        }
        encrypted += String.fromCharCode(newCode) //convert newCode back to char with string.fromcharcode()

    } else if (cryptoCode >= 97 && cryptoCode <= 122) { // this checks the lowercase letters
      
        newCode = cryptoCode + stringToNumber
        if (newCode > 122) {
            newCode -= 26
        }
        if (newCode < 97) {
            newCode +=26
        }
        encrypted += String.fromCharCode(newCode)
    } else {
        encrypted += char //it it is not a letter, we add it as it is
    }
}

console.log(encrypted)


