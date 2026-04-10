class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let a = new Set();
        for(const i of nums) {
            if(a.has(i)) return true;
            a.add(i)
        }
        return false;
    }
}
