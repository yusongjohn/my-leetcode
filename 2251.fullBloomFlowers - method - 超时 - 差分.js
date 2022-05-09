/**
 * @param {number[][]} flowers
 * @param {number[]} persons
 * @return {number[]}
 */
var fullBloomFlowers = function (flowers, persons) {
    // 只关心最大的花期就可以了
    const max = Math.max(...persons) + 1;

    const diff = new Array(max).fill(0);
    flowers.forEach(([start, end]) => increment(diff, start, end));
    const result = generate(diff);

    return persons.map(person => result[person]);
};

function increment(diff, start, end) {
    diff[start] += 1;
    if (end + 1 < diff.length) {
        diff[end + 1] -= 1;
    }
}

function generate(diff) {
    const result = [diff[0]];
    for (let i = 1; i < diff.length; i++) {
        result[i] = diff[i] + result[i - 1]
    }
    return result;
}

fullBloomFlowers([[1, 6], [3, 7], [9, 12], [4, 13]], [2, 3, 7, 11])