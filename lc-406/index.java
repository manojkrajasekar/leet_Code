class Solution {
    public int[][] reconstructQueue(int[][] people) {
        Arrays.sort(people, (a, b) -> a[0] == b[0] ? a[1] - b[1]: b[0] - a[0]);

        List<int[]> list = new ArrayList<>();

        for(int i = 0; i < people.length; i++) {

            list.add(people[i][1], people[i]);
        }

        return list.toArray(people);
    }
}