class KendaniEak {
    constructor(x,y,index){
        this.index = index;
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.ser = Math.floor(random(0, 2));
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
		];
    }
    
    yntrelVandak(ch, ch1, ch2, ch3, ch4) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch || matrix[y][x] == ch1 || matrix[y][x] == ch2 || matrix[y][x] == ch3 || matrix[y][x] == ch4) {
                    found.push(this.directions[i]);
                }
            }   
        }
        return found;
    }
}
