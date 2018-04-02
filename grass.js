class Grass extends KendaniEak {
	constructor(x, y, index){
		super(x, y, index);
	}

    bazmanal(){
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
        }
    }
}






