﻿var vietad_config = [6, 1, 1e4, "http://banner.vietad.vn/Ad.aspx", "http://logb.vietad.vn/clickbanner.aspx", -1, -1, -1, "sa"];;
var boutputstr = "";
var $vaddomain = "http://embed.vietad.vn/";
var $bud = "undefined";
var $bif = self.location != top.location;
var $bof = false;
var $bmw = R2();
var $bus = O();
var $bmd = $bmw.document;
var $bcu = null;
var $burl = "";
var A = null;
var B = vietad_config;
var bss = false;
var IE6 = navigator.appVersion.indexOf("MSIE 6.0") == -1 ? false : true;
var $isBallonAdLoaded = false;
var $timeOut = 300;
var _ballonAds = null;
var $traverseTimer = null;
var $zoneType = null;
var C = {
    w: {
        n: ["adlite_width"],
        i: [],
        e: []
    },
    h: {
        n: ["adlite_height"],
        i: [],
        e: []
    },
    sz: {
        n: ["adlite_sizeId"],
        i: [],
        e: []
    },
    i: {
        n: ["adlite_zoneId"],
        i: [],
        e: []
    },
    t: {
        n: ["adlite_typeId"],
        i: [],
        e: []
    },
    tc: {
        n: ["adlite_titleColor"],
        i: [],
        e: []
    },
    dc: {
        n: ["adlite_desColor"],
        i: [],
        e: []
    },
    bgc: {
        n: ["adlite_bgColor"],
        i: [],
        e: []
    },
    bdc: {
        n: ["adlite_borderColor"],
        i: [],
        e: []
    },
    lc: {
        n: ["adlite_linkColor"],
        i: [],
        e: []
    },
    cid: {
        n: ["vietad_containerid"],
        i: [],
        e: []
    },
    flt: {
        n: ["vietad_underfilter"],
        i: [],
        e: []
    },
    tlul: {
        n: ["vietad_underline"],
        i: [],
        e: []
    },
    zt: {
        n: ["vietad_zoneType"],
        i: [],
        e: []
    }
};
var D = N("i");

function R2() {
    try {
        var cx = top.document.location;
        return top;
    } catch (err) {
        $bof = true;
    }
    var cwd = window;
    while (cwd != cwd.parent) {
        var cp = cwd.parent;
        try {
            var cx = cp.document.location;
        } catch (err) {
            return cwd;
        }
        cwd = cp;
    }
    return cwd;
}

function O() {
    if (!$bmw.vietad_adunits) {
        $bmw.vietad_adunits = [];
    }
    return $bmw.vietad_adunits;
}

function G() {
    var cw = window;
    var csz = {
        "1": [760, 90],
        "2": [468, 60],
        "3": [728, 90],
        "4": [950, 90],
        "5": [658, 60],
        "6": [120, 60],
        "7": [250, 60],
        "8": [120, 600],
        "9": [120, 240],
        "10": [160, 600],
        "11": [180, 250],
        "12": [250, 300],
        "13": [360, 190],
        "14": [250, 250],
        "15": [200, 200],
        "16": [336, 280],
        "17": [300, 250],
        "18": [290, 200],
        "19": [100, 100]
    };
    g($bmw, B[8]);
    d();
}

function g(cw, cf) {
    var ct = new Date;
    var cs = ct.getTime();
    L(cw);
    !cw.vietad_data[cf] ? cw.vietad_data[cf] = 1 : cw.vietad_data[cf]++;
    cw.vietad_data.t = cs;
}

function L(cw) {
    if (!cw.vietad_data) {
        cw.vietad_data = {};
    }
}

function d() {
    var ct = new Date;
    var cs = ct.getTime();
    var cu = {};
    cu.w = window;
    cu.zid = D;
    cu.t = cs;
    cu.zt = N("zt");
    cu.tp = N("t");
    cu.sz = N("sz");
    cu.width = N("w");
    cu.height = N("h");
    cu.tc = N("tc");
    cu.dc = N("dc");
    cu.bgc = N("bgc");
    cu.bdc = N("bdc");
    cu.lc = N("lc");
    cu.zt = N("zt");
    if (!$bus[D]) {
        $bus[D] = [];
    }
    $bus[D].push(cu);
    $bcu = cu;
}

function V() {
    var ct = new Date;
    var cs = ct.getTime();
    var cr = true;
    var cw = window;
    var cl = $bus[D].length;
    if (cl > B[1]) {
        cr = false;
    }
    cl = $bus.length;
    if (cl > B[0]) {
        return false;
    }
    if ($bif) {
        cr = true;
    }
    return cr;
}

function N(ck) {
    var cr = null;
    var co = C[ck];
    var cw = window;
    for (var i = 0; i < co.n.length; i++) {
        if (cw[co.n[i]]) {
            cr = cw[co.n[i]];
            break;
        }
    }
    return cr;
}

function T(cs) {
    if (typeof encodeURIComponent == "function") {
        return encodeURIComponent(cs.toString());
    } else {
        return S(cs.toString());
    }
}

function p(ck, cv) {
    if (!ck || ck == "") return;
    if (!cv) cv = "";
    $burl = $burl + "&" + ck + "=" + cv;
}

function o(ck) {
    p(ck, N(ck));
}

function b() {
    var cr = R();
    cr = T(cr);
    p("r", cr);
}

function f(ck, cv) {
    if (!ck || !cv && cv != 0 || ck == "" || cv == "" && typeof cv == "string") return;
    $burl = $burl + "&" + ck + "=" + cv;
}

function R() {
    var cr = "";
    try {
        cr = $bmd.referrer;
    } catch (err) { }
    if (cr == null) {
        cr = "";
    }
    return cr;
}

function e(ck) {
    f(ck, N(ck));
}

function Z() {
    p("u", T(Q()));
}

function W() {
    $bcu.i = Math.random();
    var cn = "vietadtmpf" + $bcu.i;
    var cs = "<img name='" + cn + "' id='" + cn + "' style='width:0px;height:0px;padding:0px;margin:0px;border:0px;vertical-align:baseline;' border=0 />";
    document.write(cs);
}

function w() {
    var cf = "-1";
    if ($bif) {
        var cw = window;
        cf = T(cw.location.href);
    }
    f("fu", cf);
}

function Q() {
    if ($bof && $bmd.referrer) return $bmd.referrer;
    return $bmd.location.href;
}

function J() {
    if (typeof D == $bud) {
        D = "";
    }
    if (!D) {
        D = "";
    }
    $burl = "?i=" + D;
}

function _K() {
    var cs = Math.floor(Math.random() * 10 + 1);
    if (typeof window._k == "undefined") {
        window._k = cs;
    }
    return window._k;
}

function c() {
    var ca = Math.floor(Math.random() * 1e4) + 10001;
    try {
        if ($bmw.vietad_data.sid) {
            ca = $bmw.vietad_data.sid;
        } else {
            ca = ca - 10001;
            $bmw.vietad_data.sid = ca;
        }
    } catch (err) { }
    f("ac", ca);
}

function K() {
    if (A) return;
    A = {};
    var cu = navigator.userAgent.toLowerCase();
    A.isOpera = cu.indexOf("opera") > -1;
    A.isIE = !A.isOpera && cu.indexOf("msie") > -1;
    A.isFF = !A.isOpera && !A.isIE && cu.indexOf("firefox") > -1;
    A.addEvent = function (o, c, h) {
        if (this.isIE) {
            o.attachEvent("on" + c, h);
        } else {
            o.addEventListener(c, h, false);
        }
    };
}

function ResizeHeight() {
    if (parseInt(adlite_height) == 165 || parseInt(adlite_height) == 156) adlite_height = 180;
    if (parseInt(adlite_height) == 730) adlite_height = 700;
    if (parseInt(adlite_height) == 629) adlite_height = 640;
    if (parseInt(adlite_height) == 540 && parseInt(adlite_width) == 120) adlite_height = 425;
    if (parseInt(adlite_height) == 790 && parseInt(adlite_width) == 120) adlite_height = 625;
    if (parseInt(adlite_height) == 1040 && parseInt(adlite_width) == 120) adlite_height = 825;
    if ((parseInt(adlite_height) == 540 || parseInt(adlite_height) == 400) && parseInt(adlite_width) == 130) adlite_height = 425;
    if ((parseInt(adlite_height) == 790 || parseInt(adlite_height) == 590) && parseInt(adlite_width) == 130) adlite_height = 625;
    if ((parseInt(adlite_height) == 1040 || parseInt(adlite_height) == 780) && parseInt(adlite_width) == 130) adlite_height = 825;
}

function H() {
    ResizeHeight();
    var ci = "vietadf" + $bcu.i;
    $burl = B[3] + $burl;
    $burl = $burl + "&id=" + ci;
    $burl = $burl.substring(0, 2048);
    var cs = "<iframe name='" + ci + "' id='" + ci + "' border=0 frameborder=0  marginwidth='0' marginheight='0' scrolling='no' ";
    var cs = cs + 'style="width:' + adlite_width + "px; height:" + adlite_height + 'px;" ';
    var cs = cs + 'src="' + $burl + '"></iframe>';
    cs = "<div id='div_outer_zone_" + adlite_zoneId + "' style='height:auto;'><div id='div_inner_zone_" + adlite_zoneId + "'>" + cs + "</div></div>";
    document.write(cs);
}

function E() {
    var cf = function () {
        var cu = B[4] + $bcu.s;
        document.getElementById("vietadtmpf" + $bcu.i).setAttribute("src", cu);
    };
    A.addEvent(window, "load", cf);
}

function TrackImpression(cmp) {
    var url = "";
    url = "?z=" + D;
    url = url + "&type=F5D58A5CFC32925D";
    url = url + "&lst=" + cmp;
    url = url + "&Pref=" + T(Q());
    var cu = B[4] + url;
    SendHttpRequest(cu);
}

function U() {
    var cm = C;
    var cw = window;
    for (var co in cm) {
        var cn = cm[co].n;
        if (cn) {
            for (var i = 0; i < cn.length; i++) {
                if (typeof cw[cn[i]] != $bud) {
                    cw[cn[i]] = null;
                }
            }
        }
    }
}

function F() {
    K();
    J();
    Z();
    p("w", $bcu.width);
    p("h", $bcu.height);
    p("sz", $bcu.sz);
    p("t", $bcu.t);
    p("tc", $bcu.tc);
    p("dc", $bcu.dc);
    p("bgc", $bcu.bgc);
    p("bdc", $bcu.bdc);
    p("lc", $bcu.lc);
    p("zt", $bcu.tp);
    p("_k", _K());
    b();
    $bcu.s = $burl;
    try {
        f("dx", $bmw.vietad_data[B[8]]);
    } catch (err) { }
    w();
    W();
    c();
    $bcu.q = $burl;
    if (parseInt($bcu.tp) == 2) {
        var value = readCookie("closeAdVad");
        if (!value) {
            LoadJquery();
            InitAd();
        }
    } else {
        var value = readCookie("vadZoneRichClient");
        if (value == adlite_zoneId) {
            LoadData("http://z.vietad.vn/GetInfo/Zone?id=" + adlite_zoneId + '&type=rich');
        } else {
            LoadData("http://z.vietad.vn/GetInfo/Zone?id=" + adlite_zoneId);
            H();
        }
    };
    U();
}
G();
if (V()) {
    F();
}

function Adtt(s) {
    document.write(s);
}

function InitAd() {
    if ($traverseTimer == null) $traverseTimer = (new Date).getTime();
    $burl = B[3] + $burl;
    $burl = $burl.substring(0, 2048);
    LoadData($burl);
}

function LoadData(url) {
    document.write("<SCRIPT LANGUAGE='Javascript' SRC='" + url + "'></SCRIPT>");
}

function LoadJquery() {
    var html_doc = document.getElementsByTagName("head")[0];
    var css_file = $vaddomain + "Vad_balloon_ads_new.css";
    var css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("type", "text/css");
    css.setAttribute("href", css_file);
    html_doc.appendChild(css);
    if (IE6 == true) {
        var css_file = $vaddomain + "VietAd_IE6.css";
        var css = document.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("type", "text/css");
        css.setAttribute("href", css_file);
        html_doc.appendChild(css);
    } else {
        var css_file = $vaddomain + "VietAd_IE7.css";
        var css = document.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("type", "text/css");
        css.setAttribute("href", css_file);
        html_doc.appendChild(css);
    }
}

function LoadFileExendFromVad(url, type) {
    var doc = document.getElementsByTagName("head")[0];
    if (type = "js") {
        var js = document.createElement("script");
        js.setAttribute("type", "text/javascript");
        js.setAttribute("src", js_file);
        doc.appendChild(js);
    } else {
        var css = document.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("type", "text/css");
        css.setAttribute("href", css_file);
        doc.appendChild(css);
    }
}
var statusMini = false;

function BallonAds(impression, click, filetype, file, width, height, url, title, layoutId, top, left, min, status, zone) {
    this.Impression = impression;
    this.Click = click;
    this.FileType = filetype;
    this.SrcFile = file;
    this.Width = width;
    this.Height = height;
    this.Url = url;
    this.Title = title;
    this.LayoutId = layoutId;
    this.Top = top;
    this.Left = left;
    this.Min = min;
    this.Status = status;
    this.ZoneId = zone;
}

function ClickBalloonAds() {
    if (window.VadzoneType != null && window.VadBallonAds != null) {
        var url = "";
        url = "?z=" + D;
        url = url + "&type=2879BB7B31C03D83";
        url = url + "&c=" + window.VadBallonAds.Click;
        url = url + "&Pref=" + T(Q());
        url = url + "&url=" + window.VadBallonAds.Url;
        var cu = B[4] + url;
        SendHttpRequest(cu);
        window.open(window.VadBallonAds.Url);
    }
}

function SendHttpRequest(url) {
    var imgObj = document.createElement("img");
    imgObj.type = "image/gif";
    imgObj.src = url;
    imgObj.style.display = "none";
    registerImg(imgObj);
}

function registerImg(obj) {
    try {
        document.getElementsByTagName("head")[0].appendChild(obj);
    } catch (err) { }
}

function WriteBallonAds() {
    var displayString = "";
    var isRich = false;
    if (window.VadzoneType != null && window.VadBallonAds != null) {
        displayString += '<div id="divBalloonAdsVad" style="height:' + (parseInt(window.VadBallonAds.Height) + 33) + 'px">';
        displayString += '<div id="VadboxMgic">';
        displayString += '<div id="VadtitleMgic">';
        displayString += '<div class="VadctnerTitleMgic">';
        displayString += '<div class="VadlogoItem"><a href="http://vietad.vn" target="_blank"><img src="http://img.vietad.vn/BalloonAd/logoitem.png" style="border:0px" /></a></div>';
        displayString += '<div class="VadctnerText"> <marquee scrolldelay="200"><div><a href="javascript:void(0)" onclick="ClickBalloonAds();">' + window.VadBallonAds.Title + '</a> - <a href="http://vietad.vn/Publics/ZoneDetail.aspx?zoneId=' + window.VadBallonAds.ZoneId + '" target="_blank"> Ads by VietAd</a></div></marquee></div>';
        displayString += '<div class="VadgrBtnCtrol"><a class="Vaddown"   href="javascript:void(0);" onclick="VadShowOrClose();"></a><a class="Vadclose" href="javascript:void(0);" onclick="closeBalloonAdsVad();"></a></div>';
        displayString += '<div class="Vadclearboth"></div>';
        displayString += "</div>";
        displayString += "</div>";
        displayString += '<div id="VadcterMgic">';
        displayString += '<div class="VadboxInside">';
        displayString += '<a style="position:absolute;border:0px; top:29px; background:#EEcc33; opacity:0; filter:alpha(opacity=0); width:250px; height:' + window.VadBallonAds.Height + 'px; display:block; cursor:pointer; z-index:20000; cursor:pointer;border:1px solid red;" href="javascript:void(0);" onclick="ClickBalloonAds();">&nbsp;</a>';
        switch (window.VadBallonAds.FileType) {
            case "Flash":
                if (parseInt(window.VadBallonAds.LayoutId) != 9) {
                    isRich = true;
                    displayString = '<div id="divBalloonAdsVad" class="boxTiprightBtomVad" style="border:0px;width:' + parseInt(window.VadBallonAds.Width) + "px; height:" + parseInt(window.VadBallonAds.Height) + 'px">';
                }
                displayString += '<object id="BalloonObjVad" name="BalloonObjVad" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + window.VadBallonAds.Width + '" height="' + window.VadBallonAds.Height + '">';
                displayString += '<param name="movie" value="' + window.VadBallonAds.SrcFile + '" />';
                displayString += '<param name="allowScriptAccess" value="always"/>';
                displayString += '<param name="quality" value="high" />';
                displayString += '<param name="wmode" value="transparent">';
                displayString += "<!--[if !IE]>-->";
                displayString += '<object name="BalloonObjVad" type="application/x-shockwave-flash" data="' + window.VadBallonAds.SrcFile + '" width="' + window.VadBallonAds.Width + '" height="' + window.VadBallonAds.Height + '">';
                displayString += '<param name="swliveconnect" value="true" />';
                displayString += '<param name="allowScriptAccess" value="always"/>';
                displayString += '<param name="quality" value="high" />';
                displayString += '<param name="wmode" value="transparent">';
                displayString += "<!--<![endif]-->";
                displayString += "<!--[if !IE]>-->";
                displayString += "</object>";
                displayString += "<!--<![endif]-->";
                displayString += "</object>";
                break;
            case "Image":
                displayString += '<img style="border:0px; position:relative; z-index:0;" src="' + window.VadBallonAds.SrcFile + '" width="' + window.VadBallonAds.Width + '" height="' + window.VadBallonAds.Height + '">';
                break;
            default:
                break;
        }
        if (isRich) {
            displayString += "</div> ";
        } else {
            displayString += "</a>";
            displayString += "</div>";
            displayString += "</div>";
            displayString += "</div>";
            displayString += '<div id="VadtipId">';
            displayString += '<div class="VadtipIdR">';
            displayString += '<div class="VadtipCtner">';
            displayString += '<div class="Vadctner">';
            displayString += '<div class="VaditemLgo"><a href="http://vietad.vn" target="_blank"><img src="http://img.vietad.vn/BalloonAd/logo2.png" style="border:0px" /></a></div>';
            displayString += '<div class="VadtextTip"><marquee scrolldelay="200"><div><a href="javascript:void(0)" onclick="ClickBalloonAds();">' + window.VadBallonAds.Title + '</a> - <a href="http://vietad.vn/Publics/ZoneDetail.aspx?zoneId=' + window.VadBallonAds.ZoneId + '" target="_blank"> Ads by VietAd</a></div></marquee></div>';
            displayString += '<div class="VadgrTipCtrol"  > <a class="VadupTip" href="javascript:void(0)" onclick="VadShowOrClose();"></a> <a class="VadcloseTip"  href="javascript:void(0);" onclick="closeBalloonAdsVad();"></a></div>';
            displayString += '<div class="Vadclearboth"></div>';
            displayString += "</div>";
            displayString += "</div>";
            displayString += "</div>";
            displayString += "</div>";
            displayString += "</div>";
        };
        document.write(displayString);
    }
}
var timeOutPopupVad;

function setMinButton() {
    var obj = swfobject.getObjectById("BalloonObjVad");
    if (obj && typeof obj.JStoASviaExternalInterface != "undefined") {
        obj.JStoASviaExternalInterface("min");
    }
}

function showBalloonAdsVad() {
    if (window.VadzoneType != null && window.VadBallonAds != null) {
        var w = "0px";
        w = parseInt(window.VadBallonAds.Width);
        w = w + "px";
        var sPos = "bottom_right";
        if (sPos == "bottom_left") {
            document.getElementById("divBalloonAdsVad").style.left = 0;
            document.getElementById("divBalloonAdsVad").style.display = "block";
        } else if (sPos == "bottom_right") {
            document.getElementById("divBalloonAdsVad").style.right = "-" + w;
            document.getElementById("divBalloonAdsVad").style.display = "block";
            if (parseInt(window.VadBallonAds.LayoutId) == 9) {
                if (typeof cpmst_ChangeSizeIframe == "function") {
                    cpmst_ChangeSizeIframe(parseInt(window.VadBallonAds.Height) + 33, window.VadBallonAds.Width, 1);
                }
                jQueryCustom("#divBalloonAdsVad").animate({
                    right: "2px"
                }, {
                    duration: "slow"
                });
                timeOutPopupVad = setTimeout("minBalloonAdsVad()", 15e3);
            } else document.getElementById("divBalloonAdsVad").style.right = "0px";
        }
        switch (parseInt(window.VadBallonAds.LayoutId)) {
            case 13:
                VadPopupPreexpand();
                break;
            case 14:
                VadPopupExpand();
                break;
            default:
                break;
        }
        TrackImpression(window.VadBallonAds.Impression);
    }
}

function VadPopupExpand() {
    if (window.VadzoneType != null && window.VadBallonAds != null) {
        if (typeof cpmst_ChangeSizeIframe == "function") {
            cpmst_ChangeSizeIframe(window.VadBallonAds.Height, window.VadBallonAds.Width, 1);
            SendHttpRequest('http://vietad.vn/images/vnexpess' + window.VadBallonAds.Height + window.VadBallonAds.Width + '.jpg');
        }
        document.getElementById("divBalloonAdsVad").style.clip = "rect(0px " + window.VadBallonAds.Width + "px " + window.VadBallonAds.Height + "px 0px)";
    }
}

function VadPopupPreexpand() {
    if (window.VadzoneType != null && window.VadBallonAds != null) {
        if (typeof cpmst_ChangeSizeIframe == "function") {
            var expand = 1;
            if (parseInt(window.VadBallonAds.LayoutId) == 14) {
                expand = 0;
            }
            var height = parseInt(window.VadBallonAds.Height) - parseInt(window.VadBallonAds.Top);
            var width = parseInt(window.VadBallonAds.Width) - parseInt(window.VadBallonAds.Left);
            cpmst_ChangeSizeIframe(height, width, expand);
        }
        document.getElementById("divBalloonAdsVad").style.clip = "rect(" + window.VadBallonAds.Top + "px " + window.VadBallonAds.Width + "px " + window.VadBallonAds.Height + "px " + window.VadBallonAds.Left + "px)";
    }
}

function VadMinPopUp() {
    if (window.VadzoneType != null && window.VadBallonAds != null) {
        if (typeof cpmst_ChangeSizeIframe == "function") {
            var height = parseInt(window.VadBallonAds.Height) - parseInt(window.VadBallonAds.Min);
            if (window.VadBallonAds.LayoutId == 9) height = 33;
            var width = parseInt(window.VadBallonAds.Width) - parseInt(window.VadBallonAds.Left);
            cpmst_ChangeSizeIframe(height, width, 0);
        }
        document.getElementById("divBalloonAdsVad").style.clip = "rect(" + window.VadBallonAds.Min + "px " + window.VadBallonAds.Width + "px " + window.VadBallonAds.Height + "px " + window.VadBallonAds.Left + "px)";
    }
}

function VadClosePopUp() {
    jQueryCustom("#divBalloonAdsVad").fadeOut("slow");
}

function VadClickPopUp() {
    if (window.VadzoneType != null && window.VadBallonAds != null) {
        var url = "";
        url = "?z=" + D;
        url = url + "&type=2879BB7B31C03D83";
        url = url + "&c=" + window.VadBallonAds.Click;
        url = url + "&Pref=" + T(Q());
        url = url + "&url=" + window.VadBallonAds.Url;
        var cu = B[4] + url;
        SendHttpRequest(cu);
        window.open(window.VadBallonAds.Url);
    }
}

function setTimeDelay() {
    timeOutPopupVad = setTimeout("minBalloonAdsVad()", 7e3);
}

function clearTimeDelay() {
    clearTimeout(timeOutPopupVad);
}

function minBalloonAdsVad() {
    clearTimeDelay();
    var h = "0px";
    statusMini = true;
    if (window.VadBallonAds != null) {
        h = parseInt(window.VadBallonAds.Height);
        h = h - 4 + "px";
    }
    if (0) {
        if (IE6 == false) {
            jQueryCustom("#divBalloonAdsVad").animate({
                bottom: "-250px"
            }, {
                duration: "slow"
            });
        } else {
            jQueryCustom("#divBalloonAdsVad").animate({
                height: "195px"
            }, 700);
        }
    } else {
        if (IE6 == false) {
            if (typeof cpmst_ChangeSizeIframe == "function") {
                cpmst_ChangeSizeIframe(33, window.VadBallonAds.Width, 0);
            }
            jQueryCustom("#divBalloonAdsVad").animate({
                bottom: "-" + h
            }, {
                duration: "slow",
                complete: function () {
                    if (document.getElementById("VadtipId")) document.getElementById("VadtipId").style.display = "block";
                    if (document.getElementById("VadboxMgic")) document.getElementById("VadboxMgic").style.display = "none";
                }
            });
        } else {
            jQueryCustom("#divBalloonAdsVad").animate({
                height: "20px"
            }, 700);
        }
    };
    timeOutPopupVad = setTimeout("maxBalloonAdsVad()", 3e5);
}

function VadShowOrClose() {
    clearTimeDelay();
    if (statusMini == true) maxBalloonAdsVad();
    else minBalloonAdsVad();
}

function maxBalloonAdsVad() {
    clearTimeDelay();
    var h = "0px";
    statusMini = false;
    if (window.VadBallonAds != null) {
        h = window.VadBallonAds.Height + "px";
    }
    if (0) {
        if (IE6 == false) {
            jQueryCustom("#divBalloonAdsVad").animate({
                bottom: "0"
            }, {
                duration: "slow"
            });
        } else {
            jQueryCustom("#divBalloonAdsVad").animate({
                height: "227px"
            }, 700);
        }
    } else {
        if (IE6 == false) {
            if (typeof cpmst_ChangeSizeIframe == "function") {
                cpmst_ChangeSizeIframe(parseInt(window.VadBallonAds.Height) + 33, window.VadBallonAds.Width, 1);
            }
            if (document.getElementById("VadtipId")) document.getElementById("VadtipId").style.display = "none";
            if (document.getElementById("VadboxMgic")) document.getElementById("VadboxMgic").style.display = "block";
            jQueryCustom("#divBalloonAdsVad").animate({
                bottom: "0"
            }, {
                duration: "slow"
            });
        } else {
            jQueryCustom("#divBalloonAdsVad").animate({
                height: "227px"
            }, 700);
        }
    };
    timeOutPopupVad = setTimeout("minBalloonAdsVad()", 15e3);
}

function closeBalloonAdsVad() {
    jQueryCustom("#divBalloonAdsVad").fadeOut("slow");
    var value = readCookie("closeAdVad");
    createCookie("closeAdVad", "closed", 5);
}

function WriteBug(msg) {
    document.getElementById("bug").innerHTML += "<br/>" + msg;
}

function createCookie(name, value, minutes) {
    if (minutes) {
        var date = new Date;
        date.setTime(date.getTime() + minutes * 60 * 1e3);
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
} (function () {
    var window = this,
        undefined, _jQueryCustom = window.jQueryCustom,
        jQueryCustom = window.jQueryCustom = function (selector, context) {
            return new jQueryCustom.fn.init(selector, context);
        }, quickExpr = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,
        isSimple = /^.[^:#\[\.,]*$/;
    jQueryCustom.fn = jQueryCustom.prototype = {
        init: function (selector, context) {
            selector = selector || document;
            if (selector.nodeType) {
                this[0] = selector;
                this.length = 1;
                this.context = selector;
                return this;
            }
            if (typeof selector === "string") {
                var match = quickExpr.exec(selector);
                if (match && (match[1] || !context)) {
                    if (match[1]) selector = jQueryCustom.clean([match[1]], context);
                    else {
                        var elem = document.getElementById(match[3]);
                        if (elem) {
                            if (elem.id != match[3]) return jQueryCustom().find(selector);
                            var ret = jQueryCustom(elem);
                            ret.context = document;
                            ret.selector = selector;
                            return ret;
                        }
                        selector = [];
                    };
                } else return jQueryCustom(context).find(selector);
            } else if (jQueryCustom.isFunction(selector)) return jQueryCustom(document).ready(selector);
            if (selector.selector && selector.context) {
                this.selector = selector.selector;
                this.context = selector.context;
            }
            return this.setArray(jQueryCustom.makeArray(selector));
        },
        selector: "",
        jquery: "1.3",
        size: function () {
            return this.length;
        },
        get: function (num) {
            return num === undefined ? jQueryCustom.makeArray(this) : this[num];
        },
        pushStack: function (elems, name, selector) {
            var ret = jQueryCustom(elems);
            ret.prevObject = this;
            ret.context = this.context;
            if (name === "find") ret.selector = this.selector + (this.selector ? " " : "") + selector;
            else if (name) ret.selector = this.selector + "." + name + "(" + selector + ")";
            return ret;
        },
        setArray: function (elems) {
            this.length = 0;
            Array.prototype.push.apply(this, elems);
            return this;
        },
        each: function (callback, args) {
            return jQueryCustom.each(this, callback, args);
        },
        index: function (elem) {
            return jQueryCustom.inArray(elem && elem.jquery ? elem[0] : elem, this);
        },
        attr: function (name, value, type) {
            var options = name;
            if (typeof name === "string")
                if (value === undefined) return this[0] && jQueryCustom[type || "attr"](this[0], name);
                else {
                    options = {};
                    options[name] = value;
                };
            return this.each(function (i) {
                for (name in options) jQueryCustom.attr(type ? this.style : this, name, jQueryCustom.prop(this, options[name], type, i, name));
            });
        },
        css: function (key, value) {
            if ((key == 'width' || key == 'height') && parseFloat(value) < 0) value = undefined;
            return this.attr(key, value, "curCSS");
        },
        text: function (text) {
            if (typeof text !== "object" && text != null) return this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(text));
            var ret = "";
            jQueryCustom.each(text || this, function () {
                jQueryCustom.each(this.childNodes, function () {
                    if (this.nodeType != 8) ret += this.nodeType != 1 ? this.nodeValue : jQueryCustom.fn.text([this]);
                });
            });
            return ret;
        },
        wrapAll: function (html) {
            if (this[0]) {
                var wrap = jQueryCustom(html, this[0].ownerDocument).clone();
                if (this[0].parentNode) wrap.insertBefore(this[0]);
                wrap.map(function () {
                    var elem = this;
                    while (elem.firstChild) elem = elem.firstChild;
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function (html) {
            return this.each(function () {
                jQueryCustom(this).contents().wrapAll(html);
            });
        },
        wrap: function (html) {
            return this.each(function () {
                jQueryCustom(this).wrapAll(html);
            });
        },
        append: function () {
            return this.domManip(arguments, true, function (elem) {
                if (this.nodeType == 1) this.appendChild(elem);
            });
        },
        prepend: function () {
            return this.domManip(arguments, true, function (elem) {
                if (this.nodeType == 1) this.insertBefore(elem, this.firstChild);
            });
        },
        before: function () {
            return this.domManip(arguments, false, function (elem) {
                this.parentNode.insertBefore(elem, this);
            });
        },
        after: function () {
            return this.domManip(arguments, false, function (elem) {
                this.parentNode.insertBefore(elem, this.nextSibling);
            });
        },
        end: function () {
            return this.prevObject || jQueryCustom([]);
        },
        push: [].push,
        find: function (selector) {
            if (this.length === 1 && !/,/.test(selector)) {
                var ret = this.pushStack([], "find", selector);
                ret.length = 0;
                jQueryCustom.find(selector, this[0], ret);
                return ret;
            } else {
                var elems = jQueryCustom.map(this, function (elem) {
                    return jQueryCustom.find(selector, elem);
                });
                return this.pushStack(/[^+>] [^+>]/.test(selector) ? jQueryCustom.unique(elems) : elems, "find", selector);
            }
        },
        clone: function (events) {
            var ret = this.map(function () {
                if (!jQueryCustom.support.noCloneEvent && !jQueryCustom.isXMLDoc(this)) {
                    var clone = this.cloneNode(true),
                        container = document.createElement("div");
                    container.appendChild(clone);
                    return jQueryCustom.clean([container.innerHTML])[0];
                } else return this.cloneNode(true);
            });
            var clone = ret.find("*").andSelf().each(function () {
                if (this[expando] !== undefined) this[expando] = null;
            });
            if (events === true) this.find("*").andSelf().each(function (i) {
                if (this.nodeType == 3) return;
                var events = jQueryCustom.data(this, "events");
                for (var type in events)
                    for (var handler in events[type]) jQueryCustom.event.add(clone[i], type, events[type][handler], events[type][handler].data);
            });
            return ret;
        },
        filter: function (selector) {
            return this.pushStack(jQueryCustom.isFunction(selector) && jQueryCustom.grep(this, function (elem, i) {
                return selector.call(elem, i);
            }) || jQueryCustom.multiFilter(selector, jQueryCustom.grep(this, function (elem) {
                return elem.nodeType === 1;
            })), "filter", selector);
        },
        closest: function (selector) {
            var pos = jQueryCustom.expr.match.POS.test(selector) ? jQueryCustom(selector) : null;
            return this.map(function () {
                var cur = this;
                while (cur && cur.ownerDocument) {
                    if (pos ? pos.index(cur) > -1 : jQueryCustom(cur).is(selector)) return cur;
                    cur = cur.parentNode;
                }
            });
        },
        not: function (selector) {
            if (typeof selector === "string")
                if (isSimple.test(selector)) return this.pushStack(jQueryCustom.multiFilter(selector, this, true), "not", selector);
                else selector = jQueryCustom.multiFilter(selector, this);
            var isArrayLike = selector.length && selector[selector.length - 1] !== undefined && !selector.nodeType;
            return this.filter(function () {
                return isArrayLike ? jQueryCustom.inArray(this, selector) < 0 : this != selector;
            });
        },
        add: function (selector) {
            return this.pushStack(jQueryCustom.unique(jQueryCustom.merge(this.get(), typeof selector === "string" ? jQueryCustom(selector) : jQueryCustom.makeArray(selector))));
        },
        is: function (selector) {
            return !!selector && jQueryCustom.multiFilter(selector, this).length > 0;
        },
        hasClass: function (selector) {
            return !!selector && this.is("." + selector);
        },
        val: function (value) {
            if (value === undefined) {
                var elem = this[0];
                if (elem) {
                    if (jQueryCustom.nodeName(elem, 'option')) return (elem.attributes.value || {}).specified ? elem.value : elem.text;
                    if (jQueryCustom.nodeName(elem, "select")) {
                        var index = elem.selectedIndex,
                            values = [],
                            options = elem.options,
                            one = elem.type == "select-one";
                        if (index < 0) return null;
                        for (var i = one ? index : 0, max = one ? index + 1 : options.length; i < max; i++) {
                            var option = options[i];
                            if (option.selected) {
                                value = jQueryCustom(option).val();
                                if (one) return value;
                                values.push(value);
                            }
                        }
                        return values;
                    }
                    return (elem.value || "").replace(/\r/g, "");
                }
                return undefined;
            }
            if (typeof value === "number") value += '';
            return this.each(function () {
                if (this.nodeType != 1) return;
                if (jQueryCustom.isArray(value) && /radio|checkbox/.test(this.type)) this.checked = (jQueryCustom.inArray(this.value, value) >= 0 || jQueryCustom.inArray(this.name, value) >= 0);
                else if (jQueryCustom.nodeName(this, "select")) {
                    var values = jQueryCustom.makeArray(value);
                    jQueryCustom("option", this).each(function () {
                        this.selected = (jQueryCustom.inArray(this.value, values) >= 0 || jQueryCustom.inArray(this.text, values) >= 0);
                    });
                    if (!values.length) this.selectedIndex = -1;
                } else this.value = value;
            });
        },
        html: function (value) {
            return value === undefined ? (this[0] ? this[0].innerHTML : null) : this.empty().append(value);
        },
        replaceWith: function (value) {
            return this.after(value).remove();
        },
        eq: function (i) {
            return this.slice(i, +i + 1);
        },
        slice: function () {
            return this.pushStack(Array.prototype.slice.apply(this, arguments), "slice", Array.prototype.slice.call(arguments).join(","));
        },
        map: function (callback) {
            return this.pushStack(jQueryCustom.map(this, function (elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        andSelf: function () {
            return this.add(this.prevObject);
        },
        domManip: function (args, table, callback) {
            if (this[0]) {
                var fragment = (this[0].ownerDocument || this[0]).createDocumentFragment(),
                    scripts = jQueryCustom.clean(args, (this[0].ownerDocument || this[0]), fragment),
                    first = fragment.firstChild,
                    extra = this.length > 1 ? fragment.cloneNode(true) : fragment;
                if (first)
                    for (var i = 0, l = this.length; i < l; i++) callback.call(root(this[i], first), i > 0 ? extra.cloneNode(true) : fragment);
                if (scripts) jQueryCustom.each(scripts, evalScript);
            }
            return this;

            function root(elem, cur) {
                return table && jQueryCustom.nodeName(elem, "table") && jQueryCustom.nodeName(cur, "tr") ? (elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody"))) : elem;
            }
        }
    };
    jQueryCustom.fn.init.prototype = jQueryCustom.fn;

    function evalScript(i, elem) {
        if (elem.src) jQueryCustom.ajax({
            url: elem.src,
            async: false,
            dataType: "script"
        });
        else jQueryCustom.globalEval(elem.text || elem.textContent || elem.innerHTML || ""); if (elem.parentNode) elem.parentNode.removeChild(elem);
    };

    function now() {
        return +new Date;
    }
    jQueryCustom.extend = jQueryCustom.fn.extend = function () {
        var target = arguments[0] || {}, i = 1,
            length = arguments.length,
            deep = false,
            options;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i = 2;
        }
        if (typeof target !== "object" && !jQueryCustom.isFunction(target)) target = {};
        if (length == i) {
            target = this;
            --i;
        }
        for (; i < length; i++)
            if ((options = arguments[i]) != null)
                for (var name in options) {
                    var src = target[name],
                        copy = options[name];
                    if (target === copy) continue;
                    if (deep && copy && typeof copy === "object" && !copy.nodeType) target[name] = jQueryCustom.extend(deep, src || (copy.length != null ? [] : {}), copy);
                    else if (copy !== undefined) target[name] = copy;
                }
        return target;
    };
    var exclude = /z-?index|font-?weight|opacity|zoom|line-?height/i,
        defaultView = document.defaultView || {}, toString = Object.prototype.toString;
    jQueryCustom.extend({
        noConflict: function (deep) {
            window.$ = _$;
            if (deep) window.jQueryCustom = _jQueryCustom;
            return jQueryCustom;
        },
        isFunction: function (obj) {
            return toString.call(obj) === "[object Function]";
        },
        isArray: function (obj) {
            return toString.call(obj) === "[object Array]";
        },
        isXMLDoc: function (elem) {
            return elem.documentElement && !elem.body || elem.tagName && elem.ownerDocument && !elem.ownerDocument.body;
        },
        globalEval: function (data) {
            data = jQueryCustom.trim(data);
            if (data) {
                var head = document.getElementsByTagName("head")[0] || document.documentElement,
                    script = document.createElement("script");
                script.type = "text/javascript";
                if (jQueryCustom.support.scriptEval) script.appendChild(document.createTextNode(data));
                else script.text = data;
                head.insertBefore(script, head.firstChild);
                head.removeChild(script);
            }
        },
        nodeName: function (elem, name) {
            return elem.nodeName && elem.nodeName.toUpperCase() == name.toUpperCase();
        },
        each: function (object, callback, args) {
            var name, i = 0,
                length = object.length;
            if (args) {
                if (length === undefined) {
                    for (name in object)
                        if (callback.apply(object[name], args) === false) break;
                } else
                    for (; i < length;)
                        if (callback.apply(object[i++], args) === false) break;
            } else {
                if (length === undefined) {
                    for (name in object)
                        if (callback.call(object[name], name, object[name]) === false) break;
                } else
                    for (var value = object[0]; i < length && callback.call(value, i, value) !== false; value = object[++i]) { }
            };
            return object;
        },
        prop: function (elem, value, type, i, name) {
            if (jQueryCustom.isFunction(value)) value = value.call(elem, i);
            return typeof value === "number" && type == "curCSS" && !exclude.test(name) ? value + "px" : value;
        },
        className: {
            add: function (elem, classNames) {
                jQueryCustom.each((classNames || "").split(/\s+/), function (i, className) {
                    if (elem.nodeType == 1 && !jQueryCustom.className.has(elem.className, className)) elem.className += (elem.className ? " " : "") + className;
                });
            },
            remove: function (elem, classNames) {
                if (elem.nodeType == 1) elem.className = classNames !== undefined ? jQueryCustom.grep(elem.className.split(/\s+/), function (className) {
                    return !jQueryCustom.className.has(classNames, className);
                }).join(" ") : "";
            },
            has: function (elem, className) {
                return jQueryCustom.inArray(className, (elem.className || elem).toString().split(/\s+/)) > -1;
            }
        },
        swap: function (elem, options, callback) {
            var old = {};
            for (var name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }
            callback.call(elem);
            for (var name in options) elem.style[name] = old[name];
        },
        css: function (elem, name, force) {
            if (name == "width" || name == "height") {
                var val, props = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }, which = name == "width" ? ["Left", "Right"] : ["Top", "Bottom"];

                function getWH() {
                    val = name == "width" ? elem.offsetWidth : elem.offsetHeight;
                    var padding = 0,
                        border = 0;
                    jQueryCustom.each(which, function () {
                        padding += parseFloat(jQueryCustom.curCSS(elem, "padding" + this, true)) || 0;
                        border += parseFloat(jQueryCustom.curCSS(elem, "border" + this + "Width", true)) || 0;
                    });
                    val -= Math.round(padding + border);
                }
                if (jQueryCustom(elem).is(":visible")) getWH();
                else jQueryCustom.swap(elem, props, getWH);
                return Math.max(0, val);
            }
            return jQueryCustom.curCSS(elem, name, force);
        },
        curCSS: function (elem, name, force) {
            var ret, style = elem.style;
            if (name == "opacity" && !jQueryCustom.support.opacity) {
                ret = jQueryCustom.attr(style, "opacity");
                return ret == "" ? "1" : ret;
            }
            if (name.match(/float/i)) name = styleFloat;
            if (!force && style && style[name]) ret = style[name];
            else if (defaultView.getComputedStyle) {
                if (name.match(/float/i)) name = "float";
                name = name.replace(/([A-Z])/g, "-$1").toLowerCase();
                var computedStyle = defaultView.getComputedStyle(elem, null);
                if (computedStyle) ret = computedStyle.getPropertyValue(name);
                if (name == "opacity" && ret == "") ret = "1";
            } else if (elem.currentStyle) {
                var camelCase = name.replace(/\-(\w)/g, function (all, letter) {
                    return letter.toUpperCase();
                });
                ret = elem.currentStyle[name] || elem.currentStyle[camelCase];
                if (!/^\d+(px)?$/i.test(ret) && /^\d/.test(ret)) {;
                    var left = style.left,
                        rsLeft = elem.runtimeStyle.left;
                    elem.runtimeStyle.left = elem.currentStyle.left;
                    style.left = ret || 0;
                    ret = style.pixelLeft + "px";
                    style.left = left;
                    elem.runtimeStyle.left = rsLeft;
                }
            }
            return ret;
        },
        clean: function (elems, context, fragment) {
            context = context || document;
            if (typeof context.createElement === "undefined") context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
            if (!fragment && elems.length === 1 && typeof elems[0] === "string") {
                var match = /^<(\w+)\s*\/?>$/.exec(elems[0]);
                if (match) return [context.createElement(match[1])];
            };
            var ret = [],
                scripts = [],
                div = context.createElement("div");
            jQueryCustom.each(elems, function (i, elem) {
                if (typeof elem === "number") elem += '';
                if (!elem) return;
                if (typeof elem === "string") {
                    elem = elem.replace(/(<(\w+)[^>]*?)\/>/g, function (all, front, tag) {
                        return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ? all : front + "></" + tag + ">";
                    });
                    var tags = jQueryCustom.trim(elem).toLowerCase();
                    var wrap = !tags.indexOf("<opt") && [1, "<select multiple='multiple'>", "</select>"] || !tags.indexOf("<leg") && [1, "<fieldset>", "</fieldset>"] || tags.match(/^<(thead|tbody|tfoot|colg|cap)/) && [1, "<table>", "</table>"] || !tags.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!tags.indexOf("<td") || !tags.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || !tags.indexOf("<col") && [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] || !jQueryCustom.support.htmlSerialize && [1, "div<div>", "</div>"] || [0, "", ""];
                    div.innerHTML = wrap[1] + elem + wrap[2];
                    while (wrap[0]--) div = div.lastChild;
                    if (!jQueryCustom.support.tbody) {
                        var tbody = !tags.indexOf("<table") && tags.indexOf("<tbody") < 0 ? div.firstChild && div.firstChild.childNodes : wrap[1] == "<table>" && tags.indexOf("<tbody") < 0 ? div.childNodes : [];
                        for (var j = tbody.length - 1; j >= 0; --j)
                            if (jQueryCustom.nodeName(tbody[j], "tbody") && !tbody[j].childNodes.length) tbody[j].parentNode.removeChild(tbody[j]);
                    }
                    if (!jQueryCustom.support.leadingWhitespace && /^\s/.test(elem)) div.insertBefore(context.createTextNode(elem.match(/^\s*/)[0]), div.firstChild);
                    elem = jQueryCustom.makeArray(div.childNodes);
                }
                if (elem.nodeType) ret.push(elem);
                else ret = jQueryCustom.merge(ret, elem);
            });
            if (fragment) {
                for (var i = 0; ret[i]; i++) {
                    if (jQueryCustom.nodeName(ret[i], "script") && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript")) {
                        scripts.push(ret[i].parentNode ? ret[i].parentNode.removeChild(ret[i]) : ret[i]);
                    } else {
                        if (ret[i].nodeType === 1) ret.splice.apply(ret, [i + 1, 0].concat(jQueryCustom.makeArray(ret[i].getElementsByTagName("script"))));
                        fragment.appendChild(ret[i]);
                    }
                }
                return scripts;
            }
            return ret;
        },
        attr: function (elem, name, value) {
            if (!elem || elem.nodeType == 3 || elem.nodeType == 8) return undefined;
            var notxml = !jQueryCustom.isXMLDoc(elem),
                set = value !== undefined;
            name = notxml && jQueryCustom.props[name] || name;
            if (elem.tagName) {
                var special = /href|src|style/.test(name);
                if (name == "selected" && elem.parentNode) elem.parentNode.selectedIndex;
                if (name in elem && notxml && !special) {
                    if (set) {
                        if (name == "type" && jQueryCustom.nodeName(elem, "input") && elem.parentNode) throw "type property can't be changed";
                        elem[name] = value;
                    }
                    if (jQueryCustom.nodeName(elem, "form") && elem.getAttributeNode(name)) return elem.getAttributeNode(name).nodeValue;
                    if (name == "tabIndex") {
                        var attributeNode = elem.getAttributeNode("tabIndex");
                        return attributeNode && attributeNode.specified ? attributeNode.value : elem.nodeName.match(/^(a|area|button|input|object|select|textarea)$/i) ? 0 : undefined;
                    }
                    return elem[name];
                }
                if (!jQueryCustom.support.style && notxml && name == "style") return jQueryCustom.attr(elem.style, "cssText", value);
                if (set) elem.setAttribute(name, "" + value);
                var attr = !jQueryCustom.support.hrefNormalized && notxml && special ? elem.getAttribute(name, 2) : elem.getAttribute(name);
                return attr === null ? undefined : attr;
            }
            if (!jQueryCustom.support.opacity && name == "opacity") {
                if (set) {
                    elem.zoom = 1;
                    elem.filter = (elem.filter || "").replace(/alpha\([^)]*\)/, "") + (parseInt(value) + '' == "NaN" ? "" : "alpha(opacity=" + value * 100 + ")");
                }
                return elem.filter && elem.filter.indexOf("opacity=") >= 0 ? (parseFloat(elem.filter.match(/opacity=([^)]*)/)[1]) / 100) + '' : "";
            }
            name = name.replace(/-([a-z])/ig, function (all, letter) {
                return letter.toUpperCase();
            });
            if (set) elem[name] = value;
            return elem[name];
        },
        trim: function (text) {
            return (text || "").replace(/^\s+|\s+$/g, "");
        },
        makeArray: function (array) {
            var ret = [];
            if (array != null) {
                var i = array.length;
                if (i == null || typeof array === "string" || jQueryCustom.isFunction(array) || array.setInterval) ret[0] = array;
                else
                    while (i) ret[--i] = array[i];
            }
            return ret;
        },
        inArray: function (elem, array) {
            for (var i = 0, length = array.length; i < length; i++)
                if (array[i] === elem) return i;
            return -1;
        },
        merge: function (first, second) {
            var i = 0,
                elem, pos = first.length;
            if (!jQueryCustom.support.getAll) {
                while ((elem = second[i++]) != null)
                    if (elem.nodeType != 8) first[pos++] = elem;
            } else
                while ((elem = second[i++]) != null) first[pos++] = elem;
            return first;
        },
        unique: function (array) {
            var ret = [],
                done = {};
            try {
                for (var i = 0, length = array.length; i < length; i++) {
                    var id = jQueryCustom.data(array[i]);
                    if (!done[id]) {
                        done[id] = true;
                        ret.push(array[i]);
                    }
                }
            } catch (e) {
                ret = array;
            }
            return ret;
        },
        grep: function (elems, callback, inv) {
            var ret = [];
            for (var i = 0, length = elems.length; i < length; i++)
                if (!inv != !callback(elems[i], i)) ret.push(elems[i]);
            return ret;
        },
        map: function (elems, callback) {
            var ret = [];
            for (var i = 0, length = elems.length; i < length; i++) {
                var value = callback(elems[i], i);
                if (value != null) ret[ret.length] = value;
            }
            return ret.concat.apply([], ret);
        }
    });
    var userAgent = navigator.userAgent.toLowerCase();
    jQueryCustom.browser = {
        version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
        safari: /webkit/.test(userAgent),
        opera: /opera/.test(userAgent),
        msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
        mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
    };
    jQueryCustom.each({
        parent: function (elem) {
            return elem.parentNode;
        },
        parents: function (elem) {
            return jQueryCustom.dir(elem, "parentNode");
        },
        next: function (elem) {
            return jQueryCustom.nth(elem, 2, "nextSibling");
        },
        prev: function (elem) {
            return jQueryCustom.nth(elem, 2, "previousSibling");
        },
        nextAll: function (elem) {
            return jQueryCustom.dir(elem, "nextSibling");
        },
        prevAll: function (elem) {
            return jQueryCustom.dir(elem, "previousSibling");
        },
        siblings: function (elem) {
            return jQueryCustom.sibling(elem.parentNode.firstChild, elem);
        },
        children: function (elem) {
            return jQueryCustom.sibling(elem.firstChild);
        },
        contents: function (elem) {
            return jQueryCustom.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQueryCustom.makeArray(elem.childNodes);
        }
    }, function (name, fn) {
        jQueryCustom.fn[name] = function (selector) {
            var ret = jQueryCustom.map(this, fn);
            if (selector && typeof selector == "string") ret = jQueryCustom.multiFilter(selector, ret);
            return this.pushStack(jQueryCustom.unique(ret), name, selector);
        };
    });
    jQueryCustom.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (name, original) {
        jQueryCustom.fn[name] = function () {
            var args = arguments;
            return this.each(function () {
                for (var i = 0, length = args.length; i < length; i++) jQueryCustom(args[i])[original](this);
            });
        };
    });
    jQueryCustom.each({
        removeAttr: function (name) {
            jQueryCustom.attr(this, name, "");
            if (this.nodeType == 1) this.removeAttribute(name);
        },
        addClass: function (classNames) {
            jQueryCustom.className.add(this, classNames);
        },
        removeClass: function (classNames) {
            jQueryCustom.className.remove(this, classNames);
        },
        toggleClass: function (classNames, state) {
            if (typeof state !== "boolean") state = !jQueryCustom.className.has(this, classNames);
            jQueryCustom.className[state ? "add" : "remove"](this, classNames);
        },
        remove: function (selector) {
            if (!selector || jQueryCustom.filter(selector, [this]).length) {
                jQueryCustom("*", this).add([this]).each(function () {
                    jQueryCustom.event.remove(this);
                    jQueryCustom.removeData(this);
                });
                if (this.parentNode) this.parentNode.removeChild(this);
            }
        },
        empty: function () {
            jQueryCustom(">*", this).remove();
            while (this.firstChild) this.removeChild(this.firstChild);
        }
    }, function (name, fn) {
        jQueryCustom.fn[name] = function () {
            return this.each(fn, arguments);
        };
    });

    function num(elem, prop) {
        return elem[0] && parseInt(jQueryCustom.curCSS(elem[0], prop, true), 10) || 0;
    }
    var expando = "jQueryCustom" + now(),
        uuid = 0,
        windowData = {};
    jQueryCustom.extend({
        cache: {},
        data: function (elem, name, data) {
            elem = elem == window ? windowData : elem;
            var id = elem[expando];
            if (!id) id = elem[expando] = ++uuid;
            if (name && !jQueryCustom.cache[id]) jQueryCustom.cache[id] = {};
            if (data !== undefined) jQueryCustom.cache[id][name] = data;
            return name ? jQueryCustom.cache[id][name] : id;
        },
        removeData: function (elem, name) {
            elem = elem == window ? windowData : elem;
            var id = elem[expando];
            if (name) {
                if (jQueryCustom.cache[id]) {
                    delete jQueryCustom.cache[id][name];
                    name = "";
                    for (name in jQueryCustom.cache[id]) break;
                    if (!name) jQueryCustom.removeData(elem);
                }
            } else {
                try {
                    delete elem[expando];
                } catch (e) {
                    if (elem.removeAttribute) elem.removeAttribute(expando);
                }
                delete jQueryCustom.cache[id];
            }
        },
        queue: function (elem, type, data) {
            if (elem) {
                type = (type || "fx") + "queue";
                var q = jQueryCustom.data(elem, type);
                if (!q || jQueryCustom.isArray(data)) q = jQueryCustom.data(elem, type, jQueryCustom.makeArray(data));
                else if (data) q.push(data);
            }
            return q;
        },
        dequeue: function (elem, type) {
            var queue = jQueryCustom.queue(elem, type),
                fn = queue.shift();
            if (!type || type === "fx") fn = queue[0];
            if (fn !== undefined) fn.call(elem);
        }
    });
    jQueryCustom.fn.extend({
        data: function (key, value) {
            var parts = key.split(".");
            parts[1] = parts[1] ? "." + parts[1] : "";
            if (value === undefined) {
                var data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);
                if (data === undefined && this.length) data = jQueryCustom.data(this[0], key);
                return data === undefined && parts[1] ? this.data(parts[0]) : data;
            } else return this.trigger("setData" + parts[1] + "!", [parts[0], value]).each(function () {
                jQueryCustom.data(this, key, value);
            });
        },
        removeData: function (key) {
            return this.each(function () {
                jQueryCustom.removeData(this, key);
            });
        },
        queue: function (type, data) {
            if (typeof type !== "string") {
                data = type;
                type = "fx";
            }
            if (data === undefined) return jQueryCustom.queue(this[0], type);
            return this.each(function () {
                var queue = jQueryCustom.queue(this, type, data);
                if (type == "fx" && queue.length == 1) queue[0].call(this);
            });
        },
        dequeue: function (type) {
            return this.each(function () {
                jQueryCustom.dequeue(this, type);
            });
        }
    });
    (function () {
        var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|[^[\]]+)+\]|\\.|[^>+~,(\[]+)+|[>+~])(\s*,\s*)?/g,
            done = 0,
            toString = Object.prototype.toString;
        var Sizzle = function (selector, context, results, seed) {
            results = results || [];
            context = context || document;
            if (context.nodeType !== 1 && context.nodeType !== 9) return [];
            if (!selector || typeof selector !== "string") {
                return results;
            }
            var parts = [],
                m, set, checkSet, check, mode, extra, prune = true;
            chunker.lastIndex = 0;
            while ((m = chunker.exec(selector)) !== null) {
                parts.push(m[1]);
                if (m[2]) {
                    extra = RegExp.rightContext;
                    break;
                }
            }
            if (parts.length > 1 && Expr.match.POS.exec(selector)) {
                if (parts.length === 2 && Expr.relative[parts[0]]) {
                    var later = "",
                        match;
                    while ((match = Expr.match.POS.exec(selector))) {
                        later += match[0];
                        selector = selector.replace(Expr.match.POS, "");
                    }
                    set = Sizzle.filter(later, Sizzle(/\s$/.test(selector) ? selector + "*" : selector, context));
                } else {
                    set = Expr.relative[parts[0]] ? [context] : Sizzle(parts.shift(), context);
                    while (parts.length) {
                        var tmpSet = [];
                        selector = parts.shift();
                        if (Expr.relative[selector]) selector += parts.shift();
                        for (var i = 0, l = set.length; i < l; i++) {
                            Sizzle(selector, set[i], tmpSet);
                        }
                        set = tmpSet;
                    }
                }
            } else {
                var ret = seed ? {
                    expr: parts.pop(),
                    set: makeArray(seed)
                } : Sizzle.find(parts.pop(), parts.length === 1 && context.parentNode ? context.parentNode : context);
                set = Sizzle.filter(ret.expr, ret.set);
                if (parts.length > 0) {
                    checkSet = makeArray(set);
                } else {
                    prune = false;
                };
                while (parts.length) {
                    var cur = parts.pop(),
                        pop = cur;
                    if (!Expr.relative[cur]) {
                        cur = "";
                    } else {
                        pop = parts.pop();
                    }; if (pop == null) {
                        pop = context;
                    }
                    Expr.relative[cur](checkSet, pop, isXML(context));
                }
            }; if (!checkSet) {
                checkSet = set;
            }
            if (!checkSet) {
                throw "Syntax error, unrecognized expression: " + (cur || selector);
            }
            if (toString.call(checkSet) === "[object Array]") {
                if (!prune) {
                    results.push.apply(results, checkSet);
                } else if (context.nodeType === 1) {
                    for (var i = 0; checkSet[i] != null; i++) {
                        if (checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && contains(context, checkSet[i]))) {
                            results.push(set[i]);
                        }
                    }
                } else {
                    for (var i = 0; checkSet[i] != null; i++) {
                        if (checkSet[i] && checkSet[i].nodeType === 1) {
                            results.push(set[i]);
                        }
                    }
                }
            } else {
                makeArray(checkSet, results);
            }; if (extra) {
                Sizzle(extra, context, results, seed);
            }
            return results;
        };
        Sizzle.matches = function (expr, set) {
            return Sizzle(expr, null, null, set);
        };
        Sizzle.find = function (expr, context) {
            var set, match;
            if (!expr) {
                return [];
            }
            for (var i = 0, l = Expr.order.length; i < l; i++) {
                var type = Expr.order[i],
                    match;
                if ((match = Expr.match[type].exec(expr))) {
                    var left = RegExp.leftContext;
                    if (left.substr(left.length - 1) !== "\\") {;
                        match[1] = (match[1] || "").replace(/\\/g, "");;
                        set = Expr.find[type](match, context);
                        if (set != null) {
                            expr = expr.replace(Expr.match[type], "");
                            break;
                        }
                    }
                }
            }
            if (!set) {
                set = context.getElementsByTagName("*");
            }
            return {
                set: set,
                expr: expr
            };
        };
        Sizzle.filter = function (expr, set, inplace, not) {
            var old = expr,
                result = [],
                curLoop = set,
                match, anyFound;
            while (expr && set.length) {
                for (var type in Expr.filter) {
                    if ((match = Expr.match[type].exec(expr)) != null) {
                        var filter = Expr.filter[type],
                            goodArray = null,
                            goodPos = 0,
                            found, item;
                        anyFound = false;
                        if (curLoop == result) {
                            result = [];
                        }
                        if (Expr.preFilter[type]) {
                            match = Expr.preFilter[type](match, curLoop, inplace, result, not);
                            if (!match) {
                                anyFound = found = true;
                            } else if (match === true) {
                                continue;
                            } else if (match[0] === true) {
                                goodArray = [];
                                var last = null,
                                    elem;
                                for (var i = 0;
                                    (elem = curLoop[i]) !== undefined; i++) {
                                    if (elem && last !== elem) {
                                        goodArray.push(elem);
                                        last = elem;
                                    }
                                }
                            }
                        }
                        if (match) {
                            for (var i = 0;
                                (item = curLoop[i]) !== undefined; i++) {
                                if (item) {
                                    if (goodArray && item != goodArray[goodPos]) {
                                        goodPos++;
                                    }
                                    found = filter(item, match, goodPos, goodArray);
                                    var pass = not ^ !!found;
                                    if (inplace && found != null) {
                                        if (pass) {
                                            anyFound = true;
                                        } else {
                                            curLoop[i] = false;
                                        }
                                    } else if (pass) {
                                        result.push(item);
                                        anyFound = true;
                                    }
                                }
                            }
                        }
                        if (found !== undefined) {
                            if (!inplace) {
                                curLoop = result;
                            }
                            expr = expr.replace(Expr.match[type], "");
                            if (!anyFound) {
                                return [];
                            }
                            break;
                        }
                    }
                }
                expr = expr.replace(/\s*,\s*/, "");
                if (expr == old) {
                    if (anyFound == null) {
                        throw "Syntax error, unrecognized expression: " + expr;
                    } else {
                        break;
                    }
                }
                old = expr;
            }
            return curLoop;
        };
        var Expr = Sizzle.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
            },
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (elem) {
                    return elem.getAttribute("href");
                }
            },
            relative: {
                "+": function (checkSet, part) {
                    for (var i = 0, l = checkSet.length; i < l; i++) {
                        var elem = checkSet[i];
                        if (elem) {
                            var cur = elem.previousSibling;
                            while (cur && cur.nodeType !== 1) {
                                cur = cur.previousSibling;
                            }
                            checkSet[i] = typeof part === "string" ? cur || false : cur === part;
                        }
                    }
                    if (typeof part === "string") {
                        Sizzle.filter(part, checkSet, true);
                    }
                },
                ">": function (checkSet, part, isXML) {
                    if (typeof part === "string" && !/\W/.test(part)) {
                        part = isXML ? part : part.toUpperCase();
                        for (var i = 0, l = checkSet.length; i < l; i++) {
                            var elem = checkSet[i];
                            if (elem) {
                                var parent = elem.parentNode;
                                checkSet[i] = parent.nodeName === part ? parent : false;
                            }
                        }
                    } else {
                        for (var i = 0, l = checkSet.length; i < l; i++) {
                            var elem = checkSet[i];
                            if (elem) {
                                checkSet[i] = typeof part === "string" ? elem.parentNode : elem.parentNode === part;
                            }
                        }
                        if (typeof part === "string") {
                            Sizzle.filter(part, checkSet, true);
                        }
                    }
                },
                "": function (checkSet, part, isXML) {
                    var doneName = "done" + (done++),
                        checkFn = dirCheck;
                    if (!part.match(/\W/)) {
                        var nodeCheck = part = isXML ? part : part.toUpperCase();
                        checkFn = dirNodeCheck;
                    }
                    checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
                },
                "~": function (checkSet, part, isXML) {
                    var doneName = "done" + (done++),
                        checkFn = dirCheck;
                    if (typeof part === "string" && !part.match(/\W/)) {
                        var nodeCheck = part = isXML ? part : part.toUpperCase();
                        checkFn = dirNodeCheck;
                    }
                    checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
                }
            },
            find: {
                ID: function (match, context) {
                    if (context.getElementById) {
                        var m = context.getElementById(match[1]);
                        return m ? [m] : [];
                    }
                },
                NAME: function (match, context) {
                    return context.getElementsByName ? context.getElementsByName(match[1]) : null;
                },
                TAG: function (match, context) {
                    return context.getElementsByTagName(match[1]);
                }
            },
            preFilter: {
                CLASS: function (match, curLoop, inplace, result, not) {
                    match = " " + match[1].replace(/\\/g, "") + " ";;
                    for (var i = 0; curLoop[i]; i++) {
                        if (not ^ (" " + curLoop[i].className + " ").indexOf(match) >= 0) {
                            if (!inplace) result.push(curLoop[i]);
                        } else if (inplace) {
                            curLoop[i] = false;
                        }
                    }
                    return false;
                },
                ID: function (match) {
                    return match[1].replace(/\\/g, "");
                },
                TAG: function (match, curLoop) {
                    for (var i = 0; !curLoop[i]; i++) { }
                    return isXML(curLoop[i]) ? match[1] : match[1].toUpperCase();
                },
                CHILD: function (match) {
                    if (match[1] == "nth") {
                        var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2] == "even" && "2n" || match[2] == "odd" && "2n+1" || !/\D/.test(match[2]) && "0n+" + match[2] || match[2]);;
                        match[2] = (test[1] + (test[2] || 1)) - 0;
                        match[3] = test[3] - 0;
                    }
                    match[0] = "done" + (done++);
                    return match;
                },
                ATTR: function (match) {
                    var name = match[1];
                    if (Expr.attrMap[name]) {
                        match[1] = Expr.attrMap[name];
                    }
                    if (match[2] === "~=") {
                        match[4] = " " + match[4] + " ";
                    }
                    return match;
                },
                PSEUDO: function (match, curLoop, inplace, result, not) {
                    if (match[1] === "not") {
                        if (match[3].match(chunker).length > 1) {
                            match[3] = Sizzle(match[3], null, null, curLoop);
                        } else {
                            var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
                            if (!inplace) {
                                result.push.apply(result, ret);
                            }
                            return false;
                        }
                    } else if (Expr.match.POS.test(match[0])) {
                        return true;
                    }
                    return match;
                },
                POS: function (match) {
                    match.unshift(true);
                    return match;
                }
            },
            filters: {
                enabled: function (elem) {
                    return elem.disabled === false && elem.type !== "hidden";
                },
                disabled: function (elem) {
                    return elem.disabled === true;
                },
                checked: function (elem) {
                    return elem.checked === true;
                },
                selected: function (elem) {
                    elem.parentNode.selectedIndex;
                    return elem.selected === true;
                },
                parent: function (elem) {
                    return !!elem.firstChild;
                },
                empty: function (elem) {
                    return !elem.firstChild;
                },
                has: function (elem, i, match) {
                    return !!Sizzle(match[3], elem).length;
                },
                header: function (elem) {
                    return /h\d/i.test(elem.nodeName);
                },
                text: function (elem) {
                    return "text" === elem.type;
                }
            },
            setFilters: {
                first: function (elem, i) {
                    return i === 0;
                },
                last: function (elem, i, match, array) {
                    return i === array.length - 1;
                },
                even: function (elem, i) {
                    return i % 2 === 0;
                },
                odd: function (elem, i) {
                    return i % 2 === 1;
                },
                lt: function (elem, i, match) {
                    return i < match[3] - 0;
                },
                gt: function (elem, i, match) {
                    return i > match[3] - 0;
                },
                nth: function (elem, i, match) {
                    return match[3] - 0 == i;
                },
                eq: function (elem, i, match) {
                    return match[3] - 0 == i;
                }
            },
            filter: {
                CHILD: function (elem, match) {
                    var type = match[1],
                        parent = elem.parentNode;
                    var doneName = "child" + parent.childNodes.length;
                    if (parent && (!parent[doneName] || !elem.nodeIndex)) {
                        var count = 1;
                        for (var node = parent.firstChild; node; node = node.nextSibling) {
                            if (node.nodeType == 1) {
                                node.nodeIndex = count++;
                            }
                        }
                        parent[doneName] = count - 1;
                    }
                    if (type == "first") {
                        return elem.nodeIndex == 1;
                    } else if (type == "last") {
                        return elem.nodeIndex == parent[doneName];
                    } else if (type == "only") {
                        return parent[doneName] == 1;
                    } else if (type == "nth") {
                        var add = false,
                            first = match[2],
                            last = match[3];
                        if (first == 1 && last == 0) {
                            return true;
                        }
                        if (first == 0) {
                            if (elem.nodeIndex == last) {
                                add = true;
                            }
                        } else if ((elem.nodeIndex - last) % first == 0 && (elem.nodeIndex - last) / first >= 0) {
                            add = true;
                        }
                        return add;
                    }
                },
                PSEUDO: function (elem, match, i, array) {
                    var name = match[1],
                        filter = Expr.filters[name];
                    if (filter) {
                        return filter(elem, i, match, array);
                    } else if (name === "contains") {
                        return (elem.textContent || elem.innerText || "").indexOf(match[3]) >= 0;
                    } else if (name === "not") {
                        var not = match[3];
                        for (var i = 0, l = not.length; i < l; i++) {
                            if (not[i] === elem) {
                                return false;
                            }
                        }
                        return true;
                    }
                },
                ID: function (elem, match) {
                    return elem.nodeType === 1 && elem.getAttribute("id") === match;
                },
                TAG: function (elem, match) {
                    return (match === "*" && elem.nodeType === 1) || elem.nodeName === match;
                },
                CLASS: function (elem, match) {
                    return match.test(elem.className);
                },
                ATTR: function (elem, match) {
                    var result = Expr.attrHandle[match[1]] ? Expr.attrHandle[match[1]](elem) : elem[match[1]] || elem.getAttribute(match[1]),
                        value = result + "",
                        type = match[2],
                        check = match[4];
                    return result == null ? false : type === "=" ? value === check : type === "*=" ? value.indexOf(check) >= 0 : type === "~=" ? (" " + value + " ").indexOf(check) >= 0 : !match[4] ? result : type === "!=" ? value != check : type === "^=" ? value.indexOf(check) === 0 : type === "$=" ? value.substr(value.length - check.length) === check : type === "|=" ? value === check || value.substr(0, check.length + 1) === check + "-" : false;
                },
                POS: function (elem, match, i, array) {
                    var name = match[2],
                        filter = Expr.setFilters[name];
                    if (filter) {
                        return filter(elem, i, match, array);
                    }
                }
            }
        };
        for (var type in Expr.match) {
            Expr.match[type] = RegExp(Expr.match[type].source + /(?![^\[]*\])(?![^\(]*\))/.source);
        }
        var makeArray = function (array, results) {
            array = Array.prototype.slice.call(array);
            if (results) {
                results.push.apply(results, array);
                return results;
            }
            return array;
        };
        try {
            Array.prototype.slice.call(document.documentElement.childNodes);
        } catch (e) {
            makeArray = function (array, results) {
                var ret = results || [];
                if (toString.call(array) === "[object Array]") {
                    Array.prototype.push.apply(ret, array);
                } else {
                    if (typeof array.length === "number") {
                        for (var i = 0, l = array.length; i < l; i++) {
                            ret.push(array[i]);
                        }
                    } else {
                        for (var i = 0; array[i]; i++) {
                            ret.push(array[i]);
                        }
                    }
                };
                return ret;
            };
        } (function () {
            var div = document.createElement("div");
            div.appendChild(document.createComment(""));
            if (div.getElementsByTagName("*").length > 0) {
                Expr.find.TAG = function (match, context) {
                    var results = context.getElementsByTagName(match[1]);
                    if (match[1] === "*") {
                        var tmp = [];
                        for (var i = 0; results[i]; i++) {
                            if (results[i].nodeType === 1) {
                                tmp.push(results[i]);
                            }
                        }
                        results = tmp;
                    }
                    return results;
                };
            }
            div.innerHTML = "<a href='#'></a>";
            if (div.firstChild.getAttribute("href") !== "#") {
                Expr.attrHandle.href = function (elem) {
                    return elem.getAttribute("href", 2);
                };
            }
        })();
        if (document.querySelectorAll) (function () {
            var oldSizzle = Sizzle;
            Sizzle = function (query, context, extra, seed) {
                context = context || document;
                if (!seed && context.nodeType === 9) {
                    try {
                        return makeArray(context.querySelectorAll(query), extra);
                    } catch (e) { }
                }
                return oldSizzle(query, context, extra, seed);
            };
            Sizzle.find = oldSizzle.find;
            Sizzle.filter = oldSizzle.filter;
            Sizzle.selectors = oldSizzle.selectors;
            Sizzle.matches = oldSizzle.matches;
        })();
        if (document.documentElement.getElementsByClassName) {
            Expr.order.splice(1, 0, "CLASS");
            Expr.find.CLASS = function (match, context) {
                return context.getElementsByClassName(match[1]);
            };
        }
        var contains = document.compareDocumentPosition ? function (a, b) {
            return a.compareDocumentPosition(b) & 16;
        } : function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : true);
        };
        var isXML = function (elem) {
            return elem.documentElement && !elem.body || elem.tagName && elem.ownerDocument && !elem.ownerDocument.body;
        };
        jQueryCustom.find = Sizzle;
        jQueryCustom.filter = Sizzle.filter;
        jQueryCustom.expr = Sizzle.selectors;
        jQueryCustom.expr[":"] = jQueryCustom.expr.filters;
        Sizzle.selectors.filters.hidden = function (elem) {
            return "hidden" === elem.type || jQueryCustom.css(elem, "display") === "none" || jQueryCustom.css(elem, "visibility") === "hidden";
        };
        Sizzle.selectors.filters.visible = function (elem) {
            return "hidden" !== elem.type && jQueryCustom.css(elem, "display") !== "none" && jQueryCustom.css(elem, "visibility") !== "hidden";
        };
        Sizzle.selectors.filters.animated = function (elem) {
            return jQueryCustom.grep(jQueryCustom.timers, function (fn) {
                return elem === fn.elem;
            }).length;
        };
        jQueryCustom.multiFilter = function (expr, elems, not) {
            if (not) {
                expr = ":not(" + expr + ")";
            }
            return Sizzle.matches(expr, elems);
        };
        jQueryCustom.dir = function (elem, dir) {
            var matched = [],
                cur = elem[dir];
            while (cur && cur != document) {
                if (cur.nodeType == 1) matched.push(cur);
                cur = cur[dir];
            }
            return matched;
        };
        jQueryCustom.nth = function (cur, result, dir, elem) {
            result = result || 1;
            var num = 0;
            for (; cur; cur = cur[dir])
                if (cur.nodeType == 1 && ++num == result) break;
            return cur;
        };
        jQueryCustom.sibling = function (n, elem) {
            var r = [];
            for (; n; n = n.nextSibling) {
                if (n.nodeType == 1 && n != elem) r.push(n);
            }
            return r;
        };
        return;
        window.Sizzle = Sizzle;
    })();
    jQueryCustom.event = {
        add: function (elem, types, handler, data) {
            if (elem.nodeType == 3 || elem.nodeType == 8) return;
            if (elem.setInterval && elem != window) elem = window;
            if (!handler.guid) handler.guid = this.guid++;
            if (data !== undefined) {
                var fn = handler;
                handler = this.proxy(fn);
                handler.data = data;
            }
            var events = jQueryCustom.data(elem, "events") || jQueryCustom.data(elem, "events", {}),
                handle = jQueryCustom.data(elem, "handle") || jQueryCustom.data(elem, "handle", function () {
                    return typeof jQueryCustom !== "undefined" && !jQueryCustom.event.triggered ? jQueryCustom.event.handle.apply(arguments.callee.elem, arguments) : undefined;
                });
            handle.elem = elem;
            jQueryCustom.each(types.split(/\s+/), function (index, type) {
                var namespaces = type.split(".");
                type = namespaces.shift();
                handler.type = namespaces.slice().sort().join(".");
                var handlers = events[type];
                if (jQueryCustom.event.specialAll[type]) jQueryCustom.event.specialAll[type].setup.call(elem, data, namespaces);
                if (!handlers) {
                    handlers = events[type] = {};
                    if (!jQueryCustom.event.special[type] || jQueryCustom.event.special[type].setup.call(elem, data, namespaces) === false) {
                        if (elem.addEventListener) elem.addEventListener(type, handle, false);
                        else if (elem.attachEvent) elem.attachEvent("on" + type, handle);
                    }
                }
                handlers[handler.guid] = handler;
                jQueryCustom.event.global[type] = true;
            });
            elem = null;
        },
        guid: 1,
        global: {},
        remove: function (elem, types, handler) {
            if (elem.nodeType == 3 || elem.nodeType == 8) return;
            var events = jQueryCustom.data(elem, "events"),
                ret, index;
            if (events) {
                if (types === undefined || (typeof types === "string" && types.charAt(0) == "."))
                    for (var type in events) this.remove(elem, type + (types || ""));
                else {
                    if (types.type) {
                        handler = types.handler;
                        types = types.type;
                    }
                    jQueryCustom.each(types.split(/\s+/), function (index, type) {
                        var namespaces = type.split(".");
                        type = namespaces.shift();
                        var namespace = RegExp("(^|\\.)" + namespaces.slice().sort().join(".*\\.") + "(\\.|$)");
                        if (events[type]) {
                            if (handler) delete events[type][handler.guid];
                            else
                                for (var handle in events[type])
                                    if (namespace.test(events[type][handle].type)) delete events[type][handle]; if (jQueryCustom.event.specialAll[type]) jQueryCustom.event.specialAll[type].teardown.call(elem, namespaces);
                            for (ret in events[type]) break;
                            if (!ret) {
                                if (!jQueryCustom.event.special[type] || jQueryCustom.event.special[type].teardown.call(elem, namespaces) === false) {
                                    if (elem.removeEventListener) elem.removeEventListener(type, jQueryCustom.data(elem, "handle"), false);
                                    else if (elem.detachEvent) elem.detachEvent("on" + type, jQueryCustom.data(elem, "handle"));
                                }
                                ret = null;
                                delete events[type];
                            }
                        }
                    });
                };
                for (ret in events) break;
                if (!ret) {
                    var handle = jQueryCustom.data(elem, "handle");
                    if (handle) handle.elem = null;
                    jQueryCustom.removeData(elem, "events");
                    jQueryCustom.removeData(elem, "handle");
                }
            }
        },
        trigger: function (event, data, elem, bubbling) {
            var type = event.type || event;
            if (!bubbling) {
                event = typeof event === "object" ? event[expando] ? event : jQueryCustom.extend(jQueryCustom.Event(type), event) : jQueryCustom.Event(type);
                if (type.indexOf("!") >= 0) {
                    event.type = type = type.slice(0, -1);
                    event.exclusive = true;
                }
                if (!elem) {
                    event.stopPropagation();
                    if (this.global[type]) jQueryCustom.each(jQueryCustom.cache, function () {
                        if (this.events && this.events[type]) jQueryCustom.event.trigger(event, data, this.handle.elem);
                    });
                }
                if (!elem || elem.nodeType == 3 || elem.nodeType == 8) return undefined;
                event.result = undefined;
                event.target = elem;
                data = jQueryCustom.makeArray(data);
                data.unshift(event);
            }
            event.currentTarget = elem;
            var handle = jQueryCustom.data(elem, "handle");
            if (handle) handle.apply(elem, data);
            if ((!elem[type] || (jQueryCustom.nodeName(elem, 'a') && type == "click")) && elem["on" + type] && elem["on" + type].apply(elem, data) === false) event.result = false;
            if (!bubbling && elem[type] && !event.isDefaultPrevented() && !(jQueryCustom.nodeName(elem, 'a') && type == "click")) {
                this.triggered = true;
                try {
                    elem[type]();
                } catch (e) { }
            }
            this.triggered = false;
            if (!event.isPropagationStopped()) {
                var parent = elem.parentNode || elem.ownerDocument;
                if (parent) jQueryCustom.event.trigger(event, data, parent, true);
            }
        },
        handle: function (event) {
            var all, handlers;
            event = arguments[0] = jQueryCustom.event.fix(event || window.event);
            var namespaces = event.type.split(".");
            event.type = namespaces.shift();
            all = !namespaces.length && !event.exclusive;
            var namespace = RegExp("(^|\\.)" + namespaces.slice().sort().join(".*\\.") + "(\\.|$)");
            handlers = (jQueryCustom.data(this, "events") || {})[event.type];
            for (var j in handlers) {
                var handler = handlers[j];
                if (all || namespace.test(handler.type)) {
                    event.handler = handler;
                    event.data = handler.data;
                    var ret = handler.apply(this, arguments);
                    if (ret !== undefined) {
                        event.result = ret;
                        if (ret === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                    if (event.isImmediatePropagationStopped()) break;
                }
            }
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (event) {
            if (event[expando]) return event;
            var originalEvent = event;
            event = jQueryCustom.Event(originalEvent);
            for (var i = this.props.length, prop; i;) {
                prop = this.props[--i];
                event[prop] = originalEvent[prop];
            }
            if (!event.target) event.target = event.srcElement || document;
            if (event.target.nodeType == 3) event.target = event.target.parentNode;
            if (!event.relatedTarget && event.fromElement) event.relatedTarget = event.fromElement == event.target ? event.toElement : event.fromElement;
            if (event.pageX == null && event.clientX != null) {
                var doc = document.documentElement,
                    body = document.body;
                event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc.clientLeft || 0);
                event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc.clientTop || 0);
            }
            if (!event.which && ((event.charCode || event.charCode === 0) ? event.charCode : event.keyCode)) event.which = event.charCode || event.keyCode;
            if (!event.metaKey && event.ctrlKey) event.metaKey = event.ctrlKey;
            if (!event.which && event.button) event.which = (event.button & 1 ? 1 : (event.button & 2 ? 3 : (event.button & 4 ? 2 : 0)));
            return event;
        },
        proxy: function (fn, proxy) {
            proxy = proxy || function () {
                return fn.apply(this, arguments);
            };
            proxy.guid = fn.guid = fn.guid || proxy.guid || this.guid++;
            return proxy;
        },
        special: {
            ready: {
                setup: bindReady,
                teardown: function () { }
            }
        },
        specialAll: {
            live: {
                setup: function (selector, namespaces) {
                    jQueryCustom.event.add(this, namespaces[0], liveHandler);
                },
                teardown: function (namespaces) {
                    if (namespaces.length) {
                        var remove = 0,
                            name = RegExp("(^|\\.)" + namespaces[0] + "(\\.|$)");
                        jQueryCustom.each((jQueryCustom.data(this, "events").live || {}), function () {
                            if (name.test(this.type)) remove++;
                        });
                        if (remove < 1) jQueryCustom.event.remove(this, namespaces[0], liveHandler);
                    }
                }
            }
        }
    };
    jQueryCustom.Event = function (src) {
        if (!this.preventDefault) return new jQueryCustom.Event(src);
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.timeStamp = src.timeStamp;
        } else this.type = src; if (!this.timeStamp) this.timeStamp = now();
        this[expando] = true;
    };

    function returnFalse() {
        return false;
    };

    function returnTrue() {
        return true;
    }
    jQueryCustom.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = returnTrue;
            var e = this.originalEvent;
            if (!e) return;
            if (e.preventDefault) e.preventDefault();
            e.returnValue = false;
        },
        stopPropagation: function () {
            this.isPropagationStopped = returnTrue;
            var e = this.originalEvent;
            if (!e) return;
            if (e.stopPropagation) e.stopPropagation();
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = returnTrue;
            this.stopPropagation();
        },
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse
    };
    var withinElement = function (event) {
        var parent = event.relatedTarget;
        while (parent && parent != this) try {
            parent = parent.parentNode;
        } catch (e) {
            parent = this;
        }
        if (parent != this) {
            event.type = event.data;
            jQueryCustom.event.handle.apply(this, arguments);
        }
    };
    jQueryCustom.each({
        mouseover: 'mouseenter',
        mouseout: 'mouseleave'
    }, function (orig, fix) {
        jQueryCustom.event.special[fix] = {
            setup: function () {
                jQueryCustom.event.add(this, orig, withinElement, fix);
            },
            teardown: function () {
                jQueryCustom.event.remove(this, orig, withinElement);
            }
        };
    });
    jQueryCustom.fn.extend({
        bind: function (type, data, fn) {
            return type == "unload" ? this.one(type, data, fn) : this.each(function () {
                jQueryCustom.event.add(this, type, fn || data, fn && data);
            });
        },
        one: function (type, data, fn) {
            var one = jQueryCustom.event.proxy(fn || data, function (event) {
                jQueryCustom(this).unbind(event, one);
                return (fn || data).apply(this, arguments);
            });
            return this.each(function () {
                jQueryCustom.event.add(this, type, one, fn && data);
            });
        },
        unbind: function (type, fn) {
            return this.each(function () {
                jQueryCustom.event.remove(this, type, fn);
            });
        },
        trigger: function (type, data) {
            return this.each(function () {
                jQueryCustom.event.trigger(type, data, this);
            });
        },
        triggerHandler: function (type, data) {
            if (this[0]) {
                var event = jQueryCustom.Event(type);
                event.preventDefault();
                event.stopPropagation();
                jQueryCustom.event.trigger(event, data, this[0]);
                return event.result;
            }
        },
        toggle: function (fn) {
            var args = arguments,
                i = 1;
            while (i < args.length) jQueryCustom.event.proxy(fn, args[i++]);
            return this.click(jQueryCustom.event.proxy(fn, function (event) {
                this.lastToggle = (this.lastToggle || 0) % i;
                event.preventDefault();
                return args[this.lastToggle++].apply(this, arguments) || false;
            }));
        },
        hover: function (fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut);
        },
        ready: function (fn) {
            bindReady();
            if (jQueryCustom.isReady) fn.call(document, jQueryCustom);
            else jQueryCustom.readyList.push(fn);
            return this;
        },
        live: function (type, fn) {
            var proxy = jQueryCustom.event.proxy(fn);
            proxy.guid += this.selector + type;
            jQueryCustom(document).bind(liveConvert(type, this.selector), this.selector, proxy);
            return this;
        },
        die: function (type, fn) {
            jQueryCustom(document).unbind(liveConvert(type, this.selector), fn ? {
                guid: fn.guid + this.selector + type
            } : null);
            return this;
        }
    });

    function liveHandler(event) {
        var check = RegExp("(^|\\.)" + event.type + "(\\.|$)"),
            stop = true,
            elems = [];
        jQueryCustom.each(jQueryCustom.data(this, "events").live || [], function (i, fn) {
            if (check.test(fn.type)) {
                var elem = jQueryCustom(event.target).closest(fn.data)[0];
                if (elem) elems.push({
                    elem: elem,
                    fn: fn
                });
            }
        });
        jQueryCustom.each(elems, function () {
            if (!event.isImmediatePropagationStopped() && this.fn.call(this.elem, event, this.fn.data) === false) stop = false;
        });
        return stop;
    };

    function liveConvert(type, selector) {
        return ["live", type, selector.replace(/\./g, "`").replace(/ /g, "|")].join(".");
    }
    jQueryCustom.extend({
        isReady: false,
        readyList: [],
        ready: function () {
            if (!jQueryCustom.isReady) {
                jQueryCustom.isReady = true;
                if (jQueryCustom.readyList) {
                    jQueryCustom.each(jQueryCustom.readyList, function () {
                        this.call(document, jQueryCustom);
                    });
                    jQueryCustom.readyList = null;
                }
                jQueryCustom(document).triggerHandler("ready");
            }
        }
    });
    var readyBound = false;

    function bindReady() {
        if (readyBound) return;
        readyBound = true;
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function () {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                jQueryCustom.ready();
            }, false);
        } else if (document.attachEvent) {
            document.attachEvent("onreadystatechange", function () {
                if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", arguments.callee);
                    jQueryCustom.ready();
                }
            });
            if (document.documentElement.doScroll && !window.frameElement) (function () {
                if (jQueryCustom.isReady) return;
                try {
                    document.documentElement.doScroll("left");
                } catch (error) {
                    setTimeout(arguments.callee, 0);
                    return;
                }
                jQueryCustom.ready();
            })();
        };
        jQueryCustom.event.add(window, "load", jQueryCustom.ready);
    }
    jQueryCustom.each(("blur,focus,load,resize,scroll,unload,click,dblclick," + "mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave," + "change,select,submit,keydown,keypress,keyup,error").split(","), function (i, name) {
        jQueryCustom.fn[name] = function (fn) {
            return fn ? this.bind(name, fn) : this.trigger(name);
        };
    });
    jQueryCustom(window).bind('unload', function () {
        for (var id in jQueryCustom.cache)
            if (id != 1 && jQueryCustom.cache[id].handle) jQueryCustom.event.remove(jQueryCustom.cache[id].handle.elem);
    });
    (function () {
        jQueryCustom.support = {};
        var root = document.documentElement,
            script = document.createElement("script"),
            div = document.createElement("div"),
            id = "script" + (new Date).getTime();
        div.style.display = "none";
        div.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
        var all = div.getElementsByTagName("*"),
            a = div.getElementsByTagName("a")[0];
        if (!all || !all.length || !a) {
            return;
        };
        jQueryCustom.support = {
            leadingWhitespace: div.firstChild.nodeType == 3,
            tbody: !div.getElementsByTagName("tbody").length,
            objectAll: !!div.getElementsByTagName("object")[0].getElementsByTagName("*").length,
            htmlSerialize: !!div.getElementsByTagName("link").length,
            style: /red/.test(a.getAttribute("style")),
            hrefNormalized: a.getAttribute("href") === "/a",
            opacity: a.style.opacity === "0.5",
            cssFloat: !!a.style.cssFloat,
            scriptEval: false,
            noCloneEvent: true,
            boxModel: null
        };
        script.type = "text/javascript";
        try {
            script.appendChild(document.createTextNode("window." + id + "=1;"));
        } catch (e) { }
        root.insertBefore(script, root.firstChild);
        if (window[id]) {
            jQueryCustom.support.scriptEval = true;
            delete window[id];
        }
        root.removeChild(script);
        if (div.attachEvent && div.fireEvent) {
            div.attachEvent("onclick", function () {
                jQueryCustom.support.noCloneEvent = false;
                div.detachEvent("onclick", arguments.callee);
            });
            div.cloneNode(true).fireEvent("onclick");
        }
        jQueryCustom(function () {
            var div = document.createElement("div");
            div.style.width = "1px";
            div.style.paddingLeft = "1px";
            document.body.appendChild(div);
            jQueryCustom.boxModel = jQueryCustom.support.boxModel = div.offsetWidth === 2;
            document.body.removeChild(div);
        });
    })();
    var styleFloat = jQueryCustom.support.cssFloat ? "cssFloat" : "styleFloat";
    jQueryCustom.props = {
        "for": "htmlFor",
        "class": "className",
        "float": styleFloat,
        cssFloat: styleFloat,
        styleFloat: styleFloat,
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        tabindex: "tabIndex"
    };
    var elemdisplay = {}, fxAttrs = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
    ];

    function genFx(type, num) {
        var obj = {};
        jQueryCustom.each(fxAttrs.concat.apply([], fxAttrs.slice(0, num)), function () {
            obj[this] = type;
        });
        return obj;
    }
    jQueryCustom.fn.extend({
        show: function (speed, callback) {
            if (speed) {
                return this.animate(genFx("show", 3), speed, callback);
            } else {
                for (var i = 0, l = this.length; i < l; i++) {
                    var old = jQueryCustom.data(this[i], "olddisplay");
                    this[i].style.display = old || "";
                    if (jQueryCustom.css(this[i], "display") === "none") {
                        var tagName = this[i].tagName,
                            display;
                        if (elemdisplay[tagName]) {
                            display = elemdisplay[tagName];
                        } else {
                            var elem = jQueryCustom("<" + tagName + " />").appendTo("body");
                            display = elem.css("display");
                            if (display === "none") display = "block";
                            elem.remove();
                            elemdisplay[tagName] = display;
                        };
                        this[i].style.display = jQueryCustom.data(this[i], "olddisplay", display);
                    }
                }
                return this;
            }
        },
        hide: function (speed, callback) {
            if (speed) {
                return this.animate(genFx("hide", 3), speed, callback);
            } else {
                for (var i = 0, l = this.length; i < l; i++) {
                    var old = jQueryCustom.data(this[i], "olddisplay");
                    if (!old && old !== "none") jQueryCustom.data(this[i], "olddisplay", jQueryCustom.css(this[i], "display"));
                    this[i].style.display = "none";
                }
                return this;
            }
        },
        _toggle: jQueryCustom.fn.toggle,
        toggle: function (fn, fn2) {
            var bool = typeof fn === "boolean";
            return jQueryCustom.isFunction(fn) && jQueryCustom.isFunction(fn2) ? this._toggle.apply(this, arguments) : fn == null || bool ? this.each(function () {
                var state = bool ? fn : jQueryCustom(this).is(":hidden");
                jQueryCustom(this)[state ? "show" : "hide"]();
            }) : this.animate(genFx("toggle", 3), fn, fn2);
        },
        fadeTo: function (speed, to, callback) {
            return this.animate({
                opacity: to
            }, speed, callback);
        },
        animate: function (prop, speed, easing, callback) {
            var optall = jQueryCustom.speed(speed, easing, callback);
            return this[optall.queue === false ? "each" : "queue"](function () {
                var opt = jQueryCustom.extend({}, optall),
                    p, hidden = this.nodeType == 1 && jQueryCustom(this).is(":hidden"),
                    self = this;
                for (p in prop) {
                    if (prop[p] == "hide" && hidden || prop[p] == "show" && !hidden) return opt.complete.call(this);
                    if ((p == "height" || p == "width") && this.style) {
                        opt.display = jQueryCustom.css(this, "display");
                        opt.overflow = this.style.overflow;
                    }
                }
                if (opt.overflow != null) this.style.overflow = "hidden";
                opt.curAnim = jQueryCustom.extend({}, prop);
                jQueryCustom.each(prop, function (name, val) {
                    var e = new jQueryCustom.fx(self, opt, name);
                    if (/toggle|show|hide/.test(val)) e[val == "toggle" ? hidden ? "show" : "hide" : val](prop);
                    else {
                        var parts = val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),
                            start = e.cur(true) || 0;
                        if (parts) {
                            var end = parseFloat(parts[2]),
                                unit = parts[3] || "px";
                            if (unit != "px") {
                                self.style[name] = (end || 1) + unit;
                                start = ((end || 1) / e.cur(true)) * start;
                                self.style[name] = start + unit;
                            }
                            if (parts[1]) end = ((parts[1] == "-=" ? -1 : 1) * end) + start;
                            e.custom(start, end, unit);
                        } else e.custom(start, val, "");
                    }
                });
                return true;
            });
        },
        stop: function (clearQueue, gotoEnd) {
            var timers = jQueryCustom.timers;
            if (clearQueue) this.queue([]);
            this.each(function () {
                for (var i = timers.length - 1; i >= 0; i--)
                    if (timers[i].elem == this) {
                        if (gotoEnd) timers[i](true);
                        timers.splice(i, 1);
                    }
            });
            if (!gotoEnd) this.dequeue();
            return this;
        }
    });
    jQueryCustom.each({
        slideDown: genFx("show", 1),
        slideUp: genFx("hide", 1),
        slideToggle: genFx("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        }
    }, function (name, props) {
        jQueryCustom.fn[name] = function (speed, callback) {
            return this.animate(props, speed, callback);
        };
    });
    jQueryCustom.extend({
        speed: function (speed, easing, fn) {
            var opt = typeof speed === "object" ? speed : {
                complete: fn || !fn && easing || jQueryCustom.isFunction(speed) && speed,
                duration: speed,
                easing: fn && easing || easing && !jQueryCustom.isFunction(easing) && easing
            };
            opt.duration = jQueryCustom.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : jQueryCustom.fx.speeds[opt.duration] || jQueryCustom.fx.speeds._default;
            opt.old = opt.complete;
            opt.complete = function () {
                if (opt.queue !== false) jQueryCustom(this).dequeue();
                if (jQueryCustom.isFunction(opt.old)) opt.old.call(this);
            };
            return opt;
        },
        easing: {
            linear: function (p, n, firstNum, diff) {
                return firstNum + diff * p;
            },
            swing: function (p, n, firstNum, diff) {
                return ((-Math.cos(p * Math.PI) / 2) + 0.5) * diff + firstNum;
            }
        },
        timers: [],
        timerId: null,
        fx: function (elem, options, prop) {
            this.options = options;
            this.elem = elem;
            this.prop = prop;
            if (!options.orig) options.orig = {};
        }
    });
    jQueryCustom.fx.prototype = {
        update: function () {
            if (this.options.step) this.options.step.call(this.elem, this.now, this);
            (jQueryCustom.fx.step[this.prop] || jQueryCustom.fx.step._default)(this);
            if ((this.prop == "height" || this.prop == "width") && this.elem.style) this.elem.style.display = "block";
        },
        cur: function (force) {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var r = parseFloat(jQueryCustom.css(this.elem, this.prop, force));
            return r && r > -10000 ? r : parseFloat(jQueryCustom.curCSS(this.elem, this.prop)) || 0;
        },
        custom: function (from, to, unit) {
            this.startTime = now();
            this.start = from;
            this.end = to;
            this.unit = unit || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            var self = this;

            function t(gotoEnd) {
                return self.step(gotoEnd);
            }
            t.elem = this.elem;
            jQueryCustom.timers.push(t);
            if (t() && jQueryCustom.timerId == null) {
                jQueryCustom.timerId = setInterval(function () {
                    var timers = jQueryCustom.timers;
                    for (var i = 0; i < timers.length; i++)
                        if (!timers[i]()) timers.splice(i--, 1);
                    if (!timers.length) {
                        clearInterval(jQueryCustom.timerId);
                        jQueryCustom.timerId = null;
                    }
                }, 13);
            }
        },
        show: function () {
            this.options.orig[this.prop] = jQueryCustom.attr(this.elem.style, this.prop);
            this.options.show = true;
            this.custom(this.prop == "width" || this.prop == "height" ? 1 : 0, this.cur());
            jQueryCustom(this.elem).show();
        },
        hide: function () {
            this.options.orig[this.prop] = jQueryCustom.attr(this.elem.style, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0);
        },
        step: function (gotoEnd) {
            var t = now();
            if (gotoEnd || t >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                var done = true;
                for (var i in this.options.curAnim)
                    if (this.options.curAnim[i] !== true) done = false;
                if (done) {
                    if (this.options.display != null) {
                        this.elem.style.overflow = this.options.overflow;
                        this.elem.style.display = this.options.display;
                        if (jQueryCustom.css(this.elem, "display") == "none") this.elem.style.display = "block";
                    }
                    if (this.options.hide) jQueryCustom(this.elem).hide();
                    if (this.options.hide || this.options.show)
                        for (var p in this.options.curAnim) jQueryCustom.attr(this.elem.style, p, this.options.orig[p]);
                }
                if (done) this.options.complete.call(this.elem);
                return false;
            } else {
                var n = t - this.startTime;
                this.state = n / this.options.duration;
                this.pos = jQueryCustom.easing[this.options.easing || (jQueryCustom.easing.swing ? "swing" : "linear")](this.state, n, 0, 1, this.options.duration);
                this.now = this.start + ((this.end - this.start) * this.pos);
                this.update();
            };
            return true;
        }
    };
    jQueryCustom.extend(jQueryCustom.fx, {
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (fx) {
                jQueryCustom.attr(fx.elem.style, "opacity", fx.now);
            },
            _default: function (fx) {
                if (fx.elem.style && fx.elem.style[fx.prop] != null) fx.elem.style[fx.prop] = fx.now + fx.unit;
                else fx.elem[fx.prop] = fx.now;
            }
        }
    });
    if (document.documentElement["getBoundingClientRect"]) jQueryCustom.fn.offset = function () {
        if (!this[0]) return {
            top: 0,
            left: 0
        };
        if (this[0] === this[0].ownerDocument.body) return jQueryCustom.offset.bodyOffset(this[0]);
        var box = this[0].getBoundingClientRect(),
            doc = this[0].ownerDocument,
            body = doc.body,
            docElem = doc.documentElement,
            clientTop = docElem.clientTop || body.clientTop || 0,
            clientLeft = docElem.clientLeft || body.clientLeft || 0,
            top = box.top + (self.pageYOffset || jQueryCustom.boxModel && docElem.scrollTop || body.scrollTop) - clientTop,
            left = box.left + (self.pageXOffset || jQueryCustom.boxModel && docElem.scrollLeft || body.scrollLeft) - clientLeft;
        return {
            top: top,
            left: left
        };
    };
    else jQueryCustom.fn.offset = function () {
        if (!this[0]) return {
            top: 0,
            left: 0
        };
        if (this[0] === this[0].ownerDocument.body) return jQueryCustom.offset.bodyOffset(this[0]);
        jQueryCustom.offset.initialized || jQueryCustom.offset.initialize();
        var elem = this[0],
            offsetParent = elem.offsetParent,
            prevOffsetParent = elem,
            doc = elem.ownerDocument,
            computedStyle, docElem = doc.documentElement,
            body = doc.body,
            defaultView = doc.defaultView,
            prevComputedStyle = defaultView.getComputedStyle(elem, null),
            top = elem.offsetTop,
            left = elem.offsetLeft;
        while ((elem = elem.parentNode) && elem !== body && elem !== docElem) {
            computedStyle = defaultView.getComputedStyle(elem, null);
            top -= elem.scrollTop, left -= elem.scrollLeft;
            if (elem === offsetParent) {
                top += elem.offsetTop, left += elem.offsetLeft;
                if (jQueryCustom.offset.doesNotAddBorder && !(jQueryCustom.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(elem.tagName))) top += parseInt(computedStyle.borderTopWidth, 10) || 0, left += parseInt(computedStyle.borderLeftWidth, 10) || 0;
                prevOffsetParent = offsetParent, offsetParent = elem.offsetParent;
            }
            if (jQueryCustom.offset.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible") top += parseInt(computedStyle.borderTopWidth, 10) || 0, left += parseInt(computedStyle.borderLeftWidth, 10) || 0;
            prevComputedStyle = computedStyle;
        }
        if (prevComputedStyle.position === "relative" || prevComputedStyle.position === "static") top += body.offsetTop, left += body.offsetLeft;
        if (prevComputedStyle.position === "fixed") top += Math.max(docElem.scrollTop, body.scrollTop), left += Math.max(docElem.scrollLeft, body.scrollLeft);
        return {
            top: top,
            left: left
        };
    };
    jQueryCustom.offset = {
        initialize: function () {
            if (this.initialized) return;
            var body = document.body,
                container = document.createElement('div'),
                innerDiv, checkDiv, table, td, rules, prop, bodyMarginTop = body.style.marginTop,
                html = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"cellpadding="0"cellspacing="0"><tr><td></td></tr></table>';
            rules = {
                position: 'absolute',
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: '1px',
                height: '1px',
                visibility: 'hidden'
            };
            for (prop in rules) container.style[prop] = rules[prop];
            container.innerHTML = html;
            body.insertBefore(container, body.firstChild);
            innerDiv = container.firstChild, checkDiv = innerDiv.firstChild, td = innerDiv.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = (checkDiv.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (td.offsetTop === 5);
            innerDiv.style.overflow = 'hidden', innerDiv.style.position = 'relative';
            this.subtractsBorderForOverflowNotVisible = (checkDiv.offsetTop === -5);
            body.style.marginTop = '1px';
            this.doesNotIncludeMarginInBodyOffset = (body.offsetTop === 0);
            body.style.marginTop = bodyMarginTop;
            body.removeChild(container);
            this.initialized = true;
        },
        bodyOffset: function (body) {
            jQueryCustom.offset.initialized || jQueryCustom.offset.initialize();
            var top = body.offsetTop,
                left = body.offsetLeft;
            if (jQueryCustom.offset.doesNotIncludeMarginInBodyOffset) top += parseInt(jQueryCustom.curCSS(body, 'marginTop', true), 10) || 0, left += parseInt(jQueryCustom.curCSS(body, 'marginLeft', true), 10) || 0;
            return {
                top: top,
                left: left
            };
        }
    };
    jQueryCustom.fn.extend({
        position: function () {
            var left = 0,
                top = 0,
                results;
            if (this[0]) {
                var offsetParent = this.offsetParent(),
                    offset = this.offset(),
                    parentOffset = /^body|html$/i.test(offsetParent[0].tagName) ? {
                        top: 0,
                        left: 0
                    } : offsetParent.offset();
                offset.top -= num(this, 'marginTop');
                offset.left -= num(this, 'marginLeft');
                parentOffset.top += num(offsetParent, 'borderTopWidth');
                parentOffset.left += num(offsetParent, 'borderLeftWidth');
                results = {
                    top: offset.top - parentOffset.top,
                    left: offset.left - parentOffset.left
                };
            }
            return results;
        },
        offsetParent: function () {
            var offsetParent = this[0].offsetParent || document.body;
            while (offsetParent && (!/^body|html$/i.test(offsetParent.tagName) && jQueryCustom.css(offsetParent, 'position') == 'static')) offsetParent = offsetParent.offsetParent;
            return jQueryCustom(offsetParent);
        }
    });
    jQueryCustom.each(['Left', 'Top'], function (i, name) {
        var method = 'scroll' + name;
        jQueryCustom.fn[method] = function (val) {
            if (!this[0]) return null;
            return val !== undefined ? this.each(function () {
                this == window || this == document ? window.scrollTo(!i ? val : jQueryCustom(window).scrollLeft(), i ? val : jQueryCustom(window).scrollTop()) : this[method] = val;
            }) : this[0] == window || this[0] == document ? self[i ? 'pageYOffset' : 'pageXOffset'] || jQueryCustom.boxModel && document.documentElement[method] || document.body[method] : this[0][method];
        };
    });
    jQueryCustom.fn.jScroll = function (options) {
        var opts = jQueryCustom.extend({}, jQueryCustom.fn.jScroll.defaults, options);
        return this.each(function () {
            var $element = jQueryCustom(this);
            var $window = jQueryCustom(window);
            var locator = new location($element);
            var min = $element.offset().top;
            var maxheigh = jQueryCustom(document).height();
            var height = $element.outerHeight();
            $window.scroll(function () {
                if (maxheigh > min + height + opts.minBottom) {
                    if ($window.scrollTop() > min) {
                        if ($window.scrollTop() + height + opts.minBottom >= maxheigh) {
                            $element.css('position', 'absolute');
                            $element.css('top', maxheigh - height - opts.minBottom);
                        } else if ($element.css('top') != 0) {
                            $element.css('position', 'fixed');
                            $element.css('top', 0);
                        }
                    } else {
                        $element.css('position', 'absolute');
                        $element.css('top', 'auto');
                    }
                }
            });
        });

        function location($element) {
            this.min = $element.offset().top;
            this.originalMargin = parseInt($element.css("margin-top"), 10) || 0;
            this.getMargin = function ($window) {
                var max = jQueryCustom(document).height() - this.min - $element.outerHeight() - opts.minBottom;
                var margin = this.originalMargin;
                if ($window.scrollTop() >= this.min) margin = margin + opts.top + $window.scrollTop() - this.min;
                if (margin > max) margin = max;
                if (margin < this.originalMargin) margin = this.originalMargin;
                return ({
                    "marginTop": margin + 'px'
                });
            }
        }
    };
    jQueryCustom.fn.jScroll.defaults = {
        speed: "slow",
        top: 10,
        minBottom: 150
    };
    jQueryCustom.each(["Height", "Width"], function (i, name) {
        var tl = i ? "Left" : "Top",
            br = i ? "Right" : "Bottom";
        jQueryCustom.fn["inner" + name] = function () {
            return this[name.toLowerCase()]() + num(this, "padding" + tl) + num(this, "padding" + br);
        };
        jQueryCustom.fn["outer" + name] = function (margin) {
            return this["inner" + name]() + num(this, "border" + tl + "Width") + num(this, "border" + br + "Width") + (margin ? num(this, "margin" + tl) + num(this, "margin" + br) : 0);
        };
        var type = name.toLowerCase();
        jQueryCustom.fn[type] = function (size) {
            return this[0] == window ? document.compatMode == "CSS1Compat" && document.documentElement["client" + name] || document.body["client" + name] : this[0] == document ? Math.max(document.documentElement["client" + name], document.body["scroll" + name], document.documentElement["scroll" + name], document.body["offset" + name], document.documentElement["offset" + name]) : size === undefined ? (this.length ? jQueryCustom.css(this[0], type) : null) : this.css(type, typeof size === "string" ? size : size + "px");
        };
    });
})();

function VadMinPopUpBox() {
    jQueryCustom("#vadBoxboxMgic").css("padding-bottom", "0");
    jQueryCustom("#vadBoxboxMgic").animate({
        height: "0px"
    }, 700);
    jQueryCustom("#vadBoxtipId").animate({
        height: "28px"
    }, 1200);
}

function VadMaxPopUpBox() {
    jQueryCustom("#vadBoxboxMgic").css("padding-bottom", "4px");
    jQueryCustom("#vadBoxboxMgic").animate({
        height: "250px"
    }, 700);
    jQueryCustom("#vadBoxtipId").animate({
        height: "0px"
    }, 200);
}

function VadPopUpBoxClose() {
    jQueryCustom("#vadBoxboxMgic").hide();
    jQueryCustom("#vadBoxtipId").hide();
}

var vadPopUpBox = function () {
    var imp = '',
        _position = 'right:0px!important',
        header = function () {
            var h = '<div id="vadBoxtitleMgic">' + '<div class="vadBoxctnerTitleMgic">' + '<div class="vadBoxlogoItem">' + '<a href="http://adlite.net" target="_blank"> <img src="http://img.vietad.vn/popupbox/logoitem.png" /></a>' + '</div>' + '<div class="vadBoxctnerText vadBoxtextR">' + '<a class="vadBoxclor6" href="http://adlite.net" target="_blank">Mua quảng cáo</a>' + '</div>' + '<div class="vadBoxgrBtnCtrol">' + '<a class="vadBoxdown" href="javascript:void(0);" onclick="VadMinPopUpBox();"></a><a class="vadBoxclose" href="javascript:void(0);" onclick="VadPopUpBoxClose();"></a>' + '</div>' + '<div class="clearboth"> </div>' + '</div></div>';
            return h;
        }, boxMin = function () {
            var box = '<div id="vadBoxtipId" style="display:none;height:0px;' + _position + '">' + '<div class="vadBoxtipIdR">' + '<div class="vadBoxtipCtner">' + '<div class="vadBoxctner">' + '<div class="vadBoxitemLgo"><a href="http://adlite.net" target="_blank"><img src="http://img.vietad.vn/popupbox/logoitem.png" /></a></div>' + '<div class="vadBoxtextTip"><a href="http://adlite.net" target="_blank" class="vadBoxclor6">Mua quảng cáo</a></div>' + '<div class="vadBoxgrTipCtrol">' + '<a class="vadBoxups" href="javascript:void(0);" onclick="VadMaxPopUpBox();"></a>' + '<a class="vadBoxclose" href="javascript:void(0);" onclick="VadPopUpBoxClose();"></a>' + '</div>' + '<div class="vadBoxclearboth"></div>' + '</div>' + '</div>' + '</div>' + '</div>';
            return box;
        }, center = function (data) {
            var data1 = eval(data);
            var c = '<div id="vadBoxcterMgic"><div class="vadBoxboxInside"><ul>';
            var items = '';
            for (var i = 0; i < data1.length; i++) {
                if (i == data1.length - 1) imp = data1[i].LinkImp;
                items = '<li>' + '<div class="vadBoxtitle">' + '<a class="vadBoxclor3" href="' + data[i].LinkClick + '" target="_blank">' + data1[i].Title + '</a>' + '</div>' + '<div class="vadBoxlink">' + '<a href="' + data[i].LinkClick + '" target="_blank">' + data1[i].Url + '</a>' + '</div>' + '<div class="vadBoxdescription">' + '<a href="' + data[i].LinkClick + '" target="_blank"><img class="vadBoximgbox" src="' + data[i].Image + '" /></a>' + data1[i].Body + '<div class="vadBoxclearboth"></div>' + '</div>' + '</li>';
                c += items;
            }
            c += '</ul></div></div>';
            return c;
        }, buildBox = function (data) {
            document.write('<div id="vadBoxboxMgic" style="' + _position + '">' + header() + center(data) + '</div>');
            document.write(boxMin());
            if (imp != '') SendHttpRequest(imp);
        }, footer = function () { },
        setPosition = function (position) {
            switch (position) {
                case (5): _position = 'left:0px!important"'; break;
                case (7): _position = 'right:0px!important"'; break;
                default: _position = 'right:0px!important"'; break;
            }
        };
    return {
        header: header,
        center: center,
        buildBox: buildBox,
        footer: footer,
        setPosition: setPosition
    };
}();

function VadWriteBannerRichMedia(zoneId, campaignId, srcImg, link) {

    var cs = '<div style="position: relative;  width: 300px; height: 250px;">';
    cs += '<div style="top: 0px; right: 0px; z-index: 1000;  position: absolute; ';
    cs += 'clip: rect(0px, 500px, 250px, 200px);" id="vadRichMedia">';
    cs += '<object width="500" height="400" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';
    cs += 'name="abdSlidingR0WNGOKGV1D7" id="Object1">';
    cs += '<param value="' + srcImg + '" name="movie">';
    cs += '<param name="flashVars" value="zoneid=' + zoneId + '&campaignid=' + campaignId + '&link=' + link + '" />';
    cs += '<param value="always" name="allowScriptAccess">';
    cs += '<param value="high" name="quality">';
    cs += '<param value="transparent" name="wmode">';
    cs += '<!--[if !IE]>-->';
    cs += '<object width="500" height="400" data="' + srcImg + '"';
    cs += 'type="application/x-shockwave-flash" name="abdSlidingR0WNGOKGV1D7">';
    cs += '<param value="true" name="swliveconnect">';
    cs += '<param value="always" name="allowScriptAccess">';
    cs += '<param value="high" name="quality">';
    cs += '<param value="transparent" name="wmode">';
    cs += '<param name="flashVars" value="zoneid=' + zoneId + '&campaignid=' + campaignId + '&link=' + link + '" />';
    cs += '<!--<![endif]-->';
    cs += '<!--[if !IE]>-->';
    cs += '</object>';
    cs += '<!--<![endif]-->';
    cs += '</object>';
    cs += '</div>';
    cs += '</div>';

    document.write(cs);
    var url = "";
    url = "?z=" + zoneId;
    url = url + "&type=F5D58A5CFC32925D";
    url = url + "&lst=" + campaignId;
    url = url + "&Pref=" + T(Q());
    var cu = B[4] + url;
    SendHttpRequest(cu);
}

function vadExpandRichMedia() {
    document.getElementById('vadRichMedia').style.clip = 'rect(0px 500px 400px 0px)';
}

function vadCloseRichMedia() {
    document.getElementById('vadRichMedia').style.clip = 'rect(0px 500px 250px 200px)';
}

function VadRichBanner() {
    document.getElementById('vadRichMedia').style.width = '500px';
    document.getElementById('vadRichMedia').style.clip = 'rect(0px 500px 400px 0px)';
}

function vadRichMediaClick(zoneid, campaignid, link) {
    var url = "";
    url = "?z=" + zoneid;
    url = url + "&type=2879BB7B31C03D83";
    url = url + "&c=" + campaignid;
    url = url + "&Pref=" + T(Q());
    url = url + '&url=' + link;
    var cu = B[4] + url;
    SendHttpRequest(cu);
    window.open(cu);
}