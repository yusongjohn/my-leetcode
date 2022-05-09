/**
 * @param {number[][]} flowers
 * @param {number[]} persons
 * @return {number[]}
 */
var fullBloomFlowers = function (flowers, persons) {
    const diffMap = {};
    flowers.forEach(([start, end]) => increment(diffMap, start, end));

    const times = Object.getOwnPropertyNames(diffMap).map(val => +val).sort((a, b) => a - b);

    const ids = Array.from({ length: persons.length }, (_, i) => i);
    ids.sort((a, b) => persons[a] - persons[b]); // 小 -> 大

    let i = 0, sum = 0;
    let answers = [];
    for (let id of ids) {
        while (i < times.length && times[i] <= persons[id]) {
            let nextTime = times[i++];
            let nextVal = diffMap[nextTime];
            sum += nextVal;
        }
        answers[id] = sum;
    }

    return answers
};

function increment(diffMap, start, end) {
    if (!diffMap[start]) {
        diffMap[start] = 0;
    }
    if (!diffMap[end + 1]) {
        diffMap[end + 1] = 0;
    }

    diffMap[start] += 1;
    diffMap[end + 1] -= 1;
}

console.log(fullBloomFlowers([[1, 6], [3, 7], [9, 12], [4, 13]], [2, 3, 7, 11])) // [1,2,2,2]