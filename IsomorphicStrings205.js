var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    
    let map1 = {};
    let map2 = {};
    
    for(let i = 0; i < s.length; i++) {
        if(map1[s[i]] !== map2[t[i]]) {
            return false;
        } else {
            map1[s[i]] = i + 1;
            map2[t[i]] = i + 1;
        }
    }
    
    return true;
};
console.log(isIsomorphic("egg", t = "add"));