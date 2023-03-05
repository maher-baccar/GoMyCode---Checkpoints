document.write(' <font color="red" size="25px">first solution with array:</font>')
document.write('<br>')

const array1 = [12, 13, 6, 10];
const array2 = [13, 10, 16, 15];
const distinct = [];
var k = 0;
for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
        if (array1[i] == array2[j]) {
            distinct[k] = array1[i];
            k++;
        }
    }
}
var sum = 0;
for (l = 0; l < distinct.length; l++) {
    sum += distinct[l];
}
document.write('array1=' + array1);
document.write('<br>')
document.write('array2=' + array2);
document.write('<br>')
document.write("Explanation: Common elements are " + distinct);
document.write('<br>')
document.write("Sum of overlapping elements = " + sum * 2);
document.write('<br>')



document.write(' <font color="red" size="25px">second solution with set:</font>')
document.write('<br>')
const set1 = new Set([1, 2, 3]);
const set2 = new Set([10, 2, 3]);

const x = new Set();
for (const elem of set2) {
    if (set1.has(elem)) {
        x.add(elem);
    }
}

let sum2 = 0;
x.forEach(num => {
    sum2 += num;
});
document.write('set1=' + [...set1])
document.write('<br>')
document.write('set2=' + [...set2])
document.write('<br>')

document.write("Explanation: Common elements are " + [...x]);
document.write('<br>')

document.write("Sum of overlapping elements = " + sum2 * 2);