/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!



 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
    const flags = {}
    for(const num of nums) {
      if(flags[num] != undefined) {
        flags[num]++
        continue
      }
  
      flags[num] = 1
    }
  
    let biggestKey = nums[0]
    Object.keys(flags).forEach((key) => {
      if(flags[biggestKey] < flags[key]) biggestKey = key
    })
  
    return biggestKey
  }
  
  console.log(majorityElement([3, 2, 3])); // Output: 3 
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 