var foo = document.querySelector('.foo');
var bar = document.querySelector('.bar');
var wrap = document.querySelector('.wrap');

var mes = 'i am going to try this';


foo.onmouseover = function() {
 this.className = 'foo pop show-pop';
};

foo.onmouseout = function() {
	this.className = 'foo pop hide-pop';
};
