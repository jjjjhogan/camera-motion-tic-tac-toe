export class GameData {
    name1:string;
    name2:string;
    winner:string;

    constructor(name1:string, name2:string, winner:string){
        this.name1 = name1;
        this.name2 = name2;
        this.winner = winner;
    }

    getLoser(){
        if(this.name1 == this.winner){
            return this.name2;
        }
        return this.name1;
    }
}
