function chkPairedSum(Arr, size, t) {

    for (i = 0; i < (size - 1); i++) {
        for (j = (i + 1); j < size; j++) {

            if (Arr[i] + Arr[j] == t) {

                return true;
            }
        }
    }
    return false;
}

let Arr = [0, -1, 2, -3, 1];
let t = -2;
let size = Arr.length;

if (chkPairedSum(Arr, size, t)) {
    console.log("True");
}
else {
    console.log("False");
}