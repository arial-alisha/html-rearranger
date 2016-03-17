var $h1 = $('h1');
var $main = $('main');
var $ul = $('ul');
var $li = $('li');

$ul.remove();
$h1.html(document.write('<h1>Below ground veggies</h1>'));
$ul.addClass('below');

$h1.html(document.write('<h1>Above ground veggies</h1>'));
$ul.addClass('above');

$li.each(function () {
  if ($(this).hasClass('below')) {
    $belowUl.append($(this));
  } else {
    $aboveUl.append($(this));
  }
});
