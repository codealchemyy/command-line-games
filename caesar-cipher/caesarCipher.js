console.log('Using Caesar Cipher ...')

const phrase = process.argv[2];
const shift = process.argv[3];

let stringToNumber = parseInt(shift)
const emptyString = " "
let encrypted = ""

for (char of phrase) {
    let cryptoCode = char.charCodeAt(0)

    if (cryptoCode >= 65 && cryptoCode <= 90) {
       
        newCode = cryptoCode + stringToNumber
        if (newCode > 90) {
            newCode -= 26
            }
        if (newCode < 65) {
            newCode += 26
        }
        encrypted += String.fromCharCode(newCode)

    } else if (cryptoCode >= 97 && cryptoCode <= 122) {
      
        newCode = cryptoCode + stringToNumber
        if (newCode > 122) {
            newCode -= 26
        }
        if (newCode < 97) {
            newCode +=26
        }
        encrypted += String.fromCharCode(newCode)
    } else {
        encrypted += char
    }
}

console.log(encrypted)


