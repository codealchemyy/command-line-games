console.log("Pig Latin Translator translates...") //test if script is running

//slice is a string method. 
const phraseInArray = process.argv.slice(2); //process.argv is the command-line input. slice() skips the 2 first elements (node & file path) -> gives you just the actual words
const vowels = "aeiouAEIOU" // holds all vowels. Chexk if a letter is a vowel
const changedWords = [] // to store the pig-latin words

phraseInArray.forEach(word => {
    if (!vowels.includes(word[0]) && vowels.includes(word[1])) {
        let consVow = word.slice(1) + word[0] + 'ay' // if it's so, then move the first letter to the end and add "ay". slice(1) starts at index 1 (second char) and goes until the end 
        changedWords.push(consVow)

    } else if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
        let consCon = word.slice(2) + word[0] + word[1] + 'ay';
        changedWords.push(consCon)    

    } else if (vowels.includes(word[0])) {
        let vow = word + 'way'
        changedWords.push(vow)
    }
});

console.log(changedWords.join(" ")) //join() turns the words into a single sentence with spaces