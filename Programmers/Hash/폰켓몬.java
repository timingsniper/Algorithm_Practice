import java.util.*;

class Solution {
    public int solution(int[] nums) {
        HashMap<Integer, Integer> pokeHash = new HashMap<Integer, Integer>();
        for(int i = 0; i<nums.length; i++) {
            pokeHash.put(nums[i], pokeHash.getOrDefault(nums[i], 0) + 1);
        }
        int avail = nums.length / 2;
        
        return Math.min(avail, pokeHash.size());
    }
    
}
