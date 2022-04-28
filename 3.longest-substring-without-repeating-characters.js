/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s.length) {
        return 0;
    }
    let left = 0; right = 0;

    let resultLen = Number.MIN_SAFE_INTEGER;
    let windowSet = new Set();
    while (right < s.length) {
        const rightChar = s[right];
        right++;
        if (!windowSet.has(rightChar)) {
            windowSet.add(rightChar);
            resultLen = Math.max(resultLen, windowSet.size)
            continue;
        }

        while (windowSet.has(rightChar)) {
            const leftChar = s[left];
            windowSet.delete(leftChar);
            left++;
        }
        windowSet.add(rightChar);
    }

    return resultLen
};

console.log(lengthOfLongestSubstring('abcabcbb'))