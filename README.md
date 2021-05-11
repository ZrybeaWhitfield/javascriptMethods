# javascriptMethods

## Array Methods

### map()
  Description: Creates a new array where a callback function has been run on each element of the calling array- The new array's elements are the return of the cb function. map() returns a new array so this method should be used when a new array is needed. This creates a new array however the old array remains unchanged.

  Parameters: takes a callback function. The cb takes in the current value (current element passed in to the array), can also take in an index, array, and thisArgument

  Example: const arr1 = [2,7,9,2]
          const arr2 = arr1.map(curVal => curVal * 3)
          console.log(arr2)// [6, 21, 27, 6]

          https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

  Time Complexity: Linear, O(n)


### reduce()
  Description: Reduces an array to 1 single value. It takes in a function and runs the cb function on each element and the return of that function is assigned as the accumulator in the next iteration

  Parameters: takes a reducer callback function with 2 additional parameters, an accumulator and a current value.

  Example: const arr1 = [2,7,9,2]
          return arr1.reduce((acc, cur) => acc += cur)
          console.log(arr1) // 20

          https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript/me/best_practice

  Time Complexity: Linear, O(n) (minimum)

### filter()
  Description: Iterates through an array and creates a new array with only the elements in the called array that pass a test.

  Parameters: takes a callback function and current value. The cb tests each element. If the test returns a true, it get passed into the new array.

  Example: const arr1 = [2,7,9,2]
        const arr2 = arr1.filter(curVal => curVal > 2)
        console.log(arr2)// [7, 9]

        https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript/me/best_practice

  Time Complexity: Linear, O(n) (minimum)

### forEach()
Description: Iterates through an array and runs a function once on each element in the array. There is no implicit return so unless defined, the default return value is undefined.

Parameters: takes a callback function and current value. The cb runs once for each element in the array.

Example: const arr1 = [2,7,9,2]
       arr1.forEach(curVal => console.log(curVal)) // 2
                                                  // 7
                                                  // 9
                                                  // 2


Time Complexity: Linear, O(n) (minimum)

### sort()
Description: Sorts elements in place of an existing array. It converts the elements into strings and the returns a sorted array in ascending order (default) based on UTF-16 code units values.

Parameters: Does not need a parameter but optionally takes in a comparison function and two values to compare.

Example: const arr1 = [2,7,9,2]
       arr1.sort()
       console.log(arr1)// [2,2,7,9]

Time Complexity: Linear, O(n) (minimum)

### slice()
Description: Creates a copy of an array with elements selected from a start point in the array without modifying the original array.

Parameters: Does not need a parameter but optionally takes in a start point and end point (which is the index). Without defining the start point, slice will run from index 0 to the last element in the array.

Example: const arr1 = [2,7,9,2]
       console.log(arr1.slice(1, 2)) // [7, 9]


Time Complexity: Linear, O(n)

### pop()
Description: Modifies an existing array by removing the last element of that array. If the array is empty, the return value will be undefined.

Parameters: Does not take in a parameter

Example: const arr1 = [2,7,9,2]
       console.log(arr1.pop()) // [2]
       console.log(arr1) // [2,7,9]


Time Complexity: Constant, O(1)




### shift()
Description: Modifies an existing array by removing the first element of that array. If the array is empty, the return value will be undefined.

Parameters: Does not take in a parameter

Example: const arr1 = [2,7,9,2]
       console.log(arr1.shift()) // [2]
       console.log(arr1) // [7,9,2]


Time Complexity: Linear, O(n)

### push()
Description: Adds elements to the end of an array and returns the new length of the array.

Parameters: element or elements to be added to the array.

Example: const arr1 = [2,7,9,2]
       console.log(arr1.push(10)) // [5]
       console.log(arr1) // [2, 7,9,2, 10]


Time Complexity: Constant, O(1)

### unshift()
Description: Adds elements to the beginning of an array and returns the new length of the array.

Parameters: element or elements to be added to the array.

Example: const arr1 = [2,7,9,2]
       console.log(arr1.unshift(10)) // [5]
       console.log(arr1) // [10, 2, 7,9,2]


Time Complexity: Linear, O(n)

### includes()
Description: Determines whether an array has a certain element and returns a boolean  

Parameters: Takes in the element to be searched for and optionally an index to start searching from

Example: const arr1 = [2,7,9,2]
       console.log(arr1.includes(2)) // false
       console.log(arr1.includes(7, 2)) // false


Time Complexity: Linear, O(n)


### indexOf()
Description: Finds the first index that a certain element occurs and returns the index. If the element isn't in the array, the return is -1

Parameters: Takes in the element to be searched for and optionally an index to start searching from

Example: const arr1 = [2,7,9,2]
       console.log(arr1.indexOf(2, 2)) // 3
       console.log(arr1.indexOf(10)) // -1


Time Complexity: Linear, O(n)

### every()
Description: Checks whether every element in an array passes a certain test function. It returns a boolean.

Parameters: Takes in a callback function that will be run on every element in the array. The function needs a current element param to run the test on each element. Optionally it takes in the index, array, and thisArgument

Example: const arr1 = [2,7,9,2]
       console.log(arr1.every((curVal) => {curVal < 10})) // true



Time Complexity: Linear, O(n)

## String Methods

### charAt()
Description: Finds the specific character at the given index of the length of the called string and returns a string of that single character. If the index given exceeds the length of the string, and empty string is returned. If no index is provided, the default is the first index

Parameters: Takes in the index to find the character at

Example: const sentence = "Wow! Zrybea, thinks coding is awesome!"
       console.log(sentence.charAt(3)) // "!"
       console.log(sentence.charAt(5)) // "Z"



Time Complexity: Constant, O(1)

### charCodeAt()
Description: Returns an integer that represents the UTF-16 character code for the element in the string at the given index.

Parameters: Takes in the index to find the character at. If the index is out of range, NaN is returned

Example: const sentence = "Wow! Zrybea, thinks coding is awesome!"
       console.log(sentence.charCodeAt(3)) // 33
       console.log(sentence.charCodeAt(5)) // 90



Time Complexity: Constant, O(1)

### concat()
Description: Concatenates a string argument with a called string and returns a new string

Parameters: Takes in one or more strings to concatenate

Example: const sentence = "Wow! Zrybea, thinks coding is awesome!"
        const sentence2 = "Even if she sucks at it."
       console.log(sentence.concat(sentence2)) // "Wow! Zrybea, thinks coding is awesome!Even if she sucks at it."
       console.log(sentence2.concat(" ", sentence)) // "Even if she sucks at it. Wow! Zrybea, thinks coding is awesome!"



Time Complexity: Linear, O(n)

### includes()
Description: Does a case sensitive search to determine if one string can be found in another and returns a boolean

Parameters: Takes in the string to be searched for and optionally the position start searching from

Example: const sentence = "Wow! Zrybea, thinks coding is awesome!"
       console.log(sentence.includes("Zrybea")) // true
       console.log(sentence.includes("!", 4)) // false


Time Complexity: Linear, O(n)

### indexOf()
Description: returns the index within the called string of the first occurrence of the specified string.

Parameters: Takes in the element to be searched for and optionally an index to start searching from

Example: const sentence = "Wow! Zrybea, thinks coding is awesome!"
       console.log(sentence.indexOf("Zrybea")) // 5
       console.log(sentence.indexOf("i", 16)) // 23


Time Complexity: Linear, O(n)

### match()
Description: returns the index within the called string of the first occurrence of the specified string.

Parameters: Takes in the element to be searched for and optionally an index to start searching from

Example: const sentence = "Wow! Zrybea, thinks coding is awesome!"
       console.log(sentence.indexOf("Zrybea")) // 5
       console.log(sentence.indexOf("i", 16)) // 23


Time Complexity: Linear, O(n)

### repeat()
Description: returns the index within the called string of the first occurrence of the specified string.

Parameters: Takes in the element to be searched for and optionally an index to start searching from

Example: const sentence = "Wow! Zrybea, thinks coding is awesome!"
       console.log(sentence.indexOf("Zrybea")) // 5
       console.log(sentence.indexOf("i", 16)) // 23


Time Complexity: Linear, O(n)

### replace()
### search()
### slice()
### split()
### substr()
### toLowerCase()
### toUpperCase()
### trim()


## Map Methods
### delete()
### clear()
### get()
### set()
### has()
### keys()
### values()
### entries()
### forEach()
