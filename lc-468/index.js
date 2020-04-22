var validIPAddress = function(IP) {
    
    let ip = IP.split('.');
    let ip6 = IP.split(':');
    
    if(ip.length === 4) {
        return checkForIPV4(ip);
    } else if(ip6.length === 8){
        return checkforIPV6(ip6);
    }
    
    return "Neither";
};

function checkforIPV6(str) {
    
    for(let index = 0; index < str.length; index++) {
        
        let chunk = str[index];
        
        if(chunk.length > 4 || chunk === '' ) {
            return "Neither";
        }
        
        for(let i = 0; i < chunk.length; i++) {
            if (!/[a-f]|[0-9]|[A-F]/.test(chunk[i])) return "Neither"
        }
    }
        
    return "IPv6";
}

function checkForIPV4(str) {
    for(let index = 0; index < str.length; index++) {
        let chunk = str[index];
        console.log('chunk', chunk.charAt(0));
        if(Number(chunk) < 0 || Number(chunk) > 255
          || Number(chunk).toString() !== chunk) {
            return "Neither"
        }
    }
    return "IPv4";
}