
function calculateNumbers(var1, var2) {
    // Calculate the sum of var1 and var2
    const sum = var1 + var2;
    
    // Calculate the difference of var1 and var2
    const difference = var1 - var2;
    
    // Calculate the product of var1 and var2
    const product = var1 * var2;
    
    // Calculate the quotient of var1 and var2
    const quotient = var1 / var2;
    
    // Return an object with the calculated values
    return {
        sum,
        difference,
        product,
        quotient
    };
}

function removeEntryFromObject() {
    // Create an object of key-value pairs
    const myObject = {
        name: 'JavaScript',
        estd: 1995,
        founder: 'Brendan Eich',
        ranking: 1
    };
    
    // Remove the key-value pair ranking: 1
    delete myObject.ranking;
    
    // Return the updated object
    return myObject;
}