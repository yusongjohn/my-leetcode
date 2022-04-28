function minWindow(s, t) {
    const originalS = s;
    let need = {}, window = {};
    s = s.split("")
    t = t.split("")
    t.forEach(c => {
        if (!need[c]) {
            need[c] = 1
        } else {
            need[c]++
        }

    });
    const needCount = Object.getOwnPropertyNames(need).length

    let left = 0, right = 0;
    let valid = 0;
    // 记录最小覆盖子串的起始索引及长度
    let start = 0, len = Number.MAX_SAFE_INTEGER;
    while (right < s.length) {
        // c 是将移入窗口的字符
        const c = s[right];
        // 扩大窗口
        right++;
        // 进行窗口内数据的一系列更新
        if (need[c]) {
            if (!window[c]) {
                window[c] = 1;
            } else {
                window[c]++;
            }

            if (window[c] == need[c]) {
                valid++
            }
        }

        // 判断左侧窗口是否要收缩
        while (valid == needCount) {
            // 在这里更新最小覆盖子串
            if (right - left <= len) {
                start = left;
                len = right - left;
            }

            // d 是将移出窗口的字符
            let d = s[left];
            // 缩小窗口
            left++;
            // 进行窗口内数据的一系列更新
            if (need[d]) {
                window[d]--;
                if (window[d] < need[d]) valid--;
            }
        }
    }
    // 返回最小覆盖子串
    return len == Number.MAX_SAFE_INTEGER ? "" : originalS.substr(start, len + start);
}

console.log(minWindow("abc", "b"))