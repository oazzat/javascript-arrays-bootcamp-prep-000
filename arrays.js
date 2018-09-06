var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(theArray,elementToAdd){
  var newArray = [elementToAdd, ...theArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(theArray,elementToAdd){
 theArray.unshift(elementToAdd)
 return theArray 
}

function addElementToEndOfArray(theArray,elementToAdd){
  var newArray = [...theArray, elementToAdd]
  return newArray
}

function destructivelyAddElementToEndOfArray(theArray,elementToAdd){
 theArray.push(elementToAdd)
 return theArray 
}

function accessElementInArray(theArray,theIndex){
  return theArray[theIndex]
}

function destructivelyRemoveElementFromBeginningOfArray(theArray){
  theArray.shift()
  return theArray
}

