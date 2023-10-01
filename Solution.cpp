
#include <array>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
    
    static const int NOT_POSSIBLE_TO_MAKE_ARRAY_EMPTY = -1;

public:
    int minOperations(const vector<int>& inputValues) const {
        unordered_map<int, int> frequencyValues;
        for (int currentValue : inputValues) {
            ++frequencyValues[currentValue];
        }

        int minNumberOfOperationsToMakeArrayEmpty = 0;
        for (const auto& [currentValue, currentFrequency] : frequencyValues) {
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
};
