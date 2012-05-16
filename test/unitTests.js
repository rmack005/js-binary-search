var search = require("../../js-binary-search").search;
var should = require('should');


describe('search', function(){
    describe('#binarySearch()', function(){
        it('should return -1 when the value is not present', function(){
            search.binarySearch([1,2,3], 5).should.equal(-1);
        })
    })
})

describe('search', function(){
    describe('#binarySearch()', function(){
        it('should return the index of the item if it is found in the array', 
            function(){
                search.binarySearch([1,2,3,4,5,6,7,8,9], 3).should.equal(2);
            }
        )
    })
})