var pArray = [
    'Per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima. Lorem ipsum dolorum have a great day.',

    ' Per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima. Lorem ipsum dolorum have a great day.'
];
var curIndex = 0;
var imgDuration = 5000;

function slideShow() {
    document.getElementById('myp')= pArray[curIndex];
    curIndex++;
    if (curIndex == pArray.length) { curIndex = 0; }
    setTimeout("slideShow()", imgDuration);
}
