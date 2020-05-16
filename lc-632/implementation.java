int [] res = new int[2];

int minX = Integer.Max_Value;
int maxY = Integer.Min_Value;
int minRange = Integer.Max_Value;

PriorityQueue<int []> = new PriorityQueue<>((i, j) => i[0] - j[0]) // This by default stores the items in ascening order


for(int index = 0; index < nums.size(); index++) {

    if(nums.get(index).get(0) > maxY) {
        maxY = nums.get(index).get(0) // update the max number
    }

    pq.offer(new int[] {nums.get(i).get(0),i,0});
}

// Initial PQ is setup

while(!pq.isEmpty()) {

    int[] min = pq.poll();
    int i = min[1];
    int j = min[2];

    // Update initial range
    if(maxY - min[0] < range) {
        range = maxY - min[0];
        res[0] = min[0];
        res[1] = maxX;
    }

    if(i < nums.size() && j + 1 < nums.get(i).size()) {
        pq.offer(new int[] { nums.get(i).get(j+1), i, j + 1})

        if(nums.get(i).get(j+1) > maxY) {
            maxY = nums.get(i).get(j+1);
        }
    }
    else  {
        break;
    }
}

return res;