// Creating password start

var passwords = {
  passwordMovie: ['Matrix', 'Władca pierścieni', 'Nietykalni', 'Conan', 'Królestwo niebieskie', 'Spider-Man Homecoming', 'Dunkierka'],
  passwordLiterature: ['Amerykańscy bogowie', 'I nie było już nikogo', 'Hobbit', 'Pan Mercedes', 'Miasteczko Salem', 'Mistrz i Małgorzata', 'Terror'],
  passwordProverbs: ['Apetyt rośnie w miarę jedzenia', 'Bez pracy nie ma kołaczy', 'Biednemu zawsze wiatr w oczy', 'Bez pracy nie ma kołaczy', 'Baba z wozu koniom lżej', 'Spaść z deszczu pod rynne', 'Spaść z deszczu pod rynne']
};

function randPass(obj, item) {
  var ri = Math.floor(Math.random() * item.length);
  var password = item[ri];
  password = password.toUpperCase();
  localStorage.setItem('password', password);
  console.log(password);
}

$('.js-movie').on('click', function() {
  var passMovie = randPass(passwords, passwords.passwordMovie);
  $('.categories').html($(this).html()).css({'letter-spacing': '2px', 'color': 'rgb(119, 155, 223)', 'font-size': '28px', 'margin-top': '20px'});
});

$('.js-literature').on('click', function() {
  var passLiterature = randPass(passwords, passwords.passwordLiterature);
  $('.categories').html($(this).html()).css({'letter-spacing': '2px', 'color': 'rgb(119, 155, 223)', 'font-size': '28px', 'margin-top': '20px'});
});

$('.js-proverbs').on('click', function() {
  var passProverbs = randPass(passwords, passwords.passwordProverbs);
  $('.categories').html($(this).html()).css({'letter-spacing': '2px', 'color': 'rgb(119, 155, 223)', 'font-size': '28px', 'margin-top': '20px'});
});

//Creating password end


$('.js-but').on('click', function() {
  if ($(this).hasClass('show')) {
    $(this).removeClass('show');
    $('.category > a').css('display', 'none');
  }
  else {
    $(this).addClass('show');
    $('.category > a').css('display', 'block');
  }
});

$('.js-info').on('click', function() {
  if ($(this).hasClass('klik')) {
    $(this).removeClass('klik');
  }
  else {
    $(this).addClass('klik');
    swal('Gra stworzona na podstawie kursu Mirosława Zelenta');
    $(this).removeClass('klik');
  }
});
