class Solution {
    public boolean increasingTriplet(int[] nums) {
        int firstSmallest = Integer.MAX_VALUE;
        int secondSmallest = Integer.MAX_VALUE;

        for(int n: nums) {
            if(n <= firstSmallest) {
                firstSmallest = n;
            }
            else if(n <= secondSmallest) {
                secondSmallest = n;
            }
            else{
                return true;
            }
        }
        return false;
        
    }
}
