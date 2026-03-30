class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let tmap = new Map();
        let smap = new Map();
        for (let char of t){
            if(tmap.has(char)){
                tmap.set(char, (tmap.get(char) + 1));
            } else {
                tmap.set(char, 1);
            }
        }
        for (let char of s){
            if(smap.has(char)){
                smap.set(char, (smap.get(char) + 1));
            } else {
                smap.set(char, 1);
            }
        }
        return mapsAreEqual(tmap, smap);
    }
}

function mapsAreEqual(map1, map2){
    if (map1.size != map2.size){
        return false;
    }
    for (let [key, value] of map1) {
        if (!map2.has(key) || map2.get(key) !== value) {
            return false;
        }
    }
    return true;
}
