function countingValleys(steps, path) {
    // Write your code here
    let altitude = 0;
    let valleyDepth = 0;
    let valleyCount = 0;

    for (let i = 0; i<steps; i++){
        if (path[i] == 'D'){
            altitude -= 1;
        }
        if (path[i] == 'U'){
            altitude += 1;
        }
        if (altitude<0 && altitude<valleyDepth){
            valleyDepth = altitude;
        }
        if (altitude == 0 && valleyDepth<altitude){
            valleyCount += 1;
            valleyDepth = 0;
        }
    }
    return valleyCount;
}
