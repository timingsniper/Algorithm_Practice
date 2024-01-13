class Solution {
    public int strStr(String haystack, String needle) {
        char needleFirst = needle.charAt(0);
        int needleLen = needle.length();
        if(haystack.equals(needle)) {
            return 0;
        }

        for(int i = 0; i<haystack.length(); i++) {
            if(i+needle.length() > haystack.length()){
                return -1;
            }
            if(haystack.charAt(i) == needleFirst 
            && haystack.substring(i, i+needleLen).equals(needle)) {
                return i;
            }
        }
        return -1;
    }
}
