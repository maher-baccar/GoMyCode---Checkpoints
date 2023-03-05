let vowels = ["a", "e", "i", "o", "u"]
var k = 1;
do {
    ch = prompt('write a string that ends with .');
} while (ch[ch.length - 1] != '.');

ch = ch.toUpperCase();
for (i = 0; i < ch.length; i++) {
    if (ch.includes(vowels)) {
        j++;
    }
    if (ch[i] == " ") {
        k++;
    }
}
j = ch.match(/[aeiou]/gi).length
alert(
    'Nombre des mots =' +
    k +
    'Nombre de voyelles=' +
    j +
    'Longeur de phrase=' +
    i
);