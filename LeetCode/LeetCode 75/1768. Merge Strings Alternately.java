class Solution {
    public String mergeAlternately(String word1, String word2) {
        int lenOne = word1.length();
        int lenTwo = word2.length();
        StringBuilder result = new StringBuilder();
        int i = 0, j = 0;

        while(i<lenOne || j < lenTwo) {
            if(i<lenOne) {
                result.append(word1.charAt(i++));
            }
            if(j < lenTwo) {
                result.append(word2.charAt(j++));
            }
        }
        return result.toString();
    }
}
