
(function(){
    "use strict";
    this.search = this.search || {};
    
    this.search.binarySearch = function(array, item, compare) {
        compare = compare || function(a, b) {
            if (a > b) {
                return 1;
            }
            
            if(a < b) {
                return -1;
            }
            
            return 0;
        };
        
        var start = 0, end = array.length - 1, i;
        
        while(start <= end) {
            i = Math.floor((start + end) / 2);
            
            if(compare(item, array[i]) === -1) {
                end = i-1;
            }
            
            else if(compare(item, array[i]) === 1) {
                start = i+1;
            }
            
            else {
                return i;
            }
        }
        
        return -1;
    };
}).call(this);