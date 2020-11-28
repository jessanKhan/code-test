// Have the function ThreeSum(arr) take the array of integers stored in arr,
// and determine if any three distinct numbers (excluding the first element)
// in the array can sum up to the first element in the array.
//  For example: if arr is [8, 2, 1, 4, 10, 5, -1, -1] then there are actually three
//  sets of triplets that sum to the number 8: [2, 1, 5], [4, 5, -1] and [10, -1, -1].
//  Your program should return the string true if 3 distinct elements sum to the first element,
//  otherwise your program should return the string false. The input array will always contain at least 4 elements.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function ThreeSum(arr) {
  // code goes here
  let sum = arr.shift()
  let len = arr.length
  let results = []
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        if (arr[i] + arr[j] + arr[k] === sum) {
          return true
        }
      }
    }
  }
  return false
}

// keep this function call here
ThreeSum(readline())

// Have the function LetterCount(str) take the str parameter being passed
// and return the first word with the greatest number of repeated letters.
//  For example: "Today, is the greatest day ever!" should return greatest
//  because it has 2 e's (and 2 t's) and it comes before ever which also
//  has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LetterCount(str) {
  // code goes here

  var words = str.split(" ")
  var table = {}

  for (var i = 0; i < words.length; i++) {
    var thisWord = words[i]
    table[thisWord] = {}

    table[thisWord]["highest"] = 0

    for (var c = 0; c < words[i].length; c++) {
      var thisChar = thisWord[c]
      table[thisWord][thisChar] === undefined
        ? (table[thisWord][thisChar] = 1)
        : (table[thisWord][thisChar] += 1)

      if (table[thisWord][thisChar] > table[thisWord]["highest"]) {
        table[thisWord]["highest"] = table[thisWord][thisChar]
      }
    }
  }

  var answer = { word: null, count: 1 }

  for (var w in table) {
    if (table[w]["highest"] > answer["count"]) {
      answer["count"] = table[w]["highest"]
      answer["word"] = w
    }
  }

  return answer["count"] === 1 ? -1 : answer["word"]
}

// keep this function call here
LetterCount(readline())

// Have the function MatchingCharacters(str) take the str parameter being passed
// and determine the largest number of unique characters that exists between a pair
// of matching letters anywhere in the string. For example: if str is "ahyjakh" then
//  there are only two pairs of matching letters, the two a's and the two h's.
//  Between the pair of a's there are 3 unique characters: h, y, and j. Between
//  the h's there are 4 unique characters: y, j, a, and k. So for this example your program should return 4.

// Another example: if str is "ghececgkaem" then your program should return 5 because
//  the most unique characters exists within the farthest pair of e characters.
//  The input string may not contain any character pairs, and in that case your
//  program should just return 0. The input will only consist of lowercase alphabetic characters.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function MatchingCharacters(str) {
  // code goes here

  let unique = 0
  for (var subStrSize = str.length; subStrSize > 2; subStrSize--) {
    for (var i = 0; i <= str.length - subStrSize; i++) {
      let substring = str.slice(i, i + subStrSize)

      if (substring[0] == substring.slice(-1)) {
        let betweenPairs = substring.slice(1, -1)

        countUniq(betweenPairs, (uniqCount) => {
          if (uniqCount > unique) unique = uniqCount
        })
      }
    }
  }

  return unique
}

function countUniq(str, callback) {
  let mySet = new Set()
  for (var ch of str) {
    mySet.add(ch)
  }
  callback(mySet.size)
}

// keep this function call here
MatchingCharacters(readline())

//SQL Query

// select Firstname, LastName,ReportsTo,Position from maintable_09XYC where ReportsTo='Jenny Richards' OR reportsTo is null order by Age
