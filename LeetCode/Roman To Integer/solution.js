const romanToInt = s => {

    const key = {I : 1, V : 5, X : 10, L : 50, C : 100, D : 500, M : 1000}
    let ans = []
    for(let i=0; i<s.length; i++){
        if (key[s[i]]<key[s[i+1]]){
            ans.push(key[s[i+1]] - key[s[i]]);
            i++;
            continue;
        }
        else{
            ans.push(key[s[i]])
        }
    }
    return ans.reduce((prev,current) => current+prev);
  };