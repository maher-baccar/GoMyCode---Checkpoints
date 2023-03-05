//dot scalar product 
v1 = [1, 6, 2];
v2 = [-2, 3, -4];

function dot_product(v1, v2) {

    sum = 0;
    for (i = 0; i < v1.length; i++) {
        sum += (v1[i] * v2[i]);
    }
    return sum;
}
ps = dot_product(v1, v2)
document.write("<br> V1=[" + v1 + "]");
document.write("<br> V2=[" + v2 + "]");
document.write("<br> Scalar product V1 and V2 =" + ps);
//orthogonal
function orthogonal(v1, v2) {

    sum = 0;
    for (i = 0; i < v1.length; i++) {
        sum += (v1[i] * v2[i]);
    }
    if (sum == 0) { return true; } else return false;
}
x = orthogonal(v1, v2)
document.write("<br>Orthogonal=" + x);