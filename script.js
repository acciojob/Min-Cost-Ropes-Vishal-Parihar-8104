function mincost(arr) {
  if (arr.length <= 1) return 0;

  // Use a Min Heap (simulated using a sorted array)
  let heap = [...arr];
  heap.sort((a, b) => a - b);

  let cost = 0;

  while (heap.length > 1) {
    // Extract two smallest ropes
    let first = heap.shift();
    let second = heap.shift();

    let sum = first + second;
    cost += sum;

    // Insert the combined rope and maintain sorted order
    let index = binaryInsertPosition(heap, sum);
    heap.splice(index, 0, sum);
  }

  return cost;
}

// Helper: binary search insert position
function binaryInsertPosition(arr, value) {
  let low = 0, high = arr.length;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < value) low = mid + 1;
    else high = mid;
  }
  return low;
}

module.exports = mincost;
