function jumpingOnClouds(c) {
    // Write your code here

    var hop = 0;
    var i = 0;

    while (i<c.length-1){
        if (c[i+2] == 0){
            hop += 1;
            i += 2;
        }else if (c[i+1] == 0){
            hop += 1;
            i += 1;
        }
    }
    return hop;
}
