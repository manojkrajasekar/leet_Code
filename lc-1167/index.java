public connectSticks(sticks) {

    PriorityQueue<Integer> minHeap = new PriorityQueue<>();

    int cost = 0;
    
    for(int stick: sticks) {
         minHeap.add(stick);
    }

    while(minHeap.size() > 1) {
        int sum = minHeap.remove() + minHeap.remove();
        cost += sum;
        minHeap.add(sum);
    }

    return cost;
}

// TC - nlogn - as we store all the elements in the heap, n, 
// logn is where everytime when we heapfiy, it costs logn
// SC - O(n) - as we involve all the n elements