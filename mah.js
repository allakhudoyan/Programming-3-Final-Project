class Mah {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this,y + 1]
        ];
    }

    spanel(){
        for (var i = 0; i < this.directions.length; i++) {
            var vandak = this.directions[i];
            if (vandak[0] >= 0 && vandak[0] < matrix[0].length && vandak[1] >= 0 && vandak[1] < matrix.length) {
                if (matrix[vandak[1]][vandak[0]] == 1) {
                    for (var c in grassArr) {
                        if (vandak[0] == grassArr[c].x && vandak[1] == grassArr[c].y) {
                            grassArr.splice(c, 1);
                            break;
                        } 
                    }
                }else if(matrix[vandak[1]][vandak[0]] == 2){
                    for (var c in xotakernerArr) {
                        if (vandak[0] == xotakernerArr[c].x && vandak[1] == xotakernerArr[c].y) {
                            xotakernerArr.splice(c, 1);
                            spanvacXotaker++;
                            break;
                        } 
                    }
                }else if (matrix[vandak[1]][vandak[0]] == 3) {
                    for (var c in gishatichnerArr) {
                        if (vandak[0] == gishatichnerArr[c].x && vandak[1] == gishatichnerArr[c].y) {
                            gishatichnerArr.splice(c, 1);
                            spanvacGishatichner++;
                            break;
                        } 
                    }
                }else if (matrix[vandak[1]][vandak[0]] == 4) {
                    for (var c in amenakernerArr) {
                        if (vandak[0] == amenakernerArr[c].x && vandak[1] == amenakernerArr[c].y) {
                            amenakernerArr.splice(c, 1);
                            break;
                        } 
                    }
                }
                matrix[vandak[1]][vandak[0]] = 0;
            }
        }
        matrix[this.y][this.x] = 0;
    }
}