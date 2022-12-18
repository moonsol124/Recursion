// task1. return an array of fibonacci numbers when an input is given using recursion.
function fibR(array=[1, 1], end) {
    if (array.length>=end) {
        return array;
    }
    else {
        let newValue = array[array.length-1]+array[array.length-2];
        return fibR([... array, newValue], end);
    }
}

// task2. create a merge sort using recursion.
// not working with duplicates at the moment I'll fix it as soon as possible!
const array = [3,2,9,7,8];

function MergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    else {
        let left = array.splice(0, array.length/2);
        let right = array;
        let leftTmp = [];
        let rightTmp = [];

        leftTmp = MergeSort(left);
        rightTmp = MergeSort(right);
        return ReturnSortedArray(leftTmp, rightTmp);
    }
}

function ReturnSortedArray(a1, a2) {
    let i = 0;
    let j = 0;
    let a3 = [];

    while (i < a1.length && j < a2.length) {
        if (a1[i] > a2[j]) {
            a3.push(a2[j]);
            j++;
        }
        if (a1[i] < a2[j]) {
            a3.push(a1[i]);
            i++;
        }
    }
    if (i == a1.length) {
        return a3.concat(a2.splice(j, a2.length));  
    }
    if (j == a2.length) {
        return a3.concat(a1.splice(i, a1.length));
    }
}
