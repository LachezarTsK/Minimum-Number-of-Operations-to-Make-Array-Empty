
/**
 * @param {number[]} inputValues
 * @return {number}
 */
var minOperations = function (inputValues) {
    const NOT_POSSIBLE_TO_MAKE_ARRAY_EMPTY = -1;
    
    //Map<number, number>
    const frequencyValues = new Map();
    for (let currentValue of inputValues) {
        frequencyValues.set(currentValue, (!frequencyValues.has(currentValue) ? 0 : frequencyValues.get(currentValue)) + 1);
    }

    let minNumberOfOperationsToMakeArrayEmpty = 0;
    for (let currentFrequency of frequencyValues.values()) {
        if (currentFrequency === 1) {
            return NOT_POSSIBLE_TO_MAKE_ARRAY_EMPTY;
        }

        /*
         (currentFrequency % 3 == 0) ==> minOperation = Math.floor(currentFrequency / 3);
         (currentFrequency % 3 == 1) ==> minOperation = Math.floor((currentFrequency - 2) / 3 + 2);
         (currentFrequency % 3 == 2) ==> minOperation = Math.floor(currentFrequency / 3 + 1);
         
         All of the above can be expressed with one line:
         Math.floor((currentFrequency + 2) / 3);
         */
        minNumberOfOperationsToMakeArrayEmpty += Math.floor((currentFrequency + 2) / 3);

    }
    return minNumberOfOperationsToMakeArrayEmpty;
};
