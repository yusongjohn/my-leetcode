var TwoSum = function () {
    this.map = {};
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
    if (!this.map[number]) {
        this.map[number] = 1
    } else {
        this.map[number]++;
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
    for (let key in this.map) {
        const another = value - key;
        if (another === key) {
            if (this.map[another] >= 2) {
                return true
            }
        } else if (this.map[another] >= 1) {
            return true
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

const instance = new TwoSum()
instance.add(0);
instance.find(0);