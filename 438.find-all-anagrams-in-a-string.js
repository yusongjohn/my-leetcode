/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    p = p.split("");
    s = s.split("");
    let right = 0;
    let left = 0;

    const pCharMap = {}
    p.forEach(c => {
        if (!pCharMap[c]) {
            pCharMap[c] = 1;
        } else {
            pCharMap[c]++;
        }
    });

    const pCharSize = Object.getOwnPropertyNames(pCharMap).length;
    const sCharMap = {}
    let result = [];
    let validCount = 0;
    while (right < s.length) {
        const rightChar = s[right];
        right++;

        if (pCharMap[rightChar]) {
            if (sCharMap[rightChar]) {
                sCharMap[rightChar]++;
            } else {
                sCharMap[rightChar] = 1
            }

            if (sCharMap[rightChar] === pCharMap[rightChar]) {
                validCount++;
            }
        }

        while (validCount === pCharSize) {
            if (right - left === p.length) {
                result.push(left)
            }

            const leftChar = s[left];
            left++;
            if (sCharMap[leftChar]) {
                sCharMap[leftChar]--;
                if (sCharMap[leftChar] < pCharMap[leftChar]) {
                    validCount--;
                }
            }
        }
    }

    return result;
};
// @lc code=end

