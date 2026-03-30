class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        let i = 0;
        for (const int of nums){
            if (map.has(target - int)){
                return [map.get(target-int), i];
            } else {
                map.set(int, i);
                i++;
            }
        }
    }
}
