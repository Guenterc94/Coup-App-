export class deck {
    decklist;
    max;
    min;
    deck(){
        this.decklist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        max = 15;
        min = 1;
    }

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
    setMax(min) {
        this.min = min;
    }
    shuffle() {
        const a = Math.floor(Math.random() * (getMax() - getMin() + 1)) + getMin();
        return a;
    }
};