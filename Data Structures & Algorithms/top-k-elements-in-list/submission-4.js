class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (const num of nums){
            if (map.has(num)){
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        }

        const out = [];
        let i = 0;
        const sortedMap = new Map([...map].sort((a, b) => b[1] - a[1]));
        for (const [key, value] of sortedMap) {
            if (i<k){
                out.push(key);
                i++;
            }
        }
        return out
    }
}
