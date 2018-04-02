var grassArr = [];
var xotakernerArr = [];
var gishatichnerArr = [];
var amenakernerArr = [];
var sardArr = [];
var mahArr = [];
var side = 30;
var GishKoghmicSpanvacXotaker = 0;
var spanvacXotaker = 0;
var spanvacGishatichner = 0;
var amenakerSpanvacGish = 0;
var maheriQanak = 0;
// var matrix = [
//     [1, 1, 0, 2, 0, 0, 0, 0, 0, 3],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
//     [4, 2, 4, 0, 0, 0, 0, 0, 0, 0],
//     [5, 0, 0, 0, 5, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0,5, 0],
//     [0, 0, 0, 3, 0, 0, 2, 0, 0, 0],
//     [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 4, 5, 0, 0, 0],
//     [3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];
var matrix = [];
var exanakner = ['winter', 'spring', 'summer', 'autumn'];
var exanak = 'spring';
var ex = 0;

function setup() {
    for (var y = 0; y < 20; y++) {
        matrix[y] = [0];
        for (var x = 0; x < 20; x++) {
            matrix[y][x] = Math.floor(random(0, 6));
        }
    }

    frameRate(3);
    background('#acacac');
    createCanvas(matrix[0].length * side, matrix.length * side);

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            } else if (matrix[y][x] == 2) {
                var eater = new Xotaker(x, y, 2);
                xotakernerArr.push(eater);
            } else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y, 3);
                gishatichnerArr.push(gishatich);
            } else if (matrix[y][x] == 4) {
                var amenaker = new Amenaker(x, y, 4);
                amenakernerArr.push(amenaker);
            } else if (matrix[y][x] == 5) {
                var sard = new Sard(x, y, 5);
                sardArr.push(sard);
            }
        }
    }
}

var multiplyMah = 0;
var multiplyExanak = 0;

function draw() {
    multiplyMah++;

    if (multiplyMah >= 10) {
        maheriQanak++;
        var x = Math.floor(random(matrix[0].length));
        var y = Math.floor(random(matrix.length));
        var norMah = new Mah(x, y);
        mahArr.push(norMah);
        if (matrix[y][x] == 1) {
            for (var c in grassArr) {
                if (x == grassArr[c].x && y == grassArr[c].y) {
                    grassArr.splice(c, 1);
                    break;
                }
            }
        } else if (matrix[y][x] == 2) {
            for (var c in xotakernerArr) {
                if (x == xotakernerArr[c].x && y == xotakernerArr[c].y) {
                    xotakernerArr.splice(c, 1);
                    spanvacXotaker++;
                    break;
                }
            }
        } else if (matrix[y][x] == 3) {
            for (var c in gishatichnerArr) {
                if (x == gishatichnerArr[c].x && y == gishatichnerArr[c].y) {
                    gishatichnerArr.splice(c, 1);
                    spanvacGishatichner++;
                    break;
                }
            }
        } else if (matrix[y][x] == 4) {
            for (var c in amenakernerArr) {
                if (x == amenakernerArr[c].x && y == amenakernerArr[c].y) {
                    amenakernerArr.splice(c, 1);
                    break;
                }
            }
        } else if (matrix[y][x] == 5) {
            for (var c in sardArr) {
                if (x == sardArr[c].x && y == sardArr[c].y) {
                    sardArr.splice(c, 1);
                    break;
                }
            }
        }
        matrix[y][x] = 6;
        mahArr[0].spanel();
        mahArr = [];
        multiplyMah = 0;
    }

    multiplyExanak++;

    if (multiplyExanak >= 30) {
        exanak = exanakner[ex];
        ex++;
        if (ex >= 4) {
            ex = 0;
        }
        multiplyExanak = 0;
    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1 && exanak == 'winter') {
                fill('white');
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 1 && exanak == 'summer') {
                fill('green');
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 1 && exanak == 'spring') {
                fill('lightgreen');
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 1 && exanak == 'autumn') {
                fill('orange');
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 0) {
                fill('#acacac');
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 2) {
                for(var i in xotakernerArr){
                    if (x == xotakernerArr[i].x && y == xotakernerArr[i].y) {
                        if (xotakernerArr[i].ser == 1) {
                            fill('#DFDC00');
                            rect(side * x, side * y, side, side);
                        }else{
                            fill('yellow');
                            rect(side * x, side * y, side, side);
                        }
                        break;
                    }
                }
            } else if (matrix[y][x] == 3) {
                for(var i in gishatichnerArr){
                    if (x == gishatichnerArr[i].x && y == gishatichnerArr[i].y) {
                        if (gishatichnerArr[i].ser == 1) {
                            fill('red');
                            rect(side * x, side * y, side, side);
                        }else{
                            fill('#FF5656');
                            rect(side * x, side * y, side, side);
                        }
                        break;
                    }
                }
            } else if (matrix[y][x] == 4) {
                for(var i in amenakernerArr){
                    if (x == amenakernerArr[i].x && y == amenakernerArr[i].y) {
                        if (amenakernerArr[i].ser == 1) {
                            fill('#673700');
                            rect(side * x, side * y, side, side);
                        }else{
                            fill('brown');
                            rect(side * x, side * y, side, side);
                        }
                        break;
                    }
                }
            } else if (matrix[y][x] == 6) {
                fill('black');
                rect(side * x, side * y, side, side);
            } else if (matrix[y][x] == 5) {
                for(var i in sardArr){
                    if (x == sardArr[i].x && y == sardArr[i].y) {
                        if (sardArr[i].ser == 1) {
                            fill('purple');
                            rect(side * x, side * y, side, side);
                        }else{
                            fill('#B600FF');
                            rect(side * x, side * y, side, side);
                        }
                        break;
                    }
                }
            }
        }
    }

    if (exanak != 'winter') {
        for (var i in grassArr) {
            grassArr[i].bazmanal();
        }
    }

    for (var i in xotakernerArr) {
        xotakernerArr[i].stanalExanak(exanak);
        xotakernerArr[i].utel();
        if (exanak != 'winter') {
          xotakernerArr[i].bazmanal();   
        }
        xotakernerArr[i].mahanal();
    }

    for (var f in gishatichnerArr) {
        gishatichnerArr[f].stanalExanak(exanak);
        gishatichnerArr[f].utel();
        gishatichnerArr[f].bazmanal();
        gishatichnerArr[f].mahanal();
    }

    if (exanak != 'winter') {
        for (var x in amenakernerArr) {
            amenakernerArr[x].utel();
        }
        if (exanak == 'spring') {
            amenakernerArr[x].bazmanal();
        }
    }

    if (exanak == 'winter' || exanak == 'autumn') {
        for (var i in sardArr) {
            sardArr[i].sharjvel();
            sardArr[i].tunavorel();
            sardArr[i].bazmanal();
        }
    }

    var socket = io.connect('http://localhost:3000');

    if(frameCount % 60 == 0){
        var info = {
            "GishatichneriKoghmicSpanvacXotakerneriTokosy": Math.floor((GishKoghmicSpanvacXotaker * 100) / spanvacXotaker),
            "AmenakerneriKoghmicSpanvacGishatichneriTokosy": Math.floor((amenakerSpanvacGish * 100) / spanvacGishatichner),
            "Sarderi qanaky": sardArr.length,
            "Maheri qanaky": maheriQanak
        };
        var myJSON = JSON.stringify(info);
        function handleSubmit(evt) {
            socket.emit("send message", myJSON);
        }
        handleSubmit();
    }

    if(xotakernerArr.length == 0 && gishatichnerArr == 0 && amenakernerArr == 0){
        background('#acacac');
        createCanvas(matrix[0].length * side, matrix.length * side);
        fill('black');
        textSize(32);
        text('Game Over: Sard Win', 10, 30);
    } else if (xotakernerArr.length == 0 && gishatichnerArr == 0 && sardArr == 0){
        background('#acacac');
        createCanvas(matrix[0].length * side, matrix.length * side);
        fill('black');
        textSize(32);
        text('Game Over: Amenaker Win', 10, 30);
    } else if (amenakernerArr.length == 0 && gishatichnerArr == 0 && sardArr == 0){
        background('#acacac');
        createCanvas(matrix[0].length * side, matrix.length * side);
        fill('black');
        textSize(32);
        text('Game Over: Xotaker Win', 10, 30);
    } else if (xotakernerArr.length == 0 && amenakernerArr == 0 && sardArr == 0){
        background('#acacac');
        createCanvas(matrix[0].length * side, matrix.length * side);
        fill('black');
        textSize(50);
        text('Game Over: Gishatich Win', 10, 30);
    }
}