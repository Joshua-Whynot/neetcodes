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
        for (let i = 0; i <= s.length; i++){
            const sChar = s[i];
            const tChar = t[i];
            map.set(sChar, (map.get(sChar) || 0) + 1)
            map.set(tChar, (map.get(tChar) || 0) - 1)
        }
        
        for (const [ key, value ] of map){
            if (value !== 0){
                return false
            }
        }

        return true
    }
}
