function toggle(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_size(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var blanket = document.getElementById('blanket');
	blanket.style.height = blanket_height + 'px';
	var popUpDiv = document.getElementById(popUpDivVar);
	//popUpDiv_height=blanket_height/2-150;
	popUpDiv.style.top = 100 + 'px'; //popUpDiv_height + 'px';
}
function window_pos(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpDiv = document.getElementById(popUpDivVar);
	//window_width=window_width/2-150;
    var w;
    if (typeof window.innerWidth != 'undefined') {
		w = window.innerWidth;
	} else {
		w = document.documentElement.clientWidth;
	}
    w = (w - 760)/2;
	popUpDiv.style.left = w + 'px'; // window_width + 'px';
}

var exp = 800;
function popup(windowname) {
    var num = readCookie('ketquapop');
    if (num < 1) {
        blanket_size(windowname);
    	window_pos(windowname);
    	toggle('blanket');
    	toggle(windowname);

        newCookie('ketquapop','ketqua.net', exp);
    }
}
function closePopup(windowname) {
    toggle('blanket');
    toggle(windowname);
}
function newCookie(name,value,seconds) {
    if (seconds) {
        var date = new Date();
        date.setTime(date.getTime()+(seconds*60*1000));
        var expires = "; expires="+date.toGMTString(); 
    } else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/"; 
}

function readCookie(name) {
    var nameSG = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameSG) == 0) return c.substring(nameSG.length,c.length); }
    return null; 
}