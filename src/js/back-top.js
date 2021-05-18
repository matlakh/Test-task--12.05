let t;
function back_up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('back_up()',20);
	} else clearTimeout(t);
	return false;
}