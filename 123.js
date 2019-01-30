var A = Number(prompt("A"));
var B = Number(prompt("B"));
function compare (A,B){
    if (A>B){
        return"a>b";
    }
    else if (B>A){
        return"b>a";
    }
    else if (B==A){
        return"a=b";
    }
    else{ 
        return"no";
    }
}
alert( compare (A,B) );