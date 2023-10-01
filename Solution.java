
import java.util.HashMap;
import java.util.Map;

public class Solution {

    private static final int NOT_POSSIBLE_TO_MAKE_ARRAY_EMPTY = -1;

    public int minOperations(int[] inputValues) {

        Map<Integer, Integer> frequencyValues = new HashMap<>();
        for (int currentValue : inputValues) {
            frequencyValues.put(currentValue, frequencyValues.getOrDefault(currentValue, 0) + 1);
        }

        int minNumberOfOperationsToMakeArrayEmpty = 0;
        for (int currentFrequency : frequencyValues.values()) {
            if (currentFrequency == 1) {
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
