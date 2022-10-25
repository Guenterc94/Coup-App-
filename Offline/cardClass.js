export class card {
    name;

    card (arg) {
        switch (arg) {
            case 0:
            case 1:
            case 2:
                this.name = "Ambassador";
                break;
            case 3:
            case 4:
            case 5:
                this.name = "Assassin";
                break;
            case 6:
            case 7:
            case 8:
                this.name = "Captain";
                break;
            case 9:
            case 10:
            case 11:
                this.name = "Contessa";
                break;
            case 12:
            case 13:
            case 14:
                this.name = "Duke";
                break;
            default:
                break;
        }
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}