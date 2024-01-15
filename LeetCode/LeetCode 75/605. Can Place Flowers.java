class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int canAdd = 0;
        if (flowerbed.length == 1 && flowerbed[0] == 0) {
            return true;
        }
        for (int i = 0; i < flowerbed.length; i++) {
            if (flowerbed[i] == 1) {
                continue;
            }
            if (i == 0) {
                if (flowerbed[1] == 0) {
                    canAdd++;
                    flowerbed[i] = 1;
                    continue;
                }
            }
            else if (i == flowerbed.length - 1) {
                if (flowerbed[flowerbed.length - 2] == 0) {
                    canAdd++;
                    flowerbed[i] = 1;
                    continue;
                }
            }
            else if (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
                canAdd++;
                flowerbed[i] = 1;
            }
        }
        return n <= canAdd;
    }
}
