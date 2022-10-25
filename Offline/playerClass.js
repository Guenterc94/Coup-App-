"use strict"
export default class player {
    card1;
    card2;
    coins;
    deadCards;
    player(){
        card1 = "";
        card2 = "";
        coins = 2;
        deadCards = 0
    };

    getCard1() {
        return this.card1;
    };
    getCard2() {
        return this.card2;
    }
    getCoins() {
        return this.coins;
    };
    getDeadCards() {
        return this.deadCards;
    }

    setCard1(card1) {
        this.card1 = card1;
    };
    setCard2(card2) {
        this.card2 = card2;
    }
    setCoins(coins) {
        this.coins = coins;
    };
    setDeadCards(deadCards) {
        this.deadCards = deadCards;
    }
}