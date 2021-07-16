//This answer works however it timeout as it is O(n^2)
function arrayManipulation(n, queries) {
    // Write your code here
    // generate array of 0
    let arr = new Array(n).fill(0);
    //looping through the operations
    let operations = queries.length;
    for (let i = 0; i< operations; i++){
        for (let j = (queries[i][0] - 1); j <queries[i][1]; j++){
            arr[j] += queries[i][2];
        }
    }
    //sort array in ascending order and taking the highest value
    arr.sort((a,b) => (a - b));
    return (arr[n-1]);

}

//This answer works and does not timeout because it is O(n+m)
function arrayManipulation(n, queries) {
    // Write your code here
    // generate array of 0
    let arr = new Array(n).fill(0);

    //looping through the operations and only appending to the start
    //and end positions that the value changes
    let operations = queries.length;
    for (let i = 0; i< operations; i++){
        let start = (queries[i][0]-1);
        let end = (queries[i][1]);
        arr[start] += queries[i][2];
        arr[end] -= queries[i][2];
    }

    //Using cumulative sum to obtain final array
    let newArr = [];
    let value = 0;
    for (let j = 0; j< n; j++){
        value += arr[j];
        newArr[j] = value;
    }

    //sort array in ascending order and taking the highest value
    newArr.sort((a,b) => (a - b));

    return (newArr[n-1]);
}
