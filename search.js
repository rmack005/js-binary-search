

exports.binarySearch = function(array, item, compare) {
    compare = compare || function(a, b) {
        if (a > b) return 1;
        if(a < b) return -1;
        return 0;
    };
    
    var start = 0, end = this.length - 1, i;
    
    while(start <= end) {
        i = Math.floor((start + end) / 2);
        
        if(compare(item, array[i]) === -1) {
            end = i-1;
            continue;
        }
        
        if(compare(item, array[i]) === 1) {
            start = i+1;
            continue;
        }
        
        return i;
    }
    
    return -1;
};