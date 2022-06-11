// Code your solution in this file!
const array1 = ["Mat", "Luc", "Don", "Pac", "Han", "Vin"];
const returnFirstTwoDrivers = function(array1) {
    
    return array1.slice(0,2)
    
}

const returnLastTwoDrivers = function(array1) {
    return array1.slice(-2)
    
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(num) {
    return function(fare){
       return fare * num
    }
}

const fareDoubler = function(fare) {
    return fare * 2
}

const fareTripler = function(fare) {
    return fare * 3
}

function selectDifferentDrivers(array1, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(array1)
}