class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        List<Boolean> ans = new ArrayList<Boolean>();
        int maxCandy = -1;
        for(int i = 0; i<candies.length; i++) {
            if(candies[i] >= maxCandy) {
                maxCandy = candies[i];
            }
        }

        for(int i = 0; i<candies.length; i++) {
            if(candies[i]+extraCandies >= maxCandy) {
                ans.add(true);
            }
            else{
                ans.add(false);
            }
        }
        return ans;
    }
}
