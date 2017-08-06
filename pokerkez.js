const suits = ['H', 'S', 'C', 'D'];
const numbers = [
    {key: '2', value: 2},
    {key: '3', value: 3},
    {key: '4', value: 4},
    {key: '5', value: 5},
    {key: '6', value: 6},
    {key: '7', value: 7},
    {key: '8', value: 8},
    {key: '9', value: 9},
    {key: '10', value: 10},
    {key: 'J', value: 11},
    {key: 'Q', value: 12},
    {key: 'K', value: 13},
    {key: 'A', value: 14}
];

module.exports = {
    sortCardsByIndex: cards => cards.sort((a, b) => a.index < b.index ? -1 : 1),
    sortCardsByNumber: cards => cards.sort((a, b) => a.numbers.value < b.numbers.value ? -1 : 1),
    addGeneratedCards: function (cards) {
        suits.forEach(suit => {
            numbers.forEach(number => {
                let card = {
                    index: Math.floor(Math.random() * 1000) + 1,
                    suit: suit,
                    numbers: number
                };
                cards.push(card);
            })
        });
        return cards;
    },
    generateDecks: function (param) {
        let cards = [];
        for (let i = 0; i < param; i++) {
            cards = this.addGeneratedCards(cards);
        }
        return cards;
    },
    getHighCard: function (cards) {
        return [cards[cards.length - 1]];
    },
    getAllPair: function (cards) {
        let pairs = new Set();
        cards.reduce((prev, actual) => {
            if (prev.numbers.value === actual.numbers.value) {
                pairs.add(prev);
                pairs.add(actual);
            }
            return prev = actual;
        });
        return [...pairs];
    },
    isPair: function (cards) {
        return this.getAllPair(cards).length >= 2;
    },
    isTwoPair: function (cards) {
        return this.getAllPair(cards).length >= 4;
    },
    isThreeOfAKind: function (cards) {
        let result = this.getAllPair(cards);
        return result.length === 3 || result.length === 5;
    },
    isStraight: function (cards) {
        let straight = true;
        let count = 0;

        cards.reduce((prev, actual) => {
            if (prev.numbers.value + 1 !== actual.numbers.value) {
                if (!(count === 3 && (cards[0].numbers.key === '2' && cards[cards.length - 1].numbers.key === 'A'))) {
                    straight = false;
                }
            } else {
                count++;
            }
            return prev = actual;
        });

        return straight;
    },
    isFlush: function (cards) {
        let flush = true;

        cards.reduce((prev, actual) => {
            if (prev.suit !== actual.suit) {
                flush = false;
            }
            return prev = actual;
        });

        return flush;
    },
    isFullHouse: function (cards) {
        return this.getAllPair(cards).length === 5;
    },
    isFourOfAKind: function (cards) {
        let result = this.getAllPair(cards);
        return result.length === 4 && result[0].numbers.key === result[result.length - 1].numbers.key;
    },
    isStraightFlush: function (cards) {
        return this.isFlush(cards) && this.isStraight(cards);
    },
    isRoyalFlush: function (cards) {
        return this.isFlush(cards) && this.isStraight(cards) && this.getHighCard(cards)[0].numbers.key === 'A';
    },
    displayResult: function (cards) {
        cards.forEach(card => {
            console.log(card.suit + card.numbers.key);
        })
    },
    play: function (deck) {
        let cards = this.sortCardsByIndex(this.generateDecks(deck));
        let drawCards = this.sortCardsByNumber(cards.slice(0, 5));

        this.displayResult(drawCards);
        console.log('The result: ');

        if (this.isRoyalFlush(drawCards)) {
            this.displayResult(drawCards);
            return 'Royal Flush';
        } else if (this.isStraightFlush(drawCards)) {
            this.displayResult(drawCards);
            return 'Straight Flush';
        } else if (this.isFourOfAKind(drawCards)) {
            this.displayResult(this.getAllPair(drawCards));
            return 'Four of a kind';
        } else if (this.isFullHouse(drawCards)) {
            this.displayResult(drawCards);
            return 'Full house';
        } else if (this.isFlush(drawCards)) {
            this.displayResult(drawCards);
            return 'Flush';
        } else if (this.isStraight(drawCards)) {
            this.displayResult(drawCards);
            return 'Straight';
        } else if (this.isThreeOfAKind(drawCards)) {
            this.displayResult(this.getAllPair(drawCards));
            return 'Three of a kind';
        } else if (this.isTwoPair(drawCards)) {
            this.displayResult(this.getAllPair(drawCards));
            return 'Two Pair';
        } else if (this.isPair(drawCards)) {
            this.displayResult(this.getAllPair(drawCards));
            return 'Pair';
        } else {
            this.displayResult(this.getHighCard(drawCards));
            return 'High card';
        }
    }
};