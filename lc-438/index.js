
function(s, p) {
    let patternMap = new Map();
    let results = [];

    for (let i = 0; i < p.length; i++){
        if (patternMap.has(p.charAt(i))){
            patternMap.set(p.charAt(i), patternMap.get(p.charAt(i)) + 1);
        } else {
            patternMap.set(p.charAt(i), 1)
        }
    }
    
    let start = 0, end = 0;
    let counter = patternMap.size;

    while(end < s.length) {
        
            let char = s.charAt(end);
            if(patternMap.has(char)) {
                patternMap.set(char, patternMap.get(char) - 1)
                if(patternMap.get(char) == 0) {
                    counter--;    
                }
            } 
            end++;

            while(counter === 0) {
                
                if(end - start === p.length) {
                    results.push(start);
                }

                let startChar = s.charAt(start);

                if(patternMap.has(startChar)) {
                    patternMap.set(startChar, patternMap.get(startChar) + 1);
                    if(patternMap.get(startChar) > 0) {
                        counter++;
                    }
                }
                start++
            }
        }
    
    return results;
}
