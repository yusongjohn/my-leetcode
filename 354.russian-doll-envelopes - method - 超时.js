/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    envelopes.sort((a, b) => {
        const t = a[0] - b[0]
        return t !== 0 ? t : a[1] - b[1]
    })
    // 定义 dp[i] 为考虑前 i 个元素，以第 i 个数字结尾的最长上升子序列的长度，注意 nums[i] 必须被选取
    const dp = new Array(envelopes.length).fill(1);

    for (let i = 0; i < envelopes.length; i++) {
        for (let j = i + 1; j < envelopes.length; j++) {
            if (envelopes[j][0] > envelopes[i][0] && envelopes[j][1] > envelopes[i][1]) {
                dp[j] = Math.max(dp[j], 1 + dp[i])
            }
        }
    }

    return Math.max(...dp);
};