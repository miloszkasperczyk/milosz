function testowaFunkcja() {
    var txt;
    if(confirm("Miło mi że kliknąłeś przycisk")) {
        txt = "Brawo!";
    } else {
        txt = "Musisz jeszcze poćwiczyć";
    }
    document.getElementByld("demo").innerHTML = txt;
}