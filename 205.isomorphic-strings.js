/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    // 注意 需要是一一映射
    let s2tMap = {};
    let t2sMap = {};
    for (let i = 0; i < s.length; i++) {
        const a = s2tMap[s.charAt(i)] && s2tMap[s.charAt(i)] !== t.charAt(i)
        const b = t2sMap[t.charAt(i)] && t2sMap[t.charAt(i)] !== s.charAt(i)
        if (a || b) {
            return false;
        } else {
            s2tMap[s.charAt(i)] = t.charAt(i)
            t2sMap[t.charAt(i)] = s.charAt(i)
        }
    }
    return true;
};