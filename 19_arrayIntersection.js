function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = new Set();

    for (let elem of set1) {
        if (set2.has(elem)) {
            intersection.add(elem);
        }
    }

    return Array.from(intersection);
}


console.log(arrayIntersection([1, 2, 2, 3, 4, 5], [2, 3, 3, 6])); 
console.log(arrayIntersection([1, 2, 3], [4, 5, 6]));