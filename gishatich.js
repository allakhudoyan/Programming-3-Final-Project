class Gishatich extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.directions = [];
        this.bazmanaluAragutyun;
        this.energy = 50;
        this.zuyg;
    }

    yntrelVandak(ch, ch1, ch2, ch3, ch4) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch, ch1, ch2, ch3, ch4);
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    stanalExanak(exanak) {
        if (exanak == "spring") {
            this.bazmanaluAragutyun = 50;
        } else if (exanak == 'summer') {
            this.bazmanaluAragutyun = 55;
        } else if (exanak == "autumn") {
            this.bazmanaluAragutyun = 57;
        }
    }

    utel() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0, 1, 2));

        if (vandak && matrix[vandak[1]][vandak[0]] == 2) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = this.index;

            for (var c in xotakernerArr) {
                if (this.x == xotakernerArr[c].x && this.y == xotakernerArr[c].y) {
                    xotakernerArr.splice(c, 1);
                    GishKoghmicSpanvacXotaker++;
                    this.energy++;
                    break;
                }
            }
        } else if (vandak && matrix[vandak[1]][vandak[0]] == 1) {
            matrix[this.y][this.x] = 1;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = this.index;
            this.energy--;
        } else if (vandak && matrix[vandak[1]][vandak[0]] == 0) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = this.index;
            this.energy--;
        }
    }

    gtnelZuyg() {
        if (this.ser == 1) {
            this.zuyg = 0;
        } else {
            this.zuyg = 1;
        }
    }

    bazmanal() {
        this.stanalNorKordinatner();
        var vandakZ = random(this.yntrelVandak(3));

        for (var i in gishatichnerArr) {
            if (vandakZ && vandakZ[0] == gishatichnerArr[i].x && vandakZ[1] == gishatichnerArr[i].y) {
                var zuygiIndex = i;
                break;
            }
        }

        if (zuygiIndex && this.energy >= this.bazmanaluAragutyun && gishatichnerArr[zuygiIndex].ser == this.zuyg) {
            var vandak = random(this.yntrelVandak(0, 1, 2));
            var norGishatich = new Gishatich(vandak[0], vandak[1], 3);
            gishatichnerArr.push(norGishatich);

            if (matrix[vandak[1]][vandak[0]] == 1) {
                for (var c in grassArr) {
                    if (vandak[0] == grassArr[c].x && vandak[1] == grassArr[c].y) {
                        grassArr.splice(c, 1);
                        break;
                    }
                }
            } else if (matrix[vandak[1]][vandak[0]] == 2) {
                for (var c in xotakernerArr) {
                    if (vandak[0] == xotakernerArr[c].x && vandak[1] == xotakernerArr[c].y) {
                        xotakernerArr.splice(c, 1);
                        GishKoghmicSpanvacXotaker++;
                        break;
                    }
                }
            }
            matrix[vandak[1]][vandak[0]] = 3;
            this.energy = 45;
        }
    }

    mahanal() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var s in gishatichnerArr) {
                if (this.x == gishatichnerArr[s].x && this.y == gishatichnerArr[s].y) {
                    gishatichnerArr.splice(s, 1);
                    spanvacGishatichner++;
                    break;
                }
            }
        }
    }
}