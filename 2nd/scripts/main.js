var password = localStorage.getItem('password');
var password1 = [];
var length = password.length;
var errors = 0;

var letters = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'];

var gameElements = {
  alphabet: $('.js-alphabet'),
  board: $('.js-board'),
  gallows: $('.js-gallows')
};

var gameSounds = {
  yes: new Audio("audio/yes.wav"),
  no: new Audio("audio/no.wav"),
  win: new Audio("audio/win.wav"),
  lose: new Audio("audio/fail.wav")
}

for (var i = 0; i < length; i++) {
    if (password.charAt(i) == " ") {
        password1 += " ";
    }
    else {
        password1 += "-";
    }
}

function createPassword() {
    gameElements.board.html(password1);
}

window.onload = start;

function start() {
    var trescDiva = "";
    for (var i = 0; i <= 34; i++) {
        var element = "lit" + i;
        trescDiva += '<div class="litera" onclick="check('+ i +')" id="'+ element +'">' + letters[i] + '</div>';
        if ((i + 1) % 7 === 0) {
            trescDiva += '<div style="clear:both;"</div>';
        }
    }
    gameElements.alphabet.html(trescDiva);
    createPassword();
}

String.prototype.set = function(miejsce, znak) {
    if (miejsce > this.length - 1) {
        return this.toString();
    }
    else {
        return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
    }
}

function check(nr) {
    var trafiona = false;
    for(i = 0; i < length; i++){
        if (password.charAt(i) === letters[nr]) {
            password1 = password1.set(i, letters[nr]);
            trafiona = true;
        }
    }

    if (trafiona === true) {
        gameSounds.yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = '#003300';
        document.getElementById(element).style.color = '#00C000';
        document.getElementById(element).style.border = '3px solid #00C000';
        document.getElementById(element).style.cursor = 'default';

         //wygrana
        if (password === password1) {
            gameElements.alphabet.html('<span class="win">Tak jest!</span> Podano prawidłowe hasło: <br />' + password + '<br /><br /><a class="reset" href="../1st/index.html">JESZCZE RAZ?</a>').css('font-size', '24px');
            gameSounds.win.play();
        }
        createPassword();
    }
    else {
        gameSounds.no.play();
        var element = "lit" + nr;
//        Dlaczego to nie działa?
      //  $('#element').css({"background": "#330000", "color": "#C00000", "border": "3px solid #C00000", "cursor": "default"});
        document.getElementById(element).style.background = '#330000';
        document.getElementById(element).style.color = '#C00000';
        document.getElementById(element).style.border = '3px solid #C00000';
        document.getElementById(element).style.cursor = 'default';
        document.getElementById(element).setAttribute('onclick', ';');

        //skucha
        errors++;
        var image = "img/s" + errors + ".jpg";
        gameElements.gallows.html('<img src="'+ image +'" alt="" />');

        //przegrana
        if (errors >= 9) {
            gameElements.alphabet.html('<span class="lose">Przegrana!</span> Prawidłowe hasło to: <br />' + password + '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>').css('font-size', '24px');
            gameSounds.lose.play();
        }
    }
}

$('.js-reveal').on('click', function() {
  gameElements.board.html(password);
});
