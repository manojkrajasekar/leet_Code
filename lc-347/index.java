public List<Integer> topKFrequent(int [], int k) {

    Map<Integer, Integer> numCountMap = new HashMap<>();

    for(int num: nums) {
        numCountMap.put(num, numCountMap.getOrDefault(num, 0) + 1);
    }

    PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> map.get(b) - map.get(a));

    for(int key: numCountMap.keySet()) {
        maxHeap.add(key);
    }

    List<Integer> answer = new ArrayList<>();

    for(int i = 0; i < k; i++) {
        answer.add(maxHeap.poll());
    }

    return ans;
 }