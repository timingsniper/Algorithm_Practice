import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        HashMap<String, Integer> runners = new HashMap<String, Integer>();
        
        for(String name: participant) {
            runners.put(name, runners.getOrDefault(name, 0) + 1);
        }
        
        for(String name: completion) {
            runners.put(name, runners.get(name) - 1);
        }
        
        for(String key : runners.keySet()) {
            if(runners.get(key) != 0) {
                return key;
            }
        }
        return null;
    }
}
