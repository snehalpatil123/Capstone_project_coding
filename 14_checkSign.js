function checkSign(num1, num2, num3) {
    let positiveCount = 0;
    let negativeCount = 0;

    if (num1 > 0) {
        positiveCount++;
    } else if (num1 < 0) {
        negativeCount++;
    }

    if (num2 > 0) {
        positiveCount++;
    } else if (num2 < 0) {
        negativeCount++;
    }

    if (num3 > 0) {
        positiveCount++;
    } else if (num3 < 0) {
        negativeCount++;
    }

    if (positiveCount === 3) {
        return "+++";
    } else if (positiveCount === 2 && negativeCount === 1) {
        return "++-";
    } else if (positiveCount === 1 && negativeCount === 2) {
        return "+--";
    } else {
        return "---";
    }
}


console.log(checkSign(2, 5, 7));