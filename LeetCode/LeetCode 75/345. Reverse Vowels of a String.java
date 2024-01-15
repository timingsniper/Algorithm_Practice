class Solution {
    public boolean isVowel(char a) {
        return (a == 'a'|| a == 'i'|| a == 'u'|| a == 'e'|| a == 'o' 
        || a == 'A' || a == 'I' || a == 'U' || a == 'E' || a == 'O');
    }

    public String reverseVowels(String s) {
        String vowels = "";
        String ans = "";
        for(int i = s.length()-1; i>=0; i--) {
            if(isVowel(s.charAt(i))) {
                vowels += s.charAt(i);
            }
        }
        int vowCount = 0;
        for(int i = 0; i<s.length(); i++) {
            if(isVowel(s.charAt(i))) {
                ans += vowels.charAt(vowCount++);
            }
            else {
                ans += s.charAt(i);
            }
        }
        return ans;
    }
}
