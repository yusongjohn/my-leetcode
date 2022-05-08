/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let xLeft = 1;
    let xRight = Math.max(...piles);
    // 尽可能小的速度来满足h小时

    while (xLeft < xRight) {
        const xMid = xLeft + Math.floor((xRight - xLeft) / 2);
        const midValue = getTimeBySpeed(piles, xMid);

        if (midValue === h) { // 当前速度刚好满足条件，尝试有没有更小的速度可以满足
            xRight = xMid - 1;
        } else if (midValue < h) { // 当前速度过大，可以减小速度
            xRight = xMid - 1;
        } else if (midValue > h) { // 不满足则要增大速度
            xLeft = xMid + 1
        }
    }

    if (getTimeBySpeed(piles, xLeft) <= h) {
        return xLeft
    }

    return xLeft + 1;
};

function getTimeBySpeed(piles, speed) {
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
        hours += Math.ceil(piles[i] / speed)
    }
    return hours;
}

// console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
