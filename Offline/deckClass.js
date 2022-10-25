export class deck {
    // Variables
    decklist;
    max;
    min;

    // Constructors
    deck(params){
        this.decklist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.max = 15;
        this.min = 1;
        console.log("Called" + this.min);
    }

    // Getters and Setters
    getDecklist () {
        return this.decklist;
    }
    setDecklist(decklist) {
        this.decklist = decklist;
    }
    getMax() {
        return this.max;
    }
    setMax(max) {
        this.max = max;
    }
    getMin() {
        return this.min;
    }
    setMin(min) {
        this.min = min;
    }

    // Methods
    shuffle() {
        let shuffledDeck = this.decklist.sort((a, b) => 0.5 - Math.random());
        return shuffledDeck;
    }
}