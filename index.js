// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  const newdriver = {...driver}
    newdriver[key] = value
    return newdriver
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
};

function deleteFromDriverByKey(driver, key){
const newdriver = {...driver}
  delete newdriver[key]
  return newdriver
};

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
 };



// deleteFromDriverByKey() - this function should take in a driver object and a key. It should delete the key/value pair for the key that was passed in from the driver object. This should all not actually mutate the driver passed in.
// destructivelyDeleteFromDriverByKey() - this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in.
// drive
