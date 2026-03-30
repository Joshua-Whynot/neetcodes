class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numSet = new Set();
        let i = 0;
        for (const num of nums){
            if (numSet.has(num)){
                return true
            } else {
                numSet.add(num);
            }
        }
        return false
    }
}
