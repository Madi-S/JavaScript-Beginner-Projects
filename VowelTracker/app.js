vowelCounter = 0
vowels = 'aeiou'
word = String(prompt('Enter a word, a sentence or a text:'))

for (char of word) {
    if (vowels.includes(char.toLowerCase())) {
        vowelCounter += 1
    }
}



alert(`Vowel count: ${vowelCounter}`)