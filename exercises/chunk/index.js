// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunkArr = [];
  let chunkCarrier = []
  for (let chunkPtr = 0; chunkPtr < array.length; chunkPtr+=size) {
    for (let elementsOfChunk = chunkPtr; elementsOfChunk < chunkPtr+size; elementsOfChunk++){
      if (array[elementsOfChunk]) chunkArr.push(array[elementsOfChunk])
    }
    let copyChunkArr = chunkArr
    chunkCarrier.push([...copyChunkArr])
    chunkArr.length = 0
  }
  return chunkCarrier
}

module.exports = chunk;
