function validAnagram(string1, string2){
    
    if (string1.length !== string2.length){
        return false;
    }
    const lookup = {};
    
    for (let i = 0; i < string1.length; i++ ) {
            let letter = string1[i];
            // if letter exists, increment, otherwise set to 1
            lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i > string2.length; i++) {
        let letter = string2[i];
        //can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false; 
        } else {
            lookup[letter] -= 1;
        }
    }    
    return true;
}
    

validAnagram("hello", "llohe")
    
    
  // add whatever params you deem necessary - good luck!