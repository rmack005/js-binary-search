var search = require("../../js-binary-search").search;
var should = require('should');


describe('search', function(){
    describe('#binarySearch()', function(){
        it('should return the bitwise complement of the index of the next element that is larger than item.', function(){
            search.binarySearch([1,2,3,7,14], 5).should.equal(~3);
        })
    })
})

describe('search', function(){
    describe('#binarySearch()', function(){
        it('should return the bitwise complement of length if there is no element larger than item.', function(){
            search.binarySearch([1,2,3,7,14,22], 78).should.equal(~6);
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