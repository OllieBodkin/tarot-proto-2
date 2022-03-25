console.log('your fortune is...');
var cards = ['the Fool', 'the Magician', 'the High Priestess', 'the Empress', 'the Emperor', 'the Hierophant', 'the Lovers', 'the Chariot', 'Adjustment', 'the Hermit', 'Fortune', 'Lust', 'the Hanged Man', 'Death', 'Art', 'the Devil', 'the Tower', 'the Star', 'the Moon', 'the Sun', 'the Aeon', 'the Universe']
const randomElement = cards[Math.floor(Math.random()*cards.length)]
const randomElementtwo = cards[Math.floor(Math.random()*cards.length)]
const randomElementthree = cards[Math.floor(Math.random()*cards.length)];
var one = randomElement
var two = randomElementtwo
var three = randomElementthree
console.log(one + ', ' + two + ', and ' + three)
