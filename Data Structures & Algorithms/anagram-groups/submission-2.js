class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();
        for (const s of strs) {
            const count = new Array(26).fill(0);
            for (const char of s){
                count[char.charCodeAt(0) - 97]++;
            }
            const candidate = count.join(',');
            if(!res.get(candidate)){
                res.set(candidate, [s])
            } else {
                res.get(candidate).push(s)
            }
            
        }
        return Array.from(res.values());
    }
}