function canFinish(numCourses, prerequisites) {

    let graph = {}, visited = new Set(), visiting = new Set();

    for(let [u, v] of prerequisites) {
        if(graph[v]) {
            graph[v].push(u)
        } else {
            graph[v] = [u];
        }
    }

    for(let key in graph) {
        if(dfs(key, visited, visiting)) {
            return false;
        }
    }

    return true;

    function dfs(key, visited, visiting) {

        if(visiting.has(key)) {
            return true;
        }

        if(visited.has(key)) {
            return false;
        }

        visiting.add(key);

        const neighbors = graph[key];

        if(neighbors) {
            for(let n of neighbors) {
                if(dfs(n, visited, visiting)) {
                    return true;
                }
            }
        }

        visited.add(key);
        visiting.delete(key);
        
    }
}