class Solution {
    private int gcd(int a, int b) {
        if (b == 0){
            return a;
        }
        else{
            return gcd(b, a%b);
        }
    }

    public String gcdOfStrings(String str1, String str2) {
        int lenOne = str1.length();
        int lenTwo = str2.length();
        
        if(!(str1+str2).equals(str2+str1)) {
            return "";
        }

        int gcdLen = gcd(lenOne, lenTwo);
        return str1.substring(0, gcdLen);

    }
}
