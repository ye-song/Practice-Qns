function sockMerchant(n, ar) {
    // Write your code here

    //Find unique colours in the pile of socks
    const uniqueColours = [...new Set(ar)];

    let totalPairs = 0;

    for (let i = 0; i < uniqueColours.length; i++) {
        //count number of socks in each colour
        let colourCount = 0;
        let numPairs = 0;
        for (let j = 0; j < n; j++){
            if (uniqueColours[i] == ar[j]){
                colourCount += 1
            }
        }
        //count matching pairs of each colour and sum
        numPairs = Math.floor(colourCount/2);
        totalPairs += numPairs;
    }

    return totalPairs

}
