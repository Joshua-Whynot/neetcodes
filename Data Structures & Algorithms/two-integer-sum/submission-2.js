class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        let i = 0;
        for (const num of nums){
            const desired = target - num;
            if (!map.has(desired)){
                map.set(num, i);
            } else {
                return [map.get(desired), i]
            }
            i++;
        }
        return []
    }
}
