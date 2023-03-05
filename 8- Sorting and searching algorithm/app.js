function sort(tab) {
    //nombre des éléments dans le tableau
    var len = tab.length;
    var tmp, i, j;

    for (i = 1; i < len; i++) {
        //stocker la valeur actuelle 
        tmp = tab[i]
        j = i - 1
        while (j >= 0 && tab[j] > tmp) {
            // déplacer le nombre
            tab[j + 1] = tab[j]
            j--
        }
        //Insère la valeur temporaire à la position 
        //correcte dans la partie triée.
        tab[j + 1] = tmp
    }
    return tab
}
var tab = [5, 8, 11, 6, 1, 9, 3];
document.write("Tab=[" + tab + "]");
sort(tab);
document.write("<br> Sorted Tab=[" + tab + "]");