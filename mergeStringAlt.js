const mergeAlternately = function(word1, word2) {
    let results = [], i = 0;
    for(i = 0; i < word1.length; i++){
        results.push(word1[i],word2[i])
    }
    while(i < word2.length){
        results.push(word2[i])
        i++;
    }
    return results.join("");
};

console.log(mergeAlternately("ab", "pqrs"))