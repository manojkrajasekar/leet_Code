class Solution {
    public String getPermutation(int n, int k) {
    List<Integer> nums = new LinkedList();
    StringBuilder res = new StringBuilder();

    int[] factorial = new int[n];
    factorial[0] = 1;

    for(int i = 1; i < n; i++) {
        nums.add(i);
        factorial[i] = factorial[i-1] * i;
    }
    nums.add(n);

    k--;
    
    for(int i = n; i > 0; i--) {

        int index = k/factorial[i-1];
        k = k % factorial[i-1];
        res.append(nums.get(index));
        nums.remove(index);
    }

        return res.toString();
    }
}