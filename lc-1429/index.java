class FirstUnique {
    
    private Queue<Integer> queue = new ArrayDeque<>();
    private HashMap<Integer, Boolean> isUnique = new HashMap<>();

    public FirstUnique(int[] nums) {
        for(int num : nums) {
            this.add(num);
        }
    }
    
    public int showFirstUnique() {
        while(!queue.isEmpty() && !isUnique.get(queue.peek())) {
            queue.remove();
        }

        if(!queue.isEmpty()) {
            return queue.peek();
        }

        return -1;
        
    }
    
    public void add(int value) {
        if(!isUnique.containsKey(value)) {
            // we need to add it to the queue
            // we need to mark the value as true for the value
            isUnique.put(value, true);
            queue.add(value);
        } else {
            isUnique.put(value, false);
        }
    }
}