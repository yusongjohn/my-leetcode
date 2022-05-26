/**
 * @param {string[]} equations
 * @return {boolean}
 */

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var equationsPossible = function (equations) {
    // == 就是连通的 ， != 就是不连通的
    // 同一个不等式中的变量不能是一个连通分量中

    const fa = [];
    alphabet.forEach(alpha => fa[alpha] = alpha);

    function find(x) {
        if (x === fa[x]) {
            return x
        }
        return fa[x] = find(fa[x]);
    }

    function union(a, b) {
        const _a = find(a), _b = find(b);
        if (_a !== _b) {
            fa[_a] = _b; // 集合号进行连通  注意
        }
    }

    equations.forEach(equation => {
        const [a, b] = equation.split('==');
        if (b) {
            union(a, b); // b 存在说明是 ==
        }
    })

    let ret = true;
    for (let i = 0; i < equations.length && ret; i++) {
        const equation = equations[i];
        const [a, b] = equation.split('!=');
        if (b) {
            const isConnected = find(a) === find(b);
            ret = !isConnected; // 如果是连通的，则不对，!= 则不应该连通
        }
    }

    return ret;
};


// equationsPossible(["c==c", "b==d", "x!=z"])
equationsPossible(["f==a", "a==b", "f!=e", "a==c", "b==e", "c==f"])
