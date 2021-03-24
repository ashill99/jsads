/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
     let newAdd = "";
    for(let i = 0; i < address.length; i++) {
        if (address[i] !== ".") {
            newAdd += address[i]
        }
        else if (address[i] === ".") {
            newAdd += "[.]"
        }
    }
    return newAdd;
    };

console.log(defangIPaddr("255.100.50.0"))