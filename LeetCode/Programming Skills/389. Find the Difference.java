class Solution {
    public char findTheDifference(String s, String t) {
        HashMap <Character, Integer> hash = new HashMap<Character, Integer>();
        for (int i = 0; i<s.length(); i++) {
            hash.put(s.charAt(i), hash.getOrDefault(s.charAt(i), 0) + 1);
        }
        System.out.println(hash);

        for(int i = 0; i<t.length(); i++) {
            hash.put(t.charAt(i), hash.getOrDefault(t.charAt(i), 0) - 1);
        }
        System.out.println(hash);
        

        for(Character key: hash.keySet()) {
            if(hash.get(key) != 0){
                return key;
            }
        }
        return 'a';
    }
}
