const _ = require('lodash');
const assert = require('assert');
const expect = require('chai').expect;


const numbers = [8,16,24,32,40,48,56,64,72,80,88,96,104]

let chunked = _.chunk(numbers, 4)
console.log('**** Chunked',chunked)


let withouted = _.without(numbers, 8)
console.log('**** Without', withouted)

let shuffled = _.shuffle(numbers)
console.log('**** Shuffled', shuffled)

let sized = _.size(numbers)
console.log('**** Sized', sized)

// if (typeof describe === function) {
//     describe(function, ()=>{
//         it('should divide the array into 4', function () {
//             assert.equals(chunked.length, 4)
//         });
//     })
// }

assert.equal(chunked.length, 4)
console.assert(chunked.length, 4)

describe('Testing the Lodash Functions', function() {
    it('1. Chunking', function(done) {
        let chunked = _.chunk(numbers, 4)
        expect(chunked.length).to.equal(4);
        done();
    });
    it('2. Reversing', function(done) {
        let reversed = _.reverse(numbers)
        console.log('**** Reversed',reversed)
        expect(reversed).to.equal([ 104, 96, 88, 80, 72, 64, 56, 48, 40, 32, 24, 16, 8]);
        done();
    });
    it('3. Without', function(done) {
        let withouted = _.without(numbers, 8)
        expect(withouted.length).to.equal(12);
        done();
    });
    it('4. Shuffled', function(done) {
        let shuffled = _.shuffle(numbers)
        expect(shuffled).to.not.equal([8,16,24,32,40,48,56,64,72,80,88,96,104]);
        done();
    });
    it('5. Sized', function(done) {
        let sized = _.size(numbers)
        expect(sized).to.equal(13);
        done();
    });
});