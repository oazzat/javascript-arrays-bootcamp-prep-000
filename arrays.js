var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(theArray,elementToAdd){
  var newArray = [elementToAdd, ...theArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(theArray,elementToAdd){
 theArray.unshift(elementToAdd)
 return theArray 
}