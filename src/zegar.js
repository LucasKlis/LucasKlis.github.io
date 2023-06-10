function odliczanie() {
    let dzisiaj = new Date();
    let dzien = dzisiaj.getDate();
    let miesiac = dzisiaj.getMonth() +1;
    let rok = dzisiaj.getFullYear();
    let godzina = dzisiaj.getHours();
    if (godzina <10) godzina = "0" + godzina
    let minuta = dzisiaj.getMinutes();
    if (godzina <10) godzina = "0" + godzina
    let sekunda = dzisiaj.getSeconds();

    document.getElementById("zegar").innerHTML = dzien + "/" + miesiac + "/" + rok +"/" + godzina + ":" + minuta + ":" + sekunda ;
    
    setTimeout("odliczanie()", 1000);
}