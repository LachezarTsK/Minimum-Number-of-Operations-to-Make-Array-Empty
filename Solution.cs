
using System;
using System.Collections.Generic;

public class Solution
{
    static readonly int NOT_POSSIBLE_TO_MAKE_ARRAY_EMPTY = -1;
    public int MinOperations(int[] inputValues)
    {
        Dictionary<int, int> frequencyValues = new Dictionary<int, int>();
        foreach (int currentValue in inputValues)
        {
            frequencyValues[currentValue] = frequencyValues.GetValueOrDefault(currentValue, 0) + 1;
        }

        int minNumberOfOperationsToMakeArrayEmpty = 0;
        foreach (int currentFrequency in frequencyValues.Values)
        {
            if (currentFrequency == 1)
            {
                return NOT_POSSIBLE_TO_MAKE_ARRAY_EMPTY;
            }

            /*
            (currentFrequency % 3 == 0) ==> minOperation = currentFrequency / 3;
            (currentFrequency % 3 == 1) ==> minOperation = (currentFrequency - 2) / 3 + 2;
            (currentFrequency % 3 == 2) ==> minOperation = currentFrequency / 3 + 1;
            
            All of the above can be expressed with one line:
            (currentFrequency + 2) / 3;
             */
            minNumberOfOperationsToMakeArrayEmpty += (currentFrequency + 2) / 3;

        }
        return minNumberOfOperationsToMakeArrayEmpty;
    }
}
