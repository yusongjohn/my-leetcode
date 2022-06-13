/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const sArray = s.split(' ');
    if (pattern.length !== sArray.length) return false;

    let p2SMap = {};
    let onlyOne = []; // p2SMap 的值也应该是唯一的才能保证是一一映射的 
    let generateArray = []
    for (let i = 0; i < pattern.length; i++) {
        if (!p2SMap[pattern.charAt(i)] && !onlyOne.includes(sArray[i])) {
            onlyOne.push(sArray[i])
            p2SMap[pattern.charAt(i)] = sArray[i];
        }
        generateArray.push(p2SMap[pattern.charAt(i)])
    }

    return generateArray.join(' ') === s;
};