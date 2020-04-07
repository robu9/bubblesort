// import bubbleSort from './bubblesort'
// const bubbleSort = require('./bubblesort');

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a single item array', function(){
    expect( bubbleSort([3])).toEqual([3]);
  });
  it('handles a three item array', function(){
    expect(bubbleSort([2, 3, 1])).toEqual([1, 2, 3]);
  });
  it('handles a ten item array', function(){
    expect(bubbleSort([5, 3, 4, 1, 2, 10, 7, 6, 9, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
