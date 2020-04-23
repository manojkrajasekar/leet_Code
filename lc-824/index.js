var toGoatLatin = function(S) {
    if(S === null || S === '') return '';
    let str = S.split(' ');
    
    let vowelSet = new Set();
    vowelSet.add('a');
    vowelSet.add('e');
    vowelSet.add('i');
    vowelSet.add('o');
    vowelSet.add('u');
    
    for(let i = 0; i < str.length; i++) {
        let word = str[i];
        
        if(vowelSet.has(word.charAt(0).toLowerCase())) {
            word += 'ma'
            let count = 0;
            word += 'a'.repeat(i+1)
            str[i] = word
        } else {
            word += word.charAt(0);
            word += 'ma'
            word = word.slice(1);
            let count = 0;
            word += 'a'.repeat(i+1)
            str[i] = word;
        }
    }
    
    return str.join(' ')
};