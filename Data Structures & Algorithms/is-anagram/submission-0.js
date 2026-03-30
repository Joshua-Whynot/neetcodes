class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let tmap = new Map();
        let smap = new Map();
        if (s.length != t.length){
            return false;
        } else {
            for (const c of s){
                if (smap.has(c)){
                    smap.set(c, smap.get(c) + 1);
                } else {
                    smap.set(c, 1);
                }
            }
            for (const c of t){
                if (tmap.has(c)){
                    tmap.set(c, tmap.get(c) + 1);
                } else {
                    tmap.set(c, 1);
                }
            }
            return mapsAreEqual(smap, tmap);
        }
    }
}

function mapsAreEqual(map1, map2){
    for (let [key, value] of map1) {
        if (!map2.has(key) || map2.get(key) !== value) {
            return false;
        }
    }
    return true;
}
