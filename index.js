 function distanceFromHqInBlocks(locationBlocks) {
    return Math.abs(locationBlocks - 42);
}


function distanceFromHqInFeet(locationBlocks) {
    return (distanceFromHqInBlocks(locationBlocks) * 264)
}

function distanceTravelledInFeet(blockStart, blockEnd) {
    return ((Math.abs(blockStart-blockEnd))* 264)
}
//let feet = (distanceTravelledInFeet(blockStart, blockEnd))

function calculatesFarePrice(blockStart, blockEnd) {
    if (distanceTravelledInFeet(blockStart, blockEnd) <=400) {
        return 0
    }
    if (distanceTravelledInFeet(blockStart, blockEnd) <=2000) {
        return (((distanceTravelledInFeet(blockStart, blockEnd))-400)*.02)
    }
    if (distanceTravelledInFeet(blockStart, blockEnd) <=2500) {
        return 25
    }
    if (distanceTravelledInFeet(blockStart, blockEnd) >2500) {
        return `cannot travel that far`
    }
}
    
        