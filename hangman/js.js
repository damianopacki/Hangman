
var haslo = 'test';
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var ileSkuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var wygrana = new Audio("win.wav");
var przegrana = new Audio("fail.wav");

var haslo1 = [];

for (var i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == " ") {
        haslo1 += " ";
    }
    else {
        haslo1 += "-";
    }
}

function wypiszHaslo() {
    $("#plansza").html(haslo1);
}

window.onload = start;

var litery = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'];

function start() {
    var trescDiva = "";
    for (var i = 0; i <= 34; i++) {
        var element = "lit" + i;
        trescDiva += '<div class="litera" onclick="sprawdz('+ i +')" id="'+ element +'">' + litery[i] + '</div>';
        if ((i + 1) % 7 === 0) {
            trescDiva += '<div style="clear:both;"</div>';
        }
    }

    $("#alfabet").html(trescDiva);
    wypiszHaslo();
}

String.prototype.ustawZnak = function(miejsce, znak) {
    if (miejsce > this.length - 1) {
        return this.toString();
    }
    else {
        return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
    }
}

function sprawdz(nr) {
    var trafiona = false;
    for(i = 0; i < dlugosc; i++){
        if (haslo.charAt(i) === litery[nr]) {
            haslo1 = haslo1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }

    if (trafiona === true) {
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = '#003300';
        document.getElementById(element).style.color = '#00C000';
        document.getElementById(element).style.border = '3px solid #00C000';
        document.getElementById(element).style.cursor = 'default';

         //wygrana
        if (haslo === haslo1) {
            document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: " + haslo + '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
            wygrana.play();

        }
        wypiszHaslo();
    }
    else {
        no.play();
        var element = "lit" + nr;
//        Dlaczego to nie działa?
//        $('#element').css({"background": "#330000", "color": "#C00000", "border": "3px solid #C00000", "cursor": "default"});
        document.getElementById(element).style.background = '#330000';
        document.getElementById(element).style.color = '#C00000';
        document.getElementById(element).style.border = '3px solid #C00000';
        document.getElementById(element).style.cursor = 'default';
        document.getElementById(element).setAttribute('onclick', ';');

        //skucha
        ileSkuch++;
        var obraz = "img/s" + ileSkuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="'+ obraz +'" alt="" />';

        //przegrana
        if (ileSkuch >= 9) {
            document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło to: " + haslo + '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
            przegrana.play();
        }
    }
}
