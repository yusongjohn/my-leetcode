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
        // 可以确定的是，最多只会有一个人是名人； // 名人：其他所有人都认识他，他不认识任何人

        let candidate = 0;
        for (let other = 1; other < n; other++) { // n 个人里面排除 n - 1 个人（每次对比可以排除一个）
            // if (!knows(candidate, other)) { // 排除other

            // } else if (knows(candidate, other)) { // 排除candidate, other 有可能
            //     candidate = other;
            // } else if (knows(other, candidate)) { // 排除 other

            // } else if (!knows(other, candidate)) { // 排除candidate, other 有可能
            //     candidate = other
            // }

            if (knows(candidate, other) || !knows(other, candidate)) { // 排除candidate, other 有可能
                candidate = other;
            }
        }


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
        return -1;
    };
};