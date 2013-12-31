/*
Copyright (c) 2012 Ryan Mack

License (MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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
        
        var start = 0;
        var end = array.length - 1;
        var i = 0;
        
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
        
        return (compare(item, array[array.length - 1]) === 1) 
			? ~array.length 
			: ~i;
    };
}).call(this);