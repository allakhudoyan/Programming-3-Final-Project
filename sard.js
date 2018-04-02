class Sard extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.directions = [];
        this.moveTact = 0;
        this.zuyg;
        this.bazmanaluAragutyun = 0;
    }

    yntrelVandakTunavoreluHamar(ch, ch1, ch2, ch3, ch4) {
        this.stanalNorKordinatnerTunavoreluHamar();
        return super.yntrelVandak(ch, ch1, ch2, ch3, ch4);
    }

    yntrelVandak(ch, ch1, ch2, ch3, ch4) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch, ch1, ch2, ch3, ch4);
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    stanalNorKordinatnerTunavoreluHamar() {
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

    sharjvel() {
        this.moveTact++;
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0, 1, 2, 3, 4));

        if (vandak && this.moveTact >= 5) {
            if (matrix[vandak[1]][vandak[0]] == 1) {
                matrix[this.y][this.x] = 1;
            } else if (matrix[vandak[1]][vandak[0]] == 2) {
                matrix[this.y][this.x] = 2;
            } else if (matrix[vandak[1]][vandak[0]] == 3) {
                matrix[this.y][this.x] = 3;
            } else if (matrix[vandak[1]][vandak[0]] == 4) {
                matrix[this.y][this.x] = 4;
            } else if (matrix[vandak[1]][vandak[0]] == 0) {
                matrix[this.y][this.x] = 0;
            }

            this.energy--;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = this.index;
            this.moveTact = 0;
        }
    }

    tunavorel() {
        this.stanalNorKordinatnerTunavoreluHamar();
        var vandak = random(this.yntrelVandakTunavoreluHamar(1, 2, 3, 4));

        if (vandak) {
            if (matrix[vandak[1]][vandak[0]] == 1) {
                for (var i in grassArr) {
                    if (vandak[0] == grassArr[i].x && vandak[1] == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        matrix[vandak[1]][vandak[0]] = 0;
                        break;
                    }
                }
            } else if (matrix[vandak[1]][vandak[0]] == 2) {
                for (var i in xotakernerArr) {
                    if (vandak[0] == xotakernerArr[i].x && vandak[1] == xotakernerArr[i].y) {
                        xotakernerArr[i].energy = xotakernerArr[i].energy - 5;
                        break;
                    }
                }
            } else if (matrix[vandak[1]][vandak[0]] == 3) {
                for (var i in gishatichnerArr) {
                    if (vandak[0] == gishatichnerArr[i].x && vandak[1] == gishatichnerArr[i].y) {
                        gishatichnerArr[i].energy = gishatichnerArr[i].energy - 5;
                        break;
                    }
                }
            } else if (matrix[vandak[1]][vandak[0]] == 4) {
                for (var i in amenakernerArr) {
                    if (vandak[0] == amenakernerArr[i].x && vandak[1] == amenakernerArr[i].y) {
                        amenakernerArr[i].energy = amenakernerArr[i].energy - 5;
                        break;
                    }
                }
            }   
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
        this.bazmanaluAragutyun++;
        this.stanalNorKordinatnerTunavoreluHamar();
        var vandakZ = random(this.yntrelVandakTunavoreluHamar(5));

        if (vandakZ) {
            for (var i in sardArr) {
                if (vandakZ[0] == sardArr[i].x && vandakZ[1] == sardArr[i].y) {
                    var zuygiIndex = i;
                    break;
                }
            }
        }

        if (zuygiIndex && this.bazmanaluAragutyun >= 3 && sardArr[zuygiIndex].ser == this.zuyg) {
            var vandak = random(this.yntrelVandakTunavoreluHamar(0, 1, 2, 3));
            if (vandak) {
                var norSard = new Sard(vandak[0], vandak[1], 5);
                sardArr.push(norSard);

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
                            spanvacXotaker++;
                            break;
                        }
                    }
                } else if (matrix[vandak[1]][vandak[0]] == 3) {
                    for (var c in gishatichnerArr) {
                        if (vandak[0] == gishatichnerArr[c].x && vandak[1] == gishatichnerArr[c].y) {
                            gishatichnerArr.splice(c, 1);
                            spanvacGishatichner++;
                            break;
                        }
                    }
                }
                matrix[vandak[1]][vandak[0]] = 5;
                this.bazmanaluAragutyun = 0;
            }
        }
    }
}