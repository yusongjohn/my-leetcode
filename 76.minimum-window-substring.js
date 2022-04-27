/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let tMap = new Map();
    let windowMap = new Map();

    s = s.split('');
    t = t.split('');

    t.forEach(c => setMapValuePlus(tMap, c))

    let left = 0, right = 0, validCharCount = 0;
    // 更新 validCharCount
    while (right < s.length) {

        // --------- 窗口扩张的逻辑 ---------
        const currentChar = s[right];
        right++;

        // 如果当前字符有效，则添加到windowMap中
        if (tMap.get(currentChar)) {
            setMapValuePlus(windowMap, currentChar);

            // 如果当前字符已经满足要求
            if (windowMap[currentChar] === tMap[currentChar]) {
                validCharCount++;
            }
        }

        // --------- 窗口收缩的逻辑 ---------
        // 当前窗口已经满足条件，开始收缩到最优解
        // 隐藏了一个结论：当前字符右侧字符的最优解 >= 当前字符
        // 因此窗口的收缩不会影响右侧的最优解

        // 先是满足，然后循环处理直至不满足 
        while (validCharCount === tMap.size()) { 

        }
    }


    console.log(tMap)
};

function setMapValuePlus(map, key) {
    const original = tMap.get(key);
    map.set(key, original ? original + 1 : 1)
}