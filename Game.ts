
const attempts = 10;


export class Game{

    private randomNumber : any = Math.floor(Math.random() * 100) + 1;
    private count : any = 0;

    makeAMove(sInput: string){

        this.count++;
        let sReply = "You guessed no :"+sInput;
        var guess = this.randomNumber.toString();
        if(this.count <= attempts){
            if(sInput==guess){
                sReply="Congratulations! You got it right."+guess +". Let's play one more time!";
                this.randomNumber =  Math.floor(Math.random() * 100) + 1;
                this.count = 0;
            }else{
                if(sInput<guess){
                    sReply=`Your guess is wrong. HINT:Answer is greater than entered number.`  + `
                    Attempts left:  ` + (attempts - this.count);
                }else{
                    sReply=`Your guess is wrong. HINT:Answer is lesser than entered number` + `
                    Attempts left: ` + (attempts - this.count);
                }
            }
            return(sReply);
        }
    this.randomNumber =  Math.floor(Math.random() * 100) + 1;
    this.count = 0;
    return("Sorry, you're out of attempts! Good luck next time! Let's play one more time!");
    }
}