function printReverseAlphabet () {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    const reverseAlphat = alphabet.split('').reverse().join('')

    console.log(reverseAlphat)
}

printReverseAlphabet()