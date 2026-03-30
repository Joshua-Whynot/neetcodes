class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length){
            return false
        }
        let map = new Map();
        for (const char of s){
            if(map.has(char)){
                map.set(char, map.get(char)+1);
            } else {
                map.set(char, 1);
            }
        }
        for (const char of t){
            if(map.has(char)){
                map.set(char, map.get(char) - 1);
            }
        }
        
        for (const [ key, value ] of map){
            if (value !== 0){
                return false
            }
        }
        return true
    }
}
