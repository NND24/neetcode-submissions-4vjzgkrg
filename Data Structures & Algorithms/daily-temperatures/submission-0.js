class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        let result = new Array(n).fill(0);
        for(let i=0; i<temperatures.length;i++) {
            let count = 1;
            let j=i+1;
            while(j<temperatures.length) {
                if(temperatures[i] < temperatures[j]) {
                    break;
                }
                j++;
                count++;
            }
            count = (j === n) ? 0 : count;
            result[i] = count
        }
        return result
    }
}
