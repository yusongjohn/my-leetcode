/**
 * @param {number[][]} flowers
 * @param {number[]} persons
 * @return {number[]}
 */
var fullBloomFlowers = function (flowers, persons) {
        const answers = []
        for (let j = 0; j < persons.length; j++) {
                const currentPerson = persons[j];
                let sum = 0
                for (let i = 0; i < flowers.length; i++) {
                        const [start, end] = flowers[i];
                        if (currentPerson >= start && currentPerson <= end) {
                                sum++;
                        }
                }
                answers.push(sum);
        }
};