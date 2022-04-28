/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    s1 = s1.split("");
    s2 = s2.split("");
    let right = 0;
    let left = 0;

    const s1CharMap = {}
    s1.forEach(c => {
        if (!s1CharMap[c]) {
            s1CharMap[c] = 1;
        } else {
            s1CharMap[c]++;
        }
    });

    const s1CharSize = Object.getOwnPropertyNames(s1CharMap).length;
    const s2CharMap = {}

    let validCount = 0;
    while (right < s2.length) {
        const rightChar = s2[right];
        right++;

        if (s1CharMap[rightChar]) {
            if (s2CharMap[rightChar]) {
                s2CharMap[rightChar]++;
            } else {
                s2CharMap[rightChar] = 1
            }

            if (s2CharMap[rightChar] === s1CharMap[rightChar]) {
                validCount++;
            }
        }

        while (validCount === s1CharSize) {
            if (right - left === s1.length) {
                return true;
            }

            const leftChar = s2[left];
            left++;
            if (s2CharMap[leftChar]) {
                s2CharMap[leftChar]--;
                if (s2CharMap[leftChar] < s1CharMap[leftChar]) {
                    validCount--;
                }
            }
        }
    }

    return false;
};

console.log(checkInclusion("adc", "dcda")) // true
console.log(checkInclusion("hello", "ooolleoooleh")) // false