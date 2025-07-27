console.log("Pig Latin Translator translates...")

const phraseInArray = process.argv.slice(2);
const vowels = "aeiouAEIOU"
const changedWords = []

phraseInArray.forEach(word => {
    if (!vowels.includes(word[0]) && vowels.includes(word[1])) {
        let consVow = word.slice(1) + word[0] + 'ay'
        changedWords.push(consVow)

    } else if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
        let consCon = word.slice(2) + word[0] + word[1] + 'ay';
        changedWords.push(consCon)    

    } else if (vowels.includes(word[0])) {
        let vow = word + 'way'
        changedWords.push(vow)
    }
});

console.log(changedWords.join(" "))