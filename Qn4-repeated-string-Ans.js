function repeatedString(s, n) {
    // Write your code here
    //count number of 'a' in given string
    let array = [...s];
    let count = 0;
    for (let i = 0; i<array.length; i++){
        if (array[i] == 'a'){
            count += 1;
        }
    }
    //count number of 'a' in repeated string
    let reps = Math.floor(n / (s.length));
    let numberOfa = count * reps;
    let stringLeft = n - ((s.length)*reps);
    let newString = s.slice(0, stringLeft);
    let addCount = 0;
    for (let i = 0; i<newString.length; i++){
        if (newString[i] == 'a'){
            addCount += 1;
        }
    }
    let totalA = numberOfa + addCount

    return totalA;

}
