/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function (n) {
        for (let candidate = 0; candidate < n; candidate++) {
            let other = 0;
            for (; other < n; other++) {
                if (other == candidate) continue;
                // 如果候选人认识其他人或者存在其他人不认识候选人
                if (!knows(other, candidate) || knows(candidate, other)) {
                    break;
                }
            }
            if (other === n) {
                return candidate;
            }
        }
        return -1;
    };
};