 function distanceFromHqInBlocks(locationBlocks) {
    return Math.abs(locationBlocks - 42);
}


function distanceFromHqInFeet(locationBlocks) {
    return (distanceFromHqInBlocks() * 264)
}
distanceFromHqInBlocks(43);