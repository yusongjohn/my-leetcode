/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let tMap = new Map();
    let windowMap = new Map();
    const originalS = s;
    s = s.split('');
    t = t.split('');

    // 保存 t 中字符串的信息
    t.forEach(c => setMapValuePlus(tMap, c));

    let resultLen = Number.MAX_SAFE_INTEGER;
    let startIndex = 0;
    let left = 0, right = 0;
    let validCharCount = 0; // 有多少个字符满足要求了

    // 更新 validCount
    while (right < s.length) {
        const currentChar = s[right];
        right++;

        const currentCharCount = tMap.get(currentChar)
        // 更新 validCharCount
        if (currentCharCount) { // t 中包含该字符
            setMapValuePlus(windowMap, currentChar);
            //  >= 的化，一个字符可能会添加多次
            if (currentCharCount === windowMap.get(currentChar)) {
                validCharCount++; // 当前字符满足要求了
            }
        }

        // 当前窗口满足要求拉，left 需要开始收缩，找到恰好的尺寸
        while (validCharCount === tMap.size) {
            const leftChar = s[left];

            if (right - left <= resultLen) {
                resultLen = right - left;
                startIndex = left;
            }

            // 如果当前字符 不在t中
            if (!tMap.get(leftChar)) {
                left++;
                continue;
            }

            if (windowMap.get(leftChar) > tMap.get(leftChar)) {
                left++;
                setMapValuePlus(windowMap, leftChar, -1);
                continue;
            }

            validCharCount--;
            left++;
            setMapValuePlus(windowMap, leftChar, -1);
        }
    }

    if (resultLen !== Number.MAX_SAFE_INTEGER) {
        return originalS.substring(startIndex, startIndex + resultLen); // 支撑左闭右开的理由之一啊
    }

    // return resultLen;
};

function setMapValuePlus(map, key, increment = 1) {
    const original = map.get(key);
    map.set(key, original ? original + increment : 1)
}

console.log(minWindow("A", "ABC"));