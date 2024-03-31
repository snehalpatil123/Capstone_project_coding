function signOfProduct(arr) {
    let negatives = 0;
    let hasZero = false;

    for (let num of arr) {
        if (num === 0) {
            hasZero = true;
        } else if (num < 0) {
            negatives++;
        }
    }

    if (hasZero || negatives % 2 === 0) {
        return 0;
    } else {
        return -1;
    }
}


console.log(signOfProduct([2, -3, 5, 4]));