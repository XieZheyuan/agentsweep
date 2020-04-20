function get_navigator_name() {
    const agent=navigator.userAgent;
    //QQBrowser
    if(agent.indexOf("QQBrowser") !== -1){
        return "QQBrowser";
    }
    //Midori
    if(agent.indexOf("Midori") !== -1){
        return "Midori"
    }

    //Basilisk
    if(agent.indexOf("Basilisk") !== -1){
        return "Basilisk";
    }
    //Iridium
    if(agent.indexOf("Iridium") !== -1){
        return "Iridium";
    }
    //Vivaldi
    if(agent.indexOf("Vivaldi") !== -1){
        return "Vivaldi"
    }
    //Waterfox
    if(agent.indexOf("Waterfox") !== -1){
        return "Waterfox"
    }
    //IceDragon
    if(agent.indexOf("IceDragon") !== -1){
        return "IceDragon"
    }
    //Slim
    if(agent.indexOf("Slim") !== -1){
        return "Slim"
    }
    //SeaMonkey
    if(agent.indexOf("SeaMonkey") !== -1){
        return "SeaMonkey"
    }
    //RockMelt
    if(agent.indexOf("RockMelt") !== -1){
        return "RockMelt"
    }
    //Phoenix
    if(agent.indexOf("Phoenix") !== -1){
        return "Phoenix"
    }
    //PaleMoon
    if(agent.indexOf("PaleMoon") !== -1){
        return "PaleMoon"
    }
    //Mosaic
    if(agent.indexOf("Mosaic") !== -1){
        return "Mosaic"
    }
    //Lunascape
    if(agent.indexOf("Lunascape") !== -1){
        return "Lunascape"
    }
    //Konqueror
    if(agent.indexOf("Konqueror") !== -1){
        return "Konqueror"
    }
    //K-Meleon
    if(agent.indexOf("K-Meleon") !== -1){
        return "K-Meleon"
    }
    //Iron
    if(agent.indexOf("Iron") !== -1){
        return "Iron"
    }
    //IceWeasel
    if(agent.indexOf("IceWeasel") !== -1){
        return "IceWeasel"
    }
    //iCab
    if(agent.indexOf("iCab") !== -1){
        return "iCab"
    }
    //Flock
    if(agent.indexOf("Flock") !== -1){
        return "Flock"
    }
    //Netscape Navigator
    if(agent.indexOf("Netscape") !== -1 || agent.indexOf("Navigator") !== -1){
        return "Netscape Navigator"
    }
    //Firebird
    if(agent.indexOf("Firebird") !== -1){
        return "Firebird"
    }
    //conkeror
    if(agent.indexOf("conkeror") !== -1){
        return "conkeror"
    }
    //Comodo Dragon
    if(agent.indexOf("Comodo_Dragon") !== -1){
        return "Comodo Dragon"
    }
    //Arora
    if(agent.indexOf("Arora") !== -1){
        return "Arora"
    }
    //Maxthon
    if(agent.indexOf("Maxthon") !== -1){
        return "Maxthon"
    }
    //Avant
    if(agent.indexOf("Avant Browser") !== -1){
        return "Avant"
    }
    //Minimo
    if(agent.indexOf("Minimo") !== -1){
        return "Minimo"
    }
    //Kindle
    if(agent.indexOf("Kindle") !== -1){
        return "Kindle"
    }
    //Camino
    if(agent.indexOf("Camino") !== -1){
        return "Camino"
    }
    //Maemo Browser
    if(agent.indexOf("Maemo Browser") !== -1){
        return "Maemo Browser"
    }
    //Fennec
    if(agent.indexOf("Fennec") !== -1){
        return "Fennec"
    }
    //BOLT
    if(agent.indexOf("UNTRUSTED") !== -1){
        return "BOLT"
    }
    //Blazer
    if(agent.indexOf("Blazer") !== -1){
        return "Blazer"
    }
    //QtWeb Internet Browser
    if(agent.indexOf("QtWeb Internet Browser") !== -1){
        return "QtWeb Internet Browser"
    }
    //MiuiBrowser
    if(agent.indexOf("MiuiBrowser") !== -1){
        return "MiuiBrowser"
    }
    //Yandex
    if(agent.indexOf("YaBrowser") !== -1){
        return "Yandex"
    }
    //SamsungBrowser
    if(agent.indexOf("SamsungBrowser") !== -1){
        return "SamsungBrowser"
    }
    //UCBrowser
    if(agent.indexOf("UCBrowser") !== -1){
        return "UCBrowser"
    }
    //Puffin
    if(agent.indexOf("Puffin") !== -1){
        return "Puffin"
    }
    //Opera
    if(agent.indexOf("OPR") !== -1 || agent.indexOf("Opera") !== -1){
        return "Opera"
    }
    //Chrome
    if(agent.indexOf("Chrome") !== -1){
        return "Chrome"
    }
    //Firefox
    if(agent.indexOf("Firefox") !== -1){
        return "Firefox"
    }
    //Edge
    if(agent.indexOf("Edge") !== -1 || agent.indexOf("Edg") !== -1){
        return "Edge";
    }
    //IE
    if(agent.indexOf("Trident") !== -1 || agent.indexOf("MSIE") !== -1){
        return "Internet Explorer";
    }

}
function get_app_version() {
    let reg = /\(.*\)/g;
    let reg2= /[A-Za-z0-9]*\/[0123456789.]*/g;
    let s=navigator.appVersion.replace(reg,"");
    if(s.length < 1){
        return navigator.appVersion;
    }
    else{
        return s.replace(reg2, "")
    }
}
function get_kernel_versions() {
    let reg = /\(.*\)/g;
    let reg2= /[A-Za-z0-9]*\/[0123456789.]/g;
    let s=navigator.appVersion.replace(reg,"");
    return s.replace(reg2, "").split(" ")
}
function get_browser_plugins() {
    let table=[];
    let names=[];
    let desc=[];
    table[0]=navigator.plugins.length;
    for (let i = 0; i < navigator.plugins.length; i++) {
        names[i]=navigator.plugins[i].description;
        document.write("<br />");
        desc[i]=navigator.plugins[i].name;
        document.write("<br />");
    }
    table[1]=names;
    table[2]=desc;
    return table;
}