class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.winner = null;
        this.moreTurns=false;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null){
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if ((this.field[0][0] === 'x' && this.field[0][1] === 'x' && this.field[0][2] === 'x') ||
                (this.field[1][0] === 'x' && this.field[1][1] === 'x' && this.field[1][2] === 'x') ||
                (this.field[2][0] === 'x' && this.field[2][1] === 'x' && this.field[2][2] === 'x') ||
                (this.field[0][0] === 'x' && this.field[1][0] === 'x' && this.field[2][0] === 'x') ||
                (this.field[0][1] === 'x' && this.field[1][1] === 'x' && this.field[2][1] === 'x') ||
                (this.field[0][2] === 'x' && this.field[1][2] === 'x' && this.field[2][2] === 'x') ||
                (this.field[0][0] === 'x' && this.field[1][1] === 'x' && this.field[2][2] === 'x') ||
                (this.field[0][2] === 'x' && this.field[1][1] === 'x' && this.field[2][0] === 'x')) {

                this.winner = 'x';
            }

            if ((this.field[0][0] === 'o' && this.field[0][1] === 'o' && this.field[0][2] === 'o') ||
                (this.field[1][0] === 'o' && this.field[1][1] === 'o' && this.field[1][2] === 'o') ||
                (this.field[2][0] === 'o' && this.field[2][1] === 'o' && this.field[2][2] ==='o') ||
                (this.field[0][0] === 'o' && this.field[1][0] === 'o' && this.field[2][0] === 'o') ||
                (this.field[0][1] === 'o' && this.field[1][1] === 'o' && this.field[2][1] === 'o') ||
                (this.field[0][2] === 'o' && this.field[1][2] === 'o' && this.field[2][2] === 'o') ||
                (this.field[0][0] === 'o' && this.field[1][1] === 'o' && this.field[2][2] === 'o') ||
                (this.field[0][2] === 'o' && this.field[1][1] === 'o' && this.field[2][0] === 'o')) {

                this.winner = 'o';
            }
            if (this.currentPlayerSymbol === 'x'){
                this.currentPlayerSymbol = 'o';
            } else {
                this.currentPlayerSymbol = 'x';
            }
            this.moreTurns = true;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (this.field[i][j] == null) {
                        this.moreTurns = false;
                    }
                }
            }
        }


    }

    isFinished() {
        return this.winner!==null || this.isDraw();
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        for (let i=0;i<3;i++){
            for (let j = 0;j<3;j++){
                if(this.field[i][j] == null){
                    return false;
                }
            }
        }
        return  true;
    }

    isDraw() {
        if (!this.noMoreTurns() || this.winner!==null){
            return false;
        } else {
            return true;
        }
    }


    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }

}
function isWinner(field, player){
    let flag =0;
    for (let i=0;i<3;i++){
        if(field[i][i] ===player){
            flag++;
        }
    }
    if (flag ===3) return player;
    flag=0;
    for (let i=0;i<3;i++){
        if(field[i][2-i] ===player){
            flag++;
        }
    }
    if (flag ===3) return player;
    for(let i =0;i<3;i++){
        flag = 0;
        for (let j = 0;j<3;j++){
            if (field[i][j]===player){
                flag++;
            }
        }
        if (flag===3) return player;
    }
    for(let i =0;i<3;i++){
        flag = 0;
        for (let j = 0;j<3;j++){
            if (field[j][i]===player){
                flag++;
            }
        }
        if (flag===3) return player;
    }
}

module.exports = TicTacToe;
