/**
 * @param {number[][]} flowers
 * @param {number[]} persons
 * @return {number[]}
 */

// 关键示意图
// https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc3d34fbe-bab0-4abf-9cc1-8487f5a58b7b%2FUntitled.png?table=block&id=dd88ed7a-86ca-43e6-b5aa-a11fe3f882e3&spaceId=099c5a6c-4b27-45b7-abf6-df57bdb1af4f&width=1750&userId=8f4d18df-27e0-464b-a922-c85c57b09e49&cache=v2
var fullBloomFlowers = function (flowers, persons) {
    const diffMap = {};
    flowers.forEach(([start, end]) => increment(diffMap, start, end));

    const diffMapKeys = Object.getOwnPropertyNames(diffMap).map(val => +val).sort((a, b) => a - b);

    const ids = Array.from({ length: persons.length }, (_, i) => i);
    ids.sort((a, b) => persons[a] - persons[b]); // 小 -> 大

    let i = 0, sum = 0;
    let answers = [];
    for (let id of ids) { 
        while (i < diffMapKeys.length && diffMapKeys[i] <= persons[id]) {
            let currentDiffIndex = diffMapKeys[i++];
            let currentDiffVal = diffMap[currentDiffIndex];
            sum += currentDiffVal;
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